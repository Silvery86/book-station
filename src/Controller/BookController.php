<?php

namespace App\Controller;

use App\Entity\Book;
use App\Form\BookType;
use App\Repository\BookRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/admin/book')]
final class BookController extends AbstractController
{
    #[Route(name: 'admin_book_index', methods: ['GET'])]
    public function index(BookRepository $bookRepository): Response
    {
        return $this->render('admin/book/index.html.twig', [
            'books' => $bookRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'admin_book_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, SluggerInterface $slugger): Response
    {
        $book = new Book();
        $form = $this->createForm(BookType::class, $book);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->uploadImages($form, $slugger);

            $entityManager->persist($book);
            $entityManager->flush();

            $this->addFlash('success', 'Item successfully created.');

            return $this->redirectToRoute('admin_book_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/book/new.html.twig', [
            'book' => $book,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'admin_book_show', methods: ['GET'])]
    public function show(Book $book): Response
    {
        return $this->render('admin/book/show.html.twig', [
            'book' => $book,
        ]);
    }

    #[Route('/{id}/edit', name: 'admin_book_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Book $book, EntityManagerInterface $entityManager, SluggerInterface $slugger): Response
    {
        $form = $this->createForm(BookType::class, $book);
        $form->handleRequest($request);

        $currentThumbnail = $book->getThumbnail();

        // If the form is submitted and valid
        if ($form->isSubmitted() && $form->isValid()) {
            $this->uploadImages($form, $slugger);

            $entityManager->persist($book);
            $entityManager->flush();
            return $this->redirectToRoute('admin_book_index', [], Response::HTTP_SEE_OTHER);
        }
        $uploadedImages = scandir($this->getParameter('images_upload_directory'));
        $uploadedImages = array_diff($uploadedImages, ['.', '..']); // Remove special directories
        // Render the edit page with the form and current book data
        return $this->render('admin/book/edit.html.twig', [
            'book' => $book,
            'form' => $form->createView(),
            'uploaded_images' => $uploadedImages,
        ]);
    }

    #[Route('/{id}', name: 'admin_book_delete', methods: ['POST'])]
    public function delete(Request $request, Book $book, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $book->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($book);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_book_index', [], Response::HTTP_SEE_OTHER);
    }

    /**
     * @param  \Symfony\Component\Form\FormInterface $form
     * @param  SluggerInterface                      $slugger
     * @return void
     */
    public function uploadImages(\Symfony\Component\Form\FormInterface $form, SluggerInterface $slugger): void
    {
        $data = $form->getData();
        $thumbnailFile = $form->get('thumbnail')->getData();
        if ($thumbnailFile) {
            $originalFilename = pathinfo($thumbnailFile->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $slugger->slug($originalFilename);
            $newFilename = sprintf('%s_%s.%s', time(), $safeFilename, $thumbnailFile->guessExtension());

            // Move the file to the directory where images are stored
            try {
                $thumbnailFile->move(
                    $this->getParameter('images_upload_directory'), // Ensure you configure this parameter
                    $newFilename
                );
                $data->setThumbnail($newFilename); // Set the new filename in the entity
            } catch (FileException $e) {
                // Handle file upload error
                $this->addFlash('error', 'File upload failed.');
            }
        }
    }
}

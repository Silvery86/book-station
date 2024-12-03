<?php

namespace App\Entity;

use App\Repository\RelatedBookRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RelatedBookRepository::class)]
class RelatedBook
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Book::class)]
    #[ORM\JoinColumn(name: 'book_id', referencedColumnName: 'id', onDelete: 'CASCADE', onUpdate: 'CASCADE')]
    private ?Book $book = null;

    #[ORM\ManyToOne(targetEntity: Book::class)]
    #[ORM\JoinColumn(name: 'related_id', referencedColumnName: 'id', onDelete: 'CASCADE', onUpdate: 'CASCADE')]
    private ?Book $relatedBooks = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBook(): ?Book
    {
        return $this->book;
    }

    public function setBook(?Book $book): static
    {
        $this->book = $book;

        return $this;
    }

    public function getRelatedBooks(): ?Book
    {
        return $this->relatedBooks;
    }

    public function setRelatedId(Book $relatedBooks): static
    {
        $this->relatedBooks = $relatedBooks;

        return $this;
    }
}

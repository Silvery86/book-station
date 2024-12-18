<?php

namespace App\Form;

use App\Entity\Book;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class BookType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('thumbnail', FileType::class, [
                'label' => 'Thumbnail (Image File)',
                'mapped' => false, // Not automatically persisted
                'required' => false, // Allow optional upload
                'constraints' => [
                    new File([
                        'maxSize' => '5M',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/png',
                            'image/gif',
                        ],
                        'mimeTypesMessage' => 'Please upload a valid image file (JPEG, PNG, GIF)',
                    ]),
                ],
            ])
            ->add('sku')
            ->add('isbn')
            ->add('name')
            ->add('slug')
            ->add('shortDescription')
            ->add('description')
            ->add('price', NumberType::class, [
                'attr' => ['min' => 0],
            ])
            ->add('status', ChoiceType::class, [
                'choices' => [
                    'Draft' => 0,
                    'In Stock' => 1,
                    'Out Of Stock' => 2,
                ],
                'expanded' => false, // Render as dropdown
                'multiple' => false,
            ])
            ->add('stock', NumberType::class, [
                'attr' => ['min' => 0],
            ])
            ->add('isSaleOff', ChoiceType::class, [
                'choices' => [
                    'No' => 0,
                    'Yes' => 1,
                ],
                'expanded' => false, // Render as dropdown
                'multiple' => false,
            ])
            ->add('discountType', ChoiceType::class, [
                'choices' => [
                    'None' => 0,
                    'Value' => 1,
                    'Percentage' => 0,
                ],
                'expanded' => false, // Render as dropdown
                'multiple' => false,
            ])
            ->add('discountValue', NumberType::class, [
                'attr' => ['min' => 0],
            ])
            ->add('markAsFeature', ChoiceType::class, [
                'choices' => [
                    'No' => 0,
                    'Yes' => 1,
                ],
                'expanded' => false, // Render as dropdown
                'multiple' => false,
            ]);

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Book::class,
        ]);
    }
}

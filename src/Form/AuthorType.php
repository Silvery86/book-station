<?php

namespace App\Form;

use App\Entity\Author;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AuthorType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Author Name',
                'attr' => [
                    'placeholder' => 'Enter author name',
                ],
                'required' => true,
            ])
            ->add('info', TextType::class, [
                'label' => 'Author Info',
                'attr' => [
                    'placeholder' => 'Author info',
                ],
                'required' => false,
            ])
            ->add('slug', TextType::class, [
                'label' => 'Author Slug',
                'attr' => [
                    'placeholder' => 'Author slug'
                ],
                'required' => true,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Author::class,
        ]);
    }
}

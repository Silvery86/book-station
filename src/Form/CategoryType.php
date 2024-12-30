<?php

namespace App\Form;

use App\Entity\Category;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CategoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('parentId', EntityType::class, [
                'label' => 'Parent category',
                'class' => Category::class,
                'choice_label' => 'name',
                'placeholder' => 'Select Parent Category',
                'required' => false,
            ])
            ->add('name', TextType::class, [
                'attr' => [
                    'placeholder' => 'Enter category name',
                ],
                'required' => true,
            ])
            ->add('slug', TextType::class, [
                'attr' => [
                    'placeholder' => 'Slug will auto-generate or create a unique slug',
                ],
                'required' => false,
            ]);

        // Add event listener to auto-generate slug
        $builder->addEventListener(FormEvents::SUBMIT, function (FormEvent $event) {
            $category = $event->getData();
            if (!$category->getSlug() && $category->getName()) {
                $slug = strtolower(trim(preg_replace('/[^a-zA-Z0-9]+/', '-', $category->getName()), '-'));
                $category->setSlug($slug);
            }
        });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Category::class,
        ]);
    }
}

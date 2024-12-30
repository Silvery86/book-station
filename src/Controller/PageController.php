<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class PageController extends AbstractController
{
    #[Route('/shop', name: 'app_shop')]
    public function shop(): Response
    {
        $title = 'Shop Page';
        return $this->render('page/shop.html.twig', [
            'title' => $title
        ]);
    }

    #[Route('/product-details', name: 'app_product_details')]
    public function productDetails(): Response
    {
        $title = 'Product Details';
        return $this->render('page/product_details.html.twig', [
            'title' => $title
        ]);
    }

    #[Route('/cart', name: 'app_cart')]
    public function cart(): Response
    {
        $title = 'Cart Page';
        return $this->render('page/cart.html.twig', [
            'title' => $title
        ]);
    }

    #[Route('/checkout', name: 'app_checkout')]
    public function checkout(): Response
    {
        $title = 'Checkout Page';
        return $this->render('page/checkout.html.twig', [
            'title' => $title
        ]);
    }

    #[Route('/contact-us', name: 'app_contact')]
    public function contact(): Response
    {
        $title = 'Contact Us Page';
        return $this->render('page/contact_us.html.twig', [
            'title' => $title
        ]);
    }

    #[Route('/wishlist', name: 'app_wishlist')]
    public function wishlist(): Response
    {
        $title = 'Wishlist Page';
        return $this->render('page/wishlist.html.twig', [
            'title' => $title
        ]);
    }
}

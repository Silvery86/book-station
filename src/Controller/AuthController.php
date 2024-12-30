<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AuthController extends AbstractController
{
    #[Route('/admin/login', name: 'admin_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        $customErrorMessage = null;

        if ($error) {
            $errorMessage = $error->getMessage();
            if ($errorMessage == 'Email không tồn tại trong hệ thống!') {
                $customErrorMessage = 'Email không tồn tại trong hệ thống!';
            } else {
                // Check the type of error
                $customErrorMessage = match (get_class($error)) {
                    'Symfony\Component\Security\Core\Exception\BadCredentialsException' => 'Tài khoản hoặc mật khẩu không đúng, vui lòng thử lại!',
                    'Symfony\Component\Security\Core\Exception\CustomUserMessageAccountStatusException' => $error->getMessage(),
                    'Symfony\Component\Security\Core\Exception\TooManyLoginAttemptsAuthenticationException' => 'Đăng nhập sai quá số lần cho phép!',
                    default => 'Sai thông tin đăng nhập, vui lòng thử lại!',
                };
            }

        }
        if ($this->getUser()) {
            $this->addFlash(
                'success',
                'Đăng nhập thành công!'
            );
            if ($this->isGranted('ROLE_SUPER_ADMIN') || $this->isGranted('ROLE_ADMIN') || $this->isGranted('ROLE_MANAGER')) {
                return $this->redirectToRoute('admin_dashboard');
            }

            if ($this->isGranted('ROLE_CUSTOMER')) {
                return $this->redirectToRoute('app_home');
            }
        }
        $title = 'Đăng nhập';
        return $this->render('auth/login.html.twig', [
            'title' => $title,
            'error' => $customErrorMessage,
        ]);
    }

    #[Route('/admin/logout', name: 'admin_logout')]
    public function logout(): RedirectResponse
    {
        // Symfony will automatically handle the logout process for you.
        // You can perform any necessary actions before logging out if needed.

        // Redirecting to the login page after logout.
        return $this->redirectToRoute('admin_login');
    }
}

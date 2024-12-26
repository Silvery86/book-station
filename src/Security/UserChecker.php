<?php

namespace App\Security;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAccountStatusException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class UserChecker implements UserCheckerInterface
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    public function checkPreAuth(UserInterface $user): void
    {
        if (!$user instanceof User) {
            return;
        }


        if ($user->getStatus() !== User::STATUS_ACTIVE) {
            throw new CustomUserMessageAccountStatusException('Your account is not active.');
        }

        $allowedRoles = [
            User::ROLE_ADMIN,
            User::ROLE_MANAGER,
        ];

        $hasAllowedRole = array_intersect($allowedRoles, $user->getRoles());
        if (empty($hasAllowedRole)) {
            throw new CustomUserMessageAccountStatusException('You do not have the required role to log in.');
        }
    }

    public function checkPostAuth(UserInterface $user): void
    {
        if (!$user instanceof User) {
            return;
        }

        // Update the last_login_at timestamp after a successful login
        $user->setLastLoginAt(new \DateTime());
        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }
}
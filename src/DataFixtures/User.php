<?php

namespace App\DataFixtures;

use Composer\XdebugHandler\Status;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class User extends Fixture
{
    private UserPasswordHasherInterface $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        // Create a default admin user
        $admin = new \App\Entity\User();
        $admin->setEmail('admin@gmail.com');
        $admin->setUsername('admin123');

        // Hash the password
        $hashedPassword = $this->passwordHasher->hashPassword($admin, 'admin@123');
        $admin->setPassword($hashedPassword);
        // Set roles
        $admin->setRoles(['ROLE_ADMIN']);
        $admin->setStatus(\App\Entity\User::STATUS_ACTIVE);
        // Persist the user
        $manager->persist($admin);

        $manager->flush();
    }


}

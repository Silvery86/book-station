<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bridge\Doctrine\Security\User\UserLoaderInterface;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;

class UserRepository extends ServiceEntityRepository implements UserLoaderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class); // Pass User::class here
    }
    public function loadUserByIdentifier(string $identifier): ?User
    {
        $entityManager = $this->getEntityManager();
        $user = $entityManager->createQuery(
            'SELECT u
                FROM App\Entity\User u
                WHERE u.username = :query
                OR u.email = :query'
        )
            ->setParameter('query', $identifier)
            ->getOneOrNullResult();
        if (!$user) {
            throw new BadCredentialsException('Tài khoản không tồn tại !');
        }
        return $user;
    }
}

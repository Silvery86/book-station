<?php

// src/EventListener/UserSessionListener.php

namespace App\EventListener;

use App\Entity\AccessSession;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class UserSessionListener
{
    private $security;
    private $entityManager;
    private $requestStack;

    public function __construct(Security $security, EntityManagerInterface $entityManager, RequestStack $requestStack)
    {
        $this->security = $security;
        $this->entityManager = $entityManager;
        $this->requestStack = $requestStack;
    }

    public function onKernelRequest(RequestEvent $event)
    {
        if (!$event->isMainRequest()) {
            return;
        }
        $request = $event->getRequest();
        $session = $this->requestStack->getSession();
        if (str_contains($request->getUri(), '/_wdt/') || str_contains($request->getUri(), '/_profiler/')) {
            return;
        }
        if (!$session->isStarted()) {
            $session->start();
        }
        $sessionId = $session->getId();
        $ipAddress = $request->getClientIp();
        $userAgent = $request->headers->get('User-Agent');
        $lastPage = $request->getUri();
        $user = $this->security->getUser();
        $repository = $this->entityManager->getRepository(AccessSession::class);
        $accessSession = $repository->findOneBy(['sessionId' => $sessionId]);
        if (!$accessSession && !$user) {
            // If no session exists and it's a guest, try to find by IP and User-Agent
            $accessSession = $repository->findOneBy(['ipAddress' => $ipAddress, 'userAgent' => $userAgent]);

            // If found, update the sessionId to the current one
            if ($accessSession) {
                $accessSession->setSessionId($sessionId);
            }
        }
        if (!$accessSession) {
            $accessSession = new AccessSession();
            $accessSession->setSessionId($sessionId);
        }
        $accessSession->setUser($user);
        if ($user) {
            $accessSession->setIsGuest(false);
        } else {
            $accessSession->setIsGuest(true);
        }

        $accessSession->setIpAddress($ipAddress);
        $accessSession->setUserAgent($userAgent);
        $accessSession->setLastPage($lastPage);
        $accessSession->setLastActivity(new \DateTimeImmutable());

        $this->entityManager->persist($accessSession);
        $this->entityManager->flush();
    }
}

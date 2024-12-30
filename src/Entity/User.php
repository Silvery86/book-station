<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: 'users')]
#[ORM\HasLifecycleCallbacks]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 128)]
    private ?string $username = null;

    #[ORM\Column(length: 128)]
    private ?string $email = null;

    #[ORM\Column(length: 128)]
    private ?string $password = null;

    #[ORM\Column(type: Types::JSON)]
    private array $roles = [];
    final public const string ROLE_ADMIN = 'ROLE_ADMIN';
    final public const string ROLE_MANAGER = 'ROLE_MANAGER';
    final public const string ROLE_CUSTOMER = 'ROLE_CUSTOMER';
    final public const array ROLE = [
        self::ROLE_ADMIN => 'Admin',
        self::ROLE_MANAGER => 'Manager',
        self::ROLE_CUSTOMER => 'Customer'
    ];
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $status = self::STATUS_INACTIVE;

    final public const int STATUS_ACTIVE = 0;
    final public const int STATUS_INACTIVE = 1;
    final public const int STATUS_BLOCKED = 2;

    final public const array STATUS = [
        self::STATUS_ACTIVE => 'Active',
        self::STATUS_INACTIVE => 'Inactive',
        self::STATUS_BLOCKED => 'Blocked'
    ];

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $lastLoginAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $blockedAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\OneToMany(targetEntity: Rating::class, mappedBy: 'user')]
    private Collection $rating;

    #[ORM\OneToMany(targetEntity: Order::class, mappedBy: 'user')]
    private Collection $order;

    #[ORM\OneToMany(targetEntity: WishList::class, mappedBy: 'user')]
    private Collection $wishlist;

    #[ORM\OneToMany(targetEntity: Comment::class, mappedBy: 'user')]
    private Collection $comments;

    #[ORM\OneToMany(targetEntity: AccessSession::class, mappedBy: 'user')]
    private Collection $accessSessions;

    public function __construct()
    {
        $this->rating = new ArrayCollection();
        $this->order = new ArrayCollection();
        $this->wishlist = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->accessSessions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function getRoles(): array
    {
        if (empty($this->roles)) {
            $this->roles[] = self::ROLE_CUSTOMER;
        }

        return array_unique($this->roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;
        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): static
    {
        if (!in_array($status, [self::STATUS_ACTIVE, self::STATUS_INACTIVE, self::STATUS_BLOCKED])) {
            throw new \InvalidArgumentException('Invalid status value');
        }
        $this->status = $status;

        return $this;
    }

    public function getStatusLabel(): string
    {
        switch ($this->status) {
            case self::STATUS_ACTIVE:
                return 'ACTIVE';
            case self::STATUS_INACTIVE:
                return 'INACTIVE';
            case self::STATUS_BLOCKED:
                return 'BLOCKED';
            default:
                return 'UNKNOWN';
        }
    }

    public function getLastLoginAt(): ?\DateTimeInterface
    {
        return $this->lastLoginAt;
    }

    public function setLastLoginAt(?\DateTimeInterface $lastLoginAt): static
    {
        $this->lastLoginAt = $lastLoginAt;

        return $this;
    }

    public function getBlockedAt(): ?\DateTimeInterface
    {
        return $this->blockedAt;
    }

    public function setBlockedAt(?\DateTimeInterface $blockedAt): static
    {
        $this->blockedAt = $blockedAt;

        return $this;
    }

    #[ORM\PrePersist]
    public function setCreatedAtValue(): void
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = $this->createdAt;  // Set updatedAt to createdAt initially
    }

    #[ORM\PreUpdate]
    public function setUpdatedAtValue(): void
    {
        $this->updatedAt = new \DateTime();
    }
    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeInterface $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getRating(): Collection
    {
        return $this->rating;
    }

    public function getOrder(): Collection
    {
        return $this->order;
    }

    public function getWishList(): Collection
    {
        return $this->wishlist;
    }

    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function eraseCredentials(): void
    {
        // TODO: Implement eraseCredentials() method.
    }

    public function getUserIdentifier(): string
    {
        return $this->email;
    }

    /**
     * @return Collection<int, UserSession>
     */
    public function getUserSessions(): Collection
    {
        return $this->userSessions;
    }

    public function addAccessSession(AccessSession $accessSessions): static
    {
        if (!$this->accessSessions->contains($accessSessions)) {
            $this->accessSessions->add($accessSessions);
            $accessSessions->setUser($this);
        }

        return $this;
    }

    public function removeAccessSession(AccessSession $accessSessions): static
    {
        if ($this->accessSessions->removeElement($accessSessions)) {
            // set the owning side to null (unless already changed)
            if ($accessSessions->getUser() === $this) {
                $accessSessions->setUser(null);
            }
        }

        return $this;
    }
}

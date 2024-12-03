<?php

namespace App\Entity;

use App\Repository\BookRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;


#[ORM\Entity(repositoryClass: BookRepository::class)]
class Book
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $sku = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $thumbnail = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $isbn = null;

    #[ORM\Column(length: 255)]
    private ?string $slug = null;

    #[ORM\Column(length: 255)]
    private ?string $shortDescription = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 0)]
    private ?string $price = null;

    #[ORM\Column]
    private ?int $stock = null;

    #[ORM\Column]
    private ?int $isSaleOff = 0;

    #[ORM\Column]
    private ?int $discountType = 0;

    #[ORM\Column]
    private ?int $markAsFeature = 0;

    #[ORM\Column]
    private ?int $status = 1;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 0)]
    private ?string $discountValue = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\OneToMany(mappedBy: 'book', targetEntity: BookCategory::class)]
    private Collection $bookCategories;

    #[ORM\OneToMany(mappedBy: 'book', targetEntity: BookAuthor::class)]
    private Collection $bookAuthors;

    #[ORM\OneToMany(mappedBy: 'book', targetEntity: BookTag::class)]
    private Collection $bookTags;

    #[ORM\OneToMany(mappedBy: 'book', targetEntity: RelatedBook::class)]
    private Collection $relatedBooks;

    #[ORM\OneToMany(mappedBy: 'book', targetEntity: Rating::class)]
    private Collection $rating;

    #[ORM\OneToMany(mappedBy: 'book', targetEntity: OrderItem::class)]
    private Collection $orderItems;

    #[ORM\OneToMany(mappedBy: 'book', targetEntity: WishList::class)]
    private Collection $wishlist;

    #[ORM\OneToMany(mappedBy: 'book', targetEntity: Comment::class)]
    private Collection $comments;

    public function __construct()
    {
        $this->bookCategories = new ArrayCollection();
        $this->bookAuthors = new ArrayCollection();
        $this->bookTags = new ArrayCollection();
        $this->relatedBooks = new ArrayCollection();
        $this->rating = new ArrayCollection();
        $this->orderItems = new ArrayCollection();
        $this->wishlist = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->price = '0';
        $this->discountValue = '0';
    }  

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSku(): ?string
    {
        return $this->sku;
    }

    public function setSku(string $sku): static
    {
        $this->sku = $sku;

        return $this;
    }

    public function getThumbnail(): ?string
    {
        return $this->thumbnail;
    }

    public function setThumbnail(string $thumbnail): static
    {
        $this->thumbnail = $thumbnail;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getIsbn(): ?string
    {
        return $this->isbn;
    }

    public function setIsbn(?string $isbn): static
    {
        $this->isbn = $isbn;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    public function getShortDescription(): ?string
    {
        return $this->shortDescription;
    }

    public function setShortDescription(string $shortDescription): static
    {
        $this->shortDescription = $shortDescription;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): static
    {
        $this->stock = $stock;

        return $this;
    }

    public function getIsSaleOff(): ?int
    {
        return $this->isSaleOff;
    }

    public function setIsSaleOff(int $isSaleOff): static
    {
        $this->isSaleOff = $isSaleOff;

        return $this;
    }

    public function getDiscountType(): ?int
    {
        return $this->discountType;
    }

    public function setDiscountType(int $discountType): static
    {
        $this->discountType = $discountType;

        return $this;
    }

    public function getMarkAsFeature(): ?int
    {
        return $this->markAsFeature;
    }

    public function setMarkAsFeature(int $markAsFeature): static
    {
        $this->markAsFeature = $markAsFeature;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getDiscountValue(): ?string
    {
        return $this->discountValue;
    }

    public function setDiscountValue(string $discountValue): static
    {
        $this->discountValue = $discountValue;

        return $this;
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

    public function getBookCategories(): Collection
    {
        return $this->bookCategories;
    }

    public function getBookAuthors(): Collection
    {
        return $this->bookAuthors;
    }

    public function getBookTags(): Collection
    {
        return $this->bookTags;
    }

    public function getRelatedBooks(): Collection
    {
        return $this->relatedBooks;
    }

    public function getRating(): Collection
    {
        return $this->rating;
    }

    public function getOrderItems(): Collection
    {
        return $this->orderItems;
    }

    public function getWishList(): Collection
    {
        return $this->wishlist;
    }

    public function getComments(): Collection
    {
        return $this->comments;
    }
  
}

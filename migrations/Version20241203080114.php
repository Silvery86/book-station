<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241203080114 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE author (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, info CLOB NOT NULL, slug VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE book (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, sku VARCHAR(255) NOT NULL, thumbnail CLOB NOT NULL, name VARCHAR(255) NOT NULL, isbn VARCHAR(255) DEFAULT NULL, slug VARCHAR(255) NOT NULL, short_description VARCHAR(255) NOT NULL, description CLOB NOT NULL, price NUMERIC(10, 0) NOT NULL, stock INTEGER NOT NULL, is_sale_off INTEGER NOT NULL, discount_type INTEGER NOT NULL, mark_as_feature INTEGER NOT NULL, status INTEGER NOT NULL, discount_value NUMERIC(10, 0) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL)');
        $this->addSql('CREATE TABLE book_author (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, book_id INTEGER DEFAULT NULL, author_id INTEGER DEFAULT NULL, CONSTRAINT FK_9478D34516A2B381 FOREIGN KEY (book_id) REFERENCES book (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_9478D345F675F31B FOREIGN KEY (author_id) REFERENCES author (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_9478D34516A2B381 ON book_author (book_id)');
        $this->addSql('CREATE INDEX IDX_9478D345F675F31B ON book_author (author_id)');
        $this->addSql('CREATE TABLE book_category (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, book_id INTEGER DEFAULT NULL, category_id INTEGER DEFAULT NULL, CONSTRAINT FK_1FB30F9816A2B381 FOREIGN KEY (book_id) REFERENCES book (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_1FB30F9812469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_1FB30F9816A2B381 ON book_category (book_id)');
        $this->addSql('CREATE INDEX IDX_1FB30F9812469DE2 ON book_category (category_id)');
        $this->addSql('CREATE TABLE book_tag (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, book_id INTEGER DEFAULT NULL, tag_id INTEGER DEFAULT NULL, CONSTRAINT FK_F2F4CE1516A2B381 FOREIGN KEY (book_id) REFERENCES book (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F2F4CE15BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_F2F4CE1516A2B381 ON book_tag (book_id)');
        $this->addSql('CREATE INDEX IDX_F2F4CE15BAD26311 ON book_tag (tag_id)');
        $this->addSql('CREATE TABLE category (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, parent_id INTEGER DEFAULT NULL, name VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE comment (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, book_id INTEGER DEFAULT NULL, message VARCHAR(255) NOT NULL, date_added DATETIME NOT NULL, CONSTRAINT FK_9474526CA76ED395 FOREIGN KEY (user_id) REFERENCES "users" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_9474526C16A2B381 FOREIGN KEY (book_id) REFERENCES book (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_9474526CA76ED395 ON comment (user_id)');
        $this->addSql('CREATE INDEX IDX_9474526C16A2B381 ON comment (book_id)');
        $this->addSql('CREATE TABLE contact (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, full_name VARCHAR(255) NOT NULL, email VARCHAR(128) NOT NULL, subject VARCHAR(255) NOT NULL, message VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL)');
        $this->addSql('CREATE TABLE "order" (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, transaction_id VARCHAR(255) NOT NULL, total NUMERIC(10, 0) NOT NULL, note VARCHAR(255) DEFAULT NULL, status INTEGER NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, CONSTRAINT FK_F5299398A76ED395 FOREIGN KEY (user_id) REFERENCES "users" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_F5299398A76ED395 ON "order" (user_id)');
        $this->addSql('CREATE TABLE order_billing_info (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, order_id INTEGER DEFAULT NULL, full_name VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, email VARCHAR(128) NOT NULL, phone_number VARCHAR(32) NOT NULL, CONSTRAINT FK_B03B9BFA8D9F6D38 FOREIGN KEY (order_id) REFERENCES "order" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_B03B9BFA8D9F6D38 ON order_billing_info (order_id)');
        $this->addSql('CREATE TABLE order_item (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, order_id INTEGER DEFAULT NULL, book_id INTEGER DEFAULT NULL, quantity INTEGER NOT NULL, total NUMERIC(10, 0) NOT NULL, note VARCHAR(255) DEFAULT NULL, CONSTRAINT FK_52EA1F098D9F6D38 FOREIGN KEY (order_id) REFERENCES "order" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_52EA1F0916A2B381 FOREIGN KEY (book_id) REFERENCES book (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_52EA1F098D9F6D38 ON order_item (order_id)');
        $this->addSql('CREATE INDEX IDX_52EA1F0916A2B381 ON order_item (book_id)');
        $this->addSql('CREATE TABLE order_tracking (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, order_id INTEGER DEFAULT NULL, tracking_number VARCHAR(255) NOT NULL, status INTEGER NOT NULL, note VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, CONSTRAINT FK_498480AD8D9F6D38 FOREIGN KEY (order_id) REFERENCES "order" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_498480AD8D9F6D38 ON order_tracking (order_id)');
        $this->addSql('CREATE TABLE password_reset_tokens (email VARCHAR(128) NOT NULL, token VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL, PRIMARY KEY(email))');
        $this->addSql('CREATE TABLE rating (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, book_id INTEGER DEFAULT NULL, rate INTEGER NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, CONSTRAINT FK_D8892622A76ED395 FOREIGN KEY (user_id) REFERENCES "users" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_D889262216A2B381 FOREIGN KEY (book_id) REFERENCES book (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_D8892622A76ED395 ON rating (user_id)');
        $this->addSql('CREATE INDEX IDX_D889262216A2B381 ON rating (book_id)');
        $this->addSql('CREATE TABLE related_book (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, book_id INTEGER DEFAULT NULL, related_id INTEGER DEFAULT NULL, CONSTRAINT FK_20F7073416A2B381 FOREIGN KEY (book_id) REFERENCES book (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_20F707344162C001 FOREIGN KEY (related_id) REFERENCES book (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_20F7073416A2B381 ON related_book (book_id)');
        $this->addSql('CREATE INDEX IDX_20F707344162C001 ON related_book (related_id)');
        $this->addSql('CREATE TABLE setting (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, setting_key VARCHAR(255) NOT NULL, setting_value CLOB NOT NULL)');
        $this->addSql('CREATE TABLE tag (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE "users" (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username VARCHAR(128) NOT NULL, email VARCHAR(128) NOT NULL, password VARCHAR(128) NOT NULL, roles CLOB NOT NULL, status INTEGER NOT NULL, last_login_at DATETIME DEFAULT NULL, blocked_at DATETIME DEFAULT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL)');
        $this->addSql('CREATE TABLE wish_list (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, book_id INTEGER DEFAULT NULL, CONSTRAINT FK_5B8739BDA76ED395 FOREIGN KEY (user_id) REFERENCES "users" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_5B8739BD16A2B381 FOREIGN KEY (book_id) REFERENCES book (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_5B8739BDA76ED395 ON wish_list (user_id)');
        $this->addSql('CREATE INDEX IDX_5B8739BD16A2B381 ON wish_list (book_id)');
        $this->addSql('CREATE TABLE messenger_messages (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, body CLOB NOT NULL, headers CLOB NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL --(DC2Type:datetime_immutable)
        , available_at DATETIME NOT NULL --(DC2Type:datetime_immutable)
        , delivered_at DATETIME DEFAULT NULL --(DC2Type:datetime_immutable)
        )');
        $this->addSql('CREATE INDEX IDX_75EA56E0FB7336F0 ON messenger_messages (queue_name)');
        $this->addSql('CREATE INDEX IDX_75EA56E0E3BD61CE ON messenger_messages (available_at)');
        $this->addSql('CREATE INDEX IDX_75EA56E016BA31DB ON messenger_messages (delivered_at)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE author');
        $this->addSql('DROP TABLE book');
        $this->addSql('DROP TABLE book_author');
        $this->addSql('DROP TABLE book_category');
        $this->addSql('DROP TABLE book_tag');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE comment');
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE "order"');
        $this->addSql('DROP TABLE order_billing_info');
        $this->addSql('DROP TABLE order_item');
        $this->addSql('DROP TABLE order_tracking');
        $this->addSql('DROP TABLE password_reset_tokens');
        $this->addSql('DROP TABLE rating');
        $this->addSql('DROP TABLE related_book');
        $this->addSql('DROP TABLE setting');
        $this->addSql('DROP TABLE tag');
        $this->addSql('DROP TABLE "users"');
        $this->addSql('DROP TABLE wish_list');
        $this->addSql('DROP TABLE messenger_messages');
    }
}

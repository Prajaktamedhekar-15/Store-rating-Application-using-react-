create database store_rating_System;

use store_rating_System;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(400),
    role ENUM('admin', 'user', 'owner') DEFAULT 'user'
);

CREATE TABLE stores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    address VARCHAR(400) NOT NULL,
    owner_id INT,
    FOREIGN KEY (owner_id)
        REFERENCES users(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

CREATE TABLE ratings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    store_id INT,
    user_id INT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (store_id)
        REFERENCES stores(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);



INSERT INTO users values('0','Prajakta medhekar','prajaktamedhekar.com','admin','Pune','admin');



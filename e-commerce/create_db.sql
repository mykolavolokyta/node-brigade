CREATE DATABASE e_commerce;

use e_commerce;

CREATE TABLE admin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(255) NOT NULL,
    parentCategoryId INT,
    FOREIGN KEY (parentCategoryId) REFERENCES Category(id)
);

CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    categoryID INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    imageUrl VARCHAR(255) NOT NULL,
    FOREIGN KEY (categoryID) REFERENCES Category(id)
);
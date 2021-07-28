CREATE DATABASE alkemy_challenge_db;

USE alkemy_challenge_db;

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE balances (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    clientId INT(11) NOT NULL,
    concept VARCHAR(180),
    amount INT(6),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    transactionType VARCHAR(180),
    FOREIGN KEY clientId REFERENCES users(id)
);

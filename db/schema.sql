DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INTEGER NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY (id),
    burger_name VARCHAR(500)
    devoured BOOLEAN DEFAULT false
);


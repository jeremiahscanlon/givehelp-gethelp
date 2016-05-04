CREATE DATABASE  `helpers`;
USE `helpers`;

CREATE TABLE `give_help` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`name` VARCHAR( 255 ) NOT NULL,
	`phone` VARCHAR( 255 ) default 0,
	`email` VARCHAR( 255 ) NOT NULL,
	`available` VARCHAR( 255 ) NOT NULL,
	PRIMARY KEY ( `id` ) );

CREATE TABLE `get_help` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`name` VARCHAR( 255 ) NOT NULL,
	`phone` VARCHAR( 255 ) default 0,
	`email` VARCHAR( 255 ) NOT NULL,
	`available` VARCHAR( 255 ) NOT NULL,
	`need_help` int(1) NOT NULL default 1,
	PRIMARY KEY ( `id` ) );

INSERT INTO give_help (name,phone,email,available) Values ('Jeremiah','2018418133','jeremiah.j.scanlon@gmail.com','Monday,Tuesday,Wednesday,Thursday');

INSERT INTO get_help (name,phone,email,available,need_help) Values ('Nate','2015551212','nateynate@gmail.com','Monday,Thursday',1);
INSERT INTO get_help (name,phone,email,available,need_help) Values ('Luis','7325551212','louielouei@gmail.com','Friday,Saturday',1);

SELECT * from `give_help`;
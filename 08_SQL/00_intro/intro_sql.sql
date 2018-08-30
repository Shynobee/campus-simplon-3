/*
ouvrir invite de ligne de commande =>
  mysql -u root [ -p ] (puis saisir votre mot de passe d'utilisateur mysql)
                   ('' sur windows par defaut, 'root' sous mac)
quitter invite de ligne de commande =>
  quit;
    si bloqué... tenter : contrôle + C
*/

/*
Ressources =>
  la doc officielle :
    https://dev.mysql.com/doc/refman/5.7/en/ (ET son moteur de recherce)
  good cookbook :
    https://www.tutorialspoint.com/mysql
*/
-- DEBOGUER (avec moteur innoDB)
SHOW ENGINE INNODB STATUS;

/*
  innoDB ou MyISAM ?
  http://sql.sh/1548-mysql-innodb-myisam

  quel type pour les entiers
  https://dev.mysql.com/doc/refman/8.0/en/integer-types.html
*/

-- lister les bases de données du système
SHOW DATABASES;
-- créer une nouvelle base de données
CREATE DATABASE intro_sql;
-- utiliser nom_base comme base courante
USE intro_sql;
-- lister les tables de la base courante
SHOW TABLES;
-- lister les index et clés d'une table
SHOW INDEXES IN nom_table;
-- lister les colones d'une table + types et clés (PK / FK)
SHOW COLUMNS FROM nom_table;
-- renommer table
RENAME TABLE nom_table TO nom_table_new;

-- SUPPRESSION
-- D'UNE BASE DE DONNEES COMPLETE !
DROP DATABASE nom_base;
-- D'UNE TABLE DE LA BASE DE DONNÉES COURANTE !
DROP TABLE nom_table;
-- exemple :
-- DROP TABLE user;
-- DROP TABLE bill;
-- VIDER LE CONTENU D'UNE TABLE
TRUNCATE nom_table;
-- TRUNCATE bill;


-- CREATION des tables de la BDD

CREATE TABLE country (
  id TINYINT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(60) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO country (name) VALUES ('angleterre');
INSERT INTO country (name) VALUES ('usa');
INSERT INTO country (name) VALUES ('france');
INSERT INTO country (name) VALUES ('jamaïque');
INSERT INTO country (name) VALUES ('finlande');

CREATE TABLE user (
  id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50),
  id_country TINYINT(6) UNSIGNED,
  PRIMARY KEY(id),
  FOREIGN KEY fk_country(id_country)
    REFERENCES country(id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

CREATE TABLE bill (
  id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  id_user INT(6) UNSIGNED NOT NULL,
  total DECIMAL(13,2) NOT NULL DEFAULT 0,
  created_at DATETIME,
  PRIMARY KEY (id),
  FOREIGN KEY fk_user(id_user)
    REFERENCES user(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

INSERT INTO bill (id_user, created_at, total) VALUES (2, CURDATE(), 1000);
INSERT INTO bill (id_user, created_at, total) VALUES (2, CURDATE(), 9.99);
INSERT INTO bill (id_user, created_at, total) VALUES (13, CURDATE(), 23.99);
INSERT INTO bill (id_user, created_at, total) VALUES (13, CURDATE(), 300.01);
INSERT INTO bill (id_user, created_at, total) VALUES (14, CURDATE(), 13.99);
INSERT INTO bill (id_user, created_at, total) VALUES (18, CURDATE(), 13.99);

-- CREATE
INSERT INTO user (name, lastname) VALUES ('lovelace', 'ada');
INSERT INTO user (name, lastname, email) VALUES ('torvalds', 'linus', 'iluv@linux.org');
INSERT INTO user (name, lastname, email, id_country) VALUES ('page', 'jimmy', 'jimmy@gmail.com', 1);
INSERT INTO user (name, lastname, email, id_country) VALUES ('jonas', 'michel', null, 3);
INSERT INTO user (name, lastname, email, id_country) VALUES ('eich', 'brendan', 'js@js.net', 2);
INSERT INTO user (name, lastname, email, id_country) VALUES ('crockford', 'douglas', 'jstoo@js.net', 2);
INSERT INTO user (name, lastname, email, id_country) VALUES ('reed', 'lou', 'wild@side.io', 2);
INSERT INTO user (name, lastname, email, id_country) VALUES ('page', 'larry', 'owner@google.com', 2);
INSERT INTO user (name, lastname, email, id_country) VALUES ('poe', 'edgar', 'poems@crow.net', 1);
INSERT INTO user (name, lastname, email, id_country) VALUES ('marley', 'bob', 'rasta@jah.jm', 4);


-- READ
SELECT * FROM user;
SELECT * FROM user ORDER BY name ASC;
SELECT * FROM user ORDER BY name DESC;
SELECT * FROM user WHERE id = 1;
SELECT name FROM user WHERE id < 10;
SELECT name FROM user WHERE id < 10 AND email IS NOT NULL;
SELECT name FROM user WHERE email IS NULL;
SELECT name, email FROM user WHERE name = 'page';
SELECT COUNT(*) AS nombre_de_mister_page FROM user WHERE name = 'page';
-- LIKE CLAUSE
-- lister les users dont le prénom commencent par 'l'
SELECT * FROM user WHERE lastname LIKE 'l%';
-- lister les lignes dont colonne_table finissent par 's'
SELECT * FROM user WHERE name LIKE '%s';
SELECT * FROM user WHERE name LIKE '%s' OR name LIKE '%e';
-- lister les lignes dont la colone prénom prénom contient la sous-chaîne 'ou'
SELECT * FROM user WHERE lastname LIKE '%ou%';

-- REQUETES DE JOINTURE
-- 2 TYPES DE JOINTURES => INNER JOIN ET OUTER JOIN
-- (ATTENTION AUX PERFORMANCES => loop * n VS produit cartesien ...)
-- INNER JOIN
SELECT * FROM user INNER JOIN bill ON user.id = bill.id_user;
SELECT * FROM user INNER JOIN country ON user.id_country = country.id;

-- LEFT JOIN
-----> (return les données de la table de gauche, même si pas de match)
SELECT * FROM user LEFT JOIN bill ON user.id = bill.id_user;
SELECT * FROM user LEFT JOIN country ON country.id = user.id_country;
-- RIGHT JOIN (return les données de la table de droite, même si pas de match)
SELECT * FROM user RIGHT JOIN country ON country.id = user.id_country;


-- UPDATE
UPDATE user SET email = 'computermum@binary.com' WHERE lastname = 'ada';
UPDATE user SET email = 'guitarhero@email.com' WHERE id = 2;
UPDATE user SET id_country = 5 WHERE lastname = 'linus';
UPDATE user SET
              name = 'george',
              lastname = 'abitbol',
              email = 'cyclimse@flim.fr' WHERE id = 3;

-- DELETE
DELETE FROM user WHERE id = 1;
DELETE FROM user WHERE email = 'computermum@binary.com';
-- ATTENTION A VOS REQUETES ... LES PERTES DE DONNEES PEUVENT COUTER CHER
DELETE FROM user WHERE id;


-- ALTER TABLE
ALTER TABLE user ADD age TINYINT UNSIGNED DEFAULT 0;
ALTER TABLE user DROP COLUMN age;

-- RENAME
RENAME TABLE users TO user;
RENAME TABLE bills TO bill;

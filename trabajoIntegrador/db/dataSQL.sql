CREATE SCHEMA catalogo;
USE catalogo;
CREATE TABLE usuario(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre     VARCHAR(50)   NOT NULL,
apellido   VARCHAR(50)   NOT NULL,
email      VARCHAR(50)   NOT NULL,
usuario    VARCHAR(50)   NOT NULL,
contraseña VARCHAR(50)   NOT NULL,
fecha_de_nacimiento DATE NOT NULL,
dni INT UNSIGNED         NOT NULL,
foto       VARCHAR(100),
);
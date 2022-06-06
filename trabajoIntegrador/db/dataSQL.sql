CREATE SCHEMA db;

USE db;

CREATE TABLE usuario(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre     VARCHAR(50)   NOT NULL,
apellido   VARCHAR(50)   NOT NULL,
email      VARCHAR(50)   NOT NULL,
usuario    VARCHAR(50)   NOT NULL,
contraseña VARCHAR(50)   NOT NULL,
fecha_de_nacimiento DATE NOT NULL,
dni INT UNSIGNED         NOT NULL,
foto       VARCHAR(100)
);

CREATE TABLE  producto(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(200),
img VARCHAR(350),
descripcion VARCHAR(500),
marca VARCHAR(200),
condicion VARCHAR(200),
tipoProducto VARCHAR(200)
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombreUsuario VARCHAR(200),
comentario VARCHAR(350)
);

CREATE TABLE seguidores(
id INT PRIMARY KEY AUTO_INCREMENT,
id_usuario_seguidor INT UNSIGNED,
id_usuario_seguido INT UNSIGNED,
	FOREIGN KEY (id_usuario_seguidor) REFERENCES usuario(id),
	FOREIGN KEY (id_usuario_seguido) REFERENCES usuario(id)
);


INSERT INTO usuario VALUES (DEFAULT, "Micaela", "Chandía", "mc@udesa.edu.ar", "mChandia", "1234567", "2003-04-05", "44847605", "/mica.jpg");

INSERT INTO usuario VALUES (DEFAULT, "Tomás", "Merlo", "tm@udesa.edu.ar", "tMerlo", "987654", "2003-04-05", "44447796", "/tomi.jpg");

INSERT INTO usuario VALUES (DEFAULT, "Facundo", "Bory", "fb@udesa.edu.ar", "fBory", "567834", "2003-04-05", "44482373", "/facu.jpg");
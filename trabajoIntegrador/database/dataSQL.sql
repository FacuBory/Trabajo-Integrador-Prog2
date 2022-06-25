CREATE SCHEMA db;

USE db;

CREATE TABLE usuario(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre     VARCHAR(50)   NOT NULL,
apellido   VARCHAR(50)   NOT NULL,
email      VARCHAR(50)   NOT NULL unique,
usuario    VARCHAR(50)   NOT NULL,
contrasenia VARCHAR(100)   NOT NULL,
fechaNacimiento DATE NOT NULL,
dni INT UNSIGNED         NOT NULL,
fotoPerfil       VARCHAR(400),
seguidores        INT,
comentarios		  INT,
productosSubidos  INT
);

CREATE TABLE  producto(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(200),
img VARCHAR(350),
descripcion VARCHAR(2000),
marca VARCHAR(200),
condicion VARCHAR(200),
tipo_producto VARCHAR(200),
created_at DATE,
updated_at DATE,
comentarios INT,
idUsuario INT UNSIGNED,
FOREIGN KEY (idUsuario) REFERENCES usuario(id)
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idUsuarioComentador INT UNSIGNED,
idProductoComentado INT UNSIGNED,
texto VARCHAR(10000),
imagen VARCHAR(500),
	FOREIGN KEY (idUsuarioComentador) REFERENCES  usuario(id),
    FOREIGN KEY (idProductoComentado) REFERENCES  producto(id)
);

CREATE TABLE seguidores(
id INT PRIMARY KEY AUTO_INCREMENT,
idUsuarioSeguidor INT UNSIGNED,
idUsuarioSeguido INT UNSIGNED,
	FOREIGN KEY (idUsuarioSeguidor) REFERENCES usuario(id),
	FOREIGN KEY (idUsuarioSeguido) REFERENCES usuario(id)
);


INSERT INTO usuario VALUES (DEFAULT, "Micaela", "Chandía", "mc@udesa.edu.ar", "mChandia", "$2a$10$kzG5RogonWhfz4MoS6vcZOSdJK5z31nsafulE/ChuCMXS3ESZeyvi", "2003-04-05", "44847605", "mica.jpg", "10", "5", "18");

INSERT INTO usuario VALUES (DEFAULT, "Tomás", "Merlo", "tm@udesa.edu.ar", "tMerlo", "$2a$10$kzG5RogonWhfz4MoS6vcZOSdJK5z31nsafulE/ChuCMXS3ESZeyvi", "2003-04-05", "44447796", "tomi.png", "15", "6", "5");

INSERT INTO usuario VALUES (DEFAULT, "Facundo", "Bory", "fb@udesa.edu.ar", "fBory", "$2a$10$kzG5RogonWhfz4MoS6vcZOSdJK5z31nsafulE/ChuCMXS3ESZeyvi", "2003-04-05", "44482373", "facu.webp", "20", "8", "23");



INSERT INTO producto
VALUES (DEFAULT, 
"Samsung Smart TV", 
"SmartTV.png", 
"Los Samsung Smart TV 2020 combinan nuevas tecnologías y diseño para proporcionar a los espectadores una experiencia innovadora. Por otra parte, gracias al Infinity Design ligeramente inclinado hacia atrás, los modelos insignia Q900 y Q950 ofrecen la mejor experiencia envolvente.",
"Samsung",
"Nuevo",
"Televisor",
"2021-04-05",
"2022-04-05",
"4",
"2"
);

INSERT INTO producto
VALUES (DEFAULT, 
"Macbook Pro 2019", 
"img-macbook-pro-2019.jpg", 
"A nivel de especificaciones, el equipo prácticamente se mantiene con un procesador Intel Core i5 de doble núcleo a 1,6 Ghz, 128 o 256 GB de almacenamiento SSD (se puede configurar hasta 1TB), 8 GB de RAM configurable hasta 16 GB, GPU Intel UHD 617 y el resto de características ya vistas en su anterior versión.",
"Apple",
"Usado",
"Computadora",
"2021-04-05",
"2022-04-05",
"4",
"1"
);

INSERT INTO producto
VALUES(DEFAULT, 
"Samsung Galaxy S10", 
"img-samsung-galaxy-s10.jpg", 
"Samsung Galaxy S10 es una línea de teléfonos inteligentes Android de gama alta fabricados por Samsung. Revelados durante un evento el 20 de febrero de 2019, comprados en preventa, los dispositivos se enviaron el 8 de marzo de 2019. Al igual que el Galaxy S9, el nuevo dispositivo tiene sus modelos S10 y S10+ respectivamente, se diferencian principalmente en el tamaño de la pantalla, en la ubicación de la huella digital y en la cámara delantera adicional. Además, Samsung también lanzó una versión más pequeña llamado el Galaxy S10e y una versión compatible con la tecnología 5G.",
"Samsung",
"Nuevo",
"Celular",
"2021-04-05",
"2022-04-05",
"4",
"3"
);


INSERT INTO producto
VALUES(DEFAULT,
"Cafetera Moulinex",
"img-cafetera-moulinex.jpg",
"Esta cafetera de cápsulas ultrapequeña Nescafé® Dolce Gusto® Piccolo XS de estilo moderno ocupa muy poco y cuenta con un gran diseño que encaja en cualquier cocina. Prepara unos cafés de calidad profesional con una espuma densa y cremosa gracias a su sistema de alta presión (hasta 15 bares). Como nuestras cápsulas están selladas herméticamente, el café conserva toda su frescura y disfrutarás siempre de todo su aroma y cremosidad. Solo tienes que introducir la cápsula y bajar la palanca para preparar tu bebida preferida de entre las 30 opciones disponibles: espresso, lungo, cappuccino, latte macchiato e incluso chocolate caliente, tés y bebidas frías. Voltaje 220-240 v Potencia 1340-1600 Frecuencia 50-60 hz Ajustes de personalización Detención manual Presión 15 Personalización de la cantidad Bebidas calientes y frías Capacidad del depósito de agua 0,8 l Depósito de agua extraíble Detención automática de la bebida No Recetario Ristretto, espresso intenso, lungo aromático, grande con cuerpo, cappuccino espumoso, latte macchiato suave, o incluso chocolate caliente, tés y bebidas frías Sistema de leche Cápsula",
"Moulinex",
"Nuevo",
"Cafetera",
"2021-04-05",
"2022-04-05",
"4",
"3"
);

INSERT INTO producto
VALUES(DEFAULT,
"Iphone 13 pro",
"iphone13.jpg",
"El Apple iPhone 13 Pro llega manteniendo el diseño de su predecesor. Con una pantalla OLED de 6.1 pulgadas con tasa de refresco variable de hasta 120Hz, el iPhone 13 Pro cuenta con el procesador A15 Bionic con opciones de 128GB, 256GB, 512GB, y 1TB. La cámara trasera es cuádruple, con tres lentes de 12MP que funcionan como wide, ultrawide y telefoto, más un sensor LiDAR para información de profundidad, con estabilización óptica de imagen, zoom, 3x y captura de video en formato ProRes. La cámara selfie es ultrawide de 12MP. El iPhone 13 Pro completa sus características con carga rápida por cable e inalámbrica, parlantes stereo, resistencia al polvo y agua, y corre iOS 15.",
"Apple",
"Nuevo",
"Celular",
"2021-04-05",
"2022-04-05",
"4",
"1"
);

INSERT INTO producto
VALUES(DEFAULT,
"Lenovo Thinkpad",
"NOTEBOOK LENOVO.png",
"Procesadores Intel® Core™ 4ta generación que ofrecen el rendimiento para incrementar la productividad de su negocio. Los dispositivos se encienden en un instante y están siempre actualizados. Puedes hacer múltiples tareas rápidamente y pasar sin esfuerzo de una aplicación a otra, colaborar en forma inalámbrica en videoconferencias de alta calidad, todo con la comodidad de una batería de larga duración. Además, puedes protegerte del robo de identidad y asegurarte un acceso seguro a tu red con las funciones de seguridad integradas. De hecho, lo único más asombroso que una PC con procesador Interl Core es lo que los usuarios harán con ella.",
"Lenovo",
"Nuevo",
"Computadora",
"2021-04-05",
"2022-04-05",
"4",
"2"
);

INSERT INTO producto
VALUES(DEFAULT,
"Heladera Samsung",
"refrigerador.png",
"Samsung Family Hub es la heladera inteligente con pantalla que permite chequear contenidos del interior, ver series, recetas y más.",
"Samsung",
"Usada",
"Heladera",
"2021-04-05",
"2022-04-05",
"4",
"1"
);

INSERT INTO producto
VALUES(DEFAULT,
"Ipad Pro 12.9",
"ipad.png",
"El iPad Pro de quinta generación ofrece la mejor experiencia de iPad. El innovador chip M1 impulsa un rendimiento de nivel superior. La pantalla Liquid Retina XDR del iPad Pro (12,9 pulgadas) ofrece un rango dinámico extremo para una experiencia visual aún más sorprendente. La cámara TrueDepth cuenta con una nueva cámara ultra ancha de 12MP con Center Stage, que lo mantiene perfectamente encuadrado en las videollamadas.",
"Apple",
"Nuevo",
"Tablet",
"2021-04-05",
"2022-04-05",
"4",
"2"
);

INSERT INTO producto
VALUES(DEFAULT,
"Microondas JAMES",
"microondas.png",
"El Microondas JAMES 31 L presenta un elegante diseño slim con acabados en color negro, detalles en color dorado y puerta de cristal templado.cAhorro de Energía con Zer-On",
"James",
"Nuevo",
"Microondas",
"2021-04-05",
"2022-04-05",
"4",
"2"
);

INSERT INTO producto
VALUES(DEFAULT,
"Licuadora",
"licuadora.png",
"La Licuadora Philips HR2030/10 posee un motor potente de 600 W , panel táctil de fácil limpieza , con selector de 3 velocidades + turbo y pulsadores, y jarra de plástico reforzado. Incluye espátula integrada: ideal para preparaciones más espesas. Cuchillas dentadas de larga duración. Cuenta con apertura de la tapa con comando, botón de limpieza rápida y almacenamiento de cable integrado.",
"Philips",
"Nuevo",
"Licuadora",
"2021-04-05",
"2022-04-05",
"4",
"3"
);

INSERT INTO producto
VALUES(DEFAULT,
"Air Fryer Ninja",
"freidora.webp",
"La freidora Philips Airfryer HD9218/71 de color negro, cuenta con dimensiones compactas de 287 mm (largo) x 315 mm (ancho) x 384 mm (altura). Su recipiente de cocción es de fácil limpieza y produce menos olores que las freidoras normales.",
"Philips",
"Nuevo",
"Air fryer",
"2021-09-14",
"2022-02-25",
"4",
"3"
);

INSERT INTO producto
VALUES(DEFAULT,
"Air Pods",
"airpods.png",
"Los AirPods Pro contienen un chip fabricado en silicio, llamado chip H1, situado en cada auricular y que se encarga de las comunicaciones inalámbricas, así como del dispositivo que retransmite el audio. Este chip se ha mejorado para que la autonomía estimada de los auriculares sea mucho mayor, permitiendo gestionar todas las operaciones del dispositivo optimizando su energía",
"Apple",
"Usado",
"Auriculares",
"2021-08-05",
"2022-09-15",
"4",
"1"
);

INSERT INTO producto
VALUES(DEFAULT,
"Zapatillas Nike air jordan",
"zapatillasairjordan.png",
"Estado: DISPONIBLE EN STOCK 
Modelo: Jordan 1 Retro High OG Seafoam 
Color: Verde 
Condicion: Nuevo 
Envios: A todo el Perú 
Producto: 100% Original (Autentificado)",
"Air Jordan",
"Nuevas",
"Zapatillas",
"2022-06-21",
"2022-06-21",
"4",
"2"
);
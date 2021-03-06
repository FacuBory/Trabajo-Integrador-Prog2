const data = {
    usuario : {
        nombreDeUsuario : "Facundo Bory",
        email : "Facundobory@gmail.com"
    },
    productos : [{
        id : 1,
        nombre : "Samsung Samrt Tv",
        img : "https://probuykenya.com/public/uploads/products/thumbnail/tLtFOTrTfgWIpMtZA53eQ0ejGf4fngvtIBfBZAFV.png",
        descripción : "Los Samsung Smart TV 2020 combinan nuevas tecnologías y diseño para proporcionar a los espectadores una experiencia innovadora. Por otra parte, gracias al Infinity Design ligeramente inclinado hacia atrás, los modelos insignia Q900 y Q950 ofrecen la mejor experiencia envolvente. " , 
        
    },
    {
        id : 2,
        nombre : "Macbook Pro 2019",
        img : "https://istoreve.com/wp-content/uploads/2020/11/Macbook-pro-2019.png", 
        descripción : "A nivel de especificaciones, el equipo prácticamente se mantiene con un procesador Intel Core i5 de doble núcleo a 1,6 Ghz, 128 o 256 GB de almacenamiento SSD (se puede configurar hasta 1TB), 8 GB de RAM configurable hasta 16 GB, GPU Intel UHD 617 y el resto de características ya vistas en su anterior versión." , 
    },
    {
        id : 3,
        nombre : "Samsung Galaxy S10",
        img : "https://cdn.webshopapp.com/shops/15250/files/384521476/256x256x2/used-samsung-galaxy-s10-plus-blue.jpg",
        descripción : "Samsung Galaxy S10 es una línea de teléfonos inteligentes Android de gama alta fabricados por Samsung. Revelados durante un evento el 20 de febrero de 2019, comprados en preventa, los dispositivos se enviaron el 8 de marzo de 2019. Al igual que el Galaxy S9, el nuevo dispositivo tiene sus modelos S10 y S10+ respectivamente, se diferencian principalmente en el tamaño de la pantalla, en la ubicación de la huella digital y en la cámara delantera adicional. Además, Samsung también lanzó una versión más pequeña llamado el Galaxy S10e y una versión compatible con la tecnología 5G." , 
    },
    {
        id : 4,
        nombre : "Cafetera Moulinex",
        img : "https://www.dolce-gusto.com.ar/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/g/e/genio_s_plus_hotpoints_1.png",
        descripción : "Esta cafetera de cápsulas ultrapequeña Nescafé® Dolce Gusto® Piccolo XS de estilo moderno ocupa muy poco y cuenta con un gran diseño que encaja en cualquier cocina. Prepara unos cafés de calidad profesional con una espuma densa y cremosa gracias a su sistema de alta presión (hasta 15 bares). Como nuestras cápsulas están selladas herméticamente, el café conserva toda su frescura y disfrutarás siempre de todo su aroma y cremosidad. Solo tienes que introducir la cápsula y bajar la palanca para preparar tu bebida preferida de entre las 30 opciones disponibles: espresso, lungo, cappuccino, latte macchiato e incluso chocolate caliente, tés y bebidas frías. Voltaje 220-240 v Potencia 1340-1600 Frecuencia 50-60 hz Ajustes de personalización Detención manual Presión 15 Personalización de la cantidad Bebidas calientes y frías Capacidad del depósito de agua 0,8 l Depósito de agua extraíble Detención automática de la bebida No Recetario Ristretto, espresso intenso, lungo aromático, grande con cuerpo, cappuccino espumoso, latte macchiato suave, o incluso chocolate caliente, tés y bebidas frías Sistema de leche Cápsula" , 

    },
    {
        id : 5,
        nombre : "Iphone 13 pro",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmKpuND1qldDltn_0EiCOXHCAIiNa3i2QkWw&usqp=CAU",
        descripción : "El Apple iPhone 13 Pro llega manteniendo el diseño de su predecesor. Con una pantalla OLED de 6.1 pulgadas con tasa de refresco variable de hasta 120Hz, el iPhone 13 Pro cuenta con el procesador A15 Bionic con opciones de 128GB, 256GB, 512GB, y 1TB. La cámara trasera es cuádruple, con tres lentes de 12MP que funcionan como wide, ultrawide y telefoto, más un sensor LiDAR para información de profundidad, con estabilización óptica de imagen, zoom, 3x y captura de video en formato ProRes. La cámara selfie es ultrawide de 12MP. El iPhone 13 Pro completa sus características con carga rápida por cable e inalámbrica, parlantes stereo, resistencia al polvo y agua, y corre iOS 15. " , 
    },
    {
        id : 6,
        nombre : "Lenovo Thinkpad",
        img : "https://alltechweb.com.ar/web/image/product.template/1093/image_256/NOTEBOOK%20LENOVO%20V15%20CORE%20I3-10110U%208GB%20SSD256%2082NB002EAR?unique=4e05f9d",
        descripción : "Procesadores Intel® Core™ 4ta generación que ofrecen el rendimiento para incrementar la productividad de su negocio. Los dispositivos se encienden en un instante y están siempre actualizados. Puedes hacer múltiples tareas rápidamente y pasar sin esfuerzo de una aplicación a otra, colaborar en forma inalámbrica en videoconferencias de alta calidad, todo con la comodidad de una batería de larga duración. Además, puedes protegerte del robo de identidad y asegurarte un acceso seguro a tu red con las funciones de seguridad integradas. De hecho, lo único más asombroso que una PC con procesador Interl Core es lo que los usuarios harán con ella." , 
    },
    {
        id : 7,
        nombre : "Heladera Samsung",
        img : "https://www.nnet.com.uy/productos/imgs/refrigerador-enxuta-side-by-side-con-dispensador-y-display-76577-31.png",
        descripción : "Samsung Family Hub es la heladera inteligente con pantalla que permite chequear contenidos del interior, ver series, recetas y más." , 
    },
    {
        id : 8,
        nombre : "Ipad Pro 12.9'",
        img : "https://helios-i.mashable.com/imagery/articles/00Wf2m3YW9BRhx4FWHLXp0J/images-1.fit_lim.size_256x.png",
        descripción : "El iPad Pro de quinta generación ofrece la mejor experiencia de iPad. El innovador chip M1 impulsa un rendimiento de nivel superior. La pantalla Liquid Retina XDR del iPad Pro (12,9 pulgadas) ofrece un rango dinámico extremo para una experiencia visual aún más sorprendente. La cámara TrueDepth cuenta con una nueva cámara ultra ancha de 12MP con Center Stage, que lo mantiene perfectamente encuadrado en las videollamadas." , 
    },
    {
        id : 9,
        nombre : "Microondas JAMES",
        img : "https://www.nnet.com.uy/imgs/productos/productos31_32700.png",
        descripción : "El Microondas JAMES 31 L presenta un elegante diseño slim con acabados en color negro, detalles en color dorado y puerta de cristal templado.cAhorro de Energía con Zer-On" , 
    },
    {
        id : 10,
        nombre : "Licuadora ",
        img : "https://www.rosashermanos.com.uy/imgs/productos/productos31_7007.png",
        descripción : "La Licuadora Philips HR2030/10 posee un motor potente de 600 W , panel táctil de fácil limpieza , con selector de 3 velocidades + turbo y pulsadores, y jarra de plástico reforzado. Incluye espátula integrada: ideal para preparaciones más espesas. Cuchillas dentadas de larga duración. Cuenta con apertura de la tapa con comando, botón de limpieza rápida y almacenamiento de cable integrado." , 
    },
    {
        id : 11,
        nombre : "Air Fryer Ninja ",
        img : "https://helios-i.mashable.com/imagery/articles/0543JsdWamtnSFTjsoN3wBK/images-4.fit_lim.size_256x.png",
        descripción : "La freidora Philips Airfryer HD9218/71 de color negro, cuenta con dimensiones compactas de 287 mm (largo) x 315 mm (ancho) x 384 mm (altura). Su recipiente de cocción es de fácil limpieza y produce menos olores que las freidoras normales. " , 
    },
    {
        id : 12,
        nombre : "Air Pods",
        img : "https://img.informer.com/icons_mac/png/128/463/463336.png",
        descripción : "Los AirPods Pro contienen un chip fabricado en silicio, llamado chip H1, situado en cada auricular y que se encarga de las comunicaciones inalámbricas, así como del dispositivo que retransmite el audio. Este chip se ha mejorado para que la autonomía estimada de los auriculares sea mucho mayor, permitiendo gestionar todas las operaciones del dispositivo optimizando su energía" , 
    },
    
],
    comentarios : [{
            id : 1,
            nombreDeUsuario : "Tomas Merlo",
            comentario : "Muy buen producto, cumplió con las expectativas",
            imagenDePerfil : "https://images.vexels.com/media/users/3/131351/isolated/lists/126074b5accb18c2419c1c631f1e208f-dibujos-animados-de-cabeza-de-hombre-2.png" , 
    
        },
        {
            id : 2,
            nombreDeUsuario : "Micaela Chandia",
            comentario : "El precio es acorde al producto recibido, muy contenta con lo recibido",
            imagenDePerfil : "https://images.vexels.com/media/users/3/130530/isolated/lists/1023356046ee98899e69d165bca107c6-personaje-de-cabeza-de-dibujos-animados-de-nina-3.png" , 
    
        },
        {
            id : 3,
            nombreDeUsuario : "Juan Perez",
            comentario : "Recomiendo al 100% este producto, no se van a arrepentir",
            imagenDePerfil : "https://images.vexels.com/media/users/3/131318/isolated/lists/c969a7b00da3bad9ed9b3dfcf81ec8a6-cabeza-de-dibujos-animados-de-hombre.png" , 
    
        },
        {
            id : 4,
            nombreDeUsuario : "Lucas Rodriguez",
            comentario : "Buen buen precio para este producto, 10 puntos!",
            imagenDePerfil : "https://images.vexels.com/media/users/3/129729/isolated/preview/68887d934e59d7f76f1a569fed95ee0c-cabeza-de-nino-de-dibujos-animados-1.png" , 
    
        },
        {
            id : 5,
            nombreDeUsuario : "Julian Diaz",
            comentario : "No es lo que esperaba... lo compré con mucha ilusion y no respondió como esperaba",
            imagenDePerfil : "https://images.vexels.com/media/users/3/131319/isolated/lists/415eb68d31d5de0d090b374238c8109c-cabeza-de-dibujos-animados-hombre-1.png" , 
    
        },
        {
            id : 6,
            nombreDeUsuario : "Julieta Ponce",
            comentario : "Precio algo elevado por el producto recibido",
            imagenDePerfil : "https://images.vexels.com/media/users/3/129731/isolated/preview/1a65c3115c46b9c362db19a156b5879e-cabeza-de-nina-de-dibujos-animados.png" , 
    
        },
        {
            id : 7,
            nombreDeUsuario : "Luis Sánchez",
            comentario : "Muy buena calidad",
            imagenDePerfil : "https://images.vexels.com/media/users/3/131350/isolated/lists/11d0e316e9e66e8ead5747b1e17857a6-dibujos-animados-de-cabeza-de-hombre-1.png" , 
    
        },
        {
            id : 8,
            nombreDeUsuario : "Valentina Laverde",
            comentario : "Muy bueno todo, es lo que esperaba",
            imagenDePerfil : "https://images.vexels.com/media/users/3/131153/isolated/lists/6135f35a1aef773d712a963e1cd9fa7b-cabeza-de-dibujos-animados-de-mujer-japonesa.png" , 
    
        },
        {
            id : 9,
            nombreDeUsuario : "Martín Acosta",
            comentario : "Era un regalo para mi hijo, le encantó, todo genial!",
            imagenDePerfil : "https://images.vexels.com/media/users/3/129537/isolated/lists/01833767d53ea0272f1d2fdf8dd41ce2-dibujos-animados-de-cabeza-de-nino-2.png" , 
    
        },
        {
            id : 10,
            nombreDeUsuario : "Pedro del Divino Niño",
            comentario : "Precio acorde a la calidad del producto ",
            imagenDePerfil : "https://images.vexels.com/media/users/3/129515/isolated/lists/7fb084074c0ee8cfc07d1b9cebcb977f-cabeza-de-dibujos-animados-de-nino.png" , 
    
        },
        {
            id : 11,
            nombreDeUsuario : "Jairo de Jesús",
            comentario : "Lo recomiendo sin dudas, cumplió con las expectativas",
            imagenDePerfil : "https://images.vexels.com/media/users/3/129415/isolated/lists/7c254a2ec872475e908cabc1cc26360f-cabeza-de-dibujos-animados-de-hombre-negro-1.png" , 
    
        },
        {
            id : 12,
            nombreDeUsuario : "Gabriel Mejía",
            comentario : "El producto no es lo que esperaba, espero la devolución",
            imagenDePerfil : "https://images.vexels.com/media/users/3/129516/isolated/lists/ef174eaa46a9024eee50cd76aaf01027-cabeza-de-dibujos-animados-de-nino-1.png" , 
    
        },
     ]
}

module.exports = data;
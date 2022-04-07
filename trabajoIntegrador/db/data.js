const data = {
    usuario : {
        nombre : "Facundo",
        apellido : "Bory"
    },
    productos : [ {
        id : 1,
        nombre : "Cafetera Moulinex",
        img : "https://macfixstore.com/wp-content/uploads/2021/11/iphone-13-pink-select-2021.png",
        descripción : "Esta cafetera de cápsulas ultrapequeña Nescafé® Dolce Gusto® Piccolo XS de estilo moderno ocupa muy poco y cuenta con un gran diseño que encaja en cualquier cocina. Prepara unos cafés de calidad profesional con una espuma densa y cremosa gracias a su sistema de alta presión (hasta 15 bares). Como nuestras cápsulas están selladas herméticamente, el café conserva toda su frescura y disfrutarás siempre de todo su aroma y cremosidad. Solo tienes que introducir la cápsula y bajar la palanca para preparar tu bebida preferida de entre las 30 opciones disponibles: espresso, lungo, cappuccino, latte macchiato e incluso chocolate caliente, tés y bebidas frías. Voltaje 220-240 v Potencia 1340-1600 Frecuencia 50-60 hz Ajustes de personalización Detención manual Presión 15 Personalización de la cantidad Bebidas calientes y frías Capacidad del depósito de agua 0,8 l Depósito de agua extraíble Detención automática de la bebida No Recetario Ristretto, espresso intenso, lungo aromático, grande con cuerpo, cappuccino espumoso, latte macchiato suave, o incluso chocolate caliente, tés y bebidas frías Sistema de leche Cápsula" , 

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
        img : "https://images.samsung.com/latin/smartphones/galaxy-s10/buy/m-img-s10-prismgreen-01.png",
        descripción : "Samsung Galaxy S10 es una línea de teléfonos inteligentes Android de gama alta fabricados por Samsung. Revelados durante un evento el 20 de febrero de 2019, comprados en preventa, los dispositivos se enviaron el 8 de marzo de 2019. Al igual que el Galaxy S9, el nuevo dispositivo tiene sus modelos S10 y S10+ respectivamente, se diferencian principalmente en el tamaño de la pantalla, en la ubicación de la huella digital y en la cámara delantera adicional. Además, Samsung también lanzó una versión más pequeña llamado el Galaxy S10e y una versión compatible con la tecnología 5G." , 
    },
    {
        id : 4,
        nombre : "Samsung Samrt Tv",
        img : "https://images.samsung.com/is/image/samsung/p6pim/ar/un43t5300agczb/gallery/ar-fhd-t5300-un43t5300agczb-356627272?$720_576_PNG$",
        descripción : "Los Samsung Smart TV 2020 combinan nuevas tecnologías y diseño para proporcionar a los espectadores una experiencia innovadora. Por otra parte, gracias al Infinity Design ligeramente inclinado hacia atrás, los modelos insignia Q900 y Q950 ofrecen la mejor experiencia envolvente. " , 
    },
    {
        id : 5,
        nombre : "Iphone 13 pro",
        img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433",
        descripción : "El Apple iPhone 13 Pro llega manteniendo el diseño de su predecesor. Con una pantalla OLED de 6.1 pulgadas con tasa de refresco variable de hasta 120Hz, el iPhone 13 Pro cuenta con el procesador A15 Bionic con opciones de 128GB, 256GB, 512GB, y 1TB. La cámara trasera es cuádruple, con tres lentes de 12MP que funcionan como wide, ultrawide y telefoto, más un sensor LiDAR para información de profundidad, con estabilización óptica de imagen, zoom, 3x y captura de video en formato ProRes. La cámara selfie es ultrawide de 12MP. El iPhone 13 Pro completa sus características con carga rápida por cable e inalámbrica, parlantes stereo, resistencia al polvo y agua, y corre iOS 15. " , 
    },
    {
        id : 6,
        nombre : "Lenovo Thinkpad",
        img : "https://www.lenovo.com/medias/22wsp144sa2.png?context=bWFzdGVyfHJvb3R8MzE4NjQ2fGltYWdlL3BuZ3xoNDgvaDk2LzE0MTExNzA0NjEyODk0LnBuZ3xlZjc5YTg1NTNiM2Y1NWMyMzI0N2UyYWM0M2ViMWFkMGRiOTkwMmYzZGJjM2MxMjgxZGZlYWQzMTVkMjZkOTY1",
        descripción : "Procesadores Intel® Core™ 4ta generación que ofrecen el rendimiento para incrementar la productividad de su negocio. Los dispositivos se encienden en un instante y están siempre actualizados. Puedes hacer múltiples tareas rápidamente y pasar sin esfuerzo de una aplicación a otra, colaborar en forma inalámbrica en videoconferencias de alta calidad, todo con la comodidad de una batería de larga duración. Además, puedes protegerte del robo de identidad y asegurarte un acceso seguro a tu red con las funciones de seguridad integradas. De hecho, lo único más asombroso que una PC con procesador Interl Core es lo que los usuarios harán con ella." , 
    },
    {
        id : 7,
        nombre : "Heladera Samsung",
        img : "https://samsungar.vtexassets.com/arquivos/ids/164847-800-auto?width=800&height=auto&aspect=true",
        descripción : "Samsung Family Hub es la heladera inteligente con pantalla que permite chequear contenidos del interior, ver series, recetas y más." , 
    },
    {
        id : 8,
        nombre : "Ipad Pro 12.9'",
        img : "https://cbafederal.net/wp-content/uploads/2021/09/Apple-iPad-Pro-129-inch-5th-gen-Space-Gray-frontimage.png",
          descripción : "El iPad Pro de quinta generación ofrece la mejor experiencia de iPad. El innovador chip M1 impulsa un rendimiento de nivel superior. La pantalla Liquid Retina XDR del iPad Pro (12,9 pulgadas) ofrece un rango dinámico extremo para una experiencia visual aún más sorprendente. La cámara TrueDepth cuenta con una nueva cámara ultra ancha de 12MP con Center Stage, que lo mantiene perfectamente encuadrado en las videollamadas." , 
    },
    
],
    comentarios : [ , , , , , , , , , ]
}

module.exports = data;
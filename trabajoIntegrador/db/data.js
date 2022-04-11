const data = {
    usuario : {
        nombre : "Facundo",
        apellido : "Bory"
    },
    productos : [ {
        id : 1,
        nombre : "Cafetera Moulinex",
        img : "https://www.dolce-gusto.com.ar/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/g/e/genio_s_plus_hotpoints_1.png",
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
        img : "https://probuykenya.com/public/uploads/products/thumbnail/tLtFOTrTfgWIpMtZA53eQ0ejGf4fngvtIBfBZAFV.png",
        descripción : "Los Samsung Smart TV 2020 combinan nuevas tecnologías y diseño para proporcionar a los espectadores una experiencia innovadora. Por otra parte, gracias al Infinity Design ligeramente inclinado hacia atrás, los modelos insignia Q900 y Q950 ofrecen la mejor experiencia envolvente. " , 
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
    
],
    comentarios : [ , , , , , , , , , ]
}

module.exports = data;
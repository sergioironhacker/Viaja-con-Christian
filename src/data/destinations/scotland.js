const scotlandData = {
  id: 'scotland',
  name: 'Escocia',
  shortDescription: 'Tierras Altas, castillos, lagos misteriosos e historia fascinante.',
  longDescription: 'Escocia te cautivará: belleza salvaje, rica historia. Explora Tierras Altas, castillos legendarios, Lago Ness y Edimburgo. Viaje épico por paisajes de ensueño.',
  heroImage: "https://images.unsplash.com/photo-1535804918506-6310ba429acc",
  altImage: 'Castillo Eilean Donan reflejado en el agua, Escocia',
  basicInfo: {
    clima: "Templado oceánico, variable, lluvias frecuentes. Veranos frescos.",
    moneda: "Libra Esterlina (GBP)",
    idioma: "Inglés, Gaélico Escocés"
  },
  galleryImages: ["https://images.unsplash.com/photo-1505603682986-c2f5dfa03668","https://images.unsplash.com/photo-1579786115214-91357a74cb1d","https://images.unsplash.com/photo-1547111849-0f34e20b75ee"],
  packages: [
    {
      id: 'scotland-highlands-discovery-8d', title: 'Descubriendo las Tierras Altas', duration: '8 Días / 7 Noches', 
      price: 'Desde 1.700€', priceId: "price_1P82yGRxH9qL1gxtx0gL7Tf8",
      heroImage: "https://images.unsplash.com/photo-1506377711776-dbdc2f3c20f3",
      shortDescription: 'Ruta por Edimburgo, Lago Ness, Isla de Skye y los paisajes más icónicos.',
      longDescription: 'Un viaje completo por Escocia, desde la vibrante Edimburgo hasta la mística Isla de Skye. Descubre castillos imponentes, busca a Nessie en el Lago Ness, recorre valles legendarios como Glencoe y admira los paisajes de las Tierras Altas.',
      altImage: 'Paisaje montañoso de Quiraing en la Isla de Skye, Escocia',
      mapImage: "https://images.unsplash.com/photo-1559825069-7df444c14a35",
      galleryImages: ["https://images.unsplash.com/photo-1558981403-c5f9899a28bc","https://images.unsplash.com/photo-1548500934-c345789a4a0a","https://images.unsplash.com/photo-1528169197033-a69a2ac71c61"],
      details: {
          includes: ['Alojamiento en B&B/hoteles con desayuno', 'Coche de alquiler (categoría media) con seguro básico o transporte en grupo reducido', 'Entrada Castillo Edimburgo', 'Crucero Lago Ness', 'Visita destilería whisky con degustación', 'Itinerario detallado y recomendaciones'],
          notIncludes: ['Vuelos', 'Gasolina, peajes, parking', 'Almuerzos/cenas', 'Seguro viaje completo', 'Entradas no especificadas'],
          activities: ['Senderismo en The Old Man of Storr', 'Visita Eilean Donan Castle'],
          excursions: ['Tour fantasmas Edimburgo', 'Excursión a las Islas Orcadas (desde John OGroats)']
      },
      includes: ['Alojamiento y desayuno', 'Coche alquiler/transporte', 'Castillo Edimburgo', 'Crucero Lago Ness', 'Destilería whisky'],
      itinerary: [
        { day: 1, title: 'Llegada a Edimburgo', description: 'Recogida coche (si aplica). Explorar la Old/New Town.' }, { day: 2, title: 'Edimburgo', description: 'Castillo, Royal Mile, Holyrood Palace. Tour fantasmas (opc.).' },
        { day: 3, title: 'Hacia Lago Lomond y Glencoe', description: 'Parque Nacional Lago Lomond, valle de Glencoe. Noche en Fort William.' }, { day: 4, title: 'Lago Ness e Isla de Skye', description: 'Crucero Lago Ness, Castillo Urquhart. Cruzar a Skye. Noche en Portree.' },
        { day: 5, title: 'Isla de Skye', description: 'Old Man of Storr, Kilt Rock, Quiraing, Dunvegan Castle.' }, { day: 6, title: 'Eilean Donan y Destilería', description: 'Castillo Eilean Donan. Visita a destilería de whisky. Regreso a zona Pitlochry.' },
        { day: 7, title: 'St. Andrews y Regreso', description: 'Visita St. Andrews (cuna del golf). Regreso a Edimburgo.' }, { day: 8, title: 'Salida', description: 'Devolución coche (si aplica). Traslado aeropuerto.' },
      ],
      destinationName: 'Escocia'
    },
    {
      id: 'scotland-whisky-trail-5d', title: 'Ruta del Whisky de Speyside', duration: '5 Días / 4 Noches', 
      price: 'Desde 1.200€', priceId: "price_1P8dummyIdScotland2",
      heroImage: "https://images.unsplash.com/photo-1587089878968-333a08bb12ed",
      shortDescription: 'Sumérgete en el mundo del whisky escocés visitando las destilerías más famosas de Speyside.',
      longDescription: 'Un viaje para los amantes del whisky. Recorre la región de Speyside, hogar de más de la mitad de las destilerías de Escocia. Visitas guiadas, catas exclusivas y paisajes impresionantes te esperan.',
      altImage: 'Barriles de whisky en una destilería escocesa',
      mapImage: "https://images.unsplash.com/photo-1517415240938-061d893b9758",
      galleryImages: ["https://images.unsplash.com/photo-1609104498081-91f0a5982936","https://images.unsplash.com/photo-1566591175981-b81f1a4a6383","https://images.unsplash.com/photo-1517420704952-d9f39e95b41e"],
      details: {
          includes: ['Alojamiento en B&B/hoteles con encanto y desayuno', 'Transporte privado o coche de alquiler', 'Visitas y catas en 3-4 destilerías seleccionadas (ej. Glenfiddich, Macallan, Glenlivet)', 'Visita a la Tonelería de Speyside (Speyside Cooperage)', 'Guía conocedor del whisky o itinerario autoguiado detallado'],
          notIncludes: ['Vuelos', 'Almuerzos y cenas', 'Catas o botellas adicionales', 'Seguro de viaje'],
          activities: ['Paseos por la campiña de Speyside', 'Visita a pueblos locales'],
          excursions: ['Castillo de Balvenie (cerca de Glenfiddich)']
      },
      includes: ['Alojamiento y desayuno', 'Transporte', 'Visitas y catas destilerías', 'Tonelería Speyside'],
      itinerary: [
        { day: 1, title: 'Llegada a Speyside (Aberdeen/Inverness)', description: 'Traslado a la región de Speyside. Primera toma de contacto.'},
        { day: 2, title: 'Destilerías Icónicas', description: 'Visita a destilerías como Glenfiddich y Macallan (según disponibilidad y reservas).'},
        { day: 3, title: 'El Arte del Barril y Más Whisky', description: 'Visita a la Speyside Cooperage. Visita a otra destilería, quizás Glenlivet o Aberlour.'},
        { day: 4, title: 'Gemas Escondidas y Paisajes', description: 'Explora destilerías más pequeñas o menos conocidas. Disfruta del paisaje del río Spey.'},
        { day: 5, title: 'Salida', description: 'Último desayuno escocés. Traslado al aeropuerto.'},
      ],
      destinationName: 'Escocia'
    },
    {
      id: 'scotland-edinburgh-city-break-3d', title: 'Escapada a Edimburgo', duration: '3 Días / 2 Noches', 
      price: 'Desde 650€', priceId: "price_1P8dummyIdScotland3",
      heroImage: "https://images.unsplash.com/photo-1505603682986-c2f5dfa03668",
      shortDescription: 'Descubre la magia de la capital escocesa: historia, cultura y misterio.',
      longDescription: 'Una inmersión rápida pero intensa en Edimburgo. Explora el Castillo, recorre la Royal Mile, sube a Arthur\'s Seat para vistas panorámicas y descubre los secretos de sus callejones subterráneos.',
      altImage: 'Vista de la ciudad de Edimburgo desde Calton Hill',
      mapImage: "https://images.unsplash.com/photo-1531816450003-acb6b01657af",
      galleryImages: ["https://images.unsplash.com/photo-1528164344705-47542687000d","https://images.unsplash.com/photo-1548204619-e9a3b61f842d","https://images.unsplash.com/photo-1561905104-82c5a31e6e0a"],
      details: {
          includes: ['Alojamiento céntrico con desayuno', 'Entrada al Castillo de Edimburgo', 'Tour guiado a pie por la Old Town', 'Visita al Palacio de Holyroodhouse (opcional)', 'Tour de los fantasmas por la noche'],
          notIncludes: ['Vuelos', 'Traslados aeropuerto (opcionales)', 'Almuerzos y cenas', 'Entradas no especificadas'],
          activities: ['Subida a Arthur\'s Seat o Calton Hill', 'Visita a museos (Galería Nacional, Museo Nacional de Escocia)'],
          excursions: ['Excursión de un día al Lago Ness (larga, pero posible)']
      },
      includes: ['Alojamiento céntrico y desayuno', 'Entrada Castillo', 'Tour guiado Old Town', 'Tour Fantasmas'],
      itinerary: [
        { day: 1, title: 'Llegada y Exploración de la Old Town', description: 'Llegada a Edimburgo. Check-in. Tour guiado por la Old Town, Royal Mile. Noche: tour de los fantasmas.'},
        { day: 2, title: 'Castillo, Palacio y Vistas', description: 'Mañana: visita al Castillo de Edimburgo. Tarde: Palacio de Holyroodhouse y Parlamento Escocés. Subida a Arthur\'s Seat o Calton Hill para el atardecer.'},
        { day: 3, title: 'New Town y Salida', description: 'Explora la New Town, Princes Street. Visita a alguna galería o museo. Salida.'},
      ],
      destinationName: 'Escocia'
    },
    {
      id: 'scotland-north-coast-500-7d', title: 'Aventura en la North Coast 500', duration: '7 Días / 6 Noches', 
      price: 'Desde 1.900€', priceId: "price_1P8dummyIdScotland4",
      heroImage: "https://images.unsplash.com/photo-1591956709935-21926f9a9f10",
      shortDescription: 'Recorre una de las rutas costeras más espectaculares del mundo en el norte de Escocia.',
      longDescription: 'La North Coast 500 es una ruta épica de más de 500 millas que serpentea por la impresionante costa norte de las Tierras Altas. Descubre playas desiertas, acantilados imponentes, castillos en ruinas y una naturaleza salvaje indómita.',
      altImage: 'Carretera serpenteante en la costa de la North Coast 500, Escocia',
      mapImage: "https://images.unsplash.com/photo-1603294098574-027bf7f39a12",
      galleryImages: ["https://images.unsplash.com/photo-1547111849-0f34e20b75ee","https://images.unsplash.com/photo-1579786115214-91357a74cb1d","https://images.unsplash.com/photo-1553484771-119485e091f8"],
      details: {
          includes: ['Alojamiento en B&B/hoteles seleccionados con desayuno', 'Coche de alquiler adecuado para la ruta con seguro', 'Itinerario detallado NC500 con puntos de interés', 'Mapa de la ruta', 'Sugerencias de paradas y actividades'],
          notIncludes: ['Vuelos a Inverness', 'Gasolina', 'Almuerzos y cenas', 'Entradas a atracciones específicas (castillos, destilerías)', 'Seguro de viaje'],
          activities: ['Senderismo', 'Observación de fauna (ciervos, águilas, focas)', 'Visita a cuevas (Smoo Cave)', 'Playas remotas'],
          excursions: ['Excursión en barco para ver fauna marina', 'Visita a destilerías en la ruta']
      },
      includes: ['Alojamiento y desayuno', 'Coche alquiler', 'Itinerario NC500', 'Mapa ruta'],
      itinerary: [
        { day: 1, title: 'Inverness - Costa Oeste (hacia Applecross)', description: 'Inicio en Inverness. Ruta hacia la espectacular Bealach na Bà hasta Applecross.'},
        { day: 2, title: 'Applecross - Ullapool', description: 'Exploración de la península de Applecross. Ruta hacia el norte por la costa oeste hasta Ullapool.'},
        { day: 3, title: 'Ullapool - Durness', description: 'Impresionantes paisajes costeros, playas como Achmelvich. Llegada a Durness, visita a Smoo Cave.'},
        { day: 4, title: 'Durness - John O\'Groats - Costa Este', description: 'Punto más noroccidental (Cape Wrath opcional). Costa norte hasta John O\'Groats. Inicio descenso por costa este.'},
        { day: 5, title: 'Costa Este (hacia Dornoch/Tain)', description: 'Castillos en ruinas (Sinclair Girnigoe), pueblos pesqueros. Noche en zona Dornoch o Tain.'},
        { day: 6, title: 'Dornoch/Tain - Inverness', description: 'Visita a Dornoch y su catedral. Regreso a Inverness por la Black Isle. Tiempo para explorar Inverness.'},
        { day: 7, title: 'Salida de Inverness', description: 'Desayuno. Devolución del coche. Salida.'},
      ],
      destinationName: 'Escocia'
    }
  ]
};
export default scotlandData;
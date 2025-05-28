const laplandData = {
  id: 'lapland',
  name: 'Laponia',
  shortDescription: 'Aventura Ártica: huskies, renos, Papá Noel y auroras boreales.',
  longDescription: 'Cuento de hadas invernal en Laponia. Trineos de huskies/renos, conoce a Papá Noel, motos de nieve y auroras. Experiencia inolvidable para todos.',
  heroImage: "https://images.unsplash.com/photo-1517086232333-b9f32c3b8e4c",
  altImage: 'Huskies tirando de trineo en invierno, Laponia',
  basicInfo: {
    clima: "Subártico. Inviernos fríos/nevados, veranos cortos/suaves.",
    moneda: "EUR (Finlandia/Suecia), NOK (Noruega)",
    idioma: "Finlandés, Sueco, Noruego, Sami, Inglés"
  },
  galleryImages: ["https://images.unsplash.com/photo-1606905453353-ba33e7d3085a","https://images.unsplash.com/photo-1531505519305-662a9e73734e","https://images.unsplash.com/photo-1588369700908-d3538917f08e"],
  packages: [
    {
      id: 'lapland-arctic-dream-5d', title: 'Sueño Ártico en Laponia', duration: '5 Días / 4 Noches', 
      price: 'Desde 1.950€', priceId: "price_1P82wCRxH9qL1gxt8fA0zB3C",
      heroImage: "https://images.unsplash.com/photo-1542750773-231800902592",
      shortDescription: 'Conoce a Papá Noel, pasea en trineo de huskies y busca auroras.',
      longDescription: 'Una escapada mágica a la Laponia Finlandesa. Visita el Pueblo de Papá Noel, disfruta de un emocionante paseo en trineo de huskies, prueba la pesca en hielo y, con suerte, contempla las auroras boreales. Incluye ropa térmica.',
      altImage: 'Niños conociendo a Papá Noel en su casa de Laponia',
      mapImage: "https://images.unsplash.com/photo-1605048302981-99537ac893ae",
      galleryImages: ["https://images.unsplash.com/photo-1614539436201-0807354d6617","https://images.unsplash.com/photo-1518112403968-345db29a4d1a","https://images.unsplash.com/photo-1534541475833-c6f60611428d"],
      details: {
          includes: ['Alojamiento en cabaña/hotel con desayuno', 'Traslados aeropuerto (Rovaniemi)', 'Visita Pueblo Papá Noel y encuentro', 'Safari huskies (2h)', 'Safari motos nieve (2h) o renos (según opción)', 'Ropa térmica completa', 'Excursión auroras'],
          notIncludes: ['Vuelos', 'Almuerzos/cenas (no especif.)', 'Seguro viaje', 'Bebidas'],
          activities: ['Pesca en hielo', 'Sauna finlandesa'],
          excursions: ['Visita granja de renos con paseo', 'Rompehielos Sampo (opcional caro)']
      },
      includes: ['Alojamiento y desayuno', 'Traslados', 'Visita Papá Noel', 'Safari Huskies', 'Ropa térmica'],
      itinerary: [
        { day: 1, title: 'Llegada a Rovaniemi', description: 'Traslado, entrega ropa térmica. Noche: tour auroras.' }, { day: 2, title: 'Pueblo Papá Noel y Huskies', description: 'Visita a Santa Claus Village. Tarde: safari de huskies.' },
        { day: 3, title: 'Motos Nieve / Renos y Ocio', description: 'Safari en moto de nieve o trineo de renos. Tarde libre o pesca en hielo.' }, { day: 4, title: 'Día Libre / Opcionales', description: 'Explora Rovaniemi, visita Arktikum o Ranua Zoo (opc.).' },
        { day: 5, title: 'Salida', description: 'Desayuno. Traslado al aeropuerto.' },
      ],
      destinationName: 'Laponia'
    },
    {
      id: 'lapland-northern-lights-quest-7d', title: 'A la Caza de Auroras Boreales', duration: '7 Días / 6 Noches', 
      price: 'Desde 2.500€', priceId: "price_1P8dummyIdLapland2",
      heroImage: "https://images.unsplash.com/photo-1531505519305-662a9e73734e",
      shortDescription: 'Maximiza tus oportunidades de ver auroras con actividades nocturnas y ubicaciones remotas.',
      longDescription: 'Un viaje enfocado en la observación de las auroras boreales. Incluye múltiples excursiones nocturnas, alojamiento en zonas con poca contaminación lumínica y actividades diurnas típicas de Laponia.',
      altImage: 'Aurora boreal sobre un paisaje nevado en Laponia',
      mapImage: "https://images.unsplash.com/photo-1580477681108-770c7f770764",
      galleryImages: ["https://images.unsplash.com/photo-1529822800916-c9efc3a61a48","https://images.unsplash.com/photo-1588369700908-d3538917f08e","https://images.unsplash.com/photo-1604279400060-f93a227862c6"],
      details: {
          includes: ['Alojamiento en hotel/cabaña con desayuno (algunos con cenas)', 'Traslados', '3 excursiones de caza de auroras (diferentes métodos)', 'Safari de renos', 'Visita a una granja de huskies (sin paseo largo)', 'Ropa térmica', 'Charla sobre auroras boreales'],
          notIncludes: ['Vuelos', 'Algunos almuerzos/cenas', 'Seguro de viaje', 'Bebidas alcohólicas'],
          activities: ['Fotografía nocturna', 'Construcción de iglú (opcional)'],
          excursions: ['Excursión al Círculo Polar Ártico']
      },
      includes: ['Alojamiento', '3 Cazas de Auroras', 'Safari Renos', 'Granja Huskies', 'Ropa Térmica'],
      itinerary: [
        { day: 1, title: 'Llegada y Primera Caza de Auroras', description: 'Llegada a Ivalo/Kittilä. Traslado. Noche: primera salida para ver auroras.'},
        { day: 2, title: 'Renos y Cultura Sami', description: 'Safari de renos. Introducción a la cultura Sami. Noche: caza de auroras en campamento.'},
        { day: 3, title: 'Huskies y Paisajes Nevados', description: 'Visita a granja de huskies. Tarde libre para esquí de fondo o raquetas. Noche: tercera caza de auroras (motos de nieve o trineo).'},
        { day: 4, title: 'Día Libre o Actividad Opcional', description: 'Día para relax, sauna, o actividades como pesca en hielo. Noche libre para observar auroras por tu cuenta.'},
        { day: 5, title: 'Traslado a Nueva Ubicación (si aplica)', description: 'Posible traslado a otra zona para maximizar opciones de auroras (ej. Inari). Tarde de adaptación.'},
        { day: 6, title: 'Exploración Local y Última Noche', description: 'Actividades según nueva ubicación. Cena de despedida. Última oportunidad para auroras.'},
        { day: 7, title: 'Salida', description: 'Desayuno. Traslado al aeropuerto.'},
      ],
      destinationName: 'Laponia'
    },
    {
      id: 'lapland-family-fun-4d', title: 'Diversión Familiar en Laponia', duration: '4 Días / 3 Noches', 
      price: 'Desde 1.800€ (por adulto)', priceId: "price_1P8dummyIdLapland3",
      heroImage: "https://images.unsplash.com/photo-1606905453353-ba33e7d3085a",
      shortDescription: 'Un viaje corto pero intenso con Papá Noel, huskies, renos y juegos en la nieve para toda la familia.',
      longDescription: 'Perfecto para una escapada familiar inolvidable. Conoce a Papá Noel en persona, disfruta de paseos en trineo con huskies y renos, y diviértete con actividades en la nieve diseñadas para niños y adultos.',
      altImage: 'Familia jugando en la nieve en Laponia',
      mapImage: "https://images.unsplash.com/photo-1518112403968-345db29a4d1a",
      galleryImages: ["https://images.unsplash.com/photo-1534541475833-c6f60611428d","https://images.unsplash.com/photo-1614539436201-0807354d6617","https://images.unsplash.com/photo-1562619371-666461f78e3f"],
      details: {
          includes: ['Alojamiento familiar (hotel/cabaña) con media pensión', 'Traslados aeropuerto', 'Encuentro privado con Papá Noel', 'Mini-safari de huskies (adaptado niños)', 'Paseo en trineo de renos (corto)', 'Ropa térmica para todos', 'Juegos en la nieve guiados'],
          notIncludes: ['Vuelos', 'Almuerzos (si no es media pensión completa)', 'Seguro de viaje', 'Actividades opcionales no especificadas'],
          activities: ['Tobogganing', 'Construir muñecos de nieve'],
          excursions: ['Visita al Arktikum (museo en Rovaniemi, si el tiempo lo permite)']
      },
      includes: ['Alojamiento Media Pensión', 'Encuentro Papá Noel', 'Mini-Safari Huskies y Renos', 'Ropa Térmica', 'Juegos Nieve'],
      itinerary: [
        { day: 1, title: 'Llegada Mágica a Rovaniemi', description: 'Bienvenida. Traslado y entrega de ropa térmica. Primera toma de contacto con la nieve.'},
        { day: 2, title: '¡A Conocer a Papá Noel y sus Renos!', description: 'Visita al Santa Claus Village, encuentro privado con Papá Noel. Paseo en trineo de renos.'},
        { day: 3, title: 'Aventura con Huskies y Diversión Nevada', description: 'Emocionante mini-safari de huskies. Tarde de juegos en la nieve y tobogganing.'},
        { day: 4, title: 'Despedida de Laponia', description: 'Desayuno. Últimos momentos para disfrutar del paisaje. Traslado al aeropuerto.'},
      ],
      destinationName: 'Laponia'
    },
    {
      id: 'lapland-icebreaker-adventure-3d', title: 'Aventura en Rompehielos y Hotel de Hielo', duration: '3 Días / 2 Noches', 
      price: 'Desde 2.200€', priceId: "price_1P8dummyIdLapland4",
      heroImage: "https://images.unsplash.com/photo-1567094887216-3f5989elk544",
      shortDescription: 'Una experiencia única: navega en un rompehielos, flota en el mar helado y duerme en un hotel de hielo.',
      longDescription: 'Para los más aventureros, este paquete combina la emoción de un crucero en un rompehielos real, con la oportunidad de flotar en el agua helada (con traje especial) y la experiencia de pasar una noche en un hotel construido enteramente de nieve y hielo.',
      altImage: 'Persona flotando en el mar Báltico con traje de supervivencia cerca de un rompehielos',
      mapImage: "https://images.unsplash.com/photo-1608222974006-3f0d5a6b74c5",
      galleryImages: ["https://images.unsplash.com/photo-1561634539-a2f0391578a2","https://images.unsplash.com/photo-1610502713486-70701ff9f890","https://images.unsplash.com/photo-1587778970686-08b91a7a66e3"],
      details: {
          includes: ['1 noche en hotel estándar (Kemi/Tornio)', '1 noche en Hotel de Hielo (habitación de nieve)', 'Desayunos', 'Crucero en Rompehielos Sampo (o similar) con almuerzo y flotación', 'Visita al Castillo de Nieve (SnowCastle) de Kemi (en temporada)', 'Traslados necesarios para las actividades'],
          notIncludes: ['Vuelos a Kemi/Oulu', 'Cenas (excepto si se especifica)', 'Seguro de viaje', 'Ropa de abrigo personal (aunque se provee traje para flotación y sacos térmicos para Hotel de Hielo)'],
          activities: ['Visita guiada por el rompehielos', 'Diploma de flotación'],
          excursions: []
      },
      includes: ['Noche Hotel Hielo', 'Noche Hotel Estándar', 'Crucero Rompehielos + Flotación', 'Visita Castillo Nieve'],
      itinerary: [
        { day: 1, title: 'Llegada y Preparación Ártica', description: 'Llegada a Kemi/Tornio. Traslado a hotel estándar. Tiempo para explorar o visitar el SnowCastle (si está abierto).'},
        { day: 2, title: '¡A Bordo del Rompehielos y Noche de Hielo!', description: 'Mañana: Crucero en el Rompehielos Sampo, incluyendo almuerzo y la experiencia de flotar en el mar helado. Tarde: Traslado al Hotel de Hielo. Noche en habitación de nieve.'},
        { day: 3, title: 'Despertar Helado y Salida', description: 'Desayuno caliente. Tiempo para admirar las esculturas de hielo. Traslado al aeropuerto.'},
      ],
      destinationName: 'Laponia'
    }
  ]
};
export default laplandData;
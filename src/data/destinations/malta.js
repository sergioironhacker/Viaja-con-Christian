const maltaData = {
  id: 'malta',
  name: 'Malta',
  shortDescription: 'Joyas del Mediterráneo: historia, aguas cristalinas y ciudades con encanto.',
  longDescription: 'Descubre Malta: archipiélago mediterráneo con historia milenaria. Templos megalíticos, ciudades Patrimonio Humanidad, aguas turquesas y hospitalidad maltesa. Cultura, sol y mar.',
  heroImage: "https://images.unsplash.com/photo-1580792400423-7a6281a40f75",
  altImage: 'Panorámica de La Valeta, Malta',
  basicInfo: {
    clima: "Mediterráneo. Veranos calurosos/secos, inviernos suaves/húmedos.",
    moneda: "Euro (EUR)",
    idioma: "Maltés, Inglés"
  },
  galleryImages: ["https://images.unsplash.com/photo-1605285225866-4a3e2f082a58","https://images.unsplash.com/photo-1560781043-c6d7fffa7183","https://images.unsplash.com/photo-1518676327060-5a3696b99914"],
  packages: [
    {
      id: 'malta-gozo-comino-7d', title: 'Malta, Gozo y Comino: Tesoros del Mediterráneo', duration: '7 Días / 6 Noches', 
      price: 'Desde 950€', priceId: "price_1P830GRxH9qL1gxt8fA0zB3C",
      heroImage: "https://images.unsplash.com/photo-1520024742495-ee8a07035292",
      shortDescription: 'Explora La Valeta, Mdina, la Gruta Azul y las aguas turquesas de Comino.',
      longDescription: 'Un viaje para descubrir las tres islas principales de Malta. Explora la capital, La Valeta, la antigua ciudad de Mdina, los templos megalíticos, la impresionante Gruta Azul y disfruta de un día de relax y snorkel en la Laguna Azul de Comino. Incluye excursión a la isla de Gozo.',
      altImage: 'Barcos en la Laguna Azul de Comino, Malta',
      mapImage: "https://images.unsplash.com/photo-1623094192117-cd859a741784",
      galleryImages: ["https://images.unsplash.com/photo-1611080309308-dd81dffc2f77","https://images.unsplash.com/photo-1598090152491-2507991083a6","https://images.unsplash.com/photo-1506018100171-2a15ea85700e"],
      details: {
          includes: ['Alojamiento en hotel con desayuno', 'Traslados aeropuerto', 'Excursión de día completo a Gozo (ferry incluido)', 'Excursión en barco a Comino y la Laguna Azul', 'Visita guiada La Valeta', 'Visita guiada Mdina y Rabat', 'Entrada Templos Hagar Qim'],
          notIncludes: ['Vuelos', 'Almuerzos/cenas (no especif.)', 'Seguro viaje', 'Bebidas', 'Propinas'],
          activities: ['Buceo o snorkel (opc.)', 'Paseo en barca Gruta Azul (coste extra local)'],
          excursions: ['Pueblo pesquero Marsaxlokk (domingos)', 'Las Tres Ciudades (Vittoriosa, Senglea, Cospicua)']
      },
      includes: ['Alojamiento y desayuno', 'Traslados', 'Excursiones Gozo y Comino', 'Visitas La Valeta, Mdina'],
      itinerary: [
        { day: 1, title: 'Llegada a Malta', description: 'Traslado al hotel. Tiempo libre.' }, { day: 2, title: 'La Valeta y Las Tres Ciudades', description: 'Visita guiada La Valeta. Tarde: excursión opcional Tres Ciudades.' },
        { day: 3, title: 'Mdina, Rabat y Dingli Cliffs', description: 'Visita guiada Mdina y Rabat. Acantilados de Dingli.' }, { day: 4, title: 'Isla de Gozo', description: 'Excursión día completo a Gozo: Ciudadela, Dwejra, templos Ggantija.' },
        { day: 5, title: 'Comino y Laguna Azul', description: 'Excursión en barco a Comino. Relax y snorkel en Laguna Azul.' }, { day: 6, title: 'Sur de Malta y Templos', description: 'Gruta Azul (paseo barca opc.), Marsaxlokk (si es domingo), Templos Hagar Qim.' },
        { day: 7, title: 'Salida', description: 'Desayuno. Traslado al aeropuerto.' },
      ],
      destinationName: 'Malta'
    },
    {
      id: 'malta-historical-immersion-5d', title: 'Inmersión Histórica en Malta', duration: '5 Días / 4 Noches', 
      price: 'Desde 800€', priceId: "price_1P8dummyIdMalta2",
      heroImage: "https://images.unsplash.com/photo-1560781043-c6d7fffa7183",
      shortDescription: 'Descubre la rica historia de Malta, desde los templos prehistóricos hasta los Caballeros de San Juan.',
      longDescription: 'Un viaje enfocado en el vasto patrimonio histórico de Malta. Explora los templos megalíticos de Hagar Qim y Mnajdra, la antigua capital Mdina, las fortificaciones de La Valeta y los sitios relacionados con los Caballeros de San Juan.',
      altImage: 'Templos megalíticos de Hagar Qim en Malta',
      mapImage: "https://images.unsplash.com/photo-1518676327060-5a3696b99914",
      galleryImages: ["https://images.unsplash.com/photo-1605285225866-4a3e2f082a58","https://images.unsplash.com/photo-1613971092600-02a881f0fac6","https://images.unsplash.com/photo-1581373444438-13a6a0b10b81"],
      details: {
          includes: ['Alojamiento en hotel con desayuno', 'Traslados aeropuerto', 'Visitas guiadas a La Valeta, Mdina y Rabat', 'Entradas a Templos Hagar Qim y Mnajdra, Catacumbas de San Pablo', 'Visita a las Tres Ciudades', 'Guía especializado en historia'],
          notIncludes: ['Vuelos', 'Almuerzos/cenas', 'Seguro viaje', 'Excursiones opcionales (Gozo, Comino)'],
          activities: ['Visita a museos arqueológicos', 'Exploración de fortificaciones'],
          excursions: ['Hipogeo de Hal Saflieni (reservar con mucha antelación)']
      },
      includes: ['Alojamiento y desayuno', 'Visitas guiadas históricas', 'Entradas templos y catacumbas'],
      itinerary: [
        { day: 1, title: 'Llegada y Primera Impresión de La Valeta', description: 'Traslado. Paseo introductorio por La Valeta.'},
        { day: 2, title: 'La Valeta: Ciudad Fortaleza', description: 'Visita guiada: Co-Catedral de San Juan, Palacio del Gran Maestre, Jardines Upper Barrakka.'},
        { day: 3, title: 'Mdina, Rabat y Templos Prehistóricos', description: 'Visita a la "Ciudad Silenciosa" Mdina y Rabat (Catacumbas). Tarde: Templos de Hagar Qim y Mnajdra.'},
        { day: 4, title: 'Las Tres Ciudades y el Gran Puerto', description: 'Exploración de Vittoriosa, Senglea y Cospicua. Paseo en barca tradicional (dgħajsa) por el Gran Puerto (opcional).'},
        { day: 5, title: 'Salida', description: 'Tiempo libre para últimas compras o visitas. Traslado al aeropuerto.'},
      ],
      destinationName: 'Malta'
    },
    {
      id: 'malta-diving-adventure-6d', title: 'Aventura de Buceo en Malta y Gozo', duration: '6 Días / 5 Noches', 
      price: 'Desde 1.100€ (sin vuelos, con paquete buceo)', priceId: "price_1P8dummyIdMalta3",
      heroImage: "https://images.unsplash.com/photo-1599470149337-22a65769718a",
      shortDescription: 'Explora los famosos pecios, cuevas y arrecifes de Malta y Gozo, apto para todos los niveles.',
      longDescription: 'Malta es un destino de buceo de renombre mundial. Este paquete incluye inmersiones guiadas en algunos de los mejores sitios, como el Blue Hole en Gozo, el pecio Um El Faroud y las cuevas de Comino. Cursos PADI disponibles.',
      altImage: 'Buceador explorando un arrecife en aguas cristalinas de Malta',
      mapImage: "https://images.unsplash.com/photo-1557672726-a6a5f1f34911",
      galleryImages: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5","https://images.unsplash.com/photo-1570478348435-56a9e8391d27","https://images.unsplash.com/photo-1507059594866-f4650a7bddad"],
      details: {
          includes: ['Alojamiento con desayuno (cerca de centro buceo)', 'Paquete de 6-8 inmersiones guiadas (según nivel)', 'Alquiler de equipo completo', 'Traslados a los sitios de buceo y ferry a Gozo para inmersiones allí', 'Guías de buceo certificados'],
          notIncludes: ['Vuelos', 'Comidas (excepto desayuno)', 'Seguro de buceo y viaje', 'Cursos PADI (disponibles con suplemento)', 'Inmersiones nocturnas o técnicas (opcionales)'],
          activities: ['Snorkel en días de no buceo', 'Exploración de la costa'],
          excursions: []
      },
      includes: ['Alojamiento y desayuno', 'Paquete inmersiones guiadas', 'Equipo completo', 'Traslados buceo'],
      itinerary: [
        { day: 1, title: 'Llegada y Check-in Buceo', description: 'Traslado. Reunión con el centro de buceo, revisión de equipo y planificación.'},
        { day: 2, title: 'Primeras Inmersiones en Malta', description: '2 inmersiones en sitios costeros de Malta (ej. Cirkewwa, Ghar Lapsi).'},
        { day: 3, title: 'Buceo en Gozo', description: 'Día completo en Gozo: ferry y 2-3 inmersiones (ej. Blue Hole, Inland Sea).'},
        { day: 4, title: 'Pecios y Cuevas', description: 'Inmersiones en pecios (ej. Um El Faroud) o cuevas de Comino (según condiciones y nivel).'},
        { day: 5, title: 'Últimas Inmersiones / Día Libre', description: '2 inmersiones más o día libre para explorar Malta en superficie.'},
        { day: 6, title: 'Salida', description: 'Desayuno. Traslado al aeropuerto.'},
      ],
      destinationName: 'Malta'
    },
    {
      id: 'malta-relax-wellness-4d', title: 'Relax y Bienestar en Malta', duration: '4 Días / 3 Noches', 
      price: 'Desde 750€', priceId: "price_1P8dummyIdMalta4",
      heroImage: "https://images.unsplash.com/photo-1570169093413-89119a48752b",
      shortDescription: 'Una escapada para desconectar con tratamientos de spa, yoga y la serenidad del Mediterráneo.',
      longDescription: 'Recarga energías en este retiro de bienestar. Disfruta de masajes relajantes, sesiones de yoga frente al mar, comida saludable y tiempo para meditar y reconectar contigo mismo en el entorno tranquilo de Malta.',
      altImage: 'Mujer relajándose en un spa con vistas al mar en Malta',
      mapImage: "https://images.unsplash.com/photo-1618890501494-ea444de8f220",
      galleryImages: ["https://images.unsplash.com/photo-1515378791036-0648a3ef77b2","https://images.unsplash.com/photo-1540555700478-4be289fbecef","https://images.unsplash.com/photo-1506126613408-eca07ce68773"],
      details: {
          includes: ['Alojamiento en hotel con spa y desayuno saludable', '2 tratamientos de spa (ej. masaje, facial)', '2 sesiones de yoga o meditación guiada', 'Acceso a instalaciones de spa (piscina, sauna, baño turco)', 'Traslados aeropuerto'],
          notIncludes: ['Vuelos', 'Almuerzos y cenas (opción de menú saludable disponible)', 'Tratamientos adicionales', 'Actividades no especificadas'],
          activities: ['Paseos por la costa', 'Lectura y descanso junto a la piscina'],
          excursions: ['Visita tranquila a los Jardines de San Antón']
      },
      includes: ['Hotel con Spa y desayuno', '2 Tratamientos Spa', '2 Sesiones Yoga/Meditación', 'Acceso Spa'],
      itinerary: [
        { day: 1, title: 'Llegada y Bienvenida Relajante', description: 'Traslado. Check-in. Primera toma de contacto con el spa.'},
        { day: 2, title: 'Yoga, Spa y Serenidad', description: 'Sesión de yoga matutina. Tiempo libre para disfrutar del spa. Un tratamiento incluido.'},
        { day: 3, title: 'Meditación y Mimos', description: 'Sesión de meditación. Otro tratamiento de spa incluido. Tarde de relax.'},
        { day: 4, title: 'Despedida Renovada', description: 'Desayuno saludable. Último chapuzón o momento de calma. Traslado al aeropuerto.'},
      ],
      destinationName: 'Malta'
    }
  ]
};
export default maltaData;
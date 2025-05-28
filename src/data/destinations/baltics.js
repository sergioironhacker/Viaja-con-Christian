const balticsData = {
  id: 'baltics',
  name: 'Países Bálticos',
  shortDescription: 'Estonia, Letonia, Lituania: ciudades medievales, naturaleza y legado cultural.',
  longDescription: 'Viaje por Estonia, Letonia y Lituania. Capitales medievales (Tallin, Riga, Vilna), parques nacionales y cultura única. Joya por descubrir en norte Europa.',
  heroImage: "https://images.unsplash.com/photo-1587230649490-cb22a1958905",
  altImage: 'Casco antiguo de Tallin con nieve',
  basicInfo: {
    clima: "Continental húmedo/Templado. Veranos cálidos, inviernos fríos/nieve.",
    moneda: "Euro (EUR)",
    idioma: "Estonio, Letón, Lituano. Ruso, Inglés."
  },
  galleryImages: ["https://images.unsplash.com/photo-1541093300669-30a91418b5ac","https://images.unsplash.com/photo-1563299964-5a5510465204","https://images.unsplash.com/photo-1553482710-07d33e839335"],
  packages: [
    {
      id: 'baltic-capitals-tour-9d', title: 'Tour Capitales Bálticas', duration: '9 Días / 8 Noches', 
      price: 'Desde 1.300€', priceId: "price_1P832GRxH9qL1gxtx0gL7Tf8",
      heroImage: "https://images.unsplash.com/photo-1518609971802-74a90a3aa183",
      shortDescription: 'Descubre Tallin, Riga y Vilna, con paradas en Pärnu y Colina de las Cruces.',
      longDescription: 'Un fascinante recorrido por las tres capitales bálticas: la medieval Tallin, la modernista Riga y la barroca Vilna. En ruta, visitaremos la ciudad costera de Pärnu en Estonia y la impresionante Colina de las Cruces en Lituania. Un viaje lleno de historia, cultura y belleza arquitectónica.',
      altImage: 'Casas de colores en la plaza del Ayuntamiento de Tallin, Estonia',
      mapImage: "https://images.unsplash.com/photo-1560622496-c4d5a7fa8872",
      galleryImages: ["https://images.unsplash.com/photo-1558636370-730f0a0b7a4a","https://images.unsplash.com/photo-1513343267149-f51f0d4a5a94","https://images.unsplash.com/photo-1544457181-154350546f94"],
      details: {
          includes: ['Alojamiento en hoteles céntricos con desayuno', 'Traslados entre ciudades en autobús confortable', 'Visitas guiadas en Tallin, Riga y Vilna', 'Visita a Pärnu', 'Visita Colina de las Cruces', 'Entrada Palacio Rundale (Letonia)', 'Guías locales de habla inglesa/española'],
          notIncludes: ['Vuelos', 'Almuerzos/cenas (no especif.)', 'Seguro viaje', 'Propinas', 'Traslados aeropuerto (opc.)'],
          activities: ['Concierto órgano Catedral Domo Riga (opc.)', 'Paseo en barco por canales de Riga (opc.)'],
          excursions: ['Parque Nacional Lahemaa (desde Tallin)', 'Castillo Trakai (desde Vilna)']
      },
      includes: ['Alojamiento y desayuno', 'Traslados entre ciudades', 'Visitas guiadas capitales', 'Palacio Rundale'],
      itinerary: [
        { day: 1, title: 'Llegada a Vilna (Lituania)', description: 'Tiempo libre para explorar.' }, { day: 2, title: 'Vilna', description: 'Visita guiada: casco antiguo barroco, Universidad, Puerta Aurora.' },
        { day: 3, title: 'Vilna - Colina Cruces - Riga (Letonia)', description: 'Salida a Riga. Parada en Colina de las Cruces. Llegada a Riga.' }, { day: 4, title: 'Riga', description: 'Visita guiada: casco antiguo, Catedral Domo, casas modernistas.' },
        { day: 5, title: 'Riga - Palacio Rundale - Pärnu - Tallin (Estonia)', description: 'Palacio Rundale. Parada en Pärnu (resort costero). Llegada a Tallin.' }, { day: 6, title: 'Tallin', description: 'Visita guiada: casco antiguo medieval, Toompea, Catedral Alexander Nevsky.' },
        { day: 7, title: 'Tallin (Día Libre / Opcional Lahemaa)', description: 'Día libre o excursión opcional al Parque Nacional Lahemaa.' }, { day: 8, title: 'Tallin (Día Libre / Opcional Helsinki)', description: 'Día libre o excursión opcional en ferry a Helsinki.' },
        { day: 9, title: 'Salida de Tallin', description: 'Desayuno. Tiempo libre hasta traslado (opc.) o salida.' },
      ],
      destinationName: 'Países Bálticos'
    },
    {
      id: 'baltics-nature-escape-7d', title: 'Escape Natural por los Bálticos', duration: '7 Días / 6 Noches', 
      price: 'Desde 1.100€', priceId: "price_1P8dummyIdBaltics2",
      heroImage: "https://images.unsplash.com/photo-1580651246918-a9ba86f7b87a",
      shortDescription: 'Combina las capitales con la belleza natural de los parques nacionales de Lahemaa (Estonia) y Gauja (Letonia).',
      longDescription: 'Este viaje equilibra la riqueza cultural de Tallin y Riga con la serenidad de sus parques nacionales cercanos. Disfruta de senderismo, paisajes costeros y la tranquilidad del bosque báltico.',
      altImage: 'Sendero de madera en un pantano del Parque Nacional Lahemaa, Estonia',
      mapImage: "https://images.unsplash.com/photo-1596700110629-70f7a80e32a0",
      galleryImages: ["https://images.unsplash.com/photo-1604759696101-dd1c5f23f248","https://images.unsplash.com/photo-1590194084303-81e7ed0e7aff","https://images.unsplash.com/photo-1563299964-5a5510465204"],
      details: {
          includes: ['Alojamiento en hoteles/casas rurales con desayuno', 'Transporte (coche alquiler o traslados privados/bus)', 'Visitas guiadas en Tallin y Riga', 'Excursión de día completo al Parque Nacional Lahemaa', 'Excursión de día completo al Parque Nacional Gauja y Sigulda', 'Entradas a castillos en Sigulda'],
          notIncludes: ['Vuelos', 'Almuerzos/cenas (excepto algunos picnics opcionales)', 'Gasolina si es coche de alquiler', 'Seguro de viaje'],
          activities: ['Senderismo', 'Paseo en canoa por el río Gauja (opcional)', 'Visita a mansiones históricas'],
          excursions: []
      },
      includes: ['Alojamiento y desayuno', 'Transporte', 'Visitas Tallin y Riga', 'Excursiones P.N. Lahemaa y Gauja'],
      itinerary: [
        { day: 1, title: 'Llegada a Tallin', description: 'Traslado. Tiempo libre.'},
        { day: 2, title: 'Tallin y Excursión a P.N. Lahemaa', description: 'Mañana: visita guiada Tallin. Tarde: excursión a Lahemaa (pantanos, costa, mansiones).'},
        { day: 3, title: 'Traslado a Riga (Letonia)', description: 'Viaje a Riga. Parada en Pärnu (opcional). Tarde libre en Riga.'},
        { day: 4, title: 'Riga y Art Nouveau', description: 'Visita guiada Riga: casco antiguo, distrito Art Nouveau.'},
        { day: 5, title: 'P.N. Gauja y Sigulda ("Suiza Letona")', description: 'Excursión a Sigulda: Castillo Turaida, ruinas castillo medieval, Cueva Gutmanis.'},
        { day: 6, title: 'Día Libre en Riga o Vilna (opcional)', description: 'Día libre en Riga o viaje opcional a Vilna (Lituania) en bus rápido (requiere noche extra o salida muy temprana).'},
        { day: 7, title: 'Salida desde Riga', description: 'Desayuno. Traslado al aeropuerto.'},
      ],
      destinationName: 'Países Bálticos'
    },
    {
      id: 'baltics-winter-wonderland-6d', title: 'Maravillas Invernales Bálticas', duration: '6 Días / 5 Noches', 
      price: 'Desde 950€', priceId: "price_1P8dummyIdBaltics3",
      heroImage: "https://images.unsplash.com/photo-1548708398-7a789a83976e",
      shortDescription: 'Experimenta el encanto de Tallin, Riga y Vilna bajo un manto de nieve, con mercados navideños (en temporada).',
      longDescription: 'Descubre la magia de las capitales bálticas en invierno. Calles adoquinadas cubiertas de nieve, acogedores cafés y, si viajas en diciembre, la oportunidad de visitar sus encantadores mercados navideños.',
      altImage: 'Plaza del Ayuntamiento de Tallin nevada con mercado navideño',
      mapImage: "https://images.unsplash.com/photo-1607495624909-4e3a3a13739a",
      galleryImages: ["https://images.unsplash.com/photo-1513343267149-f51f0d4a5a94","https://images.unsplash.com/photo-1574490345084-7d8d6bbdbac2","https://images.unsplash.com/photo-1609950020080-856528f5954a"],
      details: {
          includes: ['Alojamiento céntrico con desayuno', 'Traslados entre ciudades (bus/tren)', 'Visitas guiadas a pie en Tallin, Riga y Vilna', 'Tiempo libre para mercados navideños (si aplica)', 'Sugerencias de actividades invernales (pistas de patinaje, etc.)'],
          notIncludes: ['Vuelos', 'Almuerzos y cenas', 'Entradas a museos o atracciones no especificadas', 'Seguro de viaje'],
          activities: ['Degustación de vino caliente (Glögi/Karstvīns)', 'Visita a museos de historia o arte'],
          excursions: ['Palacio de Kadriorg y KUMU (Tallin)', 'Barrio de Užupis (Vilna)']
      },
      includes: ['Alojamiento y desayuno', 'Traslados entre ciudades', 'Visitas guiadas capitales', 'Tiempo mercados navideños'],
      itinerary: [
        { day: 1, title: 'Llegada a Vilna invernal', description: 'Traslado. Primera exploración y ambiente navideño (si aplica).'},
        { day: 2, title: 'Vilna: Encanto Barroco y Nieve', description: 'Visita guiada. Tarde libre para disfrutar de la ciudad.'},
        { day: 3, title: 'Viaje a Riga y Magia Invernal', description: 'Traslado a Riga. Check-in. Paseo por el casco antiguo iluminado.'},
        { day: 4, title: 'Riga: Perla del Báltico en Invierno', description: 'Visita guiada. Tiempo para mercados o cafés acogedores.'},
        { day: 5, title: 'Viaje a Tallin y Cuento de Hadas Medieval', description: 'Traslado a Tallin. Check-in. Inmersión en su atmósfera medieval.'},
        { day: 6, title: 'Tallin y Salida', description: 'Visita guiada. Últimas compras o vistas. Traslado al aeropuerto.'},
      ],
      destinationName: 'Países Bálticos'
    },
    {
      id: 'baltics-curonian-spit-lithuania-4d', title: 'Lituania: Istmo de Curlandia y Vilna', duration: '4 Días / 3 Noches', 
      price: 'Desde 700€', priceId: "price_1P8dummyIdBaltics4",
      heroImage: "https://images.unsplash.com/photo-1596399465660-ce0b6b1a0f1c",
      shortDescription: 'Explora las dunas únicas del Istmo de Curlandia (Patrimonio UNESCO) y la capital barroca, Vilna.',
      longDescription: 'Un viaje que combina la belleza natural surrealista del Istmo de Curlandia, con sus dunas de arena móviles y pueblos de pescadores, con el encanto histórico y cultural de Vilna.',
      altImage: 'Dunas de arena en el Istmo de Curlandia, Lituania',
      mapImage: "https://images.unsplash.com/photo-1589780604118-57b7a0d9fddf",
      galleryImages: ["https://images.unsplash.com/photo-1553482710-07d33e839335","https://images.unsplash.com/photo-1607495624909-4e3a3a13739a","https://images.unsplash.com/photo-1618133178248-032e1f1348f0"],
      details: {
          includes: ['Alojamiento con desayuno (Vilna y Nida/Juodkrantė)', 'Traslados (bus Vilna-Klaipeda, ferry a Neringa, transporte local en el istmo)', 'Visita guiada en Vilna', 'Excursión guiada por el Istmo de Curlandia (Nida, Colina de las Brujas, dunas)', 'Tasa ecológica del Istmo'],
          notIncludes: ['Vuelos a Vilna', 'Almuerzos y cenas', 'Alquiler de bicicletas en el istmo (opcional)', 'Seguro de viaje'],
          activities: ['Senderismo por las dunas', 'Visita a galerías de ámbar', 'Playas del Báltico'],
          excursions: ['Castillo de Trakai (desde Vilna, opcional)']
      },
      includes: ['Alojamiento y desayuno', 'Traslados principales', 'Visitas guiadas Vilna e Istmo Curlandia', 'Tasa ecológica'],
      itinerary: [
        { day: 1, title: 'Llegada a Vilna y Exploración Inicial', description: 'Traslado. Visita guiada por el casco antiguo de Vilna.'},
        { day: 2, title: 'Viaje al Istmo de Curlandia - Nida', description: 'Mañana: bus a Klaipeda, ferry al Istmo. Traslado a Nida. Tarde: exploración de Nida, duna de Parnidis.'},
        { day: 3, title: 'Istmo de Curlandia y Regreso a Vilna', description: 'Mañana: Colina de las Brujas en Juodkrantė, otras dunas. Tarde: ferry y bus de regreso a Vilna.'},
        { day: 4, title: 'Vilna y Salida', description: 'Tiempo libre en Vilna (opcional Trakai). Traslado al aeropuerto.'},
      ],
      destinationName: 'Países Bálticos'
    }
  ]
};
export default balticsData;
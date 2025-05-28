const icelandData = {
  id: 'iceland',
  name: 'Islandia',
  shortDescription: 'Tierra de fuego y hielo. Auroras boreales, géiseres, cascadas y glaciares.',
  longDescription: 'Islandia te dejará sin aliento: volcanes, géiseres, cascadas majestuosas y glaciares milenarios. Por la noche, la mágica danza de las auroras boreales (si el tiempo acompaña).',
  heroImage: "https://images.unsplash.com/photo-1504829857797-f5581570695a",
  altImage: 'Aurora boreal sobre montaña Kirkjufell, Islandia',
  basicInfo: {
    clima: "Templado oceánico, cambiante. Veranos frescos, inviernos suaves.",
    moneda: "Corona Islandesa (ISK)",
    idioma: "Islandés, Inglés (amplio)"
  },
  galleryImages: ["https://images.unsplash.com/photo-1476610182048-b716b8518aae","https://images.unsplash.com/photo-1534579076193-90418d8a9a5d","https://images.unsplash.com/photo-1519994994859-e405867590c8"],
  packages: [
    {
      id: 'iceland-winter-aurora-7d', title: 'Islandia: Auroras y Hielo', duration: '7 Días / 6 Noches', 
      price: 'Desde 2.100€', priceId: "price_1P82uGRxH9qL1gxtx0gL7Tf8",
      heroImage: "https://images.unsplash.com/photo-1517261548313-7f0c5c29035b",
      shortDescription: 'Caza auroras, explora cuevas de hielo y relájate en la Laguna Azul.',
      longDescription: 'Vive la magia invernal islandesa: busca auroras, explora cuevas de hielo (según temporada), recorre el Círculo Dorado y sumérgete en la Laguna Azul. Aventura en un paisaje de ensueño.',
      altImage: 'Aurora boreal sobre iglesia en Vik, Islandia',
      mapImage: "https://images.unsplash.com/photo-1509024644558-2f563d83954b",
      galleryImages: ["https://images.unsplash.com/photo-1480519842669-9d992540f53f","https://images.unsplash.com/photo-1508004680771-cf29d93a3301","https://images.unsplash.com/photo-1544554729-628591eb9059"],
      details: {
          includes: ['Alojamiento con desayuno', 'Traslados aeropuerto', 'Excursión Círculo Dorado', 'Entrada Confort Laguna Azul', 'Tour auroras (2ª op.)', 'Visita cueva hielo (Nov-Mar) o alternativa', 'Guía (inglés/español)'],
          notIncludes: ['Vuelos internacionales', 'Almuerzos/cenas', 'Seguro viaje', 'Ropa abrigo', 'Propinas'],
          activities: ['Senderismo glaciar (opc.)', 'Paseo caballo islandés (opc.)'],
          excursions: ['Tour Costa Sur', 'Avistamiento ballenas (verano)']
      },
      includes: ['Alojamiento y desayuno', 'Traslados', 'Excursiones (C. Dorado, Auroras)', 'Laguna Azul'],
      itinerary: [
        { day: 1, title: 'Llegada a Reikiavik', description: 'Traslado hotel. Tiempo libre.' }, { day: 2, title: 'Círculo Dorado', description: 'Thingvellir, Geysir, Gullfoss.' },
        { day: 3, title: 'Aventura Sur y Cueva Hielo', description: 'Costa sur, cascadas, playas negras. Cueva hielo (invierno).' }, { day: 4, title: 'Laguna Azul y Reikiavik', description: 'Relax Laguna Azul. Tarde libre.' },
        { day: 5, title: 'Día Libre / Opcionales', description: 'Explora Reikiavik o excursión (glaciar, ballenas).' }, { day: 6, title: 'Caza Auroras Boreales', description: 'Día libre. Noche: tour auroras.' },
        { day: 7, title: 'Salida', description: 'Traslado aeropuerto.' },
      ],
      destinationName: 'Islandia'
    },
    {
      id: 'iceland-ring-road-10d', title: 'Aventura Completa: Ring Road', duration: '10 Días / 9 Noches', 
      price: 'Desde 3.200€', priceId: "price_1P8dummyIdIceland2",
      heroImage: "https://images.unsplash.com/photo-1476610182048-b716b8518aae",
      shortDescription: 'Recorre la famosa carretera de circunvalación de Islandia y descubre todos sus secretos.',
      longDescription: 'Una experiencia inolvidable recorriendo la Ring Road. Desde cascadas épicas y glaciares hasta fiordos remotos y aguas termales escondidas. La aventura islandesa definitiva.',
      altImage: 'Carretera escénica en Islandia con montañas al fondo',
      mapImage: "https://images.unsplash.com/photo-1505928733594-1cb542705843",
      galleryImages: ["https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0","https://images.unsplash.com/photo-1534579076193-90418d8a9a5d","https://images.unsplash.com/photo-1519994994859-e405867590c8"],
      details: {
          includes: ['Alojamiento en guesthouses/hoteles con desayuno', 'Coche de alquiler 4x4 (categoría media) con seguro completo', 'Itinerario detallado día a día', 'Mapa y guía de Islandia', 'Entrada a aguas termales seleccionadas (no Laguna Azul)'],
          notIncludes: ['Vuelos internacionales', 'Gasolina', 'Almuerzos/cenas', 'Actividades opcionales (excursiones glaciares, cuevas de hielo, etc.)', 'Seguro de viaje personal'],
          activities: ['Senderismo', 'Avistamiento de aves (Puffins en temporada)', 'Fotografía de paisajes'],
          excursions: ['Excursión en barco por laguna glaciar Jökulsárlón', 'Tour de avistamiento de ballenas en Húsavík']
      },
      includes: ['Alojamiento y desayuno', 'Coche alquiler 4x4', 'Itinerario detallado', 'Entrada aguas termales'],
      itinerary: [
        { day: 1, title: 'Llegada a Keflavík - Reikiavik', description: 'Recogida del coche. Traslado a Reikiavik.'},
        { day: 2, title: 'Círculo Dorado y Costa Sur (hacia Vík)', description: 'Thingvellir, Geysir, Gullfoss. Cascadas Seljalandsfoss y Skógafoss. Playas negras de Reynisfjara.'},
        { day: 3, title: 'Parque Nacional Skaftafell y Jökulsárlón', description: 'Senderismo en Skaftafell. Laguna glaciar Jökulsárlón y Diamond Beach.'},
        { day: 4, title: 'Fiordos del Este', description: 'Ruta escénica por los fiordos, pueblos pesqueros con encanto.'},
        { day: 5, title: 'Zona del Lago Mývatn', description: 'Área geotermal de Hverir, Dimmuborgir (formaciones de lava), cráter Viti, baños naturales de Mývatn.'},
        { day: 6, title: 'Húsavík y Akureyri', description: 'Húsavík (capital avistamiento ballenas). Akureyri (capital del norte).'},
        { day: 7, title: 'Península de Snæfellsnes', description: 'Conocida como "Islandia en miniatura". Kirkjufell, Arnarstapi, playas.'},
        { day: 8, title: 'Costa Oeste y Regreso a Reikiavik', description: 'Cascadas Hraunfossar y Barnafoss. Deildartunguhver. Regreso a Reikiavik.'},
        { day: 9, title: 'Reikiavik', description: 'Día libre para explorar la capital: Hallgrímskirkja, Harpa, museos.'},
        { day: 10, title: 'Salida', description: 'Devolución del coche en el aeropuerto de Keflavík.'},
      ],
      destinationName: 'Islandia'
    },
    {
      id: 'iceland-highlands-expedition-5d', title: 'Expedición a las Tierras Altas (Verano)', duration: '5 Días / 4 Noches', 
      price: 'Desde 2.800€', priceId: "price_1P8dummyIdIceland3",
      heroImage: "https://images.unsplash.com/photo-1551789149-89fb1e1f8c5d",
      shortDescription: 'Aventura en 4x4 por el interior deshabitado de Islandia: Landmannalaugar y Thórsmörk.',
      longDescription: 'Solo accesible en verano, esta expedición te lleva al corazón volcánico de Islandia. Montañas de riolita multicolores en Landmannalaugar, valles exuberantes en Thórsmörk y la experiencia de cruzar ríos en un vehículo 4x4 preparado.',
      altImage: 'Paisaje montañoso de colores en Landmannalaugar, Islandia',
      mapImage: "https://images.unsplash.com/photo-1591951714309-617f0633da27",
      galleryImages: ["https://images.unsplash.com/photo-1620704275306-09ef15285f65","https://images.unsplash.com/photo-1603248942606-a372d091340b","https://images.unsplash.com/photo-1542640240-11e008258791"],
      details: {
          includes: ['Guía conductor experto en 4x4 modificado', 'Alojamiento en refugios de montaña/guesthouses remotas (saco de dormir a veces necesario)', 'Todas las comidas durante la expedición (desayuno, almuerzo picnic, cena)', 'Permisos de acceso a Tierras Altas'],
          notIncludes: ['Vuelos internacionales y traslados a punto de inicio/fin de expedición', 'Seguro de viaje con cobertura para actividades de aventura', 'Bebidas alcohólicas', 'Equipo personal (botas de trekking, ropa impermeable, saco de dormir si es necesario)'],
          activities: ['Senderismo en Landmannalaugar y Thórsmörk', 'Baño en aguas termales naturales', 'Fotografía de naturaleza extrema'],
          excursions: ['Caminatas guiadas a miradores espectaculares']
      },
      includes: ['Guía experto 4x4', 'Alojamiento refugios/guesthouses', 'Todas las comidas en ruta', 'Permisos'],
      itinerary: [
        { day: 1, title: 'Inicio Expedición - Hacia Landmannalaugar', description: 'Encuentro en punto de partida. Ruta 4x4 hacia Landmannalaugar, cruzando ríos.'},
        { day: 2, title: 'Landmannalaugar: Senderismo y Baños Termales', description: 'Exploración de las montañas de riolita. Baño en aguas termales naturales.'},
        { day: 3, title: 'Ruta Fjallabak y Thórsmörk', description: 'Travesía por la espectacular ruta de Fjallabak. Llegada al valle de Thórsmörk.'},
        { day: 4, title: 'Thórsmörk: El Valle de Thor', description: 'Senderismo por los senderos de Thórsmörk, rodeados de glaciares y volcanes.'},
        { day: 5, title: 'Regreso a la Civilización', description: 'Últimas vistas de las Tierras Altas. Regreso a punto de finalización de la expedición.'},
      ],
      destinationName: 'Islandia'
    },
     {
      id: 'iceland-south-coast-gems-4d', title: 'Joyas de la Costa Sur', duration: '4 Días / 3 Noches', 
      price: 'Desde 1.500€', priceId: "price_1P8dummyIdIceland4",
      heroImage: "https://images.unsplash.com/photo-1508004680771-cf29d93a3301",
      shortDescription: 'Cascadas, playas de arena negra, glaciares y la laguna Jökulsárlón en una escapada corta.',
      longDescription: 'Un itinerario intensivo para descubrir los puntos más icónicos de la espectacular Costa Sur de Islandia. Ideal para quienes tienen poco tiempo pero no quieren perderse lo mejor de esta región.',
      altImage: 'Playa de arena negra Reynisfjara con columnas de basalto, Islandia',
      mapImage: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968",
      galleryImages: ["https://images.unsplash.com/photo-1469854523086-cc02fe5d8800","https://images.unsplash.com/photo-1519681393784-d120267933ba","https://images.unsplash.com/photo-1548091706-f879191401a6"],
      details: {
          includes: ['Alojamiento en hoteles/guesthouses con desayuno', 'Transporte en minibús confortable', 'Guía de habla inglesa/española', 'Visita a Seljalandsfoss, Skógafoss, Reynisfjara', 'Visita a la laguna glaciar Jökulsárlón', 'Caminata sobre glaciar (equipamiento incluido)'],
          notIncludes: ['Vuelos internacionales', 'Almuerzos y cenas', 'Seguro de viaje', 'Bebidas', 'Propinas'],
          activities: ['Exploración de cuevas de hielo (en invierno, opcional con coste extra)', 'Paseo en barco anfibio en Jökulsárlón (en verano, opcional con coste extra)'],
          excursions: ['Visita al pueblo de Vík']
      },
      includes: ['Alojamiento y desayuno', 'Transporte minibús', 'Guía', 'Visitas principales Costa Sur', 'Caminata glaciar'],
      itinerary: [
        { day: 1, title: 'Reikiavik - Seljalandsfoss - Skógafoss - Reynisfjara - Vík', description: 'Salida de Reikiavik. Visita a las cascadas y la playa de arena negra. Noche en la zona de Vík.'},
        { day: 2, title: 'Vík - Skaftafell - Jökulsárlón - Höfn', description: 'Exploración del Parque Nacional Skaftafell. Visita a la laguna glaciar Jökulsárlón y Diamond Beach. Noche en la zona de Höfn.'},
        { day: 3, title: 'Höfn - Caminata Glaciar - Regreso hacia Hella/Hvolsvöllur', description: 'Caminata guiada sobre un glaciar. Regreso por la Costa Sur. Noche en la zona de Hella o Hvolsvöllur.'},
        { day: 4, title: 'Hella/Hvolsvöllur - Círculo Dorado (opcional) - Reikiavik', description: 'Regreso a Reikiavik. Posibilidad de añadir una visita exprés al Círculo Dorado (coste adicional). Fin de servicios.'},
      ],
      destinationName: 'Islandia'
    }
  ]
};
export default icelandData;
const indonesiaPackagesInfo = {
      baliIslands12d: {
        id: 'bali-islands-12d',
        title: 'Bali Mágico + Islas Gili',
        duration: '12 Días / 11 Noches',
        price: 'Desde 1.850€', 
        heroImage: "https://images.unsplash.com/photo-1574447878378-6343d815eb6a",
        shortDescription: 'Templos, playas de ensueño, snorkel y la vibrante cultura balinesa te esperan.',
        longDescription: 'Descubre la esencia de Indonesia: los templos sagrados y arrozales de Ubud, los acantilados de Nusa Penida y las playas de arena blanca de las Islas Gili. Aventura, cultura y relax en un solo viaje.',
        altImage: 'Vista icónica de la playa Kelingking en Nusa Penida',
        mapImage: "https://images.unsplash.com/photo-1562590036-50385848995a",
        galleryImages: ["https://images.unsplash.com/photo-1546484453-0cfe39047ce4","https://images.unsplash.com/photo-1588533133301-a12453016936","https://images.unsplash.com/photo-1530918606788-761271c97ff3","https://images.unsplash.com/photo-1518544991206-70390d3b8f09","https://images.unsplash.com/photo-1552079335-413e19a50bd7","https://images.unsplash.com/photo-1528702704266-9600aeccc080"],
        details: {
          standard: {
            includes: ['Vuelos internos (si aplica)', 'Alojamiento hoteles 3-4* con desayuno', 'Traslados terrestres/marítimos compartidos', 'Excursiones en grupo (inglés/español según disp.)', 'Entradas a sitios mencionados', 'Equipo de snorkel'],
            notIncludes: ['Vuelos internacionales', 'Almuerzos/cenas (no especif.)', 'Seguro de viaje básico', 'Propinas', 'Gastos personales'],
            activities: ['Clase cocina balinesa (opcional)', 'Rafting río Ayung (opcional)', 'Yoga y meditación (clases grupales)'],
            excursions: ['Volcán Batur amanecer (grupo)', 'Cascadas norte Bali (grupo)']
          },
          premium: {
            includes: ['Vuelos internos (si aplica)', 'Alojamiento hoteles 4-5* y villas con desayuno', 'Traslados terrestres/marítimos privados', 'Excursiones privadas y exclusivas (guía español)', 'Entradas VIP a sitios mencionados', 'Equipo de snorkel de alta calidad', 'Seguro de viaje premium con cancelación', 'Mayoría de almuerzos y cenas especiales'],
            notIncludes: ['Vuelos internacionales', 'Bebidas alcohólicas (no especif.)', 'Propinas', 'Gastos personales de lujo'],
            activities: ['Clase cocina balinesa privada', 'Rafting río Ayung privado', 'Sesiones de yoga y meditación privadas', 'Buceo en Nusa Lembongan con instructor privado', 'Tour en bicicleta eléctrica por arrozales'],
            excursions: ['Vuelo en helicóptero sobre Volcán Batur', 'Día de spa y bienestar completo', 'Crucero privado al atardecer en Nusa Ceningan']
          }
        },
        includes: ['Vuelos internos', 'Alojamiento y desayuno', 'Traslados', 'Excursiones', 'Guía'], 
        itinerary: {
          standard: [
            { day: 1, title: 'Llegada a Bali - Ubud', description: 'Traslado a Ubud. Relax.' },
            { day: 2, title: 'Ubud: Templos y Arrozales', description: 'Tirta Empul, Gunung Kawi, Tegalalang.' },
            { day: 3, title: 'Ubud: Naturaleza y Cultura', description: 'Clase cocina, Monkey Forest.' },
            { day: 4, title: 'Nusa Penida: Oeste', description: 'Kelingking, Angel’s Billabong, Broken Beach.' },
            { day: 5, title: 'Nusa Penida: Este y Snorkel', description: 'Diamond Beach, Atuh Beach, Manta Point.' },
            { day: 6, title: 'Gili Trawangan', description: 'Ferry a Gili T. Tarde libre.' },
            { day: 7, title: 'Gili T: Relax/Snorkel', description: 'Día libre.' },
            { day: 8, title: 'Excursión 3 Islas Gili', description: 'Snorkel en Gili Meno y Gili Air.' },
            { day: 9, title: 'Seminyak (Bali)', description: 'Ferry a Bali, traslado a Seminyak.' },
            { day: 10, title: 'Seminyak: Playas y Atardecer', description: 'Playas, atardecer en Tanah Lot.' },
            { day: 11, title: 'Seminyak: Compras', description: 'Tiempo libre.' },
            { day: 12, title: 'Salida de Bali', description: 'Traslado al aeropuerto.' },
          ],
          premium: [
            { day: 1, title: 'Llegada VIP a Bali - Ubud Villa', description: 'Traslado privado a villa de lujo en Ubud. Cocktail de bienvenida.' },
            { day: 2, title: 'Ubud Exclusivo: Templos Privados y Arrozales', description: 'Visita privada a Tirta Empul y Gunung Kawi. Paseo guiado por Tegalalang con fotógrafo.' },
            { day: 3, title: 'Ubud Premium: Bienestar y Cultura', description: 'Clase de cocina privada. Sesión de yoga y meditación privada. Tarde de spa.' },
            { day: 4, title: 'Nusa Penida VIP: Oeste en Barco Privado', description: 'Tour en barco privado a Kelingking, Angel’s Billabong, Broken Beach con almuerzo a bordo.' },
            { day: 5, title: 'Nusa Penida VIP: Este y Buceo', description: 'Tour privado a Diamond Beach, Atuh Beach. Sesión de buceo en Manta Point con instructor.' },
            { day: 6, title: 'Gili Trawangan Boutique', description: 'Ferry rápido privado a Gili T. Alojamiento en hotel boutique. Tarde libre, masaje incluido.' },
            { day: 7, title: 'Gili T: Relax de Lujo', description: 'Día libre para disfrutar de la villa/hotel. Actividades acuáticas premium disponibles.' },
            { day: 8, title: 'Crucero Privado Islas Gili', description: 'Excursión privada en yate por las 3 Islas Gili, snorkel en puntos exclusivos, almuerzo gourmet.' },
            { day: 9, title: 'Seminyak (Bali) - Hotel de Lujo', description: 'Traslado privado a hotel de lujo en Seminyak. Cena degustación.' },
            { day: 10, title: 'Seminyak VIP: Club de Playa y Atardecer', description: 'Acceso a club de playa exclusivo. Atardecer en Tanah Lot con guía privado y ofrendas.' },
            { day: 11, title: 'Seminyak: Personal Shopper y Despedida', description: 'Mañana de compras con personal shopper. Cena de despedida en restaurante de alta cocina.' },
            { day: 12, title: 'Salida VIP de Bali', description: 'Traslado privado al aeropuerto, acceso a sala VIP (si disponible).' },
          ]
        },
        comparison: {
          priceStandard: "1.850€", priceIdStandard: "price_1RT8cCAJKlC1CQY05r8WaHOB", 
          pricePremium: "2.550€", priceIdPremium: "REEMPLAZAR_CON_TU_PRICE_ID_LIVE_PREMIUM_BALI_ISLAS", 
          features: [
            { name: "Alojamiento hoteles 3-4*", standard: true, premium: false }, { name: "Alojamiento hoteles 4-5* y villas", standard: false, premium: true },
            { name: "Traslados compartidos", standard: true, premium: false }, { name: "Traslados privados", standard: false, premium: true },
            { name: "Excursiones en grupo", standard: true, premium: false }, { name: "Excursiones privadas y exclusivas", standard: false, premium: true },
            { name: "Seguro básico", standard: true, premium: false }, { name: "Seguro premium con cancelación", standard: false, premium: true },
            { name: "Algunas comidas (desayunos)", standard: true, premium: false }, { name: "Mayoría comidas y cenas especiales", standard: false, premium: true },
          ]
        }, 
        destinationName: 'Indonesia'
      },
      ubudSpiritualAdventure: {
        id: 'ubud-spiritual-adventure', title: 'Ubud: Retiro Espiritual', duration: '7 Días / 6 Noches', price: 'Desde 1.200€',
        heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526",
        shortDescription: 'Conecta con tu interior en Bali. Yoga, meditación, templos y naturaleza.',
        longDescription: 'Inmersión en la cultura y espiritualidad de Ubud. Clases de yoga y meditación, templos ancestrales, purificación en manantiales sagrados y belleza natural. Renueva cuerpo y alma.',
        altImage: 'Meditación frente a templo balinés al amanecer',
        mapImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
        galleryImages: ["https://images.unsplash.com/photo-1500324857195-dba759891395","https://images.unsplash.com/photo-1540202007046-90620037ac00","https://images.unsplash.com/photo-1547595720-16a3a8943ab1"],
        details: {
          standard: {
            includes: ['Alojamiento retiro yoga (hab. compartida)', 'Desayunos/cenas saludables (veg)', 'Clases yoga/meditación diarias (grupales)', 'Visitas templos (Tirta Empul, Goa Gajah)', 'Ceremonia purificación grupal', 'Talleres cultura balinesa', 'Masaje balinés 60 min'],
            notIncludes: ['Vuelos internacionales', 'Almuerzos', 'Seguro de viaje', 'Propinas', 'Actividades no especif.'],
            activities: ['Senderismo arrozales (grupo)', 'Clase cocina saludable (grupo)'],
            excursions: ['Cascadas Sekumpul (opcional)', 'Mercado Ubud y Palacio Real (libre)']
          },
          premium: {
            includes: ['Alojamiento retiro yoga (hab. privada lujo)', 'Todas las comidas saludables gourmet (veg)', 'Clases yoga/meditación diarias (privadas o grupo muy reducido)', 'Visitas privadas a templos y ceremonia purificación personalizada', 'Talleres cultura balinesa privados', 'Paquete spa completo (3 tratamientos)', 'Consulta con sanador tradicional (Balian)', 'Guía espiritual personal'],
            notIncludes: ['Vuelos internacionales', 'Bebidas alcohólicas', 'Seguro de viaje premium (a cotizar)', 'Propinas'],
            activities: ['Senderismo guiado privado por arrozales', 'Clase cocina saludable privada y personalizada', 'Visita privada a sanador (Balian) con traducción'],
            excursions: ['Excursión privada a cascadas Sekumpul con picnic gourmet', 'Tour privado y compras en mercado Ubud y Palacio Real con guía cultural']
          }
        },
        includes: ['Retiro yoga', 'Comidas saludables', 'Yoga/meditación', 'Visitas templos', 'Purificación'],
         itinerary: {
           standard: [
            { day: 1, title: 'Llegada a Ubud - Retiro', description: 'Bienvenida, primera clase yoga.' }, { day: 2, title: 'Yoga y Templo Tirta Empul', description: 'Yoga amanecer, visita Tirta Empul.' },
            { day: 3, title: 'Meditación y Arrozales', description: 'Meditación guiada, paseo Jatiluwih.' }, { day: 4, title: 'Cocina Balinesa y Sanación', description: 'Clase cocina, sanación tradicional.' },
            { day: 5, title: 'Yoga, Cascada y Silencio', description: 'Yoga, cascada Tegenungan, introspección.' }, { day: 6, title: 'Ofrendas y Despedida', description: 'Ceremonia Canang Sari, cena.' },
            { day: 7, title: 'Salida de Ubud', description: 'Última sesión yoga/meditación. Traslado.' },
          ],
          premium: [
            { day: 1, title: 'Llegada VIP a Ubud - Retiro de Lujo', description: 'Traslado privado, bienvenida personalizada, primera sesión de yoga privada.' }, 
            { day: 2, title: 'Yoga Privado y Purificación en Templo Tirta Empul', description: 'Yoga al amanecer privado, visita y ceremonia de purificación privada en Tirta Empul.' },
            { day: 3, title: 'Meditación Profunda y Paseo por Arrozales de Jatiluwih', description: 'Sesión de meditación guiada personalizada, paseo privado por Jatiluwih con guía.' }, 
            { day: 4, title: 'Cocina Balinesa Gourmet y Consulta con Sanador', description: 'Clase de cocina privada gourmet. Consulta privada con un reputado Balian (sanador).' },
            { day: 5, title: 'Yoga Restaurativo, Cascada Privada y Día de Silencio', description: 'Yoga restaurativo privado, visita a una cascada menos concurrida, tarde de introspección y silencio guiado.' }, 
            { day: 6, title: 'Creación de Ofrendas Personales y Cena de Despedida Mística', description: 'Taller privado de creación de ofrendas Canang Sari. Cena de despedida especial con música tradicional.' },
            { day: 7, title: 'Despedida y Traslado VIP', description: 'Última sesión de yoga y meditación privada. Traslado privado al aeropuerto.' },
          ]
         },
         comparison: {
          priceStandard: "1.200€", priceIdStandard: "REEMPLAZAR_CON_TU_PRICE_ID_LIVE_ESTANDAR_UBUD",
          pricePremium: "1.750€", priceIdPremium: "REEMPLAZAR_CON_TU_PRICE_ID_LIVE_PREMIUM_UBUD",
          features: [
            { name: "Hab. compartida retiro", standard: true, premium: false }, { name: "Hab. privada lujo retiro", standard: false, premium: true },
            { name: "Comidas vegetarianas incluidas", standard: true, premium: true }, { name: "Masaje balinés 60 min", standard: true, premium: false },
            { name: "Paquete spa completo (3 trat.)", standard: false, premium: true }, { name: "Consulta sanador tradicional", standard: false, premium: true },
            { name: "Grupo reducido", standard: true, premium: false }, { name: "Guía espiritual personal y clases privadas", standard: false, premium: true },
          ]
        }, destinationName: 'Indonesia'
      },
      lombokGiliEscape10d: {
        id: 'lombok-gili-escape-10d', title: 'Escape Lombok y Gili', duration: '10 Días / 9 Noches', price: 'Desde 1.600€',
        heroImage: "https://images.unsplash.com/photo-1566591089819-70f274c8dba3",
        shortDescription: 'Playas vírgenes en Lombok, snorkel en las Gili y relax absoluto.',
        longDescription: 'Descubre la belleza natural de Lombok, con sus playas menos concurridas y paisajes volcánicos. Luego, sumérgete en el paraíso de las Islas Gili, perfectas para el snorkel, buceo y desconectar del mundo.',
        altImage: 'Playa paradisíaca en Lombok con aguas turquesas',
        mapImage: "https://images.unsplash.com/photo-1515247668536-29f3cc2c2551",
        galleryImages: ["https://images.unsplash.com/photo-1582879643005-3f336792d5b7","https://images.unsplash.com/photo-1542037104889-8c81a254457c","https://images.unsplash.com/photo-1508672019048-805c876b67e2"],
        details: {
          standard: {
            includes: ['Alojamiento hoteles con encanto (3*) con desayuno', 'Traslados terrestres/marítimos (grupo reducido)', 'Excursión cascadas Lombok', 'Tour playas sur Lombok', 'Barco público/charter a Gili', 'Equipo de snorkel básico'],
            notIncludes: ['Vuelos internacionales e internos a Lombok', 'Almuerzos/cenas', 'Seguro de viaje', 'Propinas', 'Bebidas'],
            activities: ['Clases de surf en Gerupuk (Lombok) (opcional grupal)', 'Buceo en Gili Trawangan (opcional centros locales)'],
            excursions: ['Visita aldeas Sasak (grupo)']
          },
          premium: {
            includes: ['Alojamiento hoteles boutique / Villas (4*) con desayuno gourmet', 'Traslados privados terrestres/marítimos (barco rápido privado a Gili)', 'Excursión privada a cascadas Lombok con guía', 'Tour privado playas sur Lombok con picnic', 'Equipo de snorkel de alta gama', 'Guía local privado en Lombok y Gili', 'Cena especial de despedida en la playa'],
            notIncludes: ['Vuelos internacionales e internos a Lombok', 'Almuerzos (excepto picnic especificado)', 'Seguro de viaje premium (a cotizar)', 'Propinas', 'Bebidas alcohólicas'],
            activities: ['Clases de surf privadas en Gerupuk (Lombok)', 'Paquete de buceo privado en Gili Trawangan (2 inmersiones)', 'Masaje relajante en villa/hotel'],
            excursions: ['Excursión privada y guiada a aldeas Sasak con taller artesanal', 'Ascenso al Volcán Rinjani (solo mirador, requiere buena forma física y preparación adicional, no cumbre)']
          }
        },
        includes: ['Alojamiento y desayuno', 'Traslados', 'Excursiones Lombok', 'Barco Gili', 'Snorkel'],
        itinerary: {
          standard: [
            { day: 1, title: 'Llegada a Lombok - Kuta', description: 'Traslado a Kuta, Lombok. Tarde libre.'},
            { day: 2, title: 'Lombok: Playas del Sur', description: 'Tour por Tanjung Aan, Mawun, Selong Belanak.'},
            { day: 3, title: 'Lombok: Cascadas y Cultura', description: 'Visita a Tiu Kelep y Sendang Gile. Aldea Sasak.'},
            { day: 4, title: 'Traslado a Gili Air', description: 'Barco a Gili Air. Tarde libre.'},
            { day: 5, title: 'Gili Air: Relax y Snorkel', description: 'Día de playa, snorkel desde la orilla.'},
            { day: 6, title: 'Excursión Gili Meno y Trawangan', description: 'Snorkel en los mejores puntos, Turtle Point.'},
            { day: 7, title: 'Gili Trawangan: Atardecer', description: 'Disfruta del ambiente de Gili T, famoso atardecer.'},
            { day: 8, title: 'Día Libre en Gili', description: 'Actividades opcionales: buceo, kayak, paddle surf.'},
            { day: 9, title: 'Regreso a Lombok - Senggigi', description: 'Barco a Lombok, traslado a Senggigi.'},
            { day: 10, title: 'Salida de Lombok', description: 'Traslado al aeropuerto.'},
          ],
          premium: [
            { day: 1, title: 'Llegada VIP a Lombok - Kuta Boutique', description: 'Traslado privado a hotel boutique en Kuta, Lombok. Bebida de bienvenida y check-in personalizado.'},
            { day: 2, title: 'Lombok Exclusivo: Playas del Sur con Picnic Gourmet', description: 'Tour privado por Tanjung Aan, Mawun, Selong Belanak con picnic gourmet en playa desierta.'},
            { day: 3, title: 'Lombok Mágico: Cascadas Privadas y Cultura Sasak Auténtica', description: 'Visita privada a Tiu Kelep y Sendang Gile. Interacción auténtica en aldea Sasak con guía local.'},
            { day: 4, title: 'Traslado de Lujo a Gili Air Villa', description: 'Barco rápido privado a Gili Air. Alojamiento en villa privada con piscina.'},
            { day: 5, title: 'Gili Air VIP: Relax, Snorkel Privado y Masaje', description: 'Mañana de relax. Tarde: snorkel privado guiado. Masaje en la villa.'},
            { day: 6, title: 'Crucero Privado por las Gili: Meno y Trawangan con Almuerzo a Bordo', description: 'Excursión en barco privado con snorkel en puntos secretos, Turtle Point. Almuerzo gourmet a bordo.'},
            { day: 7, title: 'Gili Trawangan: Atardecer VIP y Cena en la Playa', description: 'Disfruta del ambiente de Gili T. Atardecer desde mirador exclusivo. Cena romántica en la playa.'},
            { day: 8, title: 'Día de Ocio de Lujo en Gili', description: 'Actividades opcionales premium: buceo privado, paddle surf al amanecer, clase de cocina marina.'},
            { day: 9, title: 'Regreso a Lombok - Senggigi Resort & Spa', description: 'Barco rápido a Lombok, traslado privado a resort de lujo en Senggigi. Cena de despedida.'},
            { day: 10, title: 'Salida VIP de Lombok', description: 'Traslado privado al aeropuerto.'},
          ]
        },
        comparison: {
          priceStandard: "1.600€", priceIdStandard: "REEMPLAZAR_CON_TU_PRICE_ID_LIVE_ESTANDAR_LOMBOK",
          pricePremium: "2.300€", priceIdPremium: "REEMPLAZAR_CON_TU_PRICE_ID_LIVE_PREMIUM_LOMBOK",
          features: [
              { name: "Hoteles con encanto 3*", standard: true, premium: false }, { name: "Hoteles boutique / Villas 4*", standard: false, premium: true },
              { name: "Traslados y tours en grupo reducido", standard: true, premium: false }, { name: "Traslados y tours privados", standard: false, premium: true },
              { name: "Guía local (algunas excursiones)", standard: true, premium: false }, { name: "Guía local privado y dedicado", standard: false, premium: true },
              { name: "Equipo de snorkel básico", standard: true, premium: false }, { name: "Equipo de snorkel de alta gama y barco privado", standard: false, premium: true },
              { name: "Cena especial de despedida", standard: false, premium: true }
          ]
        }, destinationName: 'Indonesia'
      },
      baliSurfYoga8d: {
        id: 'bali-surf-yoga-8d', title: 'Bali: Surf y Yoga en Canggu', duration: '8 Días / 7 Noches', price: 'Desde 1.350€',
        heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
        shortDescription: 'Olas perfectas, clases de yoga revitalizantes y el ambiente bohemio de Canggu.',
        longDescription: 'Combina la emoción del surf en las famosas olas de Canggu con la serenidad del yoga. Este paquete es ideal para todos los niveles, desde principiantes hasta surfistas experimentados que buscan mejorar su técnica y conectar con su cuerpo y mente.',
        altImage: 'Persona practicando yoga en una terraza con vistas al mar en Bali',
        mapImage: "https://images.unsplash.com/photo-1551632811-55135385c7f2",
        galleryImages: ["https://images.unsplash.com/photo-1526499489_LONG_SURF_IMAGE","https://images.unsplash.com/photo-1598809615108-e36de33205b1","https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"],
        details: {
          standard: {
            includes: ['Alojamiento en surf camp (hab. compartida) / guesthouse con piscina', 'Desayunos saludables', 'Clases de surf diarias en grupo (tabla y licra incluidas)', 'Sesiones de yoga diarias en grupo', 'Análisis de video de surf (1 sesión grupal)', 'Traslados aeropuerto (compartido)'],
            notIncludes: ['Vuelos internacionales', 'Almuerzos y cenas', 'Seguro de viaje', 'Alquiler de moto', 'Bebidas'],
            activities: ['Visita a Tanah Lot al atardecer (transporte no incluido)', 'Explorar mercados locales en Canggu (por tu cuenta)'],
            excursions: ['Excursión de un día a Ubud (opcional, coste extra)', 'Viaje a Uluwatu para ver surf épico (opcional, coste extra)']
          },
          premium: {
            includes: ['Alojamiento en villa privada de lujo con piscina', 'Desayunos y almuerzos gourmet saludables', 'Clases de surf privadas diarias (tabla premium y licra personalizada)', 'Sesiones de yoga privadas diarias (en la villa o estudio exclusivo)', 'Análisis de video de surf personalizado y detallado (3 sesiones)', 'Traslados aeropuerto privados y vehículo con conductor disponible', '1 masaje deportivo/relajante', 'Fotografía profesional de surf (1 sesión)'],
            notIncludes: ['Vuelos internacionales', 'Cenas (recomendaciones y reservas VIP)', 'Seguro de viaje premium (a cotizar)', 'Bebidas alcohólicas'],
            activities: ['Visita privada a Tanah Lot al atardecer con guía y ofrendas', 'Tour guiado por los mejores cafés y tiendas de Canggu', 'Sesión de meditación sonora'],
            excursions: ['Excursión de un día a Ubud con guía privado y coche de lujo, almuerzo en restaurante top', 'Excursión de surf VIP a Uluwatu con acceso a zonas exclusivas y guía local experto']
          }
        },
        includes: ['Alojamiento', 'Desayunos', 'Clases Surf diarias', 'Sesiones Yoga diarias'],
        itinerary: {
          standard: [
            { day: 1, title: 'Llegada a Bali - Canggu', description: 'Traslado al alojamiento. Introducción y relax.'},
            { day: 2, title: 'Surf Matutino y Yoga al Atardecer', description: 'Primera clase de surf. Sesión de yoga restaurativo.'},
            { day: 3, title: 'Perfeccionando la Ola', description: 'Clase de surf enfocada en técnica. Tarde libre.'},
            { day: 4, title: 'Yoga y Exploración Local', description: 'Yoga Vinyasa por la mañana. Tarde para explorar Canggu.'},
            { day: 5, title: 'Surf Trip y Video Análisis', description: 'Excursión a un spot de surf cercano. Sesión de video análisis.'},
            { day: 6, title: 'Día de Descanso Activo', description: 'Yoga suave. Opcional: masaje, visita a Tanah Lot.'},
            { day: 7, title: 'Últimas Olas y Meditación', description: 'Última clase de surf. Sesión de yoga y meditación de despedida.'},
            { day: 8, title: 'Salida de Canggu', description: 'Desayuno. Traslado al aeropuerto.'},
          ],
          premium: [
            { day: 1, title: 'Llegada VIP a Canggu - Villa de Lujo', description: 'Traslado privado, check-in en villa de lujo. Sesión de bienvenida con instructor de surf y yoga.'},
            { day: 2, title: 'Surf Privado y Yoga Vinyasa Personalizado', description: 'Clase de surf privada en el mejor spot del día. Sesión de yoga Vinyasa adaptada a tus necesidades.'},
            { day: 3, title: 'Técnica de Surf Avanzada y Relajación Profunda', description: 'Clase de surf enfocada en maniobras y técnica avanzada. Tarde de masaje y relajación en la villa.'},
            { day: 4, title: 'Yoga al Amanecer y Cultura de Canggu', description: 'Yoga privado al amanecer en la playa. Tour guiado por los puntos culturales y gastronómicos de Canggu.'},
            { day: 5, title: 'Surf Safari VIP y Video Coaching Detallado', description: 'Excursión de surf a un spot secreto o menos concurrido. Sesión de video coaching intensiva y personalizada.'},
            { day: 6, title: 'Día de Bienestar Holístico', description: 'Yoga restaurativo, meditación sonora, almuerzo saludable detox. Tarde libre para piscina o playa.'},
            { day: 7, title: 'Última Sesión de Surf Épica y Despedida Consciente', description: 'Última clase de surf buscando las mejores olas. Sesión de yoga y meditación de cierre y agradecimiento. Cena de despedida.'},
            { day: 8, title: 'Salida de Lujo de Canggu', description: 'Desayuno gourmet. Traslado privado al aeropuerto.'},
          ]
        },
        comparison: {
          priceStandard: "1.350€", priceIdStandard: "REEMPLAZAR_CON_TU_PRICE_ID_LIVE_ESTANDAR_SURFYOGA",
          pricePremium: "1.950€", priceIdPremium: "REEMPLAZAR_CON_TU_PRICE_ID_LIVE_PREMIUM_SURFYOGA",
          features: [
              { name: "Habitación compartida en surf camp", standard: true, premium: false }, { name: "Habitación privada en villa de lujo", standard: false, premium: true },
              { name: "Clases grupales de surf/yoga", standard: true, premium: false }, { name: "Clases privadas de surf/yoga", standard: false, premium: true },
              { name: "1 masaje balinés (opcional)", standard: true, premium: false }, { name: "1 masaje deportivo/relajante incluido", standard: false, premium: true },
              { name: "Análisis video grupal", standard: true, premium: false }, { name: "Análisis video personalizado y fotografía profesional", standard: false, premium: true }
          ]
        }, destinationName: 'Indonesia'
      },
};

const indonesiaData = {
  id: 'indonesia',
  name: 'Indonesia',
  shortDescription: 'Sumérgete en la magia de Bali, explora las playas de Lombok y las paradisíacas Islas Gili.',
  longDescription: 'Indonesia, un archipiélago de ensueño, te espera con sus vibrantes culturas, paisajes volcánicos, arrozales esmeralda y algunas de las mejores olas del mundo. Desde la espiritualidad de Bali hasta la aventura en Nusa Penida y la serenidad de las Gili, cada isla ofrece una experiencia única e inolvidable.',
  heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
  altImage: 'Impresionantes terrazas de arrozales verdes en Bali bajo un cielo azul',
  basicInfo: {
    clima: "Tropical cálido y húmedo. Temporada seca: Mayo-Septiembre.",
    moneda: "Rupia Indonesia (IDR)",
    idioma: "Indonesio, Balinés, Inglés (turismo)"
  },
  galleryImages: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      "https://images.unsplash.com/photo-1555800325-f93e6346b825",
      "https://images.unsplash.com/photo-1572087884778-ce949f3906e0"
  ],
  packages: [
    indonesiaPackagesInfo.baliIslands12d,
    indonesiaPackagesInfo.ubudSpiritualAdventure,
    indonesiaPackagesInfo.lombokGiliEscape10d,
    indonesiaPackagesInfo.baliSurfYoga8d,
  ]
};

export default indonesiaData;
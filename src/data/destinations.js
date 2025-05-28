import indonesiaData from './destinations/indonesia';
    import icelandData from './destinations/iceland';
    import laplandData from './destinations/lapland';
    import scotlandData from './destinations/scotland';
    import maltaData from './destinations/malta';
    import balticsData from './destinations/baltics';

    const allDestinations = [
      indonesiaData,
      icelandData,
      laplandData,
      scotlandData,
      maltaData,
      balticsData,
    ];

    const generateGenericPackages = (destinationName, existingPackagesCount) => {
      const genericPackages = [];
      const requiredPackages = 4;
      const countToGenerate = requiredPackages - existingPackagesCount;

      if (countToGenerate <=0) return [];

      for (let i = 1; i <= countToGenerate; i++) {
        const packageNum = existingPackagesCount + i;
        genericPackages.push({
          id: `${destinationName.toLowerCase().replace(/\s+/g, '-')}-generic-pkg-${packageNum}`,
          title: `Aventura Genérica en ${destinationName} ${packageNum}`,
          duration: '5 Días / 4 Noches',
          price: 'Desde 800€',
          priceId: `price_1P8dummyId${destinationName.replace(/\s+/g, '')}${packageNum}`,
          heroImage: "https://images.unsplash.com/photo-1564522410098-3c138ba9a207?auto=format&fit=crop&w=1200&q=80",
          shortDescription: `Descubre lo mejor de ${destinationName} con este paquete personalizable.`,
          longDescription: `Este paquete genérico para ${destinationName} ofrece una base excelente para construir tu viaje soñado. Incluye alojamiento básico y traslados, con opciones para añadir excursiones y actividades según tus intereses. Explora ${destinationName} a tu ritmo.`,
          altImage: `Paisaje genérico de ${destinationName}`,
          mapImage: "https://images.unsplash.com/photo-1562590036-50385848995a",
          galleryImages: [
            "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=60"
          ],
          details: { // Generic details for standard package
            includes: ['Alojamiento básico con desayuno', 'Traslados aeropuerto', 'Itinerario sugerido'],
            notIncludes: ['Vuelos', 'Almuerzos/cenas', 'Excursiones opcionales', 'Seguro de viaje'],
            activities: ['Exploración libre', 'Posibilidad de añadir tours locales'],
            excursions: ['Consultar opciones disponibles']
          },
          includes: ['Alojamiento básico', 'Traslados aeropuerto', 'Itinerario sugerido'],
          itinerary: { // Generic itinerary for standard package
            standard: [
              { day: 1, title: `Llegada a ${destinationName}`, description: 'Traslado al hotel y tiempo libre.' },
              { day: 2, title: `Exploración de ${destinationName} (Zona 1)`, description: 'Visita los puntos de interés principales.' },
              { day: 3, title: `Día Libre o Excursión Opcional`, description: `Disfruta a tu ritmo o elige una actividad extra.` },
              { day: 4, title: `Exploración de ${destinationName} (Zona 2)`, description: 'Descubre otra faceta del destino.' },
              { day: 5, title: `Salida de ${destinationName}`, description: 'Desayuno y traslado al aeropuerto.' },
            ]
          },
          destinationName: destinationName,
        });
      }
      return genericPackages;
    };
    
    export const getDestinationsData = () => {
        return allDestinations.map(dest => {
            const existingPackagesCount = dest.packages ? dest.packages.length : 0;
            let genericPackages = [];
            if (dest.id !== 'indonesia') {
                 genericPackages = generateGenericPackages(dest.name, existingPackagesCount);
            }
            
            const combinedPackages = dest.packages ? [...dest.packages, ...genericPackages] : [...genericPackages];

            const processedPackages = combinedPackages.map(pkg => {
                // If not Indonesia and has comparison, remove comparison and set standard price
                if (dest.id !== 'indonesia' && pkg.comparison) {
                    const { comparison, ...restOfPackage } = pkg;
                    restOfPackage.priceId = comparison.priceIdStandard || pkg.priceId || `price_id_placeholder_std_${pkg.id}`;
                    restOfPackage.price = comparison.priceStandard || pkg.price;
                    // Ensure 'details' and 'itinerary' point to standard if they were split
                    if (pkg.details && pkg.details.standard) restOfPackage.details = pkg.details.standard;
                    if (pkg.itinerary && pkg.itinerary.standard) restOfPackage.itinerary = pkg.itinerary.standard;
                    return restOfPackage;
                }
                // Ensure priceId for all packages (even generic ones if not set properly)
                if (!pkg.priceId && pkg.comparison && pkg.comparison.priceIdStandard) {
                    pkg.priceId = pkg.comparison.priceIdStandard;
                } else if (!pkg.priceId) {
                    pkg.priceId = `price_id_placeholder_std_${pkg.id}`;
                }
                return pkg;
            });
            return { ...dest, packages: processedPackages };
        });
    };
    
    export const getDestinationById = (id) => {
      const destinations = getDestinationsData();
      return destinations.find(dest => dest.id === id);
    };

    export const getPackageDetails = (destinationId, packageId, packageType = 'standard') => {
      const destination = getDestinationById(destinationId);
      if (!destination || !destination.packages) return null;
      
      let pkg = JSON.parse(JSON.stringify(destination.packages.find(p => p.id === packageId))); // Deep copy
      
      if (pkg) {
        // If it's an Indonesian package and has comparison data, select details/itinerary based on packageType
        if (destinationId === 'indonesia' && pkg.comparison) {
          pkg.details = pkg.details?.[packageType] || pkg.details?.standard || { includes: [], notIncludes: [], activities: [], excursions: [] };
          pkg.itinerary = pkg.itinerary?.[packageType] || pkg.itinerary?.standard || [];
        } else {
          // For non-Indonesian packages or Indonesian packages without comparison, ensure details and itinerary exist
          // And if they were structured with standard/premium, default to standard
          if (pkg.details && pkg.details.standard) {
            pkg.details = pkg.details.standard;
          } else if (!pkg.details) {
            pkg.details = { includes: [], notIncludes: [], activities: [], excursions: [] };
          }

          if (pkg.itinerary && pkg.itinerary.standard) {
            pkg.itinerary = pkg.itinerary.standard;
          } else if (!pkg.itinerary || Array.isArray(pkg.itinerary) === false) { // Check if itinerary is not an array (i.e. it was an object with std/prm)
            pkg.itinerary = [];
          }
        }

        // Generic fallbacks
        if (!pkg.includes && pkg.details && pkg.details.includes) {
           pkg.includes = pkg.details.includes.slice(0,5); 
        } else if (!pkg.includes) {
          pkg.includes = [];
        }
        if (!pkg.galleryImages) {
          pkg.galleryImages = [];
        }

        // Price ID handling
        if (destinationId === 'indonesia' && pkg.comparison) {
          if (packageType === 'premium' && pkg.comparison.priceIdPremium) {
            pkg.priceId = pkg.comparison.priceIdPremium;
            pkg.price = pkg.comparison.pricePremium;
          } else {
            pkg.priceId = pkg.comparison.priceIdStandard;
            pkg.price = pkg.comparison.priceStandard;
          }
        } else if (!pkg.priceId) { // Fallback for non-Indonesian or those without comparison
          pkg.priceId = `price_id_placeholder_std_${pkg.id}`;
        }
      }
      return pkg;
    };
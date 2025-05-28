import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { ArrowRight, ChevronDown, ChevronUp, Thermometer, Coins, Languages } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { getDestinationsData } from '@/data/destinations'; 

    const FeaturedDestinations = () => {
      const [expandedDest, setExpandedDest] = useState(null);
      const destinations = getDestinationsData();
      const featured = destinations.slice(0, 3); 

      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: "easeOut"
          }
        })
      };
      
      const expandedSectionVariants = {
        collapsed: { opacity: 0, height: 0, marginTop: 0 },
        expanded: { opacity: 1, height: "auto", marginTop: "1rem",
          transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }
        }
      };

      const toggleExpand = (id) => {
        setExpandedDest(expandedDest === id ? null : id);
      };

      return (
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Destinos <span className="text-primary">Destacados</span></h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explora nuestras colecciones de viajes cuidadosamente seleccionadas para ofrecerte experiencias únicas e inolvidables.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((dest, index) => (
                <motion.custom
                  key={dest.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col" 
                >
                  <Card className="w-full flex flex-col overflow-hidden shadow-2xl hover:shadow-primary/30 transition-shadow duration-300 transform hover:-translate-y-1 glassmorphism">
                    <div className="relative h-60 group">
                      <img  
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        alt={dest.altImage || `Paisaje de ${dest.name}`}
                        src={dest.heroImage || "https://images.unsplash.com/photo-1694388001616-1176f534d72f"} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">{dest.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-4 line-clamp-3">{dest.shortDescription}</p>
                    </CardContent>
                    <CardFooter className="mt-auto flex-col items-stretch"> 
                      <Button 
                        onClick={() => toggleExpand(dest.id)} 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-2"
                      >
                        {expandedDest === dest.id ? "Cerrar Detalles" : "Ver Más Detalles"} 
                        {expandedDest === dest.id ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                      </Button>
                       <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                         <Link to={`/destinos/${dest.id}`}>
                           Ver Paquetes <ArrowRight className="ml-2 h-4 w-4" />
                         </Link>
                       </Button>
                    </CardFooter>
                  </Card>
                  
                  <AnimatePresence>
                    {expandedDest === dest.id && (
                      <motion.div
                        key={`expanded-${dest.id}`}
                        variants={expandedSectionVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        className="bg-card/70 p-6 rounded-b-lg shadow-lg glassmorphism border border-t-0 border-primary/20" 
                      >
                        <h3 className="text-xl font-semibold text-primary mb-3">Sobre {dest.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{dest.longDescription.substring(0,150)}...</p>
                        
                        {dest.galleryImages && dest.galleryImages.length > 0 && (
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                {dest.galleryImages.slice(0,3).map((img, idx) => (
                                    <img key={idx} src={img} alt={`${dest.name} ${idx+1}`} className="rounded-md aspect-square object-cover hover:opacity-80 transition-opacity"/>
                                ))}
                            </div>
                        )}

                        {dest.basicInfo && (
                          <div className="space-y-2 text-sm">
                            <p className="flex items-center"><Thermometer className="w-4 h-4 mr-2 text-secondary"/> <strong>Clima:</strong> {dest.basicInfo.clima}</p>
                            <p className="flex items-center"><Coins className="w-4 h-4 mr-2 text-secondary"/> <strong>Moneda:</strong> {dest.basicInfo.moneda}</p>
                            <p className="flex items-center"><Languages className="w-4 h-4 mr-2 text-secondary"/> <strong>Idioma:</strong> {dest.basicInfo.idioma}</p>
                          </div>
                        )}
                        <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                         <Link to={`/destinos/${dest.id}`}>
                           Ver todos los paquetes para {dest.name}
                         </Link>
                       </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.custom>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: featured.length * 0.15 + 0.5 }}
              className="text-center mt-16"
            >
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/destinos">Ver Todos los Destinos</Link>
              </Button>
            </motion.div>
          </div>
           <style jsx global>{`
            .line-clamp-3 {
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
            }
          `}</style>
        </section>
      );
    };

    export default FeaturedDestinations;
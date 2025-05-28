import React, { useState } from 'react';
    import { useParams, Link, useNavigate } from 'react-router-dom';
    import { motion, AnimatePresence } from 'framer-motion';
    import { getDestinationById } from '@/data/destinations';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { ArrowRight, MapPin, CalendarDays, ChevronLeft, MessageCircle, Thermometer, Coins, Languages, ChevronDown, ChevronUp } from 'lucide-react';
    import NotFoundPage from '@/pages/NotFoundPage';

    const DestinationDetailPage = ({ whatsappNumber }) => {
      const { destinationId } = useParams();
      const navigate = useNavigate();
      const destination = getDestinationById(destinationId);
      const [showBasicInfo, setShowBasicInfo] = useState(false);

      if (!destination) {
        return <NotFoundPage />;
      }
      
      const defaultWhatsappMessage = `Hola Christian, estoy interesado/a en viajar a ${destination.name} y me gustaría más información.`;
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: 'easeOut',
          },
        },
      };
      
      const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: (i) => ({
          opacity: 1,
          scale: 1,
          transition: {
            delay: i * 0.15 + 0.5,
            duration: 0.5,
            ease: "easeOut"
          }
        })
      };
      
      const infoSectionVariants = {
        collapsed: { opacity: 0, height: 0, marginTop: 0 },
        expanded: { opacity: 1, height: "auto", marginTop: "1rem",
          transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }
        }
      };

      return (
        <motion.div
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          variants={containerVariants}
          className="py-10"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Button variant="outline" onClick={() => navigate('/destinos')} className="mb-6 group">
              <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Volver a Destinos
            </Button>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                className="absolute inset-0 w-full h-full object-cover"
                alt={destination.altImage || `Paisaje principal de ${destination.name}`}
                src={destination.heroImage || "https://images.unsplash.com/photo-1492714284113-6e74f3a3d95c"} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
                <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold font-heading text-white shadow-text leading-tight">
                  {destination.name}
                </motion.h1>
                <motion.p variants={itemVariants} transition={{delay:0.1}} className="text-xl text-gray-200 mt-2 shadow-text-sm max-w-3xl">
                  {destination.longDescription}
                </motion.p>
              </div>
            </div>
          </motion.div>
          
          {destination.basicInfo && (
             <motion.div variants={itemVariants} className="my-8">
                <Button 
                    variant="outline" 
                    onClick={() => setShowBasicInfo(!showBasicInfo)} 
                    className="w-full md:w-auto text-lg py-3 mb-2"
                >
                    Información Básica de {destination.name}
                    {showBasicInfo ? <ChevronUp className="ml-2 h-5 w-5"/> : <ChevronDown className="ml-2 h-5 w-5"/>}
                </Button>
                <AnimatePresence>
                {showBasicInfo && (
                    <motion.div
                        variants={infoSectionVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        className="bg-card/70 p-6 rounded-lg shadow-md glassmorphism border border-primary/20"
                    >
                        <div className="grid md:grid-cols-3 gap-4 text-muted-foreground">
                            <p className="flex items-start"><Thermometer className="w-5 h-5 mr-2 mt-0.5 text-secondary flex-shrink-0"/> <div><strong>Clima:</strong> {destination.basicInfo.clima}</div></p>
                            <p className="flex items-start"><Coins className="w-5 h-5 mr-2 mt-0.5 text-secondary flex-shrink-0"/> <div><strong>Moneda:</strong> {destination.basicInfo.moneda}</div></p>
                            <p className="flex items-start"><Languages className="w-5 h-5 mr-2 mt-0.5 text-secondary flex-shrink-0"/> <div><strong>Idioma:</strong> {destination.basicInfo.idioma}</div></p>
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </motion.div>
          )}


          <motion.div variants={itemVariants} className="text-center my-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">Paquetes Disponibles en <span className="text-primary">{destination.name}</span></h2>
            <p className="text-lg text-muted-foreground">Elige la aventura que más se adapte a ti.</p>
          </motion.div>
          
          {destination.packages && destination.packages.length > 0 ? (
            <motion.div 
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {destination.packages.map((pkg, index) => (
                <motion.custom 
                  key={pkg.id} 
                  custom={index}
                  variants={cardVariants} 
                  className="flex"
                >
                  <Card className="w-full flex flex-col overflow-hidden shadow-xl hover:shadow-primary/30 transition-shadow duration-300 transform hover:-translate-y-1 glassmorphism">
                    <div className="relative h-60 group">
                      <img 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        alt={pkg.altImage || `Imagen del paquete ${pkg.title}`}
                        src={pkg.heroImage || "https://images.unsplash.com/photo-1530918606788-761271c97ff3"} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-sm text-white bg-secondary/80 px-2 py-1 rounded-full inline-block backdrop-blur-sm">
                          <CalendarDays className="inline-block mr-1.5 h-4 w-4" /> {pkg.duration}
                        </p>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">{pkg.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-4 line-clamp-3">{pkg.shortDescription}</p>
                    </CardContent>
                    <CardFooter className="mt-auto flex flex-col space-y-2 items-stretch">
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link to={`/destinos/${destinationId}/${pkg.id}`}>
                          Ver Paquete <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      {whatsappNumber && whatsappNumber !== "TU_NUMERO_DE_WHATSAPP_AQUI" && (
                        <Button variant="outline" className="w-full bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600" asChild>
                           <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Christian, me interesa el paquete "${pkg.title}" en ${destination.name}.`)}`} target="_blank" rel="noopener noreferrer">
                            Reservar por WhatsApp <MessageCircle className="ml-2 h-4 w-4"/>
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.custom>
              ))}
            </motion.div>
          ) : (
            <motion.div variants={itemVariants} className="text-center text-xl text-muted-foreground py-10">
              <p className="mb-4">Actualmente no hay paquetes específicos para {destination.name}.</p>
              {whatsappNumber && whatsappNumber !== "TU_NUMERO_DE_WHATSAPP_AQUI" && (
                 <Button variant="secondary" size="lg" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5"/> Consulta por WhatsApp
                    </a>
                  </Button>
              )}
              <p className="mt-4 text-sm">¡Podemos crear un viaje a medida para ti!</p>
            </motion.div>
          )}
          <style jsx global>{`
            .shadow-text {
              text-shadow: 2px 2px 6px rgba(0,0,0,0.8);
            }
            .shadow-text-sm {
              text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
            }
            .line-clamp-3 {
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
            }
          `}</style>
        </motion.div>
      );
    };

    export default DestinationDetailPage;
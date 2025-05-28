import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { ArrowRight } from 'lucide-react';
    import { getDestinationsData } from '@/data/destinations';

    const DestinationsPage = () => {
      const destinations = getDestinationsData();

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        },
      };

      return (
        <motion.div
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          variants={containerVariants}
          className="container mx-auto px-4 py-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Nuestros <span className="text-primary">Destinos</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora los lugares más increíbles del planeta con nosotros. Cada destino es una puerta a nuevas aventuras y descubrimientos.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.map((destination) => (
              <motion.div key={destination.id} variants={itemVariants} className="flex">
                <Card className="w-full flex flex-col overflow-hidden shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1.5 glassmorphism">
                  <div className="relative h-72 group">
                    <img  
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={destination.altImage || `Paisaje de ${destination.name}`}
                      src={destination.heroImage || "https://images.unsplash.com/photo-1693494163279-06819db787fe"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                       <h2 className="text-3xl font-bold text-white shadow-text">{destination.name}</h2>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">{destination.shortDescription}</p>
                    <Link
                      to={`/destinos/${destination.id}`}
                      className="inline-flex items-center justify-center w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-semibold transition-colors duration-300"
                    >
                      Explorar {destination.name} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <style jsx global>{`
            .shadow-text {
              text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
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

    export default DestinationsPage;
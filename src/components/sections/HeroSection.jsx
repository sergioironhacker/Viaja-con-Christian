import React from 'react';
    import { Button } from '@/components/ui/button';
    import { ArrowRight, PlayCircle } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';

    const HeroSection = () => {
      return (
        <section className="relative h-[calc(100vh-5rem)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              poster="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80" 
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beach-with-turqouise-water-2340-large.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 p-6 max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight shadow-text">
              Viaja Donde Siempre Has <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Soñado</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-200 shadow-text-sm">
              Creamos experiencias que transforman. Descubre destinos que inspiran el alma y despiertan al explorador que llevas dentro.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Link to="/destinos">
                  Descubre Nuestros Destinos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* Placeholder para funcionalidad de video */}
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-background shadow-lg transform hover:scale-105 transition-transform duration-300">
                Ver Video Introductorio <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="mt-12"
            >
              <Button variant="secondary" size="lg" asChild className="shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Link to="/viaje-a-medida">
                  Crea Tu Viaje Personalizado
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <style jsx global>{`
            .shadow-text {
              text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
            }
            .shadow-text-sm {
              text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
            }
          `}</style>
        </section>
      );
    };

    export default HeroSection;
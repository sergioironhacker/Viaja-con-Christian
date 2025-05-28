import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { MapPin } from 'lucide-react';

    const PackageMap = ({ pkg }) => {
      const sectionVariants = {
        hidden: { opacity: 0, y:15 },
        visible: { opacity: 1, y:0, transition: { delay: 0.2, duration: 0.5, ease: "easeOut" } }
      };
      
      return (
        <motion.section variants={sectionVariants} className="mt-8 md:mt-12">
           <Card className="glassmorphism">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl flex items-center"><MapPin className="mr-2 md:mr-3 text-primary h-6 w-6 md:h-7 md:w-7"/> Mapa Interactivo del Recorrido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative">
                <img 
                  className="w-full h-full object-cover rounded-lg opacity-70"
                  alt={`Mapa del recorrido para ${pkg.title}`}
                  src={pkg.mapImage || "https://images.unsplash.com/photo-1494804265872-476520fd1a21"} />
                 <p className="absolute text-base md:text-xl text-foreground bg-background/70 px-3 py-1.5 md:px-4 md:py-2 rounded">Mapa interactivo próximamente</p>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      );
    };

    export default PackageMap;
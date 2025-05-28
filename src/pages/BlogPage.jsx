import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { PenTool, Compass, Sparkles } from 'lucide-react';

    const BlogPage = () => {
      const blogIntroText = "ViajaconChristian nace con un objetivo claro: ayudarte a descubrir el mundo de forma auténtica, sin estrés y aprovechando cada minuto del viaje.\n\nAquí encontrarás guías completas, itinerarios diseñados a medida y packs de planificación adaptados a tu estilo de viaje. Desde opciones básicas para los más independientes, hasta un Pack Premium en el que te acompaño personalmente durante tu aventura, para que solo te preocupes de disfrutar.\n\nCada ruta, cada consejo y cada destino ha sido probado por mí, con la experiencia de quien ha recorrido el camino antes.\n\nElige tu guía y empieza tu próxima aventura. Yo me encargo del resto.";

      const paragraphs = blogIntroText.split('\n\n');

      const pageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      };

      return (
        <motion.div 
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={pageVariants}
          className="container mx-auto px-4 py-10 md:py-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Blog de ViajaConChristian</h1>
            <p className="text-lg md:text-xl text-muted-foreground">Inspiración, Guías y Consejos para el Viajero Auténtico</p>
          </motion.div>

          <motion.div variants={itemVariants} transition={{delay: 0.2}}>
            <Card className="shadow-xl glassmorphism border-primary/30 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-primary to-secondary p-6 md:p-8 text-primary-foreground">
                <div className="flex items-center mb-3">
                  <Compass className="h-10 w-10 md:h-12 md:w-12 mr-4" />
                  <div>
                    <CardTitle className="text-2xl md:text-3xl font-bold">Tu Aventura Comienza Aquí</CardTitle>
                    <p className="text-sm md:text-base opacity-90">Un mensaje de Christian</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-4 md:space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <div className="flex justify-center pt-4">
                  <Sparkles className="h-8 w-8 text-secondary animate-pulse" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
          

          <motion.div 
            variants={itemVariants} 
            transition={{delay: 0.4}} 
            className="mt-12 md:mt-16 p-6 md:p-8 bg-card/50 rounded-lg shadow-lg text-center glassmorphism border border-primary/20"
          >
            <PenTool className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-semibold font-heading mb-3">Próximamente...</h2>
            <p className="text-md md:text-lg text-muted-foreground">
              Artículos fascinantes, guías detalladas y consejos de experto directamente desde mis viajes. 
              ¡Mantente atento para descubrir nuevos destinos e inspirarte para tu próxima gran aventura!
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 opacity-70">
              <div className="h-40 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Artículo Futuro 1</p>
              </div>
              <div className="h-40 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Guía de Destino</p>
              </div>
              <div className="h-40 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Consejos de Viaje</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      );
    };

    export default BlogPage;
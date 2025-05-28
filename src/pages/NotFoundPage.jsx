import React from 'react';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { AlertTriangle } from 'lucide-react';

    const NotFoundPage = () => {
      return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center text-center py-20 min-h-[calc(100vh-10rem)]"
        >
          <AlertTriangle className="w-24 h-24 text-destructive mb-8" />
          <h1 className="text-6xl font-bold font-heading text-destructive mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">¡Ups! Página No Encontrada</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-md">
            Parece que te has perdido en el camino. La página que buscas no existe o ha sido movida.
          </p>
          <Button asChild size="lg">
            <Link to="/">Volver al Inicio</Link>
          </Button>
        </motion.div>
      );
    };

    export default NotFoundPage;
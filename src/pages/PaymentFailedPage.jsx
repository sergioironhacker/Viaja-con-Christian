
import React from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { XCircle, ArrowLeft, RefreshCw } from 'lucide-react';

    const PaymentFailedPage = () => {
      const location = useLocation();
      // Intentar recuperar los datos del checkout para volver a intentarlo
      const checkoutState = location.state?.checkoutData;

      const pageVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };
      
      const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } }
      };

      return (
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 py-12 md:py-20 text-center flex flex-col items-center min-h-[calc(100vh-200px)] justify-center"
        >
          <motion.div variants={itemVariants}>
            <XCircle className="mx-auto h-20 w-20 md:h-28 md:w-28 text-destructive mb-6 md:mb-8" />
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-destructive mb-4 md:mb-6">
            Pago Fallido o Cancelado
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-lg md:max-w-xl mx-auto">
            Lo sentimos, parece que hubo un problema con tu pago o la transacción fue cancelada.
            Por favor, inténtalo de nuevo o contacta con nosotros si el problema persiste.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              asChild={!!checkoutState} // Solo es Link si tenemos datos para reintentar
              onClick={!checkoutState ? () => window.history.back() : undefined} // Volver atrás si no hay datos
              className="w-full sm:w-auto text-sm md:text-base"
            >
              {checkoutState ? (
                <Link to="/checkout" state={checkoutState}>
                  <RefreshCw className="mr-2 h-4 w-4" /> Intentar de Nuevo
                </Link>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" /> Intentar de Nuevo
                </>
              )}
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto text-sm md:text-base">
              <Link to="/destinos">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Destinos
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      );
    };

    export default PaymentFailedPage;

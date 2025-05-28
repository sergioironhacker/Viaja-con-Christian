
import React, { useEffect, useState } from 'react';
    import { Link, useSearchParams, useLocation } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { CheckCircle, Home, FileText } from 'lucide-react';

    const PaymentSuccessPage = () => {
      const [searchParams] = useSearchParams();
      const location = useLocation();
      const sessionId = searchParams.get('session_id');
      const [bookingDetails, setBookingDetails] = useState(null);

      useEffect(() => {
        // Intenta recuperar los datos de pre-reserva pasados a través del estado de la navegación
        // o desde localStorage como fallback (aunque es mejor evitar localStorage para datos sensibles post-pago)
        if (location.state?.preBookingData) {
          setBookingDetails(location.state.preBookingData);
        } else {
          const storedData = localStorage.getItem('preBookingDataForSuccess');
          if (storedData) {
            setBookingDetails(JSON.parse(storedData));
            localStorage.removeItem('preBookingDataForSuccess'); // Limpiar después de usar
          }
        }
        
        // En una aplicación real, aquí se recuperaría la información de la sesión de Stripe desde un backend
        // para verificar el pago y obtener detalles confirmados.
        // Por ahora, solo mostramos el ID de sesión si existe.
        if (sessionId) {
          console.log("Stripe Checkout Session ID (Pago Exitoso):", sessionId);
        }

      }, [sessionId, location.state]);

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
            <CheckCircle className="mx-auto h-20 w-20 md:h-28 md:w-28 text-green-500 mb-6 md:mb-8" />
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-primary mb-4 md:mb-6">
            ¡Pago Realizado con Éxito!
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-lg md:max-w-xl mx-auto">
            Gracias por tu reserva. Hemos recibido tu pago y tu aventura está confirmada.
            Pronto recibirás un email con los detalles de tu viaje.
          </motion.p>

          {bookingDetails && (
            <motion.div 
              variants={itemVariants} 
              className="bg-card/50 p-4 md:p-6 rounded-lg shadow-lg text-left max-w-md w-full mb-8 md:mb-10 border glassmorphism"
            >
              <h2 className="text-xl font-semibold text-primary mb-3">Resumen de tu reserva:</h2>
              <p className="text-sm text-muted-foreground"><strong>Nombre:</strong> {bookingDetails.fullName}</p>
              <p className="text-sm text-muted-foreground"><strong>Email:</strong> {bookingDetails.email}</p>
              {bookingDetails.whatsapp && <p className="text-sm text-muted-foreground"><strong>WhatsApp:</strong> {bookingDetails.whatsapp}</p>}
              {bookingDetails.estimatedDate && <p className="text-sm text-muted-foreground"><strong>Fecha Estimada:</strong> {bookingDetails.estimatedDate}</p>}
              {bookingDetails.packageTitle && <p className="text-sm text-muted-foreground"><strong>Paquete:</strong> {bookingDetails.packageTitle} ({bookingDetails.packageType})</p>}
              {bookingDetails.price && <p className="text-sm text-muted-foreground"><strong>Precio:</strong> {bookingDetails.price}</p>}
              {sessionId && <p className="text-xs text-muted-foreground mt-2">ID de Transacción: {sessionId.substring(0,20)}...</p>}
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button size="lg" asChild className="w-full sm:w-auto text-sm md:text-base">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" /> Volver al Inicio
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto text-sm md:text-base">
               <Link to="/destinos">
                <FileText className="mr-2 h-4 w-4" /> Explorar más viajes
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      );
    };

    export default PaymentSuccessPage;

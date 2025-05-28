
import React, { useEffect, useState } from 'react';
    import { useLocation, useNavigate, Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { AlertCircle, ArrowLeft, CreditCard, Loader2, ShoppingCart } from 'lucide-react';
    import { loadStripe } from '@stripe/stripe-js';
    import { useToast } from "@/components/ui/use-toast";

    const CheckoutPage = ({ stripePublishableKey }) => {
      const location = useLocation();
      const navigate = useNavigate();
      const { toast } = useToast();
      const [stripePromise, setStripePromise] = useState(null);
      const [loading, setLoading] = useState(false);

      const { packageTitle, packageType, price, priceId, preBookingData } = location.state || {};

      useEffect(() => {
        if (stripePublishableKey && stripePublishableKey.startsWith("pk_live_")) {
          setStripePromise(loadStripe(stripePublishableKey));
        } else {
           console.error("Error Crítico: La clave publicable de Stripe NO es una clave LIVE válida (debe empezar con pk_live_). El pago en producción no funcionará.");
           toast({
            variant: "destructive",
            title: "Error de Configuración de Stripe (Producción)",
            description: "La clave publicable de Stripe no es válida para el modo de producción. Por favor, verifica la configuración.",
            duration: 10000,
          });
        }
      }, [stripePublishableKey, toast]);

      const handleCheckout = async () => {
        if (!stripePromise) {
          toast({
            variant: "destructive",
            title: "Error de configuración de Stripe",
            description: "Stripe no se ha inicializado correctamente. Verifica la clave publicable.",
          });
          setLoading(false);
          return;
        }
        // Validar que el priceId sea uno real de producción y no un placeholder
        if (!priceId || priceId.includes("REEMPLAZAR_CON_TU_PRICE_ID") || !priceId.startsWith("price_")) {
           toast({
            variant: "destructive",
            title: "Error de Producto No Configurado",
            description: "El ID de precio para este paquete no es válido o no ha sido configurado para producción. Por favor, actualiza los IDs de precio en los archivos de datos.",
            duration: 10000,
          });
          setLoading(false);
          return;
        }

        setLoading(true);
        try {
          const stripe = await stripePromise;
          // Asegurarse de que las URLs son absolutas y usan el origen actual para producción
          const success_url = `${window.location.origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`;
          const cancel_url = `${window.location.origin}/payment-failed`;

          const { error } = await stripe.redirectToCheckout({
            lineItems: [{ price: priceId, quantity: 1 }],
            mode: 'payment',
            successUrl: success_url,
            cancelUrl: cancel_url,
            customerEmail: preBookingData?.email || undefined, // Stripe recomienda pasar email si está disponible
            clientReferenceId: preBookingData ? `booking-${preBookingData.fullName?.replace(/\s+/g, '-')}-${Date.now()}` : `booking-unknown-${Date.now()}`,
            // billingAddressCollection: 'required', // Opcional: si quieres recolectar dirección de facturación
            // shippingAddressCollection: { // Opcional: si vendes bienes físicos
            //   allowedCountries: ['ES', 'US'], 
            // },
          });

          if (error) {
            console.error("Error de Stripe al redirigir:", error);
            toast({
              variant: "destructive",
              title: "Error en el pago con Stripe",
              description: error.message || "Hubo un problema al redirigir a la pasarela de pago de Stripe.",
            });
            setLoading(false);
          }
          // No se llega aquí si redirectToCheckout tiene éxito, ya que redirige la página.
        } catch (error) {
          console.error("Error inesperado al procesar el checkout:", error);
           toast({
            variant: "destructive",
            title: "Error Inesperado",
            description: "Ocurrió un error al intentar procesar el pago. Por favor, inténtalo de nuevo.",
          });
          setLoading(false);
        }
      };

      const pageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      };

      if (!packageTitle || !price || !location.state) { // location.state asegura que venimos con datos
        return (
          <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4 py-16 text-center"
          >
            <AlertCircle className="mx-auto h-16 w-16 text-destructive mb-6" />
            <h1 className="text-3xl font-bold mb-4">Error en el Checkout</h1>
            <p className="text-muted-foreground mb-6">No se ha seleccionado ningún paquete o faltan datos para el pago.</p>
            <Button asChild>
              <Link to="/destinos">
                <ArrowLeft className="mr-2 h-5 w-5" /> Volver a Destinos
              </Link>
            </Button>
          </motion.div>
        );
      }
      
      const isStripeKeyLive = stripePublishableKey && stripePublishableKey.startsWith("pk_live_");
      const isPriceIdValidForLive = priceId && !priceId.includes("REEMPLAZAR_CON_TU_PRICE_ID") && priceId.startsWith("price_");
      const isStripeFullyConfiguredForLive = isStripeKeyLive && isPriceIdValidForLive;

      return (
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="container mx-auto px-4 py-10 md:py-16"
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <ShoppingCart className="h-10 w-10 md:h-12 md:w-12 text-primary mr-3 md:mr-4" />
              <h1 className="text-3xl md:text-4xl font-bold font-heading">Confirmar y Pagar</h1>
            </div>

            <Card className="shadow-xl glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary">{packageTitle}</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Paquete: <span className="font-semibold text-secondary">{packageType === 'standard' ? 'Estándar' : 'Premium'}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {preBookingData && (
                  <div className="text-sm border p-3 rounded-md bg-background/30">
                    <h3 className="font-semibold mb-1.5 text-md">Datos de tu reserva:</h3>
                    <p><strong>Nombre:</strong> {preBookingData.fullName}</p>
                    <p><strong>Email:</strong> {preBookingData.email}</p>
                    <p><strong>WhatsApp:</strong> {preBookingData.whatsapp}</p>
                    <p><strong>Fecha estimada:</strong> {preBookingData.estimatedDate}</p>
                    {preBookingData.comments && <p><strong>Comentarios:</strong> {preBookingData.comments}</p>}
                  </div>
                )}

                <div className="text-center py-4 border-t border-b">
                  <p className="text-lg text-muted-foreground">Total a pagar:</p>
                  <p className="text-3xl md:text-4xl font-bold text-primary">{price}</p>
                </div>
                
                {!isStripeFullyConfiguredForLive && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-md text-sm">
                    <p className="font-bold">¡Atención! Configuración de Pago Incompleta para Producción</p>
                    {!isStripeKeyLive && <p>La Clave Publicable de Stripe NO es una clave LIVE válida. Debe empezar con 'pk_live_'.</p>}
                    {!isPriceIdValidForLive && <p>El ID de Precio para este paquete no está configurado correctamente para producción (debe ser un 'price_...' real y no un placeholder).</p>}
                    <p>Por favor, revisa la configuración y los datos de los paquetes para habilitar los pagos.</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4 pt-2">
                  <Button variant="outline" size="lg" onClick={() => navigate(-1)} className="w-full sm:w-auto text-sm md:text-base">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Modificar Reserva
                  </Button>
                  <Button 
                    size="lg" 
                    onClick={handleCheckout} 
                    disabled={loading || !isStripeFullyConfiguredForLive} 
                    className="w-full sm:w-auto text-sm md:text-base"
                  >
                    {loading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <CreditCard className="mr-2 h-4 w-4" />
                    )}
                    {loading ? 'Procesando...' : 'Pagar con Stripe'}
                  </Button>
                </div>
                 <p className="text-xs text-muted-foreground text-center pt-2">Serás redirigido a la plataforma segura de Stripe para completar el pago.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      );
    };

    export default CheckoutPage;

import React, { useState, useEffect } from 'react';
    import { useParams, Link, useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { getPackageDetails } from '@/data/destinations';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { ChevronLeft, MessageCircle, Star, ShieldCheck } from 'lucide-react';
    import NotFoundPage from '@/pages/NotFoundPage';
    import PackageHeader from '@/components/packages/PackageHeader';
    import PackageDetailsAccordion from '@/components/packages/PackageDetailsAccordion';
    import PackageGallery from '@/components/packages/PackageGallery';
    import PackageComparisonTable from '@/components/packages/PackageComparisonTable';
    import PackageBookingCard from '@/components/packages/PackageBookingCard';
    import PackageMap from '@/components/packages/PackageMap';
    import { useToast } from "@/components/ui/use-toast";

    const PackageDetailPage = ({ whatsappNumber, stripePublishableKey }) => {
      const { destinationId, packageId } = useParams();
      const navigate = useNavigate();
      const { toast } = useToast();
      
      const [initialPkgData, setInitialPkgData] = useState(null);
      const [currentDisplayPkg, setCurrentDisplayPkg] = useState(null);
      const [selectedPackageType, setSelectedPackageType] = useState('standard');
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const rawPackageData = getPackageDetails(destinationId, packageId, 'standard'); 
        setInitialPkgData(rawPackageData);

        if (rawPackageData) {
            if (destinationId === 'indonesia' && rawPackageData.comparison) {
                setCurrentDisplayPkg(getPackageDetails(destinationId, packageId, 'standard'));
                setSelectedPackageType('standard');
            } else {
                setCurrentDisplayPkg(rawPackageData); 
                setSelectedPackageType('standard');
            }
        }
        setLoading(false);
      }, [destinationId, packageId]);

      useEffect(() => {
        if (destinationId === 'indonesia' && initialPkgData && initialPkgData.comparison) {
            setCurrentDisplayPkg(getPackageDetails(destinationId, packageId, selectedPackageType));
        }
      }, [selectedPackageType, initialPkgData, destinationId, packageId]);


      if (loading) {
        return <div className="container mx-auto px-4 py-10 text-center text-lg font-semibold">Cargando detalles del paquete...</div>;
      }

      if (!currentDisplayPkg) {
        return <NotFoundPage />;
      }
      
      let currentPriceDetails;
      if (destinationId === 'indonesia' && initialPkgData && initialPkgData.comparison) {
        currentPriceDetails = selectedPackageType === 'standard' 
          ? { price: initialPkgData.comparison.priceStandard, id: initialPkgData.comparison.priceIdStandard }
          : { price: initialPkgData.comparison.pricePremium, id: initialPkgData.comparison.priceIdPremium };
      } else {
        currentPriceDetails = { price: currentDisplayPkg.price, id: currentDisplayPkg.priceId };
      }

      const handleProceedToCheckout = (packageTypeForCheckout, price, preBookingData) => {
        const isStripeKeyPlaceholder = stripePublishableKey === "TU_STRIPE_PUBLISHABLE_KEY_AQUI" || stripePublishableKey === "pk_test_51P7ylRRxH9qL1gxtx0gL7Tf8x0o8qY9f3Z2wXqY8f0o8qY9f3Z2wXqY8f0o8qY9f3Z2wXqY8";
        if (!stripePublishableKey || isStripeKeyPlaceholder) {
           toast({
            variant: "destructive",
            title: "Configuración de Stripe Incompleta",
            description: "Por favor, proporciona tu Clave Publicable de Stripe real para habilitar los pagos.",
          });
          return;
        }

        if (!currentPriceDetails.id || currentPriceDetails.id.includes("TU_PRICE_ID") || currentPriceDetails.id.includes("price_id_placeholder")) {
          toast({
            variant: "destructive",
            title: "ID de Precio Faltante o Incorrecto",
            description: `El ID de precio para el paquete ${packageTypeForCheckout} no está configurado o es un placeholder. Por favor, créalo en Stripe y añádelo a los datos del paquete.`,
          });
          return;
        }
        navigate('/checkout', { 
          state: { 
            packageTitle: currentDisplayPkg.title, 
            packageType: packageTypeForCheckout,
            price: currentPriceDetails.price, 
            priceId: currentPriceDetails.id, 
            preBookingData: preBookingData
          } 
        });
      };
      
      const whatsappMessageGeneral = `Hola Christian, estoy interesado/a en el paquete "${currentDisplayPkg.title}" (${selectedPackageType}) y me gustaría más información.`;
      const whatsappLinkGeneral = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessageGeneral)}`;

      const pageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.05 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
      };

      const sectionVariants = {
        hidden: { opacity: 0, y:15 },
        visible: { opacity: 1, y:0, transition: { duration: 0.5, ease: "easeOut" } }
      };
      
      const showPackageSelector = destinationId === 'indonesia' && initialPkgData && initialPkgData.comparison;

      return (
        <motion.div 
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="container mx-auto px-2 sm:px-4 py-6 md:py-10"
        >
          <motion.div variants={sectionVariants}>
            <Button variant="outline" onClick={() => navigate(`/destinos/${destinationId}`)} className="mb-6 md:mb-8 group text-sm md:text-base hover:bg-primary/10 hover:text-primary">
              <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Volver a {currentDisplayPkg.destinationName}
            </Button>
          </motion.div>

          <PackageHeader pkg={currentDisplayPkg} />

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            <motion.div variants={sectionVariants} className="lg:col-span-2 space-y-6 md:space-y-8">
              <Card className="glassmorphism shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl text-primary font-heading">Descripción del Viaje</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">{currentDisplayPkg.longDescription}</p>
                </CardContent>
              </Card>

              {showPackageSelector && (
                <Card className="glassmorphism shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-primary font-heading">Selecciona tu Tipo de Paquete</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col sm:flex-row gap-2 md:gap-4">
                    <Button
                      onClick={() => setSelectedPackageType('standard')}
                      variant={selectedPackageType === 'standard' ? 'default' : 'outline'}
                      className={`flex-1 py-2.5 md:py-3 text-sm md:text-base h-auto transition-all duration-300 ease-in-out transform hover:scale-105 ${selectedPackageType === 'standard' ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/10'}`}
                    >
                      <ShieldCheck className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Paquete Estándar
                    </Button>
                    <Button
                      onClick={() => setSelectedPackageType('premium')}
                      variant={selectedPackageType === 'premium' ? 'secondary' : 'outline'}
                      className={`flex-1 py-2.5 md:py-3 text-sm md:text-base h-auto transition-all duration-300 ease-in-out transform hover:scale-105 ${selectedPackageType === 'premium' ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/10'}`}
                    >
                      <Star className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Paquete Premium
                    </Button>
                  </CardContent>
                </Card>
              )}
              
              <PackageDetailsAccordion pkg={currentDisplayPkg} />
              <PackageGallery pkg={currentDisplayPkg} />
              {showPackageSelector && initialPkgData && initialPkgData.comparison && (
                <PackageComparisonTable 
                    comparison={initialPkgData.comparison} 
                    onSelectPackage={setSelectedPackageType} 
                    selectedPackage={selectedPackageType} 
                />
              )}
            
              {whatsappNumber && whatsappNumber !== "TU_NUMERO_DE_WHATSAPP_AQUI" && (
                <motion.div variants={sectionVariants} className="mt-6 md:mt-8">
                    <Button 
                        size="lg" 
                        variant="outline" 
                        className="w-full text-sm sm:text-base md:text-lg py-3 md:py-4 bg-green-500 hover:bg-green-600 text-white border-green-600 hover:border-green-700 h-auto shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105" 
                        asChild
                    >
                        <a href={whatsappLinkGeneral} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5"/> ¿Tienes dudas? Escríbeme por WhatsApp
                        </a>
                    </Button>
                </motion.div>
              )}

            </motion.div>

            <motion.div variants={sectionVariants} className="lg:col-span-1 lg:sticky lg:top-24">
              <PackageBookingCard 
                pkg={initialPkgData || currentDisplayPkg} 
                whatsappNumber={whatsappNumber} 
                selectedPackageType={selectedPackageType}
                onSelectPackageType={setSelectedPackageType}
                currentPrice={currentPriceDetails.price}
                onProceedToCheckout={handleProceedToCheckout}
                destinationId={destinationId}
              />
            </motion.div>
          </div>

          <PackageMap pkg={currentDisplayPkg} />

           <style jsx global>{`
            .shadow-text {
              text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
            }
            @media (min-width: 768px) {
              .shadow-text {
                text-shadow: 2px 2px 6px rgba(0,0,0,0.8);
              }
            }
          `}</style>
        </motion.div>
      );
    };

    export default PackageDetailPage;
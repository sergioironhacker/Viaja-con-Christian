
import React from 'react';
    import { Routes, Route, useLocation } from 'react-router-dom';
    import Layout from '@/components/layout/Layout';
    import HomePage from '@/pages/HomePage';
    import DestinationsPage from '@/pages/DestinationsPage';
    import DestinationDetailPage from '@/pages/DestinationDetailPage';
    import PackageDetailPage from '@/pages/PackageDetailPage';
    import CustomTripPage from '@/pages/CustomTripPage';
    import BlogPage from '@/pages/BlogPage';
    import CheckoutPage from '@/pages/CheckoutPage';
    import PaymentSuccessPage from '@/pages/PaymentSuccessPage';
    import PaymentFailedPage from '@/pages/PaymentFailedPage';
    import NotFoundPage from '@/pages/NotFoundPage';
    import WhatsAppButton from '@/components/common/WhatsAppButton';
    import { AnimatePresence } from 'framer-motion';

    function App() {
      const location = useLocation();
      const whatsappNumber = "+34675198251"; 
      const defaultWhatsappMessage = "Hola Christian, quiero información acerca de los viajes!";
      // Clave pública de Stripe en MODO LIVE
      const stripePublishableKey = "pk_live_51RT22bAJKlC1CQY0cXoiQipqj81DkFZwoizBoJAC3IyU6B3KB5icHTm5vFIh0gQSEipDYDtWbXmxtr9JLR0KGDcl00K9oiXKAx";

      return (
        <Layout>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/destinos" element={<DestinationsPage />} />
              <Route path="/destinos/:destinationId" element={<DestinationDetailPage whatsappNumber={whatsappNumber} />} />
              <Route 
                path="/destinos/:destinationId/:packageId" 
                element={<PackageDetailPage whatsappNumber={whatsappNumber} stripePublishableKey={stripePublishableKey} />} 
              />
              <Route path="/viaje-a-medida" element={<CustomTripPage />} />
              <Route path="/blog" element={<BlogPage />} />
              {/* Pasamos la clave LIVE a la página de checkout */}
              <Route path="/checkout" element={<CheckoutPage stripePublishableKey={stripePublishableKey} />} />
              <Route path="/payment-success" element={<PaymentSuccessPage />} />
              <Route path="/payment-failed" element={<PaymentFailedPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
          <WhatsAppButton phoneNumber={whatsappNumber} message={defaultWhatsappMessage} />
        </Layout>
      );
    }

    export default App;

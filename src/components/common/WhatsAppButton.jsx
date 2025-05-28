import React from 'react';
    import { motion } from 'framer-motion';
    import WhatsappIcon from '@/components/icons/WhatsappIcon';

    const WhatsAppButton = ({ phoneNumber, message = "Hola Christian, quiero información acerca de los viajes!" }) => {
      const correctPhoneNumber = "+34675198251";
      const defaultMessage = "Hola Christian, quiero información acerca de los viajes!";

      if (!correctPhoneNumber) {
        console.warn("Número de WhatsApp no configurado. El botón flotante no se mostrará.");
        return null;
      }

      const whatsappLink = `https://wa.me/${correctPhoneNumber}?text=${encodeURIComponent(message || defaultMessage)}`;

      return (
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white p-3 md:p-3.5 rounded-full shadow-xl z-50 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsappIcon className="h-7 w-7 md:h-8 md:w-8" />
        </motion.a>
      );
    };

    export default WhatsAppButton;
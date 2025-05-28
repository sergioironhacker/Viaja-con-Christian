import React from 'react';
    import HeroSection from '@/components/sections/HeroSection';
    import FeaturedDestinations from '@/components/sections/FeaturedDestinations';
    import TestimonialsSection from '@/components/sections/TestimonialsSection';
    import { motion } from 'framer-motion';

    const HomePage = () => {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16 md:space-y-24"
        >
          <HeroSection />
          <FeaturedDestinations />
          <TestimonialsSection />
        </motion.div>
      );
    };

    export default HomePage;
import React from 'react';
    import { motion } from 'framer-motion';
    import { MapPin, CalendarDays } from 'lucide-react';

    const PackageHeader = ({ pkg }) => {
      const sectionVariants = {
        hidden: { opacity: 0, y:15 },
        visible: { opacity: 1, y:0, transition: { duration: 0.5, ease: "easeOut" } }
      };

      return (
        <motion.section variants={sectionVariants} className="mb-8 md:mb-12">
          <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-lg md:rounded-xl overflow-hidden shadow-2xl">
            <img 
              className="absolute inset-0 w-full h-full object-cover"
              alt={pkg.altImage || `Paisaje del paquete ${pkg.title}`}
              src={pkg.heroImage || "https://images.unsplash.com/photo-1693659195448-dd3bf847458b"} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 flex flex-col justify-end">
              <div className="p-4 md:p-6 lg:p-10 sticky bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white shadow-text leading-tight">
                  {pkg.title}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 md:space-x-6 mt-1.5 md:mt-2 text-gray-200 text-xs sm:text-sm md:text-base">
                  <span className="flex items-center mb-0.5 sm:mb-0"><MapPin className="mr-1 md:mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4 text-primary" /> {pkg.destinationName}</span>
                  <span className="flex items-center"><CalendarDays className="mr-1 md:mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4 text-primary" /> {pkg.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      );
    };

    export default PackageHeader;
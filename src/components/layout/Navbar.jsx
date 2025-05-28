import React, { useState } from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Menu, X, Globe } from 'lucide-react';

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a424d5ad-6414-4615-ae06-47dfc9edc501/20c919fed726893456f8e26f841d529e.png";

      const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Destinos', path: '/destinos' },
        { name: 'Viaje a Medida', path: '/viaje-a-medida' },
        { name: 'Blog', path: '/blog' },
      ];

      return (
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-md"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-20">
              <Link to="/" className="flex items-center text-primary py-1 max-w-[80%] md:max-w-none">
                <img 
                  src={logoUrl} 
                  alt="Viaja con Christian Logo" 
                  className="h-14 w-auto object-contain md:h-12" 
                />
                <span className="text-lg md:text-xl font-bold font-heading hidden xl:inline ml-2">Viaja con Christian</span>
              </Link>
              <div className="hidden md:flex items-center space-x-3 lg:space-x-5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm lg:text-base font-medium transition-colors hover:text-primary px-2 py-1 rounded-md ${
                        isActive ? 'text-primary bg-primary/10' : 'text-foreground'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Button variant="outline" size="sm" className="flex items-center space-x-1.5 text-xs lg:text-sm">
                  <Globe className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                  <span>ES</span>
                </Button>
              </div>
              <div className="md:hidden">
                <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} className="p-2">
                  {isOpen ? <X className="h-7 w-7 text-primary" /> : <Menu className="h-7 w-7 text-primary" />}
                </Button>
              </div>
            </div>
          </div>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden bg-background/95 pb-3 pt-2 border-t border-border"
            >
              <div className="flex flex-col items-center space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-medium transition-colors hover:text-primary w-full text-center py-2.5 ${
                        isActive ? 'text-primary bg-primary/10' : 'text-foreground'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Button variant="outline" size="sm" className="flex items-center space-x-2 mt-2 text-sm">
                  <Globe className="h-4 w-4" />
                  <span>ES</span>
                </Button>
              </div>
            </motion.div>
          )}
        </motion.nav>
      );
    };

    export default Navbar;
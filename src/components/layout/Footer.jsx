import React from 'react';
    import { Link } from 'react-router-dom';
    import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';

    const Footer = () => {
      const currentYear = new Date().getFullYear();
      const whatsappNumber = "TU_NUMERO_DE_WHATSAPP_AQUI"; // Reemplazar con el número real

      return (
        <footer className="bg-card text-card-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <p className="text-xl font-bold font-heading text-primary mb-3">Viaja con Christian</p>
                <p className="text-sm text-muted-foreground">Tu aventura comienza aquí. Experiencias inolvidables en destinos espectaculares.</p>
                 <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Christian, me gustaría más información sobre los viajes.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" /> Contactar por WhatsApp
                  </a>
              </div>
              <div>
                <p className="font-semibold text-lg mb-3">Enlaces Rápidos</p>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/destinos" className="hover:text-primary transition-colors">Destinos</Link></li>
                  <li><Link to="/viaje-a-medida" className="hover:text-primary transition-colors">Crea tu Viaje</Link></li>
                  <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-lg mb-3">Legal</p>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/terminos" className="hover:text-primary transition-colors">Términos y Condiciones</Link></li>
                  <li><Link to="/privacidad" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
                  <li><Link to="/cookies" className="hover:text-primary transition-colors">Política de Cookies</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-lg mb-3">Síguenos</p>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={24} /></a>
                  <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></a>
                  <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24} /></a>
                  <a href="#" aria-label="Youtube" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={24} /></a>
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; {currentYear} Viaja con Christian. Todos los derechos reservados.</p>
              <p>Diseñado con ❤️ por exploradores para exploradores.</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
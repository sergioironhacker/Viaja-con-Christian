import React from 'react';
    import { Card, CardContent, CardHeader } from '@/components/ui/card';
    import { Avatar, AvatarFallback } from '@/components/ui/avatar';
    import { Star } from 'lucide-react';
    import { motion } from 'framer-motion';

    const testimonials = [
      {
        name: 'Ana García',
        avatarName: 'AG',
        avatarImageDescription: 'Mujer sonriendo en un paisaje montañoso durante su viaje',
        altText: 'Retrato de Ana García sonriendo en las montañas',
        location: 'Viaje a Bali, Indonesia',
        rating: 5,
        text: '¡Una experiencia transformadora! La organización fue impecable y los guías locales, maravillosos. Bali superó todas mis expectativas.',
      },
      {
        name: 'Carlos López',
        avatarName: 'CL',
        avatarImageDescription: 'Hombre feliz haciendo senderismo en un bosque nevado',
        altText: 'Retrato de Carlos López disfrutando de la nieve',
        location: 'Aventura en Laponia',
        rating: 5,
        text: 'Ver las auroras boreales fue un sueño hecho realidad. Todo el viaje fue mágico, desde los paseos en trineo hasta la calidez de la gente.',
      },
      {
        name: 'Laura Fernández',
        avatarName: 'LF',
        avatarImageDescription: 'Mujer joven tomando una foto frente a un castillo antiguo',
        altText: 'Retrato de Laura Fernández explorando un castillo',
        location: 'Ruta por Escocia',
        rating: 4,
        text: 'Paisajes de ensueño y una historia fascinante. Algunos alojamientos podrían mejorar, pero en general, un viaje muy recomendable.',
      },
    ];

    const cardVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: {
          delay: i * 0.2,
          duration: 0.5,
          ease: "easeOut"
        }
      })
    };

    const TestimonialsSection = () => {
      return (
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Lo Que Dicen <span className="text-secondary">Nuestros Viajeros</span></h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Historias reales de exploradores que confiaron en nosotros para sus aventuras.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.custom
                  key={testimonial.name}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex"
                >
                  <Card className="w-full flex flex-col bg-background/50 p-6 rounded-lg shadow-xl glassmorphism">
                    <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                      <Avatar className="h-16 w-16 border-2 border-primary">
                        <img  
                          className="h-full w-full object-cover rounded-full" 
                          alt={testimonial.altText} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                        <AvatarFallback className="bg-primary text-primary-foreground text-xl">{testimonial.avatarName}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-xl font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.location}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </motion.custom>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default TestimonialsSection;
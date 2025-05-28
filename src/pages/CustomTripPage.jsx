import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { Checkbox } from '@/components/ui/checkbox';
    import { useToast } from '@/components/ui/use-toast';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { User, Mail, MapPin as MapPinIcon, CalendarPlus as CalendarIcon, DollarSign as DollarSignIcon, MessageSquare, Briefcase } from 'lucide-react';

    const experienceTypes = [
      { id: 'nature', label: 'Naturaleza' },
      { id: 'cultural', label: 'Cultural' },
      { id: 'relax', label: 'Relax' },
      { id: 'luxury', label: 'Lujo' },
      { id: 'adventure', label: 'Aventura' },
    ];

    const CustomTripPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        destination: '',
        dates: '',
        budget: '',
        experiences: [],
        comments: '',
      });
      const [errors, setErrors] = useState({});

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
          setErrors(prev => ({...prev, [name]: null}));
        }
      };

      const handleCheckboxChange = (experienceId) => {
        setFormData((prev) => {
          const newExperiences = prev.experiences.includes(experienceId)
            ? prev.experiences.filter((id) => id !== experienceId)
            : [...prev.experiences, experienceId];
          return { ...prev, experiences: newExperiences };
        });
         if (errors.experiences) {
          setErrors(prev => ({...prev, experiences: null}));
        }
      };

      const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'El nombre completo es obligatorio.';
        if (!formData.email.trim()) {
          newErrors.email = 'El email es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'El formato del email no es válido.';
        }
        if (!formData.destination.trim()) newErrors.destination = 'El destino es obligatorio.';
        if (!formData.dates.trim()) newErrors.dates = 'Las fechas disponibles son obligatorias.';
        if (formData.experiences.length === 0) newErrors.experiences = 'Selecciona al menos un tipo de experiencia.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          // En una aplicación real, aquí enviarías los datos a un backend.
          // Por ahora, lo guardamos en localStorage y mostramos un toast.
          const submittedForms = JSON.parse(localStorage.getItem('customTripForms') || '[]');
          submittedForms.push(formData);
          localStorage.setItem('customTripForms', JSON.stringify(submittedForms));
          
          toast({
            title: '¡Solicitud Enviada!',
            description: 'Hemos recibido tu solicitud de viaje personalizado. Nos pondremos en contacto contigo pronto.',
            variant: 'default',
          });
          // Reset form
          setFormData({
            fullName: '', email: '', destination: '', dates: '', budget: '', experiences: [], comments: '',
          });
          setErrors({});
        } else {
           toast({
            title: 'Error de Validación',
            description: 'Por favor, corrige los errores en el formulario.',
            variant: 'destructive',
          });
        }
      };
      
      const pageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };
      
      const inputFieldVariants = (delay) => ({
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { delay: delay * 0.1 + 0.2, duration: 0.4, ease: "easeOut" } },
      });


      return (
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="py-10"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Crea Tu Viaje <span className="text-primary">a Medida</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuéntanos tus sueños y nuestro equipo de expertos diseñará una aventura única solo para ti.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto shadow-2xl glassmorphism">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center"><Briefcase className="mr-3 text-primary h-7 w-7"/>Detalles de tu Viaje Ideal</CardTitle>
              <CardDescription>Completa el formulario y déjanos hacer la magia.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={inputFieldVariants(0)} className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="flex items-center mb-1"><User className="mr-2 h-4 w-4 text-primary"/>Nombre Completo</Label>
                    <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Ej: María Rodriguez" className={errors.fullName ? 'border-destructive' : ''} />
                    {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="flex items-center mb-1"><Mail className="mr-2 h-4 w-4 text-primary"/>Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ej: maria@ejemplo.com" className={errors.email ? 'border-destructive' : ''}/>
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                  </div>
                </motion.div>

                <motion.div variants={inputFieldVariants(1)} className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="destination" className="flex items-center mb-1"><MapPinIcon className="mr-2 h-4 w-4 text-primary"/>¿A qué destino quieres viajar?</Label>
                    <Input id="destination" name="destination" value={formData.destination} onChange={handleChange} placeholder="Ej: Tailandia, Patagonia, etc." className={errors.destination ? 'border-destructive' : ''}/>
                    {errors.destination && <p className="text-destructive text-sm mt-1">{errors.destination}</p>}
                  </div>
                  <div>
                    <Label htmlFor="dates" className="flex items-center mb-1"><CalendarIcon className="mr-2 h-4 w-4 text-primary"/>¿Qué fechas tienes disponibles?</Label>
                    <Input id="dates" name="dates" value={formData.dates} onChange={handleChange} placeholder="Ej: Julio 2025, Próximo invierno" className={errors.dates ? 'border-destructive' : ''}/>
                    {errors.dates && <p className="text-destructive text-sm mt-1">{errors.dates}</p>}
                  </div>
                </motion.div>
                
                <motion.div variants={inputFieldVariants(2)}>
                  <Label htmlFor="budget" className="flex items-center mb-1"><DollarSignIcon className="mr-2 h-4 w-4 text-primary"/>¿Presupuesto aproximado? (Opcional)</Label>
                  <Input id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="Ej: 2000€ - 3000€ por persona"/>
                </motion.div>

                <motion.div variants={inputFieldVariants(3)}>
                  <Label className="mb-2 block flex items-center"><Briefcase className="mr-2 h-4 w-4 text-primary"/>¿Qué tipo de experiencia buscas?</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {experienceTypes.map((exp) => (
                      <div key={exp.id} className="flex items-center space-x-2 p-2 bg-background/30 rounded-md hover:bg-background/50 transition-colors">
                        <Checkbox
                          id={exp.id}
                          checked={formData.experiences.includes(exp.id)}
                          onCheckedChange={() => handleCheckboxChange(exp.id)}
                        />
                        <Label htmlFor={exp.id} className="font-normal cursor-pointer select-none">{exp.label}</Label>
                      </div>
                    ))}
                  </div>
                  {errors.experiences && <p className="text-destructive text-sm mt-1">{errors.experiences}</p>}
                </motion.div>

                <motion.div variants={inputFieldVariants(4)}>
                  <Label htmlFor="comments" className="flex items-center mb-1"><MessageSquare className="mr-2 h-4 w-4 text-primary"/>Comentarios adicionales</Label>
                  <Textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} placeholder="Cuéntanos más sobre tu viaje ideal, preferencias, o cualquier detalle importante." rows={4} />
                </motion.div>
                
                <motion.div variants={inputFieldVariants(5)} className="pt-2">
                  <Button type="submit" size="lg" className="w-full text-lg">Enviar Solicitud</Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      );
    };

    export default CustomTripPage;
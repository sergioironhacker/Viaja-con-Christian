import React, { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { CheckCircle, DollarSign, MessageCircle, ShieldCheck, ListChecks } from 'lucide-react';
    import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
    import { Input } from "@/components/ui/input";
    import { Label } from "@/components/ui/label";
    import { Textarea } from "@/components/ui/textarea";
    import { useToast } from "@/components/ui/use-toast";

    const FeatureItem = ({ icon: Icon, text, color = "text-green-500" }) => (
      <li className="flex items-start text-xs md:text-sm">
        <Icon className={`h-4 w-4 ${color} mr-1.5 mt-0.5 shrink-0`} /> 
        <span>{text}</span>
      </li>
    );
    
    const PackageBookingCard = ({ pkg, whatsappNumber, selectedPackageType, onSelectPackageType, currentPrice, onProceedToCheckout, destinationId }) => {
      const { toast } = useToast();
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        whatsapp: '',
        estimatedDate: '',
        comments: ''
      });

      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
      };

      const handleSubmitForm = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.whatsapp || !formData.estimatedDate) {
          toast({
            variant: "destructive",
            title: "Error de validación",
            description: "Por favor, completa todos los campos obligatorios.",
          });
          return;
        }
        
        console.log("Datos del formulario de pre-reserva:", formData);
        localStorage.setItem('preBookingData', JSON.stringify(formData));
        
        toast({
          title: "Formulario enviado (simulado)",
          description: "Tus datos han sido guardados localmente. Procediendo al pago...",
        });
        setIsModalOpen(false);
        // Para paquetes no-Indonesia, selectedPackageType será 'standard' por defecto o el único disponible
        const packageTypeToCheckout = destinationId === 'indonesia' ? selectedPackageType : 'standard';
        onProceedToCheckout(packageTypeToCheckout, currentPrice, formData);
      };

      const whatsappMessage = `Hola Christian, estoy interesado/a en el paquete "${pkg.title}" (${destinationId === 'indonesia' && selectedPackageType ? (selectedPackageType === 'standard' ? 'Estándar' : 'Premium'): ''}) y me gustaría más información.`;
      const whatsappBookingLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      const showPackageOptions = destinationId === 'indonesia' && pkg.comparison;

      return (
        <>
          <Card className="sticky top-24 shadow-xl glassmorphism border-2 border-primary/50">
            <CardHeader className="text-center bg-primary/10 p-4 md:p-6">
              <CardTitle className="text-xl md:text-2xl lg:text-3xl text-primary">Reserva Tu Aventura</CardTitle>
              <CardDescription className="text-sm md:text-md text-muted-foreground">
                {showPackageOptions ? "Desde " : ""}
                <span className="font-bold text-secondary text-lg md:text-2xl">{currentPrice}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6">
              {pkg.includes && (
                <div className="space-y-1 md:space-y-1.5">
                  <h4 className="font-semibold text-sm md:text-base flex items-center"><ListChecks className="mr-2 h-4 w-4 text-primary"/>Resumen incluido:</h4>
                  <ul className="list-none space-y-0.5 md:space-y-1 text-muted-foreground">
                    {pkg.includes.slice(0,4).map((item, index) => (
                      <FeatureItem key={index} icon={CheckCircle} text={item} />
                    ))}
                    {pkg.includes.length > 4 && <li className="text-xs text-primary hover:underline"><a href="#details-package">Ver más...</a></li>}
                  </ul>
                </div>
              )}
              
              {showPackageOptions && (
                  <div className="space-y-1.5 md:space-y-2">
                      <h4 className="font-semibold text-sm md:text-base">Elige tu Paquete:</h4>
                      <Button 
                          variant={selectedPackageType === 'standard' ? 'default' : 'outline'} 
                          onClick={() => onSelectPackageType('standard')}
                          className="w-full text-xs md:text-sm py-2 h-auto"
                      >
                          Estándar - {pkg.comparison.priceStandard}
                      </Button>
                      <Button 
                          variant={selectedPackageType === 'premium' ? 'secondary' : 'outline'} 
                          onClick={() => onSelectPackageType('premium')}
                          className="w-full text-xs md:text-sm py-2 h-auto"
                      >
                          Premium - {pkg.comparison.pricePremium}
                      </Button>
                  </div>
              )}
             
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full text-sm md:text-base py-2.5 md:py-3 h-auto">
                    Reservar Paquete <DollarSign className="ml-2 h-4 w-4 md:h-5 md:w-5"/>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[480px]">
                  <DialogHeader>
                    <DialogTitle className="text-xl md:text-2xl">Completa tus datos para la reserva</DialogTitle>
                    <DialogDescription>
                      Necesitamos esta información para gestionar tu viaje. Después podrás proceder al pago.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmitForm} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="fullName" className="text-right col-span-1 text-xs sm:text-sm">Nombre*</Label>
                      <Input id="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Nombre completo" className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right col-span-1 text-xs sm:text-sm">Email*</Label>
                      <Input id="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="tu@email.com" className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="whatsapp" className="text-right col-span-1 text-xs sm:text-sm">WhatsApp*</Label>
                      <Input id="whatsapp" type="tel" value={formData.whatsapp} onChange={handleInputChange} placeholder="+34 123456789" className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="estimatedDate" className="text-right col-span-1 text-xs sm:text-sm">Fecha Viaje*</Label>
                      <Input id="estimatedDate" type="date" value={formData.estimatedDate} onChange={handleInputChange} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="comments" className="text-right col-span-1 text-xs sm:text-sm">Comentarios</Label>
                      <Textarea id="comments" value={formData.comments} onChange={handleInputChange} placeholder="Preferencias, dudas, etc." className="col-span-3" />
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="w-full sm:w-auto">Continuar al Pago</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              {whatsappNumber && whatsappNumber !== "TU_NUMERO_DE_WHATSAPP_AQUI" && (
                <Button size="lg" variant="outline" className="w-full text-sm md:text-base py-2.5 md:py-3 h-auto bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600" asChild>
                  <a href={whatsappBookingLink} target="_blank" rel="noopener noreferrer">
                    Reservar por WhatsApp <MessageCircle className="ml-2 h-4 w-4 md:h-5 md:w-5"/>
                  </a>
                </Button>
              )}
               <p className="text-xs text-muted-foreground text-center flex items-center justify-center pt-2">
                 <ShieldCheck className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-1.5 text-primary"/>Reserva con confianza.
               </p>
            </CardContent>
          </Card>
        </>
      );
    };

    export default PackageBookingCard;
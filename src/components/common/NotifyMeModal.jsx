import React, { useState } from 'react';
    import { Button } from "@/components/ui/button";
    import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
    import { Input } from "@/components/ui/input";
    import { Label } from "@/components/ui/label";
    import { useToast } from "@/components/ui/use-toast";
    import { Mail } from 'lucide-react';

    export function NotifyMeModal({ buttonText = "Notifícame Cuando Esté Listo", featureName = "esta funcionalidad" }) {
      const [email, setEmail] = useState("");
      const [isOpen, setIsOpen] = useState(false);
      const { toast } = useToast();

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
          toast({
            title: "Error",
            description: "Por favor, introduce un email válido.",
            variant: "destructive",
          });
          return;
        }

        // Simular guardado en localStorage
        const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        notifications.push({ email, featureName, date: new Date().toISOString() });
        localStorage.setItem('notifications', JSON.stringify(notifications));

        toast({
          title: "¡Gracias!",
          description: `Te notificaremos en ${email} cuando ${featureName} esté disponible.`,
        });
        setEmail("");
        setIsOpen(false);
      };

      return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary" size="lg">{buttonText}</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="flex items-center"><Mail className="mr-2 h-5 w-5 text-primary"/>¡Sé el primero en saberlo!</DialogTitle>
              <DialogDescription>
                Introduce tu email para recibir una notificación cuando {featureName} esté disponible.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email-notify" className="text-right sr-only">
                    Email
                  </Label>
                  <Input
                    id="email-notify"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="col-span-4"
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Notificarme</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      );
    }
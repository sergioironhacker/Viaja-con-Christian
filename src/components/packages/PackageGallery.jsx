import React from 'react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { FileImage as ImageIcon } from 'lucide-react';

    const PackageGallery = ({ pkg }) => {
      const galleryImagesData = pkg.galleryImages || [
        { description: "Vista panorámica de montañas nevadas", alt: "Montañas nevadas" },
        { description: "Playa tropical con palmeras y aguas cristalinas", alt: "Playa tropical" },
        { description: "Ciudad histórica con calles empedradas al atardecer", alt: "Ciudad histórica" },
        { description: "Aurora boreal sobre un paisaje invernal", alt: "Aurora boreal" },
        { description: "Cascada exuberante en una selva densa", alt: "Cascada en la selva" },
        { description: "Grupo de personas disfrutando de una comida local exótica", alt: "Comida local exótica" }
      ];
      
      return (
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl flex items-center"><ImageIcon className="mr-2 md:mr-3 text-primary h-6 w-6 md:h-7 md:w-7" /> Galería de Imágenes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4">
              {galleryImagesData.map((imgData, i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <img  
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    alt={imgData.alt || `Imagen de galería ${i+1}`}
                   src="https://images.unsplash.com/photo-1592177183170-a4256e44e072" />
                </div>
              ))}
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-4 text-center">Imágenes representativas del destino y experiencias.</p>
          </CardContent>
        </Card>
      );
    };

    export default PackageGallery;
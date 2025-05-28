import React from 'react';
    import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
    import { CheckCircle, XCircle, Sun, Briefcase, CalendarDays, ListChecks } from 'lucide-react';

    const FeatureItem = ({ icon: Icon, text, color = "text-green-500" }) => (
      <li className="flex items-start text-sm md:text-base">
        <Icon className={`h-4 w-4 md:h-5 md:w-5 ${color} mr-2 mt-0.5 shrink-0`} /> 
        <span>{text}</span>
      </li>
    );

    const PackageDetailsAccordion = ({ pkg }) => {
      if (!pkg || (!pkg.details && !pkg.itinerary)) return null;
      
      const { details, itinerary } = pkg;

      return (
        <Accordion type="multiple" collapsible defaultValue={['details-package', 'itinerary']} className="w-full space-y-4 md:space-y-6">
          {details && (details.includes?.length > 0 || details.notIncludes?.length > 0 || details.activities?.length > 0 || details.excursions?.length > 0) && (
            <AccordionItem value="details-package" className="bg-card/80 rounded-lg border border-border/50 glassmorphism">
              <AccordionTrigger className="text-lg md:text-xl hover:text-primary focus:text-primary px-4 md:px-6 py-3 md:py-4 font-semibold">
                 <ListChecks className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 text-primary"/> Detalles del Paquete
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6 pt-2 space-y-4 md:space-y-6">
                {details.includes && details.includes.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-1 md:mb-2 text-primary">Qué incluye:</h4>
                    <ul className="list-none space-y-1 md:space-y-1.5 text-muted-foreground">
                      {details.includes.map((item, index) => <FeatureItem key={index} icon={CheckCircle} text={item} color="text-emerald-400" />)}
                    </ul>
                  </div>
                )}
                {details.notIncludes && details.notIncludes.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-1 md:mb-2 text-destructive">Qué NO incluye:</h4>
                    <ul className="list-none space-y-1 md:space-y-1.5 text-muted-foreground">
                      {details.notIncludes.map((item, index) => <FeatureItem key={index} icon={XCircle} text={item} color="text-rose-500" />)}
                    </ul>
                  </div>
                )}
                {details.activities && details.activities.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-1 md:mb-2 text-secondary">Actividades Destacadas:</h4>
                    <ul className="list-none space-y-1 md:space-y-1.5 text-muted-foreground">
                      {details.activities.map((item, index) => <FeatureItem key={index} icon={Sun} text={item} color="text-secondary"/>)}
                    </ul>
                  </div>
                )}
                 {details.excursions && details.excursions.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-1 md:mb-2 text-accent">Excursiones Opcionales:</h4>
                    <ul className="list-none space-y-1 md:space-y-1.5 text-muted-foreground">
                      {details.excursions.map((item, index) => <FeatureItem key={index} icon={Briefcase} text={item} color="text-accent"/>)}
                    </ul>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          )}

          {itinerary && itinerary.length > 0 && (
            <AccordionItem value="itinerary" className="bg-card/80 rounded-lg border border-border/50 glassmorphism">
              <AccordionTrigger className="text-lg md:text-xl hover:text-primary focus:text-primary px-4 md:px-6 py-3 md:py-4 font-semibold">
                <CalendarDays className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 text-primary"/> Itinerario Día a Día
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                 <div className="space-y-3 md:space-y-4">
                  {itinerary.map((day, index) => (
                    <div key={index} className="border-l-2 border-primary pl-3 md:pl-4 py-1.5 md:py-2 bg-background/50 rounded-r-md">
                      <p className="font-semibold text-sm md:text-md text-primary">Día {day.day}: {day.title}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{day.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      );
    };
    export default PackageDetailsAccordion;
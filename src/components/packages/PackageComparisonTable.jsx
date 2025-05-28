import React from 'react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
    import { CheckCircle, XCircle } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const PackageComparisonTable = ({ comparison, onSelectPackage, selectedPackage }) => {
      if (!comparison) return null;

      return (
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Paquete Estándar vs. Premium</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <Button 
                    variant={selectedPackage === 'standard' ? 'default': 'outline'} 
                    onClick={() => onSelectPackage('standard')}
                    className="flex-1 text-sm md:text-base"
                >
                    Estándar ({comparison.priceStandard})
                </Button>
                <Button 
                    variant={selectedPackage === 'premium' ? 'secondary': 'outline'} 
                    onClick={() => onSelectPackage('premium')}
                    className="flex-1 text-sm md:text-base"
                >
                    Premium ({comparison.pricePremium})
                </Button>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%] font-semibold text-xs sm:text-sm">Característica</TableHead>
                    <TableHead className={`text-center font-semibold text-xs sm:text-sm ${selectedPackage === 'standard' ? 'text-primary' : ''}`}>Estándar</TableHead>
                    <TableHead className={`text-center font-semibold text-xs sm:text-sm ${selectedPackage === 'premium' ? 'text-primary' : ''}`}>Premium</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparison.features.map((feature, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-xs sm:text-sm">{feature.name}</TableCell>
                      <TableCell className="text-center">
                        {feature.standard ? <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mx-auto" /> : <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mx-auto opacity-50" />}
                      </TableCell>
                      <TableCell className="text-center">
                        {feature.premium ? <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto" /> : <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mx-auto opacity-50" />}
                      </TableCell>
                    </TableRow>
                  ))}
                   <TableRow className="bg-background/20">
                      <TableCell className="font-bold text-sm sm:text-lg">Precio (desde)</TableCell>
                      <TableCell className={`text-center text-base sm:text-xl font-bold ${selectedPackage === 'standard' ? 'text-primary' : ''}`}>{comparison.priceStandard}</TableCell>
                      <TableCell className={`text-center text-base sm:text-xl font-bold ${selectedPackage === 'premium' ? 'text-primary' : ''}`}>{comparison.pricePremium}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      );
    };

    export default PackageComparisonTable;
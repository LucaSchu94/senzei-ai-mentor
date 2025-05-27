
import { useTranslation } from "@/hooks/useTranslation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

const Comparison = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-4">
              {t('comparison.title')}
            </h2>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block reveal">
            <div className="bg-white rounded-2xl shadow-sm border border-senzei-taupe/30 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-senzei-taupe/10">
                    <TableHead className="text-senzei-navy font-semibold text-lg py-6">
                      {t('comparison.headers.feature')}
                    </TableHead>
                    <TableHead className="text-senzei-navy font-semibold text-lg py-6 text-center">
                      {t('comparison.headers.senzei')}
                    </TableHead>
                    <TableHead className="text-senzei-navy font-semibold text-lg py-6 text-center">
                      {t('comparison.headers.others')}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <TableRow key={index} className="border-b border-senzei-taupe/20">
                      <TableCell className="font-medium text-senzei-navy py-6 text-base">
                        {t(`comparison.features.${index}.feature`)}
                      </TableCell>
                      <TableCell className="py-6 text-center">
                        <div className="flex items-center justify-center space-x-2 text-green-600">
                          <Check size={20} />
                          <span className="text-senzei-navy text-sm">
                            {t(`comparison.features.${index}.senzei`)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-6 text-center">
                        <div className="flex items-center justify-center space-x-2 text-red-500">
                          <X size={20} />
                          <span className="text-senzei-navy/70 text-sm">
                            {t(`comparison.features.${index}.others`)}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6 reveal">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-senzei-taupe/30">
                <h3 className="text-lg font-bold text-senzei-navy mb-4">
                  {t(`comparison.features.${index}.feature`)}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-senzei-orange text-sm mb-1">
                        {t('comparison.headers.senzei')}
                      </div>
                      <div className="text-senzei-navy text-sm">
                        {t(`comparison.features.${index}.senzei`)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <X size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-senzei-navy/70 text-sm mb-1">
                        {t('comparison.headers.others')}
                      </div>
                      <div className="text-senzei-navy/70 text-sm">
                        {t(`comparison.features.${index}.others`)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

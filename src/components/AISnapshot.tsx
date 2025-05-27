
import { ActivitySquare, Heart, CircleDot, BookText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { useTranslation } from "@/hooks/useTranslation";

const AISnapshot = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-[#0f1627] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto reveal">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-senzei-orange">{t('aiSnapshot.realResults')}</h3>
            <p className="text-center text-gray-300 mt-2">{t('aiSnapshot.realResultsSubtitle')}</p>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center text-senzei-orange">{t('aiSnapshot.title')}</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <ActivitySquare className="text-green-500 w-6 h-6" />
              <span className="text-xl">{t('aiSnapshot.metrics.sleepingDuration')}</span>
              <span className="ml-auto text-xl">52</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-orange-400">
                <div className="flex flex-col gap-1">
                  <div className="h-1 w-5 bg-orange-400 rounded"></div>
                  <div className="h-1 w-5 bg-orange-400 rounded"></div>
                  <div className="h-1 w-5 bg-orange-400 rounded"></div>
                </div>
              </div>
              <span className="text-xl">{t('aiSnapshot.metrics.sleepQuality')}</span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 rounded-full" style={{ width: "30%" }}></div>
                </div>
                <span className="text-xl">3/10</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-blue-400 w-6 h-6 flex items-center justify-center">
                <span className="text-sm font-semibold">Zzz</span>
              </div>
              <span className="text-xl">{t('aiSnapshot.metrics.sleepDuration')}</span>
              <span className="ml-auto text-xl">6.4 h</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Heart className="text-green-500 w-6 h-6" />
              <span className="text-xl">{t('aiSnapshot.metrics.training')}</span>
              <span className="ml-auto text-xl">0 min - {t('aiSnapshot.values.restDay')}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-orange-400 w-6 h-6 flex items-center justify-center">
                <span className="text-2xl">☹</span>
              </div>
              <span className="text-xl">{t('aiSnapshot.metrics.glucose')}</span>
              <span className="ml-auto text-xl">{t('aiSnapshot.values.lowered')}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <CircleDot className="text-orange-400 w-6 h-6" />
              <span className="text-xl">{t('aiSnapshot.metrics.energyLevel')}</span>
              <span className="ml-auto text-xl">{t('aiSnapshot.values.exhausted')}</span>
            </div>
          </div>
          
          <div className="my-10 border-t border-gray-700"></div>
          
          <h3 className="text-2xl text-senzei-orange mb-6">{t('aiSnapshot.recommendation')}</h3>
          
          <ul className="space-y-6 list-disc pl-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index} className="text-lg">
                {t(`aiSnapshot.recommendations.${index}`)}
              </li>
            ))}
          </ul>
          
          <div className="mt-16">
            <h3 className="text-2xl text-senzei-orange mb-6">{t('aiSnapshot.caseStudy.title')}</h3>
            
            <Card className="bg-[#1a2538] border-gray-700 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookText className="w-6 h-6 text-senzei-orange" />
                  <CardTitle className="text-white">{t('aiSnapshot.caseStudy.subtitle')}</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  {t('aiSnapshot.caseStudy.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-senzei-orange">{t('aiSnapshot.caseStudy.metrics.metric')}</TableHead>
                      <TableHead className="text-senzei-orange">{t('aiSnapshot.caseStudy.metrics.week1')}</TableHead>
                      <TableHead className="text-senzei-orange">{t('aiSnapshot.caseStudy.metrics.week4')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-gray-700">
                      <TableCell className="font-medium text-white">{t('aiSnapshot.caseStudy.metrics.sleepQuality')}</TableCell>
                      <TableCell className="text-red-400">{t('aiSnapshot.caseStudy.values.poor')}</TableCell>
                      <TableCell className="text-green-400">{t('aiSnapshot.caseStudy.values.good')}</TableCell>
                    </TableRow>
                    <TableRow className="border-gray-700">
                      <TableCell className="font-medium text-white">{t('aiSnapshot.caseStudy.metrics.recoveryRate')}</TableCell>
                      <TableCell className="text-red-400">{t('aiSnapshot.caseStudy.values.slow')}</TableCell>
                      <TableCell className="text-green-400">{t('aiSnapshot.caseStudy.values.accelerated')}</TableCell>
                    </TableRow>
                    <TableRow className="border-gray-700">
                      <TableCell className="font-medium text-white">{t('aiSnapshot.caseStudy.metrics.painLevel')}</TableCell>
                      <TableCell className="text-red-400">{t('aiSnapshot.caseStudy.values.painHigh')}</TableCell>
                      <TableCell className="text-green-400">{t('aiSnapshot.caseStudy.values.painLow')}</TableCell>
                    </TableRow>
                    <TableRow className="border-gray-700">
                      <TableCell className="font-medium text-white">{t('aiSnapshot.caseStudy.metrics.mobility')}</TableCell>
                      <TableCell className="text-red-400">{t('aiSnapshot.caseStudy.values.limited')}</TableCell>
                      <TableCell className="text-green-400">{t('aiSnapshot.caseStudy.values.restored')}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <div className="mt-6 p-4 bg-[#131c2d] rounded-lg border border-gray-700">
                  <p className="text-white italic">
                    {t('aiSnapshot.caseStudy.quote')}
                  </p>
                  <p className="text-senzei-orange mt-2 font-semibold">{t('aiSnapshot.caseStudy.author')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISnapshot;

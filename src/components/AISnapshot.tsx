
import { ActivitySquare, Heart, CircleDot, CircleUser, BookText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
const AISnapshot = () => {
  return <section className="py-20 bg-[#0f1627] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto reveal">
          {/* Header for Real Results section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-senzei-orange">REAL RESULTS</h3>
            <p className="text-center text-gray-300 mt-2">See how our AI-driven insights transform recovery journeys</p>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center text-senzei-orange">AI SNAPSHOT</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <ActivitySquare className="text-green-500 w-6 h-6" />
              <span className="text-xl">Sleeping Duration</span>
              <span className="ml-auto text-xl">6.4 h</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-orange-400">
                <div className="flex flex-col gap-1">
                  <div className="h-1 w-5 bg-orange-400 rounded"></div>
                  <div className="h-1 w-5 bg-orange-400 rounded"></div>
                  <div className="h-1 w-5 bg-orange-400 rounded"></div>
                </div>
              </div>
              <span className="text-xl">Sleep Quality</span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 rounded-full" style={{
                  width: "30%"
                }}></div>
                </div>
                <span className="text-xl">3/10</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-blue-400 w-6 h-6 flex items-center justify-center">
                <span className="text-sm font-semibold">Zzz</span>
              </div>
              <span className="text-xl">Sleep Duration</span>
              <span className="ml-auto text-xl">6.4 h</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Heart className="text-green-500 w-6 h-6" />
              <span className="text-xl">Training</span>
              <span className="ml-auto text-xl">0 min - rest day</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-orange-400 w-6 h-6 flex items-center justify-center">
                <span className="text-2xl">☹</span>
              </div>
              <span className="text-xl">Glucose</span>
              <span className="ml-auto text-xl">Lowered</span>
            </div>
            
            <div className="flex items-center gap-4">
              <CircleDot className="text-orange-400 w-6 h-6" />
              <span className="text-xl">Energy Level</span>
              <span className="ml-auto text-xl">Exhausted</span>
            </div>
          </div>
          
          <div className="my-10 border-t border-gray-700"></div>
          
          <h3 className="text-2xl text-senzei-orange mb-6">Today your recovery needs extra support.</h3>
          
          <ul className="space-y-6 list-disc pl-6">
            <li className="text-lg">
              Schedule a 20-minute yoga session before noon to boost circulation and calm your mind.
            </li>
            <li className="text-lg">
              Practice box-breathing (4x4x4x4) for 5 minutes after lunch to help reduce stress.
            </li>
            <li className="text-lg">
              Prioritize an early bedtime and avoid caffeine after 2 pm. Hydrate regularly and keep screens off 1 hour before sleep.
            </li>
          </ul>
          
          {/* Case Example Component */}
          <div className="mt-16">
            <h3 className="text-2xl text-senzei-orange mb-6">Case Study: Michael's Recovery Journey</h3>
            
            <Card className="bg-[#1a2538] border-gray-700 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookText className="w-6 h-6 text-senzei-orange" />
                  <CardTitle className="text-white">Weekly Progress Report</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  30-year-old athlete recovering from shoulder injury
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-senzei-orange">Metric</TableHead>
                      <TableHead className="text-senzei-orange">Week 1</TableHead>
                      <TableHead className="text-senzei-orange">Week 4</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-gray-700">
                      <TableCell className="font-medium text-white">Sleep Quality</TableCell>
                      <TableCell className="text-red-400">Poor (4/10)</TableCell>
                      <TableCell className="text-green-400">Good (8/10)</TableCell>
                    </TableRow>
                    <TableRow className="border-gray-700">
                      <TableCell className="font-medium text-white">Recovery Rate</TableCell>
                      <TableCell className="text-red-400">Slow</TableCell>
                      <TableCell className="text-green-400">Accelerated</TableCell>
                    </TableRow>
                    <TableRow className="border-gray-700">
                      <TableCell className="font-medium text-white">Pain Level</TableCell>
                      <TableCell className="text-red-400">7/10</TableCell>
                      <TableCell className="text-green-400">2/10</TableCell>
                    </TableRow>
                    <TableRow className="border-gray-700">
                      <TableCell className="font-medium text-white">Mobility</TableCell>
                      <TableCell className="text-red-400">Limited</TableCell>
                      <TableCell className="text-green-400">85% restored</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <div className="mt-6 p-4 bg-[#131c2d] rounded-lg border border-gray-700">
                  <p className="text-white italic">
                    "Senzei helped me understand how my sleep patterns were directly impacting my recovery. 
                    Following the AI recommendations improved my sleep quality dramatically, which accelerated 
                    my healing process by an estimated 40%."
                  </p>
                  <p className="text-senzei-orange mt-2 font-semibold">— Michael T.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AISnapshot;


import { BookText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";

interface CaseExampleProps {
  title?: string;
  description?: string;
  clientName?: string;
  quote?: string;
  metrics?: {
    name: string;
    before: string;
    after: string;
    improved: boolean;
  }[];
  className?: string;
}

const CaseExample = ({
  title = "Weekly Progress Report",
  description = "30-year-old athlete recovering from shoulder injury",
  clientName = "Michael T.",
  quote = "Senzei helped me understand how my sleep patterns were directly impacting my recovery. Following the AI recommendations improved my sleep quality dramatically, which accelerated my healing process by an estimated 40%.",
  metrics = [
    { name: "Sleep Quality", before: "Poor (4/10)", after: "Good (8/10)", improved: true },
    { name: "Recovery Rate", before: "Slow", after: "Accelerated", improved: true },
    { name: "Pain Level", before: "7/10", after: "2/10", improved: true },
    { name: "Mobility", before: "Limited", after: "85% restored", improved: true }
  ],
  className = ""
}: CaseExampleProps) => {
  return (
    <div className={className}>
      <Card className="bg-[#1a2538] border-gray-700 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <BookText className="w-6 h-6 text-senzei-orange" />
            <CardTitle className="text-white">{title}</CardTitle>
          </div>
          <CardDescription className="text-gray-300">
            {description}
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
              {metrics.map((metric, index) => (
                <TableRow key={index} className="border-gray-700">
                  <TableCell className="font-medium text-white">{metric.name}</TableCell>
                  <TableCell className="text-red-400">{metric.before}</TableCell>
                  <TableCell className="text-green-400">{metric.after}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {quote && (
            <div className="mt-6 p-4 bg-[#131c2d] rounded-lg border border-gray-700">
              <p className="text-white italic">{quote}</p>
              {clientName && <p className="text-senzei-orange mt-2 font-semibold">— {clientName}</p>}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseExample;

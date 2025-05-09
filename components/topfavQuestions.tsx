"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProgressBar } from "./Progess";

const popularProducts = [
  {
    id: "P001",
    name: "Two Sum",
    percentage: 85,
    color: "[&>*]:bg-orange-500",
    bgColor: "bg-orange-100",
    textcolor: "text-orange-500",
  },
  {
    id: "P002",
    name: "Search in sorted array",
    percentage: 78,
    color: "[&>*]:bg-purple-500",
    bgColor: "bg-purple-100",
    textcolor: "text-purple-500",
  },
  {
    id: "P003",
    name: "Aggressive Cow",
    percentage: 66,
    color: "[&>*]:bg-emerald-500",
    bgColor: "bg-emerald-100",
    textcolor: "text-emerald-500",
  },
];

export function FavProblems() {
  return (
    <div className="w-full md:w-[350px] rounded-lg bg-white border border-neutral-300 p-2">
      <p className="text-sm font-medium text-neutral-700">
        Most Liked Problems
      </p>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="text-xs font-normal">
              <TableHead className="text-zinc-500">#</TableHead>
              <TableHead className="text-zinc-500">Name</TableHead>
              <TableHead className="w-32 sm:w-48 md:w-32 lg:w-auto text-zinc-500">
                Popularity
              </TableHead>
              <TableHead className="text-zinc-500">Likes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs">
            {popularProducts.map((invoice, index) => (
              <TableRow key={invoice.id}>
                <TableCell className="text-zinc-600">{index + 1}</TableCell>
                <TableCell className="text-zinc-600 max-w-[120px] md:max-w-[80px] lg:max-w-[120px] truncate">
                  {invoice.name}
                </TableCell>
                <TableCell>
                  {
                    <ProgressBar
                      color={invoice.color}
                      backgroundColor={invoice.bgColor}
                      totalProgress={invoice.percentage}
                    />
                  }
                </TableCell>
                <TableCell
                  className={`text-right text-neutral-600 ${invoice.textcolor}`}
                >
                  <p
                    className={`py-1 px-2 ${invoice.bgColor} flex items-center justify-center text-xs rounded`}
                  >
                    {invoice.percentage}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

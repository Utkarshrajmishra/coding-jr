"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "Two Sum", User: 186 },
  { day: "Remove duplicate", User: 305 },
  { day: "Rotated the array", User: 237 },
  { day: "Search in sorted and rotated array", User: 73 },
  { day: "Koko loves banana", User: 209 },
  { day: "Three Sum", User: 214 },
  { day: "Frog Jump", User: 214 },
];

const chartConfig = {
  User: {
    label: "User",
    color: "hsl(var(--chart-1))",
  },
  Problems: {
    label: "Problems",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function WeeklyMostSolved() {
  return (
    <section className="w-full md:w-[350px] p-2 rounded-lg border-1 border-neutral-300 bg-white">
      <p className="text-sm font-medium text-neutral-700">Weekly Most Solved</p>
      <ChartContainer config={chartConfig} className="w-full mt-2 h-40 pl-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 0, bottom: 0, left: -32 }}
            barGap={1}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={6}
              style={{ fontSize: 10 }}
              tick={{ fontSize: 8 }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              style={{ fontSize: 10 }}
              tick={{ fontSize: 8 }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="User" fill="#4ab48f" radius={0} barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </section>
  );
}

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
  { day: "Monday", User: 186, Problems: 80 },
  { day: "Tuesday", User: 305, Problems: 200 },
  { day: "Wednesday", User: 237, Problems: 120 },
  { day: "Thursday", User: 73, Problems: 190 },
  { day: "Friday", User: 209, Problems: 130 },
  { day: "Saturday", User: 214, Problems: 140 },
  { day: "Sunday", User: 214, Problems: 140 },
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

export default function TotalWeeklyUser() {
  return (
    <section className="w-full lg:w-[350px] p-2 rounded-lg border border-neutral-300 bg-white">
      <p className="text-sm font-medium text-neutral-700">Total Weekly User</p>
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
            <Bar dataKey="User" fill="#0094fe" radius={0} barSize={10} />
            <Bar dataKey="Problems" fill="#2be3a3" radius={0} barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </section>
  );
}

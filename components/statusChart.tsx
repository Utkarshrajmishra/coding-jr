import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";

interface RuntimeChartProps {
  currentRuntime: number;
  percentileBetter: number;
  data?: { runtime: number; count: number }[];
}

export function RuntimeChart({
  currentRuntime = 371,
  percentileBetter = 44.04,
  data,
}: RuntimeChartProps) {
  const chartData =
    data || generateSampleData(currentRuntime, percentileBetter);

  const currentPoint = chartData.find(
    (point) => Math.abs(point.runtime - currentRuntime) < 10
  ) || {
    runtime: currentRuntime,
    count: 5,
  };

  return (
    <div className="p-4 sm:p-6 border-t border-neutral-200">
      <div className="font-medium text-neutral-700 text-xs sm:text-sm mb-3 sm:mb-4">
        Runtime distribution
      </div>

      <div className="h-32 sm:h-40 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorRuntime" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0284c7" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0284c7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e5e5"
            />
            <XAxis
              dataKey="runtime"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6b7280" }}
              tickFormatter={(value) => `${value}ms`}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6b7280" }}
              tickFormatter={(value) => `${value}%`}
            />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#0284c7"
              fillOpacity={1}
              fill="url(#colorRuntime)"
            />
            <ReferenceDot
              x={currentRuntime}
              y={currentPoint.count}
              r={6}
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
        <div className="text-xs sm:text-sm text-gray-600">
          You are better than{" "}
          <span className="font-medium">{percentileBetter}%</span>
        </div>
        <div className="text-xs sm:text-sm text-gray-600">
          Runtime <span className="font-medium">{currentRuntime} ms</span>
        </div>
      </div>
    </div>
  );
}

function generateSampleData(currentRuntime: number, percentileBetter: number) {
  const data = [];
  const minRuntime = 214;
  const maxRuntime = 844;
  const step = 10;

  for (let runtime = minRuntime; runtime <= maxRuntime; runtime += step) {
    let count;
    if (runtime < 300) {
      count = 5 + Math.random() * 10;
    } else if (runtime < 400) {
      count = 2 + Math.random() * 3;
    } else {
      count = 1 + Math.random() * 1.5;
    }

    if (Math.abs(runtime - currentRuntime) < 10) {
      count = 5;
    }

    data.push({ runtime, count });
  }

  return data;
}

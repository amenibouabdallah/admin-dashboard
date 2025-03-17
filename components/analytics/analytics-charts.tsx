"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const revenueData = [
  { name: "Jan", total: 4500 },
  { name: "Feb", total: 3800 },
  { name: "Mar", total: 5200 },
  { name: "Apr", total: 4900 },
  { name: "May", total: 6500 },
  { name: "Jun", total: 5800 },
  { name: "Jul", total: 7200 },
  { name: "Aug", total: 6800 },
  { name: "Sep", total: 7900 },
  { name: "Oct", total: 8500 },
  { name: "Nov", total: 7800 },
  { name: "Dec", total: 9200 },
]

const distributionData = [
  { name: "Wheat", value: 35 },
  { name: "Rice", value: 25 },
  { name: "Corn", value: 20 },
  { name: "Barley", value: 15 },
  { name: "Other", value: 5 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

const detailedRevenueData = [
  { name: "Jan", revenue: 4500, costs: 2800, profit: 1700 },
  { name: "Feb", revenue: 3800, costs: 2300, profit: 1500 },
  { name: "Mar", revenue: 5200, costs: 3100, profit: 2100 },
  { name: "Apr", revenue: 4900, costs: 2900, profit: 2000 },
  { name: "May", revenue: 6500, costs: 3800, profit: 2700 },
  { name: "Jun", revenue: 5800, costs: 3400, profit: 2400 },
  { name: "Jul", revenue: 7200, costs: 4200, profit: 3000 },
  { name: "Aug", revenue: 6800, costs: 4000, profit: 2800 },
  { name: "Sep", revenue: 7900, costs: 4600, profit: 3300 },
  { name: "Oct", revenue: 8500, costs: 5000, profit: 3500 },
  { name: "Nov", revenue: 7800, costs: 4500, profit: 3300 },
  { name: "Dec", revenue: 9200, costs: 5400, profit: 3800 },
]

const salesData = [
  { name: "Jan", wheat: 450, rice: 380, corn: 320, barley: 250 },
  { name: "Feb", wheat: 420, rice: 350, corn: 290, barley: 220 },
  { name: "Mar", wheat: 480, rice: 400, corn: 340, barley: 280 },
  { name: "Apr", wheat: 460, rice: 390, corn: 330, barley: 260 },
  { name: "May", wheat: 520, rice: 430, corn: 370, barley: 300 },
  { name: "Jun", wheat: 500, rice: 410, corn: 350, barley: 290 },
  { name: "Jul", wheat: 550, rice: 460, corn: 390, barley: 320 },
  { name: "Aug", wheat: 530, rice: 440, corn: 380, barley: 310 },
  { name: "Sep", wheat: 580, rice: 490, corn: 410, barley: 340 },
  { name: "Oct", wheat: 600, rice: 510, corn: 430, barley: 360 },
  { name: "Nov", wheat: 570, rice: 480, corn: 400, barley: 330 },
  { name: "Dec", wheat: 620, rice: 530, corn: 450, barley: 370 },
]

interface AnalyticsChartsProps {
  type: "revenue" | "distribution" | "revenue-detailed" | "sales-detailed" | "costs-detailed" | "performance-detailed"
}

export function AnalyticsCharts({ type }: AnalyticsChartsProps) {
  switch (type) {
    case "revenue":
      return (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={revenueData}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              formatter={(value: number) => [`$${value}`, "Revenue"]}
              contentStyle={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
              }}
            />
            <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
          </BarChart>
        </ResponsiveContainer>
      )

    case "distribution":
      return (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={distributionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {distributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [`${value}%`, "Percentage"]}
              contentStyle={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )

    case "revenue-detailed":
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={detailedRevenueData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${value}`} />
            <Tooltip
              formatter={(value: number) => [`$${value}`, ""]}
              contentStyle={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="costs" stroke="#82ca9d" />
            <Line type="monotone" dataKey="profit" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      )

    case "sales-detailed":
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={salesData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
              }}
            />
            <Legend />
            <Bar dataKey="wheat" fill="#8884d8" />
            <Bar dataKey="rice" fill="#82ca9d" />
            <Bar dataKey="corn" fill="#ffc658" />
            <Bar dataKey="barley" fill="#ff8042" />
          </BarChart>
        </ResponsiveContainer>
      )

    case "costs-detailed":
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={detailedRevenueData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${value}`} />
            <Tooltip
              formatter={(value: number) => [`$${value}`, ""]}
              contentStyle={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="costs" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )

    case "performance-detailed":
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={detailedRevenueData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${value}`} />
            <Tooltip
              formatter={(value: number) => [`$${value}`, ""]}
              contentStyle={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
              }}
            />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
            <Bar dataKey="profit" fill="#82ca9d" name="Profit" />
          </BarChart>
        </ResponsiveContainer>
      )

    default:
      return null
  }
}


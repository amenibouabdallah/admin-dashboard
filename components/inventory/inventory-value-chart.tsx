"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const inventoryValueData = [
  { month: "Jan", value: 240000 },
  { month: "Feb", value: 255000 },
  { month: "Mar", value: 270000 },
  { month: "Apr", value: 265000 },
  { month: "May", value: 280000 },
  { month: "Jun", value: 285000 },
  { month: "Jul", value: 290000 },
  { month: "Aug", value: 285000 },
  { month: "Sep", value: 295000 },
  { month: "Oct", value: 300000 },
  { month: "Nov", value: 290000 },
  { month: "Dec", value: 285000 },
]

export function InventoryValueChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={inventoryValueData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
          <Tooltip
            formatter={(value: number) => [`$${value.toLocaleString()}`, "Inventory Value"]}
            contentStyle={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
            }}
          />
          <Legend />
          <Bar dataKey="value" name="Inventory Value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}


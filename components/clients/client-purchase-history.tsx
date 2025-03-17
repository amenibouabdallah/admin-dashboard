import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface ClientPurchaseHistoryProps {
  clientId: string
}

export function ClientPurchaseHistory({ clientId }: ClientPurchaseHistoryProps) {
  // In a real app, you would fetch purchase data based on the client ID
  const purchaseData = [
    {
      product: "Wheat Premium",
      quantity: 28,
      totalSpent: 7000,
      lastPurchase: "2023-06-15",
      currency: "USD",
    },
    {
      product: "Rice Long Grain",
      quantity: 22,
      totalSpent: 3960,
      lastPurchase: "2023-06-15",
      currency: "USD",
    },
    {
      product: "Corn Yellow",
      quantity: 18,
      totalSpent: 2160,
      lastPurchase: "2023-05-12",
      currency: "USD",
    },
    {
      product: "Barley Organic",
      quantity: 14,
      totalSpent: 3080,
      lastPurchase: "2023-04-15",
      currency: "USD",
    },
    {
      product: "Wheat Standard",
      quantity: 12,
      totalSpent: 2160,
      lastPurchase: "2023-04-30",
      currency: "USD",
    },
  ]

  const chartData = purchaseData.map((item) => ({
    name: item.product,
    quantity: item.quantity,
    amount: item.totalSpent,
  }))

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip
                  formatter={(value, name) => {
                    if (name === "amount") return [`$${value}`, "Amount"]
                    return [value, "Quantity"]
                  }}
                  contentStyle={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border)",
                  }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="quantity" fill="#8884d8" name="Quantity" />
                <Bar yAxisId="right" dataKey="amount" fill="#82ca9d" name="Amount ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Total Spent</TableHead>
            <TableHead>Last Purchase</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchaseData.map((item) => (
            <TableRow key={item.product}>
              <TableCell className="font-medium">{item.product}</TableCell>
              <TableCell className="text-right">{item.quantity}</TableCell>
              <TableCell className="text-right">
                ${item.totalSpent.toLocaleString()} {item.currency}
              </TableCell>
              <TableCell>{item.lastPurchase}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


import { ArrowUpDown } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: "1",
    name: "Wheat Premium",
    category: "Wheat",
    quantity: 1245,
    revenue: 24900,
    profit: 38.5,
    status: "In Stock",
  },
  {
    id: "2",
    name: "Rice Long Grain",
    category: "Rice",
    quantity: 980,
    revenue: 19600,
    profit: 42.1,
    status: "In Stock",
  },
  {
    id: "3",
    name: "Corn Yellow",
    category: "Corn",
    quantity: 865,
    revenue: 17300,
    profit: 35.8,
    status: "Low Stock",
  },
  {
    id: "4",
    name: "Barley Organic",
    category: "Barley",
    quantity: 620,
    revenue: 12400,
    profit: 44.2,
    status: "In Stock",
  },
  {
    id: "5",
    name: "Wheat Standard",
    category: "Wheat",
    quantity: 590,
    revenue: 11800,
    profit: 32.7,
    status: "In Stock",
  },
]

export function AnalyticsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Button variant="ghost" className="p-0 h-8 font-medium">
              Product
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead>
            <Button variant="ghost" className="p-0 h-8 font-medium">
              Category
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead className="text-right">
            <Button variant="ghost" className="p-0 h-8 font-medium">
              Quantity
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead className="text-right">
            <Button variant="ghost" className="p-0 h-8 font-medium">
              Revenue
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead className="text-right">
            <Button variant="ghost" className="p-0 h-8 font-medium">
              Profit Margin
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell className="text-right">{product.quantity}</TableCell>
            <TableCell className="text-right">${product.revenue.toLocaleString()}</TableCell>
            <TableCell className="text-right">{product.profit}%</TableCell>
            <TableCell className="text-right">
              <Badge variant={product.status === "In Stock" ? "outline" : "secondary"}>{product.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


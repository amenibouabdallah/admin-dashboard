import { AlertTriangle, ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function LowStockAlerts() {
  // In a real app, you would fetch low stock products from your database
  const lowStockProducts = [
    {
      id: "3",
      name: "Corn Yellow",
      sku: "CO-YE-003",
      category: "Corn",
      quantity: 35,
      reorderLevel: 40,
      unitCost: 12.0,
      percentRemaining: 87.5,
      status: "Low Stock",
    },
    {
      id: "5",
      name: "Wheat Standard",
      sku: "WH-ST-005",
      category: "Wheat",
      quantity: 28,
      reorderLevel: 40,
      unitCost: 18.0,
      percentRemaining: 70,
      status: "Low Stock",
    },
    {
      id: "6",
      name: "Rice Short Grain",
      sku: "RI-SG-006",
      category: "Rice",
      quantity: 22,
      reorderLevel: 35,
      unitCost: 20.0,
      percentRemaining: 62.9,
      status: "Low Stock",
    },
    {
      id: "7",
      name: "Oats Rolled",
      sku: "OA-RO-007",
      category: "Oats",
      quantity: 18,
      reorderLevel: 30,
      unitCost: 15.0,
      percentRemaining: 60,
      status: "Low Stock",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <span className="font-medium">{lowStockProducts.length} products below reorder level</span>
        </div>
        <Button variant="outline" size="sm">
          Reorder All
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Reorder Level</TableHead>
            <TableHead>Stock Level</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lowStockProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell className="text-right">{product.quantity}</TableCell>
              <TableCell className="text-right">{product.reorderLevel}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={product.percentRemaining} className="h-2" />
                  <span className="text-xs text-muted-foreground">{product.percentRemaining}%</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/inventory/${product.id}/reorder`}>
                    Reorder <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


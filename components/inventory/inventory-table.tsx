import { Edit, Eye, MoreHorizontal, Trash, AlertTriangle } from "lucide-react"
import Link from "next/link"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface InventoryTableProps {
  filterBy?: "low-stock" | "out-of-stock"
}

export function InventoryTable({ filterBy }: InventoryTableProps) {
  // In a real app, you would fetch products from your database
  const allProducts = [
    {
      id: "1",
      name: "Wheat Premium",
      sku: "WH-PR-001",
      category: "Wheat",
      quantity: 245,
      reorderLevel: 50,
      unitCost: 25.0,
      totalValue: 6125.0,
      status: "In Stock",
    },
    {
      id: "2",
      name: "Rice Long Grain",
      sku: "RI-LG-002",
      category: "Rice",
      quantity: 180,
      reorderLevel: 40,
      unitCost: 18.0,
      totalValue: 3240.0,
      status: "In Stock",
    },
    {
      id: "3",
      name: "Corn Yellow",
      sku: "CO-YE-003",
      category: "Corn",
      quantity: 35,
      reorderLevel: 40,
      unitCost: 12.0,
      totalValue: 420.0,
      status: "Low Stock",
    },
    {
      id: "4",
      name: "Barley Organic",
      sku: "BA-OR-004",
      category: "Barley",
      quantity: 0,
      reorderLevel: 30,
      unitCost: 22.0,
      totalValue: 0.0,
      status: "Out of Stock",
    },
    {
      id: "5",
      name: "Wheat Standard",
      sku: "WH-ST-005",
      category: "Wheat",
      quantity: 28,
      reorderLevel: 40,
      unitCost: 18.0,
      totalValue: 504.0,
      status: "Low Stock",
    },
  ]

  // Filter products based on the filterBy prop
  let products = allProducts
  if (filterBy === "low-stock") {
    products = allProducts.filter((product) => product.status === "Low Stock")
  } else if (filterBy === "out-of-stock") {
    products = allProducts.filter((product) => product.status === "Out of Stock")
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>SKU</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Quantity</TableHead>
          <TableHead className="text-right">Unit Cost</TableHead>
          <TableHead className="text-right">Total Value</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.sku}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end">
                {product.quantity < product.reorderLevel && product.quantity > 0 && (
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                )}
                {product.quantity === 0 && <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />}
                {product.quantity}
              </div>
            </TableCell>
            <TableCell className="text-right">${product.unitCost.toFixed(2)}</TableCell>
            <TableCell className="text-right">${product.totalValue.toFixed(2)}</TableCell>
            <TableCell>
              <Badge
                variant={
                  product.status === "In Stock"
                    ? "outline"
                    : product.status === "Low Stock"
                      ? "secondary"
                      : "destructive"
                }
              >
                {product.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href={`/inventory/${product.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      <span>View</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/inventory/${product.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Edit</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


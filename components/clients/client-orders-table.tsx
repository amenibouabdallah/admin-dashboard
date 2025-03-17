"use client"

import { Download, Eye, MoreHorizontal } from "lucide-react"
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

interface ClientOrdersTableProps {
  clientId: string
}

export function ClientOrdersTable({ clientId }: ClientOrdersTableProps) {
  // In a real app, you would fetch orders based on the client ID
  const orders = [
    {
      id: "ORD-001",
      date: "2023-06-15",
      total: 1250,
      currency: "USD",
      status: "Delivered",
      items: [
        { name: "Wheat Premium", quantity: 3, price: 250 },
        { name: "Rice Long Grain", quantity: 2, price: 180 },
        { name: "Corn Yellow", quantity: 4, price: 120 },
      ],
    },
    {
      id: "ORD-002",
      date: "2023-05-28",
      total: 980,
      currency: "USD",
      status: "Delivered",
      items: [
        { name: "Barley Organic", quantity: 2, price: 220 },
        { name: "Wheat Standard", quantity: 3, price: 180 },
      ],
    },
    {
      id: "ORD-003",
      date: "2023-05-12",
      total: 1450,
      currency: "USD",
      status: "Delivered",
      items: [
        { name: "Wheat Premium", quantity: 2, price: 250 },
        { name: "Rice Long Grain", quantity: 3, price: 180 },
        { name: "Corn Yellow", quantity: 2, price: 120 },
        { name: "Barley Organic", quantity: 2, price: 220 },
      ],
    },
    {
      id: "ORD-004",
      date: "2023-04-30",
      total: 850,
      currency: "USD",
      status: "Delivered",
      items: [
        { name: "Wheat Standard", quantity: 3, price: 180 },
        { name: "Corn Yellow", quantity: 2, price: 120 },
      ],
    },
    {
      id: "ORD-005",
      date: "2023-04-15",
      total: 1100,
      currency: "USD",
      status: "Delivered",
      items: [
        { name: "Wheat Premium", quantity: 2, price: 250 },
        { name: "Rice Long Grain", quantity: 2, price: 180 },
        { name: "Barley Organic", quantity: 2, price: 220 },
      ],
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.items.length}</TableCell>
            <TableCell>
              <Badge variant="outline">{order.status}</Badge>
            </TableCell>
            <TableCell className="text-right">
              ${order.total.toLocaleString()} {order.currency}
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
                    <Link href={`/orders/${order.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      <span>View Order</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => window.open(`/api/clients/${clientId}/orders/${order.id}/pdf`, "_blank")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    <span>Download Invoice</span>
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


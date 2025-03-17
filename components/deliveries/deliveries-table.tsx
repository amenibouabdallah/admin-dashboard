import { Edit, Eye, MoreHorizontal, FileText, Truck } from "lucide-react"
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

interface DeliveriesTableProps {
  filterBy?: "pending" | "in-transit" | "delivered"
}

export function DeliveriesTable({ filterBy }: DeliveriesTableProps) {
  // In a real app, you would fetch deliveries from your database
  const allDeliveries = [
    {
      id: "DEL-001",
      orderId: "ORD-001",
      customer: "Olivia Martin",
      address: "123 Main St, Anytown, CA 12345",
      date: "2023-06-15",
      status: "Delivered",
      items: 5,
      trackingNumber: "TRK12345678",
    },
    {
      id: "DEL-002",
      orderId: "ORD-002",
      customer: "Jackson Lee",
      address: "456 Oak Ave, Somewhere, NY 67890",
      date: "2023-06-18",
      status: "In Transit",
      items: 3,
      trackingNumber: "TRK23456789",
    },
    {
      id: "DEL-003",
      orderId: "ORD-003",
      customer: "Isabella Nguyen",
      address: "789 Pine Rd, Nowhere, TX 54321",
      date: "2023-06-20",
      status: "Pending",
      items: 6,
      trackingNumber: "TRK34567890",
    },
    {
      id: "DEL-004",
      orderId: "ORD-004",
      customer: "William Kim",
      address: "321 Cedar Ln, Anywhere, FL 13579",
      date: "2023-06-22",
      status: "Pending",
      items: 2,
      trackingNumber: "TRK45678901",
    },
    {
      id: "DEL-005",
      orderId: "ORD-005",
      customer: "Sofia Davis",
      address: "654 Maple Dr, Everywhere, WA 24680",
      date: "2023-06-14",
      status: "Delivered",
      items: 4,
      trackingNumber: "TRK56789012",
    },
  ]

  // Filter deliveries based on the filterBy prop
  let deliveries = allDeliveries
  if (filterBy) {
    deliveries = allDeliveries.filter((delivery) => delivery.status.toLowerCase() === filterBy.toLowerCase())
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Delivery ID</TableHead>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Tracking</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deliveries.map((delivery) => (
          <TableRow key={delivery.id}>
            <TableCell className="font-medium">{delivery.id}</TableCell>
            <TableCell>{delivery.orderId}</TableCell>
            <TableCell>{delivery.customer}</TableCell>
            <TableCell>{delivery.date}</TableCell>
            <TableCell>{delivery.items}</TableCell>
            <TableCell>
              <Badge
                variant={
                  delivery.status === "Delivered"
                    ? "outline"
                    : delivery.status === "In Transit"
                      ? "secondary"
                      : "default"
                }
              >
                {delivery.status}
              </Badge>
            </TableCell>
            <TableCell>{delivery.trackingNumber}</TableCell>
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
                    <Link href={`/deliveries/${delivery.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      <span>View</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/deliveries/${delivery.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Edit</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={`/deliveries/${delivery.id}/note`}>
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Delivery Note</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/deliveries/${delivery.id}/track`}>
                      <Truck className="mr-2 h-4 w-4" />
                      <span>Track Delivery</span>
                    </Link>
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


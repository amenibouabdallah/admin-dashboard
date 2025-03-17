import { Edit, Eye, MoreHorizontal, Send, Download, DollarSign } from "lucide-react"
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

interface InvoicesTableProps {
  filterBy?: "draft" | "pending" | "paid" | "overdue"
}

export function InvoicesTable({ filterBy }: InvoicesTableProps) {
  // In a real app, you would fetch invoices from your database
  const allInvoices = [
    {
      id: "INV-001",
      customer: "Olivia Martin",
      date: "2023-06-15",
      dueDate: "2023-07-15",
      amount: 1250.0,
      status: "Paid",
      paymentDate: "2023-06-20",
    },
    {
      id: "INV-002",
      customer: "Jackson Lee",
      date: "2023-06-18",
      dueDate: "2023-07-18",
      amount: 980.0,
      status: "Pending",
      paymentDate: null,
    },
    {
      id: "INV-003",
      customer: "Isabella Nguyen",
      date: "2023-06-20",
      dueDate: "2023-07-20",
      amount: 1450.0,
      status: "Draft",
      paymentDate: null,
    },
    {
      id: "INV-004",
      customer: "William Kim",
      date: "2023-05-22",
      dueDate: "2023-06-22",
      amount: 850.0,
      status: "Overdue",
      paymentDate: null,
    },
    {
      id: "INV-005",
      customer: "Sofia Davis",
      date: "2023-06-14",
      dueDate: "2023-07-14",
      amount: 1100.0,
      status: "Paid",
      paymentDate: "2023-06-25",
    },
  ]

  // Filter invoices based on the filterBy prop
  let invoices = allInvoices
  if (filterBy) {
    invoices = allInvoices.filter((invoice) => invoice.status.toLowerCase() === filterBy.toLowerCase())
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payment Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.customer}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.dueDate}</TableCell>
            <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
            <TableCell>
              <Badge
                variant={
                  invoice.status === "Paid"
                    ? "outline"
                    : invoice.status === "Pending"
                      ? "secondary"
                      : invoice.status === "Draft"
                        ? "default"
                        : "destructive"
                }
              >
                {invoice.status}
              </Badge>
            </TableCell>
            <TableCell>{invoice.paymentDate || "-"}</TableCell>
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
                    <Link href={`/invoices/${invoice.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      <span>View</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/invoices/${invoice.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Edit</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {invoice.status === "Draft" && (
                    <DropdownMenuItem asChild>
                      <Link href={`/invoices/${invoice.id}/send`}>
                        <Send className="mr-2 h-4 w-4" />
                        <span>Send Invoice</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  {invoice.status === "Pending" && (
                    <DropdownMenuItem asChild>
                      <Link href={`/invoices/${invoice.id}/record-payment`}>
                        <DollarSign className="mr-2 h-4 w-4" />
                        <span>Record Payment</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link href={`/invoices/${invoice.id}/download`}>
                      <Download className="mr-2 h-4 w-4" />
                      <span>Download PDF</span>
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


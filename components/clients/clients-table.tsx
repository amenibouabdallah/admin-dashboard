import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react"
import Link from "next/link"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const clients = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Inc.",
    status: "Active",
    lastOrder: "2023-06-15",
    totalSpent: 12450,
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    phone: "+1 (555) 234-5678",
    company: "TechCorp",
    status: "Active",
    lastOrder: "2023-06-12",
    totalSpent: 8750,
  },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    phone: "+1 (555) 345-6789",
    company: "Global Traders",
    status: "Inactive",
    lastOrder: "2023-05-28",
    totalSpent: 5200,
  },
  {
    id: "4",
    name: "William Kim",
    email: "william.kim@email.com",
    phone: "+1 (555) 456-7890",
    company: "Kim Enterprises",
    status: "Active",
    lastOrder: "2023-06-10",
    totalSpent: 9800,
  },
  {
    id: "5",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    phone: "+1 (555) 567-8901",
    company: "Davis & Co.",
    status: "Active",
    lastOrder: "2023-06-08",
    totalSpent: 7300,
  },
]

export function ClientsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Client</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Order</TableHead>
          <TableHead className="text-right">Total Spent</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client) => (
          <TableRow key={client.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={client.name} />
                  <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{client.name}</div>
                  <div className="text-sm text-muted-foreground">{client.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{client.company}</TableCell>
            <TableCell>
              <Badge variant={client.status === "Active" ? "outline" : "secondary"}>{client.status}</Badge>
            </TableCell>
            <TableCell>{client.lastOrder}</TableCell>
            <TableCell className="text-right">${client.totalSpent.toLocaleString()}</TableCell>
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
                    <Link href={`/clients/${client.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      <span>View</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/clients/${client.id}/edit`}>
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


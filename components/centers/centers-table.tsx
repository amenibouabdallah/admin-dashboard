import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react"
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

const centers = [
  {
    id: "1",
    name: "North Distribution Center",
    location: "Chicago, IL",
    manager: "Robert Johnson",
    capacity: "85%",
    status: "Operational",
    inventory: 1245,
    temperature: "24.5°C",
  },
  {
    id: "2",
    name: "East Distribution Center",
    location: "New York, NY",
    manager: "Sarah Williams",
    capacity: "72%",
    status: "Operational",
    inventory: 980,
    temperature: "23.8°C",
  },
  {
    id: "3",
    name: "South Distribution Center",
    location: "Atlanta, GA",
    manager: "Michael Brown",
    capacity: "65%",
    status: "Maintenance",
    inventory: 720,
    temperature: "25.2°C",
  },
  {
    id: "4",
    name: "West Distribution Center",
    location: "Los Angeles, CA",
    manager: "Jennifer Davis",
    capacity: "78%",
    status: "Operational",
    inventory: 1050,
    temperature: "22.7°C",
  },
  {
    id: "5",
    name: "Central Distribution Center",
    location: "Denver, CO",
    manager: "David Wilson",
    capacity: "90%",
    status: "Operational",
    inventory: 1320,
    temperature: "21.9°C",
  },
]

export function CentersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Manager</TableHead>
          <TableHead>Capacity</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Temperature</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {centers.map((center) => (
          <TableRow key={center.id}>
            <TableCell className="font-medium">{center.name}</TableCell>
            <TableCell>{center.location}</TableCell>
            <TableCell>{center.manager}</TableCell>
            <TableCell>{center.capacity}</TableCell>
            <TableCell>
              <Badge variant={center.status === "Operational" ? "outline" : "secondary"}>{center.status}</Badge>
            </TableCell>
            <TableCell>{center.temperature}</TableCell>
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
                    <Link href={`/centers/${center.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      <span>View</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/centers/${center.id}/edit`}>
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


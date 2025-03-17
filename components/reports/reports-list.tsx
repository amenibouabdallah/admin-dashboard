import { Download, Eye, FileText, MoreHorizontal, Trash } from "lucide-react"

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

const allReports = [
  {
    id: "1",
    name: "Monthly Sales Report",
    type: "Sales",
    created: "2023-06-15",
    format: "PDF",
    status: "Ready",
  },
  {
    id: "2",
    name: "Inventory Status",
    type: "Inventory",
    created: "2023-06-14",
    format: "Excel",
    status: "Ready",
  },
  {
    id: "3",
    name: "Q2 Financial Summary",
    type: "Financial",
    created: "2023-06-10",
    format: "PDF",
    status: "Ready",
  },
  {
    id: "4",
    name: "Product Performance Analysis",
    type: "Custom",
    created: "2023-06-08",
    format: "Excel",
    status: "Ready",
  },
  {
    id: "5",
    name: "Client Acquisition Report",
    type: "Sales",
    created: "2023-06-05",
    format: "PDF",
    status: "Ready",
  },
  {
    id: "6",
    name: "Annual Financial Projection",
    type: "Financial",
    created: "2023-06-01",
    format: "Excel",
    status: "Processing",
  },
]

const salesReports = allReports.filter((report) => report.type === "Sales")
const inventoryReports = allReports.filter((report) => report.type === "Inventory")
const financialReports = allReports.filter((report) => report.type === "Financial")
const customReports = allReports.filter((report) => report.type === "Custom")

interface ReportsListProps {
  type: "all" | "sales" | "inventory" | "financial" | "custom"
}

export function ReportsList({ type }: ReportsListProps) {
  let reports = allReports

  switch (type) {
    case "sales":
      reports = salesReports
      break
    case "inventory":
      reports = inventoryReports
      break
    case "financial":
      reports = financialReports
      break
    case "custom":
      reports = customReports
      break
    default:
      reports = allReports
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Format</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                {report.name}
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="outline">{report.type}</Badge>
            </TableCell>
            <TableCell>{report.created}</TableCell>
            <TableCell>{report.format}</TableCell>
            <TableCell>
              <Badge variant={report.status === "Ready" ? "outline" : "secondary"}>{report.status}</Badge>
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
                  <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    <span>View</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download className="mr-2 h-4 w-4" />
                    <span>Download</span>
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


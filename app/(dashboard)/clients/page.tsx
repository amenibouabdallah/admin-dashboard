import { Download, Filter, Plus, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ClientsTable } from "@/components/clients/clients-table"
import { ClientStats } from "@/components/clients/client-stats"

export default function ClientsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h1 className="font-semibold text-2xl">Clients</h1>
            <p className="text-sm text-muted-foreground">Manage and view client information</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <Link href="/clients/new">
              <Button size="sm" className="h-8 gap-1">
                <Plus className="h-3.5 w-3.5" />
                <span>Add Client</span>
              </Button>
            </Link>
          </div>
        </div>

        <ClientStats />

        <div className="border rounded-lg">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search clients..." className="h-8 w-[150px] sm:w-[250px] lg:w-[400px]" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8">
                <Download className="h-3.5 w-3.5 mr-1" />
                Export
              </Button>
            </div>
          </div>
          <ClientsTable />
        </div>
      </main>
    </div>
  )
}


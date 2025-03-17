import { Download, Filter, Plus, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CentersTable } from "@/components/centers/centers-table"
import { CenterStats } from "@/components/centers/center-stats"
import { CentersMap } from "@/components/centers/centers-map"

export default function CentersPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h1 className="font-semibold text-2xl">Centers</h1>
            <p className="text-sm text-muted-foreground">Manage and view distribution centers</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <Link href="/centers/new">
              <Button size="sm" className="h-8 gap-1">
                <Plus className="h-3.5 w-3.5" />
                <span>Add Center</span>
              </Button>
            </Link>
          </div>
        </div>

        <CenterStats />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-4">Center Locations</h2>
            <div className="h-[300px] w-full">
              <CentersMap />
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-4">Center Performance</h2>
            <div className="h-[300px] w-full flex items-center justify-center">
              <p className="text-muted-foreground">Performance chart will be displayed here</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search centers..." className="h-8 w-[150px] sm:w-[250px] lg:w-[400px]" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8">
                <Download className="h-3.5 w-3.5 mr-1" />
                Export
              </Button>
            </div>
          </div>
          <CentersTable />
        </div>
      </main>
    </div>
  )
}


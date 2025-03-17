import { ArrowDownIcon, ArrowUpIcon, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ClientStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">573</div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-muted-foreground">vs last month</span>
            <div className="flex items-center text-green-500">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>12.5%</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">498</div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-muted-foreground">vs last month</span>
            <div className="flex items-center text-green-500">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>8.2%</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New Clients</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">48</div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-muted-foreground">vs last month</span>
            <div className="flex items-center text-green-500">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>24.3%</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Inactive Clients</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">75</div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-muted-foreground">vs last month</span>
            <div className="flex items-center text-red-500">
              <ArrowDownIcon className="h-3 w-3 mr-1" />
              <span>3.8%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


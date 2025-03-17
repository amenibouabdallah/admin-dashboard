import { ArrowUpIcon, Package, AlertTriangle, DollarSign, BarChart } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InventoryStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Products</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,324</div>
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
          <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">28</div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-muted-foreground">vs last month</span>
            <div className="flex items-center text-red-500">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>8.2%</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Inventory Value</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$285,345.00</div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-muted-foreground">vs last month</span>
            <div className="flex items-center text-green-500">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>4.3%</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Stock Turnover</CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.8</div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-muted-foreground">vs last month</span>
            <div className="flex items-center text-green-500">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>0.5</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


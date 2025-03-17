import { ArrowUpIcon, Package, Thermometer, Truck, Warehouse } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CenterStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Centers</CardTitle>
          <Warehouse className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-muted-foreground">vs last month</span>
            <div className="flex items-center text-green-500">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>2 new</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Inventory</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5,315 units</div>
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
          <CardTitle className="text-sm font-medium">Avg. Temperature</CardTitle>
          <Thermometer className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">23.6°C</div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-muted-foreground">vs last month</span>
            <div className="flex items-center text-red-500">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>1.2°C</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Delivery Efficiency</CardTitle>
          <Truck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">94.8%</div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-muted-foreground">vs last month</span>
            <div className="flex items-center text-green-500">
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              <span>2.3%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


import { ArrowDownIcon, ArrowUpIcon, Truck, Clock, CheckCircle, AlertTriangle } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DeliveryStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Deliveries</CardTitle>
          <Truck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,248</div>
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
          <CardTitle className="text-sm font-medium">Pending Deliveries</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42</div>
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
          <CardTitle className="text-sm font-medium">On-Time Delivery Rate</CardTitle>
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
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
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Delivery Time</CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3.2 days</div>
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-muted-foreground">vs last month</span>
            <div className="flex items-center text-green-500">
              <ArrowDownIcon className="h-3 w-3 mr-1" />
              <span>0.5 days</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


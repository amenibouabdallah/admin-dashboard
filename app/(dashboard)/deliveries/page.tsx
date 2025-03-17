import { Plus, Search, Filter, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DeliveryStats } from "@/components/deliveries/delivery-stats"
import { DeliveriesTable } from "@/components/deliveries/deliveries-table"
import { DeliveryMap } from "@/components/deliveries/delivery-map"

export default function DeliveriesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h1 className="font-semibold text-2xl">Delivery Management</h1>
            <p className="text-sm text-muted-foreground">Create and track delivery orders</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <Link href="/deliveries/create">
              <Button size="sm" className="h-8 gap-1">
                <Plus className="h-3.5 w-3.5" />
                <span>Create Delivery</span>
              </Button>
            </Link>
          </div>
        </div>

        <DeliveryStats />

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Deliveries</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="in-transit">In Transit</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
            <TabsTrigger value="map">Delivery Map</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="border rounded-lg">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search deliveries..." className="h-8 w-[150px] sm:w-[250px]" />
                  <Input placeholder="Search deliveries..." className="h-8 w-[150px] sm:w-[250px] lg:w-[400px]" />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <Download className="h-3.5 w-3.5 mr-1" />
                    Export
                  </Button>
                </div>
              </div>
              <DeliveriesTable />
            </div>
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Deliveries</CardTitle>
                <CardDescription>Deliveries that are scheduled but not yet in transit</CardDescription>
              </CardHeader>
              <CardContent>
                <DeliveriesTable filterBy="pending" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="in-transit" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>In Transit Deliveries</CardTitle>
                <CardDescription>Deliveries that are currently in transit</CardDescription>
              </CardHeader>
              <CardContent>
                <DeliveriesTable filterBy="in-transit" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivered" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Delivered Orders</CardTitle>
                <CardDescription>Deliveries that have been successfully completed</CardDescription>
              </CardHeader>
              <CardContent>
                <DeliveriesTable filterBy="delivered" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Map</CardTitle>
                <CardDescription>Visual map of all active deliveries</CardDescription>
              </CardHeader>
              <CardContent>
                <DeliveryMap />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


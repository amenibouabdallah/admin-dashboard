import { Plus, Search, Filter, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InventoryStats } from "@/components/inventory/inventory-stats"
import { InventoryTable } from "@/components/inventory/inventory-table"
import { LowStockAlerts } from "@/components/inventory/low-stock-alerts"
import { InventoryValueChart } from "@/components/inventory/inventory-value-chart"

export default function InventoryPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h1 className="font-semibold text-2xl">Inventory Management</h1>
            <p className="text-sm text-muted-foreground">Manage and track your product inventory</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <Link href="/inventory/add">
              <Button size="sm" className="h-8 gap-1">
                <Plus className="h-3.5 w-3.5" />
                <span>Add Product</span>
              </Button>
            </Link>
          </div>
        </div>

        <InventoryStats />

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
            <TabsTrigger value="out-of-stock">Out of Stock</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="border rounded-lg">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search products..." className="h-8 w-[150px] sm:w-[250px] lg:w-[400px]" />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <Download className="h-3.5 w-3.5 mr-1" />
                    Export
                  </Button>
                </div>
              </div>
              <InventoryTable />
            </div>
          </TabsContent>

          <TabsContent value="low-stock" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Low Stock Alerts</CardTitle>
                <CardDescription>Products that are running low and need to be restocked</CardDescription>
              </CardHeader>
              <CardContent>
                <LowStockAlerts />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="out-of-stock" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Out of Stock Products</CardTitle>
                <CardDescription>Products that are currently out of stock</CardDescription>
              </CardHeader>
              <CardContent>
                <InventoryTable filterBy="out-of-stock" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Value</CardTitle>
                  <CardDescription>Total value of inventory over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <InventoryValueChart />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Stock Movement</CardTitle>
                  <CardDescription>Product inflow and outflow</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <p className="text-muted-foreground">Stock movement chart will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


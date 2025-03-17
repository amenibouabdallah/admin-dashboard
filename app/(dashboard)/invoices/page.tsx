import { Plus, Search, Filter, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InvoiceStats } from "@/components/invoices/invoice-stats"
import { InvoicesTable } from "@/components/invoices/invoices-table"
import { InvoiceChart } from "@/components/invoices/invoice-chart"

export default function InvoicesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h1 className="font-semibold text-2xl">Invoice Management</h1>
            <p className="text-sm text-muted-foreground">Create and manage customer invoices</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <Link href="/invoices/create">
              <Button size="sm" className="h-8 gap-1">
                <Plus className="h-3.5 w-3.5" />
                <span>Create Invoice</span>
              </Button>
            </Link>
          </div>
        </div>

        <InvoiceStats />

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Invoices</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
            <TabsTrigger value="overdue">Overdue</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="border rounded-lg">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search invoices..." className="h-8 w-[150px] sm:w-[250px] lg:w-[400px]" />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <Download className="h-3.5 w-3.5 mr-1" />
                    Export
                  </Button>
                </div>
              </div>
              <InvoicesTable />
            </div>
          </TabsContent>

          <TabsContent value="draft" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Draft Invoices</CardTitle>
                <CardDescription>Invoices that have been created but not sent</CardDescription>
              </CardHeader>
              <CardContent>
                <InvoicesTable filterBy="draft" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Invoices</CardTitle>
                <CardDescription>Invoices that have been sent but not paid</CardDescription>
              </CardHeader>
              <CardContent>
                <InvoicesTable filterBy="pending" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="paid" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Paid Invoices</CardTitle>
                <CardDescription>Invoices that have been paid</CardDescription>
              </CardHeader>
              <CardContent>
                <InvoicesTable filterBy="paid" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="overdue" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Overdue Invoices</CardTitle>
                <CardDescription>Invoices that are past their due date</CardDescription>
              </CardHeader>
              <CardContent>
                <InvoicesTable filterBy="overdue" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Invoice Status</CardTitle>
                  <CardDescription>Distribution of invoices by status</CardDescription>
                </CardHeader>
                <CardContent>
                  <InvoiceChart type="status" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Revenue</CardTitle>
                  <CardDescription>Revenue from invoices by month</CardDescription>
                </CardHeader>
                <CardContent>
                  <InvoiceChart type="revenue" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


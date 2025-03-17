"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Download, Edit, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ClientOrdersTable } from "@/components/clients/client-orders-table"
import { ClientPurchaseHistory } from "@/components/clients/client-purchase-history"
import { generateClientPDF } from "@/lib/pdf-generator"

export default function ClientDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const clientId = params.id as string
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  // In a real app, you would fetch client data based on the ID
  const client = {
    id: clientId,
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Inc.",
    address: "123 Main St, Anytown, CA 12345",
    status: "Active",
    joinDate: "2022-03-15",
    totalSpent: 12450,
    currency: "USD",
    totalOrders: 24,
    notes: "Key client with consistent monthly orders. Prefers delivery on Tuesdays.",
  }

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true)
    try {
      await generateClientPDF(client)
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="font-semibold text-2xl">Client Details</h1>
          <div className="ml-auto flex items-center gap-2">
            <Link href={`/clients/${clientId}/edit`}>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Edit className="h-3.5 w-3.5" />
                <span>Edit</span>
              </Button>
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1"
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF}
            >
              <Download className="h-3.5 w-3.5" />
              <span>{isGeneratingPDF ? "Generating..." : "Download PDF"}</span>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Client Information</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center md:items-start md:text-left">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={`/placeholder.svg?height=96&width=96`} alt={client.name} />
                <AvatarFallback className="text-2xl">{client.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold">{client.name}</h2>
              <p className="text-sm text-muted-foreground mb-4">{client.company}</p>

              <div className="w-full space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{client.phone}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span>{client.address}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Client Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                <p className="font-semibold">{client.status}</p>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-medium text-muted-foreground">Join Date</h3>
                <p className="font-semibold">{client.joinDate}</p>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-medium text-muted-foreground">Total Orders</h3>
                <p className="font-semibold">{client.totalOrders}</p>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-medium text-muted-foreground">Total Spent</h3>
                <p className="font-semibold">
                  ${client.totalSpent.toLocaleString()} {client.currency}
                </p>
              </div>
              <div className="space-y-1.5 md:col-span-2">
                <h3 className="text-sm font-medium text-muted-foreground">Notes</h3>
                <p>{client.notes}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="space-y-4">
          <TabsList>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="purchases">Purchase History</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View all orders placed by this client</CardDescription>
              </CardHeader>
              <CardContent>
                <ClientOrdersTable clientId={clientId} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="purchases" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Purchase History</CardTitle>
                <CardDescription>Detailed breakdown of client purchases by product</CardDescription>
              </CardHeader>
              <CardContent>
                <ClientPurchaseHistory clientId={clientId} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invoices" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Invoices</CardTitle>
                <CardDescription>View all invoices for this client</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Invoice data will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Activity Log</CardTitle>
                <CardDescription>Recent activity for this client</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Activity log will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


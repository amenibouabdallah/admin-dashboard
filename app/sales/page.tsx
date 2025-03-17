import { ArrowLeft, CalendarClock, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "@/components/overview"

export default function SalesPage() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="font-semibold text-lg md:text-xl">Cereal Sales Analysis</h1>
          <div className="ml-auto flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button id="date" variant="outline" className="w-[280px] justify-start text-left font-normal">
                  <CalendarClock className="mr-2 h-4 w-4" />
                  June 01, 2023 - June 30, 2023
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar initialFocus mode="range" numberOfMonths={2} />
              </PopoverContent>
            </Popover>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
              <span className="sr-only">Download</span>
            </Button>
          </div>
        </div>
        <Tabs defaultValue="day" className="space-y-4">
          <TabsList>
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
            <TabsTrigger value="choice">Choice</TabsTrigger>
            <TabsTrigger value="center">Center</TabsTrigger>
          </TabsList>
          <TabsContent value="day" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Daily Sales</CardTitle>
                <CardDescription>View cereal sales quantity by day for the selected period</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="month" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Sales</CardTitle>
                <CardDescription>View cereal sales quantity by month for the selected period</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="year" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Yearly Sales</CardTitle>
                <CardDescription>View cereal sales quantity by year for the selected period</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="choice" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Choice</CardTitle>
                <CardDescription>View cereal sales quantity by choice for the selected period</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="center" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Center</CardTitle>
                <CardDescription>View cereal sales quantity by center for the selected period</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


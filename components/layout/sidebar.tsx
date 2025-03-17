"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, CreditCard, FileText, Home, Package, Settings, ShoppingCart, Truck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col border-r bg-muted/40">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package className="h-6 w-6" />
          <span className="">Cereal Admin</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          <Link href="/" passHref>
            <Button variant={pathname === "/" ? "secondary" : "ghost"} className="w-full justify-start gap-2">
              <Home className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>

          <Collapsible className="w-full">
            <CollapsibleTrigger asChild>
              <Button
                variant={pathname.startsWith("/analytics") ? "secondary" : "ghost"}
                className="w-full justify-between gap-2"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <span>Analytics</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 pt-1">
              <div className="flex flex-col gap-1">
                <Link href="/analytics/revenue" passHref>
                  <Button
                    variant={pathname === "/analytics/revenue" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    size="sm"
                  >
                    Revenue
                  </Button>
                </Link>
                <Link href="/analytics/sales" passHref>
                  <Button
                    variant={pathname === "/analytics/sales" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    size="sm"
                  >
                    Sales
                  </Button>
                </Link>
                <Link href="/analytics/costs" passHref>
                  <Button
                    variant={pathname === "/analytics/costs" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    size="sm"
                  >
                    Costs
                  </Button>
                </Link>
                <Link href="/analytics/performance" passHref>
                  <Button
                    variant={pathname === "/analytics/performance" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    size="sm"
                  >
                    Performance
                  </Button>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="w-full">
            <CollapsibleTrigger asChild>
              <Button
                variant={pathname.startsWith("/reports") ? "secondary" : "ghost"}
                className="w-full justify-between gap-2"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Reports</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 pt-1">
              <div className="flex flex-col gap-1">
                <Link href="/reports/sales" passHref>
                  <Button
                    variant={pathname === "/reports/sales" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    size="sm"
                  >
                    Sales Reports
                  </Button>
                </Link>
                <Link href="/reports/inventory" passHref>
                  <Button
                    variant={pathname === "/reports/inventory" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    size="sm"
                  >
                    Inventory Reports
                  </Button>
                </Link>
                <Link href="/reports/financial" passHref>
                  <Button
                    variant={pathname === "/reports/financial" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    size="sm"
                  >
                    Financial Reports
                  </Button>
                </Link>
                <Link href="/reports/custom" passHref>
                  <Button
                    variant={pathname === "/reports/custom" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    size="sm"
                  >
                    Custom Reports
                  </Button>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Link href="/clients" passHref>
            <Button
              variant={pathname.startsWith("/clients") ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <Users className="h-4 w-4" />
              Clients
            </Button>
          </Link>

          <Link href="/centers" passHref>
            <Button
              variant={pathname.startsWith("/centers") ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <Package className="h-4 w-4" />
              Centers
            </Button>
          </Link>

          <Link href="/inventory" passHref>
            <Button
              variant={pathname.startsWith("/inventory") ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Inventory
            </Button>
          </Link>

          <Link href="/deliveries" passHref>
            <Button
              variant={pathname.startsWith("/deliveries") ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <Truck className="h-4 w-4" />
              Deliveries
            </Button>
          </Link>

          <Link href="/invoices" passHref>
            <Button
              variant={pathname.startsWith("/invoices") ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <CreditCard className="h-4 w-4" />
              Invoices
            </Button>
          </Link>

          <Link href="/settings" passHref>
            <Button
              variant={pathname.startsWith("/settings") ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  )
}


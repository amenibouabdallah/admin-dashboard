import type React from "react"
import { Sidebar } from "@/components/layout/sidebar"
import ProtectedRoute from "@/lib/protected-route"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <div className="flex flex-1">
        <aside className="hidden w-64 lg:block">
          <Sidebar />
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </ProtectedRoute>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { Building, Mail, Phone, MapPin, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CompanySettings() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // In a real app, you would fetch company data from your API
  const [companyData, setCompanyData] = useState({
    name: "Cereal Admin Inc.",
    email: "contact@cerealadmin.com",
    phone: "+1 (555) 123-4567",
    website: "www.cerealadmin.com",
    address: "123 Grain Street, Harvest City, CA 12345",
    description: "Leading provider of premium cereal products and distribution services.",
    taxId: "TAX-123456789",
    registrationNumber: "REG-987654321",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real app, you would submit the form data to your API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCompanyData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Company Logo" />
            <AvatarFallback className="text-4xl">CA</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">
            Change Logo
          </Button>
        </div>

        <div className="flex-1 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Company Name</Label>
              <div className="relative">
                <Building className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="name" name="name" className="pl-8" value={companyData.name} onChange={handleChange} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="pl-8"
                  value={companyData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <div className="relative">
                <Phone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="phone" name="phone" className="pl-8" value={companyData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <div className="relative">
                <Globe className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="website"
                  name="website"
                  className="pl-8"
                  value={companyData.website}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <div className="relative">
              <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="address" name="address" className="pl-8" value={companyData.address} onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Company Description</Label>
        <Textarea
          id="description"
          name="description"
          rows={4}
          value={companyData.description}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="taxId">Tax ID / VAT Number</Label>
          <Input id="taxId" name="taxId" value={companyData.taxId} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="registrationNumber">Registration Number</Label>
          <Input
            id="registrationNumber"
            name="registrationNumber"
            value={companyData.registrationNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

export function TaxSettings() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // In a real app, you would fetch tax data from your API
  const [taxRates, setTaxRates] = useState([
    { id: "1", name: "Standard Rate", rate: 20, isDefault: true },
    { id: "2", name: "Reduced Rate", rate: 5, isDefault: false },
    { id: "3", name: "Zero Rate", rate: 0, isDefault: false },
  ])

  const [newTaxRate, setNewTaxRate] = useState({ name: "", rate: 0 })

  const [currencySettings, setCurrencySettings] = useState({
    currency: "USD",
    symbol: "$",
    position: "before",
    decimalPlaces: 2,
    thousandsSeparator: ",",
    decimalSeparator: ".",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real app, you would submit the form data to your API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
  }

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement> | { name: string; value: string | number }) => {
    const { name, value } = e.target ? e.target : e
    setCurrencySettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleNewTaxRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewTaxRate((prev) => ({ ...prev, [name]: name === "rate" ? Number(value) : value }))
  }

  const addTaxRate = () => {
    if (newTaxRate.name && newTaxRate.rate >= 0) {
      setTaxRates((prev) => [...prev, { id: Date.now().toString(), ...newTaxRate, isDefault: false }])
      setNewTaxRate({ name: "", rate: 0 })
    }
  }

  const deleteTaxRate = (id: string) => {
    setTaxRates((prev) => prev.filter((rate) => rate.id !== id))
  }

  const setDefaultTaxRate = (id: string) => {
    setTaxRates((prev) =>
      prev.map((rate) => ({
        ...rate,
        isDefault: rate.id === id,
      })),
    )
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <h3 className="text-lg font-medium">Currency Settings</h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select
                value={currencySettings.currency}
                onValueChange={(value) => handleCurrencyChange({ name: "currency", value })}
              >
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">US Dollar (USD)</SelectItem>
                  <SelectItem value="EUR">Euro (EUR)</SelectItem>
                  <SelectItem value="GBP">British Pound (GBP)</SelectItem>
                  <SelectItem value="CAD">Canadian Dollar (CAD)</SelectItem>
                  <SelectItem value="AUD">Australian Dollar (AUD)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="symbol">Currency Symbol</Label>
              <Input id="symbol" name="symbol" value={currencySettings.symbol} onChange={handleCurrencyChange} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="position">Symbol Position</Label>
              <Select
                value={currencySettings.position}
                onValueChange={(value) => handleCurrencyChange({ name: "position", value })}
              >
                <SelectTrigger id="position">
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="before">Before amount ($100)</SelectItem>
                  <SelectItem value="after">After amount (100$)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="decimalPlaces">Decimal Places</Label>
              <Select
                value={currencySettings.decimalPlaces.toString()}
                onValueChange={(value) => handleCurrencyChange({ name: "decimalPlaces", value: Number(value) })}
              >
                <SelectTrigger id="decimalPlaces">
                  <SelectValue placeholder="Select decimal places" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="thousandsSeparator">Thousands Separator</Label>
              <Select
                value={currencySettings.thousandsSeparator}
                onValueChange={(value) => handleCurrencyChange({ name: "thousandsSeparator", value })}
              >
                <SelectTrigger id="thousandsSeparator">
                  <SelectValue placeholder="Select separator" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=",">Comma (,)</SelectItem>
                  <SelectItem value=".">Period (.)</SelectItem>
                  <SelectItem value=" ">Space ( )</SelectItem>
                  <SelectItem value="">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <h3 className="text-lg font-medium pt-4">Tax Rates</h3>

          <Card>
            <CardContent className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Rate (%)</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {taxRates.map((rate) => (
                    <TableRow key={rate.id}>
                      <TableCell>{rate.name}</TableCell>
                      <TableCell>{rate.rate}%</TableCell>
                      <TableCell>
                        <Switch
                          checked={rate.isDefault}
                          onCheckedChange={() => setDefaultTaxRate(rate.id)}
                          disabled={rate.isDefault}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteTaxRate(rate.id)}
                          disabled={rate.isDefault}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 items-end">
            <div className="space-y-2">
              <Label htmlFor="newTaxName">New Tax Rate Name</Label>
              <Input
                id="newTaxName"
                name="name"
                value={newTaxRate.name}
                onChange={handleNewTaxRateChange}
                placeholder="e.g., Reduced Rate"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newTaxRate">Rate (%)</Label>
              <div className="flex gap-2">
                <Input
                  id="newTaxRate"
                  name="rate"
                  type="number"
                  min="0"
                  step="0.01"
                  value={newTaxRate.rate}
                  onChange={handleNewTaxRateChange}
                />
                <Button type="button" onClick={addTaxRate}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}


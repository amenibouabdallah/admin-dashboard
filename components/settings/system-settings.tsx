"use client"

import type React from "react"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export function SystemSettings() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // In a real app, you would fetch system settings from your API
  const [systemSettings, setSystemSettings] = useState({
    theme: "light",
    language: "en",
    dateFormat: "MM/DD/YYYY",
    timeFormat: "12h",
    enableNotifications: true,
    enableEmails: true,
    autoLogout: 30,
    itemsPerPage: 10,
    backupFrequency: "daily",
    enableAnalytics: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real app, you would submit the form data to your API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
  }

  const handleChange = (name: string, value: string | boolean | number) => {
    setSystemSettings((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="theme">Theme</Label>
          <Select value={systemSettings.theme} onValueChange={(value) => handleChange("theme", value)}>
            <SelectTrigger id="theme">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select value={systemSettings.language} onValueChange={(value) => handleChange("language", value)}>
            <SelectTrigger id="language">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
              <SelectItem value="zh">Chinese</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="dateFormat">Date Format</Label>
          <Select value={systemSettings.dateFormat} onValueChange={(value) => handleChange("dateFormat", value)}>
            <SelectTrigger id="dateFormat">
              <SelectValue placeholder="Select date format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
              <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
              <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeFormat">Time Format</Label>
          <Select value={systemSettings.timeFormat} onValueChange={(value) => handleChange("timeFormat", value)}>
            <SelectTrigger id="timeFormat">
              <SelectValue placeholder="Select time format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
              <SelectItem value="24h">24-hour</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="enableNotifications">Enable Notifications</Label>
          <Switch
            id="enableNotifications"
            checked={systemSettings.enableNotifications}
            onCheckedChange={(checked) => handleChange("enableNotifications", checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="enableEmails">Enable Email Notifications</Label>
          <Switch
            id="enableEmails"
            checked={systemSettings.enableEmails}
            onCheckedChange={(checked) => handleChange("enableEmails", checked)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="autoLogout">Auto Logout (minutes)</Label>
          <span className="text-sm">{systemSettings.autoLogout} minutes</span>
        </div>
        <Slider
          id="autoLogout"
          min={5}
          max={60}
          step={5}
          value={[systemSettings.autoLogout]}
          onValueChange={(value) => handleChange("autoLogout", value[0])}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="itemsPerPage">Items Per Page</Label>
          <Select
            value={systemSettings.itemsPerPage.toString()}
            onValueChange={(value) => handleChange("itemsPerPage", Number(value))}
          >
            <SelectTrigger id="itemsPerPage">
              <SelectValue placeholder="Select items per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="backupFrequency">Backup Frequency</Label>
          <Select
            value={systemSettings.backupFrequency}
            onValueChange={(value) => handleChange("backupFrequency", value)}
          >
            <SelectTrigger id="backupFrequency">
              <SelectValue placeholder="Select backup frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hourly">Hourly</SelectItem>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="enableAnalytics">Enable Analytics</Label>
        <Switch
          id="enableAnalytics"
          checked={systemSettings.enableAnalytics}
          onCheckedChange={(checked) => handleChange("enableAnalytics", checked)}
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  )
}


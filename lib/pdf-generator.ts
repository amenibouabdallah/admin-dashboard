import { jsPDF } from "jspdf"
import "jspdf-autotable"

// Add the missing type for jsPDF with autotable
declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF
  }
}

interface Client {
  id: string
  name: string
  email: string
  phone: string
  company: string
  address: string
  status: string
  joinDate: string
  totalSpent: number
  currency: string
  totalOrders: number
  notes: string
}

export async function generateClientPDF(client: Client) {
  // Create a new PDF document
  const doc = new jsPDF()

  // Add company logo/header
  doc.setFontSize(20)
  doc.setTextColor(40, 40, 40)
  doc.text("Cereal Admin", 105, 20, { align: "center" })

  // Add document title
  doc.setFontSize(16)
  doc.text("Client Information Report", 105, 30, { align: "center" })

  // Add generation date
  const today = new Date()
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  doc.text(`Generated on: ${today.toLocaleDateString()} ${today.toLocaleTimeString()}`, 105, 40, {
    align: "center' });oLocaleDateString()} ${today.toLocaleTimeString()}`, 105, 40, { align: 'center",
  })

  // Add client information section
  doc.setFontSize(14)
  doc.setTextColor(40, 40, 40)
  doc.text("Client Details", 14, 60)

  // Add client details
  doc.setFontSize(10)
  doc.setTextColor(60, 60, 60)

  const clientDetails = [
    ["Name:", client.name],
    ["Company:", client.company],
    ["Email:", client.email],
    ["Phone:", client.phone],
    ["Address:", client.address],
    ["Status:", client.status],
    ["Join Date:", client.joinDate],
    ["Total Orders:", client.totalOrders.toString()],
    ["Total Spent:", `$${client.totalSpent.toLocaleString()} ${client.currency}`],
  ]

  let yPos = 70
  clientDetails.forEach((detail) => {
    doc.setFont(undefined, "bold")
    doc.text(detail[0], 14, yPos)
    doc.setFont(undefined, "normal")
    doc.text(detail[1], 50, yPos)
    yPos += 8
  })

  // Add notes section
  yPos += 10
  doc.setFontSize(14)
  doc.text("Notes", 14, yPos)
  yPos += 10
  doc.setFontSize(10)
  doc.text(client.notes, 14, yPos)

  // Add purchase history section
  yPos += 20
  doc.setFontSize(14)
  doc.text("Purchase History", 14, yPos)

  // Sample purchase data - in a real app, you would fetch this data
  const purchaseData = [
    ["Wheat Premium", "28", "$7,000 USD", "2023-06-15"],
    ["Rice Long Grain", "22", "$3,960 USD", "2023-06-15"],
    ["Corn Yellow", "18", "$2,160 USD", "2023-05-12"],
    ["Barley Organic", "14", "$3,080 USD", "2023-04-15"],
    ["Wheat Standard", "12", "$2,160 USD", "2023-04-30"],
  ]

  // Add purchase history table
  doc.autoTable({
    startY: yPos + 5,
    head: [["Product", "Quantity", "Total Spent", "Last Purchase"]],
    body: purchaseData,
    theme: "striped",
    headStyles: { fillColor: [60, 60, 60] },
  })

  // Add footer
  const pageCount = doc.internal.getNumberOfPages()
  doc.setFontSize(8)
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.text(
      `Page ${i} of ${pageCount} - Cereal Admin Client Report - Confidential`,
      105,
      doc.internal.pageSize.height - 10,
      { align: "center" },
    )
  }

  // Save the PDF
  doc.save(`client-report-${client.id}.pdf`)

  return true
}


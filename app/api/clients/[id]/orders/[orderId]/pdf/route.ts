import { type NextRequest, NextResponse } from "next/server"
import { jsPDF } from "jspdf"
import "jspdf-autotable"

// Add the missing type for jsPDF with autotable
declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF
  }
}

export async function GET(request: NextRequest, { params }: { params: { id: string; orderId: string } }) {
  try {
    const clientId = params.id
    const orderId = params.orderId

    // In a real app, you would fetch client and order data from your database
    const client = {
      id: clientId,
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      company: "Acme Inc.",
      address: "123 Main St, Anytown, CA 12345",
    }

    // Sample order data
    const order = {
      id: orderId,
      date: "2023-06-15",
      total: 1250,
      currency: "USD",
      status: "Delivered",
      items: [
        { name: "Wheat Premium", quantity: 3, price: 250, total: 750 },
        { name: "Rice Long Grain", quantity: 2, price: 180, total: 360 },
        { name: "Corn Yellow", quantity: 4, price: 120, total: 480 },
      ],
    }

    // Create a new PDF document
    const doc = new jsPDF()

    // Add company logo/header
    doc.setFontSize(20)
    doc.setTextColor(40, 40, 40)
    doc.text("Cereal Admin", 105, 20, { align: "center" })

    // Add invoice title
    doc.setFontSize(16)
    doc.text(`Invoice #${order.id}`, 105, 30, { align: "center" })

    // Add date
    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.text(`Date: ${order.date}`, 195, 30, { align: "right" })

    // Add client information section
    doc.setFontSize(12)
    doc.setTextColor(40, 40, 40)
    doc.text("Bill To:", 14, 50)

    doc.setFontSize(10)
    doc.text(client.name, 14, 58)
    doc.text(client.company, 14, 64)
    doc.text(client.address, 14, 70)
    doc.text(client.email, 14, 76)

    // Add order details
    doc.setFontSize(12)
    doc.text("Order Details:", 14, 90)
    doc.setFontSize(10)
    doc.text(`Order ID: ${order.id}`, 14, 98)
    doc.text(`Status: ${order.status}`, 14, 104)

    // Add items table
    const tableColumn = ["Item", "Quantity", "Unit Price", "Total"]
    const tableRows = order.items.map((item) => [
      item.name,
      item.quantity.toString(),
      `$${item.price.toFixed(2)}`,
      `$${item.total.toFixed(2)}`,
    ])

    doc.autoTable({
      startY: 115,
      head: [tableColumn],
      body: tableRows,
      theme: "striped",
      headStyles: { fillColor: [60, 60, 60] },
    })

    // Add total
    const finalY = (doc as any).lastAutoTable.finalY + 10
    doc.setFontSize(12)
    doc.text(`Total: $${order.total.toFixed(2)} ${order.currency}`, 195, finalY, { align: "right" })

    // Add footer
    doc.setFontSize(8)
    doc.text("Thank you for your business!", 105, 280, { align: "center" })

    // Convert PDF to blob
    const pdfBlob = doc.output("blob")

    // Convert blob to ArrayBuffer
    const arrayBuffer = await pdfBlob.arrayBuffer()

    // Return the PDF as a response
    return new NextResponse(arrayBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="invoice-${order.id}.pdf"`,
      },
    })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}


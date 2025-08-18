export interface ReceiptItem {
  name: string
  qty: number
  price: number
}

export interface Receipt {
  store: string
  address: string
  pos: string
  cashier: string
  invoice: string
  pax: number
  date: string
  items: ReceiptItem[]
  subtotal: number
  total: number
}

/**
 * Generator receipt (dummy / bisa diganti dari API)
 */
export const generateReceipt = (): Receipt => {
  const items: ReceiptItem[] = [
    { name: "Nasi Goreng", qty: 2, price: 20000 },
    { name: "Es Teh", qty: 3, price: 5000 }
  ]

  const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0)

  return {
    store: "Hompimplay",
    address: "Jalan Raya Ranca Kendal Luhur No.9\nDs. Ciburial Kec. Cibolang Kab. Bandung 40191",
    pos: "Kasir Bawah",
    cashier: "Jonatan",
    invoice: "INV-" + Date.now(),
    pax: 3,
    date: new Date().toLocaleString("id-ID"),
    items,
    subtotal,
    total: subtotal
  }
}

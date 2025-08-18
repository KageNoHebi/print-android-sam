<template>
  <div class="flex justify-center bg-gray-100 min-h-screen py-6">
    <div class="bg-white shadow p-4 text-sm font-mono" style="width: 7.5cm">
      <!-- Header -->
      <h2 class="text-center font-bold text-base mb-1">{{ receipt.store }}</h2>
      <p class="text-center text-xs leading-tight">
        {{ receipt.address }}
      </p>

      <div class="flex justify-between text-xs mt-2">
        <span>POS: {{ receipt.pos }}</span>
        <span>Kasir: {{ receipt.cashier }}</span>
      </div>

      <div class="flex justify-between text-xs">
        <span># {{ receipt.invoice }}</span>
        <span>{{ receipt.date }}</span>
      </div>

      <hr class="my-2 border-dashed" />

      <!-- Items -->
      <div v-for="(item, idx) in receipt.items" :key="idx" class="flex justify-between text-xs">
        <span>{{ item.name }} (x{{ item.qty }})</span>
        <span>{{ formatPrice(item.price * item.qty) }}</span>
      </div>

      <hr class="my-2 border-dashed" />

      <!-- Summary -->
      <div class="flex justify-between text-xs">
        <span>Total item: {{ receipt.items.length }}</span>
        <span>Total Qty: {{ totalQty }}</span>
      </div>
      <div class="flex justify-between text-xs">
        <span>Subtotal</span>
        <span>{{ formatPrice(receipt.subtotal) }}</span>
      </div>
      <div class="flex justify-between font-bold text-sm border-t mt-1 pt-1">
        <span>Total</span>
        <span>{{ formatPrice(receipt.total) }}</span>
      </div>

      <p class="text-center text-xs font-semibold mt-2">BUKAN BUKTI PEMBAYARAN</p>

      <hr class="my-2 border-dashed" />

      <!-- Footer -->
      <p class="text-center text-xs">Follow Our Instagram: @theparlorhills</p>
      <p class="text-center text-xs">Wifi Password: theparlor74</p>

      <!-- Tombol -->
      <button
        @click="printReceipt"
        class="mt-4 w-full py-2 bg-blue-600 text-white text-sm rounded"
      >
        🖨️ Print
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ReceiptItem {
  name: string
  qty: number
  price: number
}

interface Receipt {
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

const receipt: Receipt = {
  store: "Hompimplay",
  address: "Jalan Raya Ranca Kendal Luhur No.9\nDs. Ciburial Kec. Cibolang Kab. Bandung 40191",
  pos: "Kasir Bawah",
  cashier: "Jonatan",
  invoice: "asdsad",
  pax: 3,
  date: "18 Agustus 2025 11:59",
  items: [],
  subtotal: 0,
  total: 0
}

const totalQty = receipt.items.reduce((sum, item) => sum + item.qty, 0)

const formatPrice = (val: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(val)
}

const printReceipt = async () => {
  try {
    // @ts-ignore
    await (window as any).PrinterPlugin.print(receipt)
    alert("Struk dikirim ke printer ✅")
  } catch (err) {
    console.error(err)
    alert("Gagal print ❌")
  }
}
</script>

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
      <div
        v-for="(item, idx) in receipt.items"
        :key="idx"
        class="flex justify-between text-xs"
      >
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

      <!-- Tombol Print -->
      <PrintButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateReceipt } from '~/types/receipt'
import PrintButton from '~/components/PrintButton.vue'

// generate data struk
const receipt = generateReceipt()
const totalQty = receipt.items.reduce((sum, item) => sum + item.qty, 0)

// format harga
const formatPrice = (val: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(val)
</script>

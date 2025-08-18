<template>
  <button
    @click="sendToPrinter"
    class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
  >
    Print
  </button>
</template>

<script setup lang="ts">
import Printer from '~/utils/printer'
import { generateReceipt } from '../types/receipt'

const sendToPrinter = async () => {
  try {
    const receipt = generateReceipt()
    await Printer.print({
      text: JSON.stringify(receipt), // kirim JSON ke native
      ip: "192.168.1.50",            // ✅ ganti dengan IP printer LAN Epson
      port: 9100                     // default Epson ESC/POS port
    })
    alert("Struk dikirim ke printer ✅")
  } catch (err) {
    console.error(err)
    alert("Gagal print ❌")
  }
}
</script>

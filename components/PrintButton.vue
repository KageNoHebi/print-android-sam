<template>
  <button
    @click="sendToPrinter"
    class="px-16 py-16 bg-blue-600 text-white rounded-lg shadow"
  >
    PRINT
  </button>
</template>

<script setup lang="ts">
import { generateReceipt } from '~/types/receipt'
import { usePrinter } from '~/composables/usePrinter'
import { useNotification } from '~/composables/useNotification'

const { printReceipt } = usePrinter()
const { success, error } = useNotification()

const sendToPrinter = async () => {
  const receipt = generateReceipt()
  const result = await printReceipt(receipt)

  if (result.success) {
    success("✅ Struk berhasil dikirim ke printer")
  } else {
    error("❌ Gagal print: " + (result.error || "Unknown error"))
  }
}
</script>

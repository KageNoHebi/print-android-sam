import Printer from '~/utils/printer'

export function usePrinter() {
  const config = useRuntimeConfig()

  const printReceipt = async (data: any) => {
    const ip = String(config.public.printerIp)
    const port = Number(config.public.printerPort)

    try {
      await Printer.print({
        text: JSON.stringify(data),
        ip,
        port
      })
      return { success: true }
    } catch (err: any) {
      console.error("Printer error:", err)
      return { success: false, error: err.message }
    }
  }

  return { printReceipt }
}

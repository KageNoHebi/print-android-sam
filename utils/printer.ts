import { registerPlugin } from '@capacitor/core';

type PrinterPlugin = {
  print(options: { text: string; ip: string; port?: number }): Promise<void>;
};

const Printer = registerPlugin<PrinterPlugin>('Printer')
export default Printer;

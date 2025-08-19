package com.samoprint.app;

import android.util.Log;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.samoprint.printer.Printer;

@CapacitorPlugin(name = "Printer")
public class PrinterPlugin extends Plugin {

    @PluginMethod
    public void print(PluginCall call) {
        String text = call.getString("text");
        String ip = call.getString("ip");
        Integer port = call.getInt("port", 9100);

        Log.i("PrinterPlugin", "Print request: ip=" + ip + " port=" + port + " text=" + text);

        try {
            Printer printer = new Printer();
            printer.printText(ip, port, text);

            // ✅ Kirim response balik ke Nuxt
            call.resolve();
        } catch (Exception e) {
            Log.e("PrinterPlugin", "Failed to print", e);
            call.reject("Failed to print: " + e.getMessage());
        }
    }
}

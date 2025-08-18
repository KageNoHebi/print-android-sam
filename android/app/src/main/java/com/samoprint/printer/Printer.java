package com.samoprint.printer;

import java.io.OutputStream;
import java.net.Socket;

public class Printer {
    public void printText(String ip, int port, String text) throws Exception {
        Socket socket = new Socket(ip, port);
        OutputStream out = socket.getOutputStream();
        out.write(text.getBytes("UTF-8"));
        out.flush();
        out.close();
        socket.close();
    }
}

package com.samoprint.app;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
    @Override
    public void onStart() {
        super.onStart();
        getBridge().registerPlugin(PrinterPlugin.class);
    }
}

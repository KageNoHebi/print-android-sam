import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.samoprint.app',
  appName: 'SamoPrint',
  webDir: '.output/public',   // ✅ Nuxt3 build output
  // bundledWebRuntime: false
};

export default config;

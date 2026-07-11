import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 專案站台會部署在 /mainland/ 路徑下。
// 若改為自訂網域或根目錄部署，將 base 改為 "/"。
export default defineConfig({
  base: "/mainland/",
  plugins: [react()],
});

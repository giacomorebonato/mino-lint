import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import eslint4b from "vite-plugin-eslint4b";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint4b()],
});

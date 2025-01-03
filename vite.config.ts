import { defineConfig } from "vite";
import path from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tsconfigPaths()].filter(Boolean),
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      // {
      //   find: "@tabler/icons-react",
      //   replacement: "@tabler/icons-react/dist/esm/icons/index.mjs",
      // },
    ],
  },
  // esbuild: {
  //   drop: ["console", "debugger"],
  // },
  build: {
    minify: "terser",
    rollupOptions: {
      treeshake: true,
    },
  },
});

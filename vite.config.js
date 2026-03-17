import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: "src/index.js",
          name: "HandedUI",
          formats: ["es", "cjs"],
          fileName: (format) => `handed-ui.${format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
        },
      },
    };
  }

  return {
    plugins: [react()],
    build: {
      outDir: "dist-demo",
    },
  };
});

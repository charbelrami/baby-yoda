import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    root: mode === "development" ? "./dev" : "./",
    server: {
      port: 3000,
    },
    plugins: [mode === "development" ? react() : null],
    build: {
      lib: {
        entry: "./src/index.tsx",
        name: "BabyYoda",
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
  };
});

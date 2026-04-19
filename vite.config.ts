import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub Pages serves the site under /repo-name/ — use "/" for local `npm run dev`. */
export default defineConfig(({ command }) => ({
  plugins: [react()],
  assetsInclude: ["**/*.mp4"],
  base: command === "serve" ? "/" : "/Final-Desh-Uthcha-Website/",
}));

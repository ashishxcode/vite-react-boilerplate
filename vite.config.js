import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig(() => {
    return {
        server: {
            port: 3003,
            open: true,
        },
        build: {
            outDir: "build",
        },
        envPrefix: "REACT_APP_",
        plugins: [react(), svgr({ svgrOptions: { icon: true } })],
        resolve: {
            alias: [{ find: "~", replacement: resolve(__dirname, "./src") }],
        },
    };
});

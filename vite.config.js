import {fileURLToPath, URL} from 'node:url'
import {VitePWA} from "vite-plugin-pwa"
import {visualizer} from "rollup-plugin-visualizer";
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        globals: true
    },
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            manifest: {
                name: "App Music",
                them_color: "#ffe3a",
                icons: [
                    {
                        src: "assets/imf/pwa-192*192.png",
                        sizes: "192*192",
                        type: "png"
                    }]
            },
            workbox: {
                globPatterns: ["**/*.{js,css,html,png,jpg,}"]
            }
        }),
        visualizer({open: true}),
    ],
    resolve: {
        alias: {
            '@':
                fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path-browserify"
import source from "source-map-js"
import fs from "fs"

// https://vitejs.dev/config/
export default defineConfig({
	// css: {
	// 	devSourcemap: true, // this one
	// },
	plugins: [react()],
	resolve: {
		alias: {
			path: "path-browserify",
			fs: "fs",
			"source-map-js": "source-map-js",
		},
	},
})

import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const basenameProd = '/react-starter'

export default defineConfig(({ command }) => {
  const isProd = command === 'build'

  return {
    base: '/',
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: `0.0.0.0`,
      port: 15500,
    }
  }
})
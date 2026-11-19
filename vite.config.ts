import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  base: repositoryName ? '/' + repositoryName + '/' : '/',
  plugins: [react(), tailwindcss()],
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: [
        'index.html',
        'about/index.html',
        'education/index.html',
        'students/index.html',
        'contacts/index.html',
      ].map(path => fileURLToPath(new URL(path, import.meta.url))),
    },
  },
})

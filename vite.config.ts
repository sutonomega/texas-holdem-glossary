import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages serves this project from its repository subpath.
  base: mode === 'production' ? '/texas-holdem-glossary/' : '/',
}))


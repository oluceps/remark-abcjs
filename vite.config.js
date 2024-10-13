import { defineConfig } from 'vite'
import Package from './package.json';

export default defineConfig({
  build: {
    lib: {
      name: Package.name,
      entry: 'index.js',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ["abcjs"],
    },
  },
  test: {
    include: ['**/*.test.js'],
    globals: true
  },
})

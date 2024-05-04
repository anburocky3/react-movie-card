import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false,
    proxy: {
      '/movieApi': {
        target: 'https://api.themoviedb.org/3/discover/movie?api_key=5aaa793034c842de2ed6208b20adxxxx&with_original_language=ta&sort_by=vote_average.desc&year=2024',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
})

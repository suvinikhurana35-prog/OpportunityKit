import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({
  base: './',
  server: { port: 5173 },
  preview: { port: 4173 },
  build: { rollupOptions: { input: {
    home: resolve(process.cwd(), 'index.html'),
    internships: resolve(process.cwd(), 'internships.html'),
    hackathons: resolve(process.cwd(), 'hackathons.html'),
    scholarships: resolve(process.cwd(), 'scholarships.html'),
    connect: resolve(process.cwd(), 'connect.html'),
    organizers: resolve(process.cwd(), 'organizers.html'),
    dashboard: resolve(process.cwd(), 'dashboard.html'),
    profile: resolve(process.cwd(), 'profile.html')
  } } }
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cream': {
          50: '#fefdfb',
          100: '#faf8f3',
          200: '#f5f0e6',
        },
        'seafoam': {
          50: '#f0f9f7',
          100: '#ccf0e8',
          200: '#99e1d1',
          300: '#66d2ba',
          400: '#33c3a3',
          500: '#00b48c',
        },
        'sage': {
          50: '#f6f7f4',
          100: '#e8ebe3',
          200: '#d1d7c7',
          300: '#bac3ab',
        },
      },
    },
  },
  plugins: [],
}


import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#1d3531',
        'green-actived': '#5d8a83',
        'green-border': '#2a4b46',
        'green-btn': '#ccec60',
      },
      maxWidth: {
        'grid': '77.5rem',
        'text-hero': '66rem'
      },
      height: {
        'section-hero': '54.625rem'
      }
    },
  },
  plugins: [],
}
export default config

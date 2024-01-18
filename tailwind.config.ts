import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        m: '320px',
        t: '768px',
        d: '1024px',
      },
      colors: {
        accent: '#007BFF',
        black: '#000000',
        white: '#E0E0E0',
      },
    },
  },
  plugins: [],
}
export default config

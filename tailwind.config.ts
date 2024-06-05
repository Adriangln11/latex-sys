import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'royal-blue': {
          '50': '#f1f5fd',
          '100': '#dfe8fa',
          '200': '#c6d6f7',
          '300': '#9fbcf1',
          '400': '#7199e9',
          '500': '#4870e0',
          '600': '#3b59d5',
          '700': '#3247c3',
          '800': '#2e3c9f',
          '900': '#2a367e',
          '950': '#1e244d',
        },
        thunderbird: {
          '50': '#fff0f0',
          '100': '#ffdddd',
          '200': '#ffc1c1',
          '300': '#ff9595',
          '400': '#ff5959',
          '500': '#ff2626',
          '600': '#fc0606',
          '700': '#db0000',
          '800': '#af0505',
          '900': '#900c0c',
          '950': '#500000',
        },
      },
    },
  },
  plugins: [],
}
export default config

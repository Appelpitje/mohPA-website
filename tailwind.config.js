/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fbfaf6',
          100: '#f4f0e6',
          200: '#e8e1d0',
          300: '#d4ccb8',
          400: '#b8af96',
        },
        paper: {
          50: '#fbfaf6',
          100: '#f4f0e6',
          200: '#e8e1d0',
          300: '#d4ccb8',
          400: '#b8af96',
          500: '#9a9178',
        },
        olive: {
          50: '#eef1e6',
          100: '#dce3cc',
          200: '#c2cdb0',
          300: '#9aab78',
          400: '#7a8b54',
          500: '#5a6840',
          600: '#4a5634',
          700: '#3a4428',
          800: '#2c341e',
          900: '#1e2416',
          950: '#14180f',
        },
        ink: {
          DEFAULT: '#1f211c',
          muted: '#5c5a52',
          faint: '#8a867a',
          light: '#a39f93',
        },
        stamp: {
          50: '#f6eee8',
          100: '#ead9ce',
          500: '#8b4a32',
          600: '#6e3a27',
          700: '#542c1e',
          800: '#3a120c',
          accent: '#9b2d1f',
        },
        carbon: {
          950: '#1f211c',
          900: '#2c341e',
          850: '#3a4428',
          800: '#4a5634',
          750: '#5a6840',
          700: '#7a8b54',
          600: '#9aab78',
          500: '#b8af96',
          400: '#d4ccb8',
          300: '#e8e1d0',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'tactical': '0 1px 2px rgba(31, 33, 28, 0.08), 0 6px 18px rgba(31, 33, 28, 0.06)',
        'tactical-lg': '0 4px 6px rgba(31, 33, 28, 0.08), 0 16px 36px rgba(31, 33, 28, 0.12)',
        'stamp-action': '0 2px 0 #542c1e, 0 4px 12px rgba(139, 74, 50, 0.25)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  jit: true,
  content: ['src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}


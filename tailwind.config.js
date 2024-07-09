module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
      'agrandir-narrow-bold': ['Agrandir-Narrow-Bold', 'sans-serif'],
      'agrandir-narrow-regular': ['Agrandir-Narrow-Regular', 'sans-serif'],
      'horizon': ['Horizon', 'sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#000',
        'white': '#FFF',
        'off-white': '#f0f0f0',
        'light-gray': '#b0b0b0',
        'blue': '#4682b4',
        'dark-gray': '#2a3439',
        'medium-gray': '#9a9a9a',
        'example-color': {
          light: '#ffb288',
          DEFAULT: '#d18d67',
          dark: '#ce8860',
        },
      }
    },
  },
  plugins: []
}
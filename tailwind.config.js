/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        bg:     '#f8f6f2',
        ink:    '#1a1815',
        mid:    '#6e6a64',
        faint:  '#c4bdb4',
        accent: '#8c6044',
        warm:   '#f2ede7',
      },
      fontFamily: {
        sans:  ['"Open Sans"', 'sans-serif'],
        serif: ['Cormorant', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

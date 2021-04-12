module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['left', 'top'],
    },
    extend: {
      colors: {
        danger: '#df474a',
        page: '#131a26',
        primary: '#ffffff',
        secondary: '#898d93',
        section: '#212937',
        success: '#3bd671',
        warning: '#f29030',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    ...process.env.NODE_ENV === 'development'
      ? [require('tailwindcss-debug-screens')]
      : [],
  ],
}

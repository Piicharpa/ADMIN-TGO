// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './pages/**/*.{js,jsx,ts,tsx}',
              './components/**/*.{js,jsx,ts,tsx}',
              './app/**/*.{js,jsx,ts,tsx}',
              './demo/**/*.{js,jsx,ts,tsx}',
              './layout/**/*.{js,jsx,ts,tsx}',
              './public/**/*.{js,jsx,ts,tsx}',
              './types/**/*.{js,jsx,ts,tsx}',
              './styles/**/*.{js,jsx,ts,tsx}',],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {})
  },
}
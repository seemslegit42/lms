module.exports = {
  title: 'AI Slidev Studio',
  description: 'A Slidev project for creating presentations using AI.',
  theme: 'default',
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    '@slidev/plugin-zoom',
    '@slidev/plugin-components',
  ],
  css: [
    './src/theme.css',
  ],
  layout: {
    // Custom layout settings can be added here
  },
};
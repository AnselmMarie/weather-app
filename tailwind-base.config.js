module.exports = {
  theme: {
    extend: {
      spacing: {
        md: '15px'
      },
    },
    screens: {
      'desktopAndUp': { 'min': '1024px' },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

// "var(--desktop-min)"
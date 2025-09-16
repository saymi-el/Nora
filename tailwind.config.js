module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D1A6E6',
        primaryDark: '#973DA4',
        secondary: '#F4B3D7',
        secondaryDark: '#DC52BF',
        bg: '#000000',
        text: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        pill: '50px',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(255,255,255,0.1)',
        sm: '0 2px 6px rgba(255,255,255,0.07)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        'right-left': '100px',
        'sm-right-left': '10px',
      },
      colors: {
        "text-color": "#2A3354",
        "blue": "#92EBFF",
        "purple": "#C292FF",
        "pink": "#FF9292",
        "yellow": "#FFDA92",
        "title": "#001049",
        "accent": "#5685FF",
      },
      width: {
        "square": "295px"
      },
      height: {
        "square": "295px"
      },
      fontSize: {
        "h1": "80px",
        "h2": "48px",
        "h3": "40px",
        "h4": "32px",
        "h5": "24px",
        "mb_h1": "48px",
        "mb_h2": "32px",
        "mb_h3": "28px",
        "mb_h4": "24px",
        "mb_h5": "20px",
      }
    },
    supports: {},
  plugins: [],
  }
}

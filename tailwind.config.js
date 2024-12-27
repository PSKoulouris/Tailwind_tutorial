/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary:"#E7272D",
        secondary:"#FBB217",
      },
      backgroundImage: {
        "ardoise": "url('images/background-slate.jpg')", //trailing coma doest affect functionality but reduce error if new iten added to list
      },
    },
  },
  plugins: [],
}


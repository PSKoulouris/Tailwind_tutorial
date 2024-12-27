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
        "ardoise": "url('images/background-slate.jpg')", //trailing coma doesn't affect functionality but reduces errors if new iten added to list.
      },
    },
  },
  plugins: [],
}


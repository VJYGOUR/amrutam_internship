/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bprimary: "#FFF7E2",
      bwhite: "#FFFFFF",
      bbutton: "#3A643B",
      bgray: "#ECE7FF",
      bdarkgray: "#515151",
    },
    extend: {
      fontFamily: {
        manrope: "Manrope",
      },
      backgroundImage: {
        headerimg: 'url("./image/mobile_header.jpg")',
        desktopheader: 'url("./image/desktop_header.jpg")',
      },
    },
  },
  plugins: [],
};

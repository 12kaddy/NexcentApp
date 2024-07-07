/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandprimary: "var(--brandprimary)",
        "default-white": "var(--default-white)",
        neutralblack: "var(--neutralblack)",
        neutraldgrey: "var(--neutraldgrey)",
        neutralgrey: "var(--neutralgrey)",
        neutralgreyblue: "var(--neutralgreyblue)",
        neutrallgrey: "var(--neutrallgrey)",
        neutralsilver: "var(--neutralsilver)",
        neutralwhite: "var(--neutralwhite)",
        "shades-2": "var(--shades-2)",
        "text-gray-300": "var(--text-gray-300)",
        "text-gray-900": "var(--text-gray-900)",
        "tintt-5": "var(--tintt-5)",
      },
      fontFamily: {
        "body-medium-body-2": "var(--body-medium-body-2-font-family)",
        "body-regular-body-2": "var(--body-regular-body-2-font-family)",
        "body-regular-body-3": "var(--body-regular-body-3-font-family)",
        "button-link-medium": "var(--button-link-medium-font-family)",
        "button-link-normal": "var(--button-link-normal-font-family)",
        "button-link-small": "var(--button-link-small-font-family)",
        "heading-headline-1": "var(--heading-headline-1-font-family)",
        "heading-headline-2": "var(--heading-headline-2-font-family)",
        "heading-headline-3": "var(--heading-headline-3-font-family)",
        "heading-headline-4": "var(--heading-headline-4-font-family)",
        "label-medium-label": "var(--label-medium-label-font-family)",
      },
      boxShadow: {
        "shadow-8px": "var(--shadow-8px)",
      },
    },
  },
  plugins: [],
};

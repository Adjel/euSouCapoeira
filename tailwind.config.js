/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/***/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./@/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "350px",
      },
      width: {
        31.5: "31.5rem", // 504px
      },
      height: {
        0.2: "0.05rem",
        0.1: "0.025rem",
      },
      colors: {
        "color-info": "var(--color-info)",
        "color-green": "var(--color-green)",
        "color-yellow": "var(--color-yellow)",
        "color-red": "var(--color-red)",
        "background-medium-gray": "var(--background-medium-gray)",
        "color-divider": "var(--color-divider)",
        "color-text-medium-gray": "var(--color-text-medium-gray)",
        "color-dark-gray": "var(--color-dark-gray)",
        "color-gold": "var(--color-gold)",
        "color-error": "var(--color-error)",
        "extreme-dark-gray": "var(--extreme-dark-gray)",
        "color-cancel-button": "var(--color-cancel-button)",
        "color-hover-cancel-button": "var(--color-hover-cancel-button)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".line-clamp-3": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "3",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        },
      });
    },
  ],
};

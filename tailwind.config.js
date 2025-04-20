module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)", // White background
        foreground: "hsl(240, 10%, 3.9%)", // Dark gray text
        accent: "hsl(210, 10%, 50%)", // Change to a neutral gray
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Use Inter font
      },
      fontSize: {
        xl: "2.5rem", // Larger font size for headers
        lg: "1.25rem", // Larger font size for body text
        base: "1rem", // Default font size
      },
      fontWeight: {
        light: 300, // Light font weight
        normal: 400, // Normal font weight
        bold: 600, // Bold font weight for emphasis
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(5px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  corePlugins: {
    preflight: true, // Ensure Tailwind's base styles are applied
  },
  plugins: [],
};

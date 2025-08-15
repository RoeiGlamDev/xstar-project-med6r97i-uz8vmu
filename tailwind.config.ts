import type { Config } from "tailwindcss";

/
 * Custom Tailwind CSS configuration for luxury LRP cosmetics.
 * This configuration sets up a color scheme and animations tailored for a luxury cosmetics brand.
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA500', // Primary luxury orange color
        },
        white: {
          DEFAULT: '#FFFFFF', // Clean and elegant white color
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'zoom-in': 'zoomIn 0.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config;
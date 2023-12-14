import type { Config } from 'tailwindcss';

const infinexSlate = {
  0: 'rgba(230, 234, 247)',
  100: 'rgba(159, 168, 198)',
  200: 'rgba(45, 55, 83)',
  300: 'rgba(29, 35, 52)',
  400: 'rgba(22, 25, 39)',
  450: 'rgba(18, 21, 33)',
  500: 'rgba(14, 16, 27)',
  600: 'rgba(12, 14, 24)',
  700: 'rgba(4, 5, 11)',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        infinexSlate,
        brand: 'rgb(255, 155, 105)',
        'brand-darker': 'rgb(207, 116, 70)',
        'brand-lighter': 'rgb(255, 207, 182)',
        fill: {
          page: infinexSlate[700],
          block: infinexSlate[600],
          element: infinexSlate[300],
          'element-hovered': infinexSlate[200],
          'element-pressed': infinexSlate[450],
        },
        stroke: {
          block: infinexSlate[400],
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;

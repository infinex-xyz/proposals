import type { Config } from 'tailwindcss';
import tokens from './styles/tokens';
import defaultTheme from 'tailwindcss/defaultTheme';
import {
  addTypographyClassesPlugin,
  extendedFontSizes,
  typography,
} from './styles/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Colors
    borderColor: tokens.borderColor,
    outlineColor: tokens.outlineColor,
    textColor: tokens.textColor,
    divideColor: tokens.dividerColor,
    backgroundColor: tokens.backgroundColor,
    ringColor: tokens.ringColor,
    ringOpacity: {
      DEFAULT: '1',
    },
    ringOffsetColor: tokens.ringOffsetColor,
    fill: tokens.fill,
    caretColor: tokens.borderColor,
    textDecorationColor: tokens.textColor,
    gradientColorStops: tokens.backgroundColor,

    fontFamily: {
      // Infinex brand fonts
      DEFAULT: [typography.fontFamily.body, ...defaultTheme.fontFamily.sans],
      sans: [typography.fontFamily.body, ...defaultTheme.fontFamily.sans],
      mono: [typography.fontFamily.mono, ...defaultTheme.fontFamily.mono],
      condensed: [typography.fontFamily.title, ...defaultTheme.fontFamily.sans],
      // Campaign specific fonts
      barlow: ['var(--font-barlow, "Barlow")', ...defaultTheme.fontFamily.sans],
      'bai-jamjuree': [
        'var(--font-bai-jamjuree, "Bai Jamjuree")',
        ...defaultTheme.fontFamily.sans,
      ],
      kanit: ['var(--font-kanit, "Kanit")', ...defaultTheme.fontFamily.sans],
    },

    extend: {
      fontSize: {
        // Generates `text-2xs` class (11px):
        '2xs': [
          extendedFontSizes['2xs'].fontSize,
          extendedFontSizes['2xs'].lineHeight,
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Generates custom `body-` and `title-` typography classes:
    addTypographyClassesPlugin(),
  ],
};

export default config;

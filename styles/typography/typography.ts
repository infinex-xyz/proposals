import defaultTheme from 'tailwindcss/defaultTheme';

// Extracting the font sizes from Tailwind's default theme
const tailwindFontSizeKeys = Object.keys(defaultTheme.fontSize) as Array<
  keyof typeof defaultTheme.fontSize
>;

export const extendedFontSizes = {
  '2xs': { fontSize: '0.6875rem', lineHeight: '0.9375rem' },
};

const extendedFontSizeKeys = Object.keys(extendedFontSizes) as Array<
  keyof typeof extendedFontSizes
>;

const customFontSizeNames = [
  ...extendedFontSizeKeys,
  ...tailwindFontSizeKeys,
] as const;

type FontSizeName = (typeof customFontSizeNames)[number];
const fontSizes: FontSizeName[] =
  customFontSizeNames as unknown as FontSizeName[];

// Extracting the font weights from Tailwind's default theme
const tailwindFontWeights = Object.keys(defaultTheme.fontWeight) as Array<
  keyof typeof defaultTheme.fontWeight
>;

type FontWeight = (typeof tailwindFontWeights)[number];
const fontWeights: FontWeight[] = tailwindFontWeights;

const letterSpacing: {
  [key in FontSizeName]: { title: string; body: string };
} = {
  '2xs': {
    title: '0.06875rem',
    body: '0.025rem',
  },
  xs: {
    title: '0.06rem',
    body: '0.03rem',
  },
  sm: {
    title: '0.07rem',
    body: '0.035rem',
  },
  base: {
    title: '0.08rem',
    body: '0.04rem',
  },
  lg: {
    title: '0.09rem',
    body: '0.045rem',
  },
  xl: {
    title: '0.1rem',
    body: '0.05rem',
  },
  '2xl': {
    title: '0.12rem',
    body: '0.06rem',
  },
  '3xl': {
    title: '0.15rem',
    body: '0.075rem',
  },
  '4xl': {
    title: '0.18rem',
    body: '0.09rem',
  },
  '5xl': {
    title: '0.24rem',
    body: '0.12rem',
  },
  '6xl': {
    title: '0.3rem',
    body: '0.15rem',
  },
  '7xl': {
    title: '0.36rem',
    body: '0.18rem',
  },
  '8xl': {
    title: '0.48rem',
    body: '0.24rem',
  },
  '9xl': {
    title: '0.64rem',
    body: '0.32rem',
  },
} as const;

interface TypographyToken {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
}

type TypographyTokens = Record<string, TypographyToken>;

// Type guard function to check if a size is in the extended font sizes
const isExtendedFontSize = (
  size: FontSizeName
): size is keyof typeof extendedFontSizes => {
  return (size as keyof typeof extendedFontSizes) in extendedFontSizes;
};

const generateTypographyTokens = (): {
  title: TypographyTokens;
  body: TypographyTokens;
} => {
  const titleTokens: TypographyTokens = {};
  const bodyTokens: TypographyTokens = {};

  fontSizes.forEach((size) => {
    fontWeights.forEach((weight) => {
      const commonProperties = isExtendedFontSize(size)
        ? {
            fontSize: extendedFontSizes[size].fontSize,
            lineHeight: extendedFontSizes[size].lineHeight,
            fontWeight: defaultTheme.fontWeight[weight],
          }
        : {
            fontSize: defaultTheme.fontSize[size][0],
            lineHeight: defaultTheme.fontSize[size][1].lineHeight,
            fontWeight: defaultTheme.fontWeight[weight],
          };

      titleTokens[`${size}-${weight}`] = {
        ...commonProperties,
        letterSpacing: letterSpacing[size]?.title || letterSpacing.sm.title,
      };

      bodyTokens[`${size}-${weight}`] = {
        ...commonProperties,
        letterSpacing: letterSpacing[size]?.body || letterSpacing.sm.body,
      };
    });
  });

  return { title: titleTokens, body: bodyTokens };
};

export const typography = {
  fontFamily: {
    title: 'var(--font-plex-sans-condensed, "IBM Plex Sans Condensed")',
    body: 'var(--font-plex-sans, "IBM Plex Sans")',
    mono: 'var(--font-plex-mono, "IBM Plex Mono")',
    fallback: defaultTheme.fontFamily.sans.join(', '),
  },
  ...generateTypographyTokens(),
};

export type Typography = typeof typography;

import plugin from 'tailwindcss/plugin';
import { Typography, typography } from './typography';

/**
 * Helper function to generate class names and styles
 * for a given typography type.
 */
const generateTypographyClasses = (
  type: 'title' | 'body',
  typography: Typography
) => {
  return Object.fromEntries(
    Object.entries(typography[type]).map(([key, value]) => [
      `.${type}-${key}`,
      {
        fontFamily: [
          typography.fontFamily[type],
          typography.fontFamily.fallback,
        ].join(', '),
        fontSize: value.fontSize,
        fontWeight: value.fontWeight,
        lineHeight: value.lineHeight,
        letterSpacing: value.letterSpacing,
        ...(type === 'title' && { textTransform: 'uppercase' }),
      },
    ])
  );
};

/**
 * Tailwind plugin that creates typography utility classes.
 * These utility classes bundle styles for font-family, font-size, font-weight,
 * line-height, and letter-spacing.
 *
 * @example
 * ```tsx
 * <h1 className="title-lg-medium">Hello World</h1>
 * <p className="body-sm-normal">Hello World</p>
 * ```
 */
export const addTypographyClassesPlugin = () => {
  return plugin(({ addComponents }) => {
    const titleClasses = generateTypographyClasses('title', typography);
    const bodyClasses = generateTypographyClasses('body', typography);

    addComponents({ ...titleClasses, ...bodyClasses });
  });
};

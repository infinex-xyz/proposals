import { palette } from './palette';

const backgroundColor = {
  none: 'transparent',

  // Surfaces
  canvasDark: palette.shark.shark0, // To be reviewed
  canvas: palette.shark.shark1,
  canvasInverted: palette.shark.shark12, // To be reviewed
  surfaceOne: palette.shark.shark2,
  surfaceTwo: palette.shark.shark3,
  surfaceThree: palette.inkDark.ink4,
  surfaceFour: palette.slateDark.slate3,
  overlay: palette.inkDark.ink6,

  // Elements
  disabled: palette.slateDarkA.slateA3,

  subtle: palette.slateDarkA.slateA2,

  neutral: palette.slateDarkA.slateA3,
  neutralHover: palette.slateDarkA.slateA4,
  neutralActive: palette.slateDarkA.slateA5,
  neutralSelected: palette.slateDarkA.slateA3,

  shark0: palette.shark.shark0, // To be reviewed
  shark1: palette.shark.shark1, // To be reviewed
  shark2: palette.shark.shark2, // To be reviewed
  shark3: palette.shark.shark3, // To be reviewed
  shark4: palette.shark.shark4, // To be reviewed
  shark5: palette.shark.shark5, // To be reviewed
  shark6: palette.shark.shark6, // To be reviewed

  slate1: palette.slateDark.slate1,
  slate8: palette.slateDark.slate8,
  slate10: palette.slateDark.slate10,
  slate11: palette.slateDark.slate11,
  slate12: palette.slateDark.slate12, // To be reviewed

  blue6: palette.blue.blue6,

  ruby2: palette.rubyDarkA.rubyA2,

  cantaloupe5: palette.cantaloupeDark.cantaloupe5, // To be reviewed

  accentDark: palette.cantaloupeDark.cantaloupe6,
  accentEmphasis: palette.cantaloupeDark.cantaloupe7,
  accentEmphasisHover: palette.cantaloupeDark.cantaloupe8,
  accentEmphasisActive: palette.cantaloupeDark.cantaloupe9,

  critical: palette.rubyDarkA.rubyA1,
  criticalEmphasis: palette.rubyDark.ruby9,
  criticalEmphasisHover: palette.rubyDark.ruby10,
  criticalEmphasisActive: palette.rubyDark.ruby11,

  caution: palette.amberDarkA.amberA1,

  positive: palette.jadeDarkA.jadeA1,
  positiveLight: palette.green.green9,

  informative: palette.blueDarkA.blueA1,

  pending: palette.purpleDarkA.purpleA1,

  bull: palette.jadeDarkA.jadeA1,
  bullSelected: palette.jadeDarkA.jadeA3,
  bullEmphasis: palette.jadeDark.jade9,
  bullEmphasisHover: palette.jadeDark.jade10,
  bullEmphasisActive: palette.jadeDark.jade11,

  bear: palette.rubyDarkA.rubyA1,
  bearSelected: palette.rubyDarkA.rubyA3,
  bearEmphasis: palette.rubyDark.ruby9,
  bearEmphasisHover: palette.rubyDark.ruby10,
  bearEmphasisActive: palette.rubyDark.ruby11,

  legendBull: palette.jadeDarkA.jadeA3,
  legendBullHover: palette.jadeDarkA.jadeA4,
  legendBullEmphasis: palette.jadeDark.jade9,

  legendBear: palette.rubyDarkA.rubyA3,
  legendBearHover: palette.rubyDarkA.rubyA4,
  legendBearEmphasis: palette.rubyDark.ruby9,

  // Blanket (Overlay or modal backdrop)
  blanket: palette.blackA.blackA10,
};

const foregrounds = {
  transparent: 'transparent',

  // Text and Icons
  default: palette.slateDark.slate12, // "default" so we can explicitly reference class
  secondary: palette.slateDark.slate11,
  slate1: palette.slateDark.slate1,
  slate2: palette.slateDark.slate2,
  slate6: palette.slateDark.slate6, // To be reviewed
  slate7: palette.slateDark.slate7,
  slate8: palette.slateDark.slate8,
  slate9: palette.slateDark.slate9,
  slate11: palette.slateDark.slate11,
  slate12: palette.slateDark.slate12,
  subtle: palette.slateDark.slate10,
  disabled: palette.slateDark.slate9,

  onEmphasis: '#FFFFFF',
  onEmphasisInverse: palette.inkDark.ink1,

  accentDark: palette.cantaloupeDark.cantaloupe6,
  accent: palette.cantaloupeDark.cantaloupe7,
  accentSubtle: palette.cantaloupeDark.canteloupe10Subtle,
  critical: palette.rubyDarkA.rubyA11,
  caution: palette.amberDark.amber10, // To be reviewed, might become yellow-5
  cautionSubtle: palette.amberDark.amber9,
  positive: palette.green.green11,
  positiveSubtle: palette.green.green9,
  green8: palette.green.green8,
  informative: palette.blueDark.blue10,
  bull: palette.jadeDark.jade10,
  bullSubtle: palette.jadeDark.jade9,
  bear: palette.rubyDark.ruby10,
  bearSubtle: palette.rubyDark.ruby9,

  legendBull: palette.jadeDark.jade10,
  legendBear: palette.rubyDark.ruby10,
  legendBlue: palette.blueDark.blue10,
  legendPurple: palette.purpleDark.purple10,

  teal8: palette.teal.teal8,
  teal11: palette.teal.teal11,
  blue11: palette.blue.blue11,
  blue6: palette.blue.blue6,
  blue7: palette.blue.blue7,
  blue8: palette.blue.blue8,

  shark0: palette.shark.shark0,
  shark1: palette.shark.shark1,
  shark4: palette.shark.shark4,
  shark5: palette.shark.shark5,
  shark6: palette.shark.shark6,

  ruby10: palette.rubyDark.ruby10,
  ruby11: palette.rubyDark.ruby11,

  rubyA9: palette.rubyDarkA.rubyA9,

  white: '#fff',
};

const borders = {
  none: 'transparent',
  transparent: 'transparent',

  DEFAULT: palette.slateDarkA.slateA3,
  accent: palette.cantaloupeDark.cantaloupe7,
  shark0: palette.shark.shark0, // To be reviewed
  shark1: palette.shark.shark1, // To be reviewed
  shark3: palette.shark.shark3, // To be reviewed
  shark4: palette.shark.shark4, // To be reviewed
  subtle: palette.slateDarkA.slateA2,
  slate4: palette.slateDarkA.slateA4,
  slate5: palette.slateDarkA.slateA5,
  slate8: palette.slateDark.slate8,
  interactive: palette.slateDarkA.slateA6,
  interactiveHover: palette.slateDarkA.slateA3,
  interactiveActive: palette.cantaloupeDark.cantaloupe7,
  interactiveHoverActive: palette.cantaloupeDark.cantaloupe8,
  interactiveCritical: palette.rubyDarkA.rubyA11,
  interactiveDisabled: palette.slateDarkA.slateA2,
  borderInteractiveSubtle: palette.slateDarkA.slateA3, // To be reviewed, should this be A4?
  legendBull: palette.jadeDark.jade10,
  legendBear: palette.rubyDark.ruby10,
  legendBlue: palette.blueDark.blue10,
  legendPurple: palette.purpleDark.purple10,
  cantaloupe10: palette.cantaloupeDark.canteloupe10Subtle,

  secondary: palette.slateDark.slate10,
  positiveLight: palette.green.green9,
  positive: palette.green.green11,
  slate12: palette.slateDark.slate12,

  teal11: palette.teal.teal11,
  blue11: palette.blue.blue11,
  blue6: palette.blue.blue6,
  ruby3: palette.rubyDarkA.rubyA3,
  shark2: palette.shark.shark2, // To be reviewed
  shark10: palette.shark.shark10,
};

const dividers = {
  DEFAULT: palette.slateDarkA.slateA3,
  subtle: palette.slateDarkA.slateA2,
  onLight: '#777b8436', // To be reviewed, use case in public-website
  shark2: palette.shark.shark2, // To be reviewed
};

const tokens = {
  backgroundColor: {
    ...backgroundColor,
    ...{
      divider: dividers.DEFAULT,
      dividerSubtle: dividers.subtle,
      dividerOnLight: dividers.onLight,
    },
  },
  ringColor: {
    DEFAULT: palette.cantaloupeDark.cantaloupe7,
  },
  borderColor: borders,
  outlineColor: borders,
  dividerColor: dividers,
  fill: {
    ...foregrounds,
    // support the "surface" subset of background colours
    surfaceOne: backgroundColor.surfaceOne,
    surfaceTwo: backgroundColor.surfaceTwo,
    surfaceThree: backgroundColor.surfaceThree,
    surfaceFour: backgroundColor.surfaceFour,
  },
  textColor: foregrounds,
  ringOffsetColor: {
    DEFAULT: backgroundColor.canvas,
  },
};

export default tokens;

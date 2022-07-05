type ButtonSizeStyleType = {
  '--borderRadius': string;
  '--fontSize': string;
  '--padding': string;
};

type ButtonSizes = {
  small: ButtonSizeStyleType;
  medium: ButtonSizeStyleType;
  large: ButtonSizeStyleType;
};

const SIZES: ButtonSizes = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '4px 12px',
  },
  medium: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 18 / 16 + 'rem',
    '--padding': '12px 20px',
  },
  large: {
    '--borderRadius': 4 + 'px',
    '--fontSize': 21 / 16 + 'rem',
    '--padding': '16px 32px',
  },
};

export default SIZES;

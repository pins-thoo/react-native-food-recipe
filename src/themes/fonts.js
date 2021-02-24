import { normalize } from 'utils/size';

export const fontSizes = {
  xxsmall: normalize(8),
  xsmall: normalize(10),
  small: normalize(12),
  regular: normalize(14),
  large: normalize(16),
  xlarge: normalize(18),
  xxxlarge: normalize(20),
};

export const fontFamilies = {
  notosans: {
    regular: 'Noto Sans',
    bold: 'Noto Sans Bold',
  },
  roboto: {
    regular: 'Roboto-Regular',
  },
};

export const fontSizesProps = Object.keys(fontSizes).map((key) => key);
export const fontFamiliesProps = Object.keys(fontFamilies).map((key) => key);
export const fontWeightsProps = Object.keys({ ...fontFamilies.notosans, ...fontFamilies.roboto });

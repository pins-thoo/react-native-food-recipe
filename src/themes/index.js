import { normalize } from 'utils/size';

const fontFamilies = {
  regular: 'Noto Sans',
  bold: 'Noto Sans Bold',
};

export default {
  Button: {
    buttonStyle: {
      paddingVertical: normalize(16),
      borderRadius: normalize(32),
      width: '100%',
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: normalize(5),
      },
    },
  },
  Text: {
    h1Style: {
      fontSize: normalize(36),
    },
    h2Style: {
      fontSize: normalize(32),
    },
    h3Style: {
      fontSize: normalize(28),
    },
    h4Style: {
      fontSize: normalize(24),
    },
  },
  colors: {
    primary: '#77c0c0',
    secondary: '#103061',
    success: '#10B583',
    error: '#BF1111',
    warning: '#DBBA0C',
    info: '#116ED2',
    aliceBlue: '#FAFCFF',
    darkGrayishBlue: '#8D97A5',
    dove: '#C7D4E7',
    midnightExpress: '#172132',
    solitude: '#DEE9F9',
    tangaroa: '#0B2142',
  },
  fontFamilies: {
    notosans: fontFamilies,
  },
};

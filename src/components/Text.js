import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors, { colorsProps } from 'themes/colors';
import {
  fontSizes, fontFamilies, fontSizesProps, fontWeightsProps, fontFamiliesProps,
} from 'themes/fonts';

const styles = StyleSheet.create({
  centered: {
    textAlign: 'center',
  },
  flex: {
    flex: 1,
  },
});

const Text = (props) => {
  const {
    style, children, centered, flex, size, weight, family, color, ...otherProps
  } = props;

  return (
    <RNText
      allowFontScaling={false}
      style={[
        centered && styles.centered,
        flex && styles.flex,
        {
          color: Colors[color],
          fontSize: fontSizes[size],
          fontFamily: fontFamilies[family][weight],
        },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </RNText>
  );
};

Text.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  centered: PropTypes.bool,
  flex: PropTypes.bool,
  weight: PropTypes.oneOf(fontWeightsProps),
  family: PropTypes.oneOf(fontFamiliesProps),
  size: PropTypes.oneOf(fontSizesProps),
  color: PropTypes.oneOf(colorsProps),
};

Text.defaultProps = {
  children: null,
  style: null,
  centered: false,
  flex: false,
  weight: 'regular',
  family: 'notosans',
  size: 'regular',
  color: 'black',
};

export default Text;

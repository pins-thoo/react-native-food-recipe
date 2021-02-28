import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext, Text, Input } from 'react-native-elements';

import { hidePassword, unhidePassword } from 'images';
import { normalize } from 'utils/size';

const styles = StyleSheet.create({
  container: {
    paddingTop: normalize(10),
    borderWidth: normalize(2),
    borderRadius: normalize(8),
    elevation: normalize(2),
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: normalize(15),
    },
    shadowRadius: normalize(15),
  },
  input: {
    fontSize: normalize(16),
  },
  inputLabel: {
    fontSize: normalize(14),
    fontWeight: 'normal',
    marginBottom: normalize(2),
  },
  error: {
    marginTop: normalize(16),
  },
});

const TextInput = ({
  field: { name, onChange, value },
  form: { errors, touched },
  label,
  secureTextEntry,
  containerStyle,
  inputStyle,
  ...inputProps
}) => {
  const [isFocused, setFocused] = useState(false);
  const [shouldShowValue, setShowValue] = useState(!secureTextEntry);
  const { theme: { colors } } = useContext(ThemeContext);

  const hasError = errors[name] && touched[name];

  const onSecureTextEntryIconPress = () => {
    setShowValue((prevShouldShowValue) => !prevShouldShowValue);
  };

  const renderHideValueIcon = () => (
    <Image
      style={{ width: normalize(42), height: normalize(25) }}
      source={hidePassword}
    />
  );

  const renderUnhideValueIcon = () => (
    <Image
      style={{ width: normalize(42), height: normalize(27) }}
      source={unhidePassword}
    />
  );

  return (
    <View>
      <Input
        label={label}
        value={value}
        secureTextEntry={!shouldShowValue}
        onChangeText={onChange(name)}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        containerStyle={{
          ...styles.container,
          shadowColor: colors.solitude,
          borderColor: isFocused ? colors.primary : 'transparent',
          backgroundColor: colors.white,
          ...containerStyle,
        }}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        inputStyle={{
          ...styles.input,
          backgroundColor: colors.white,
          color: colors.tangaroa,
          ...inputStyle,
        }}
        labelStyle={{
          ...styles.inputLabel,
          color: isFocused || value ? colors.primary : colors.darkGrayishBlue,
          backgroundColor: colors.white,
        }}
        errorStyle={{ display: 'none' }}
        rightIcon={
          secureTextEntry && (
            <TouchableOpacity onPress={onSecureTextEntryIconPress}>
              {shouldShowValue ? renderHideValueIcon() : renderUnhideValueIcon()}
            </TouchableOpacity>
          )
        }
        {...inputProps}
      />
      {hasError && (
        <Text
          style={{
            ...styles.error,
            color: colors.error,
          }}
        >
          {errors[name]}
        </Text>
      )}
    </View>
  );
};

TextInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
};

TextInput.defaultProps = {
  label: '',
  secureTextEntry: false,
  containerStyle: {},
  inputStyle: {},
};

export default TextInput;

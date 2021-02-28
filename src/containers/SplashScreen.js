import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mockIcon } from 'images';
import { navigate } from 'navigators/app/AppNavigationService';
import { normalize } from 'utils/size';
import { Text } from 'components';

const styles = StyleSheet.create({
  logoImgContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: normalize(100),
    height: normalize(100),
  },
  buttonsContainer: {
    paddingHorizontal: normalize(14),
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    shadowColor: 'rgba(29, 191, 115, 0.2)',
    borderRadius: normalize(32),
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

const SplashScreen = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.logoImgContainer}>
        <Image
          source={mockIcon}
          style={styles.logoImg}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#77c0c0', '#add372']}
          style={{
              ...styles.button,
              marginBottom: normalize(20),
          }}
        >
          <TouchableOpacity
            onPress={() => navigate("Sign Up")}
          >
            <Text style={styles.buttonText}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          style={{
              ...styles.button,
              borderWidth: 1,
              borderColor: '#add372',
          }}
          onPress={() => navigate("Log In")}
        >
          <Text style={{
              ...styles.buttonText,
              color: '#77c0c0',
          }}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </View>
);

export default SplashScreen;

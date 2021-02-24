import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from 'actions';
import Selectors from 'selectors';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Colors from 'themes/colors';
import { normalize } from 'utils/size';
import CONFIG from 'react-native-config';
import { Text } from 'components';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: normalize(10),
    padding: normalize(10),
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: normalize(5),
  },
});

const Auth = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(Selectors.createLoadingSelector([Actions.SIGN_IN_REQUEST]));
  const token = useSelector(Selectors.getToken);
  const signIn = () => dispatch(Actions.signIn({ username: 'test', password: '1234' }));
  return (
    <View style={styles.container}>
      <Text color="white">Welcome to Auth</Text>
      <Text color="white">
        {`Environment: ${CONFIG.ENVIRONMENT}`}
      </Text>
      {token === null && (
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text color="white">Sign In</Text>
        </TouchableOpacity>
      )}
      {isLoading && <ActivityIndicator color="white" />}
    </View>
  );
};

export default Auth;

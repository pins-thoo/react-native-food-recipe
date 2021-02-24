import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from 'actions';
import Selectors from 'selectors';
import {
  View,
  StyleSheet,
  TouchableOpacity,
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
  buttonSignOut: {
    margin: normalize(10),
    padding: normalize(10),
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    borderRadius: normalize(5),
  },
  buttonSignOutText: {
    color: Colors.primary,
  },
});

const Dashboard = () => {
  const dispatch = useDispatch();
  const token = useSelector(Selectors.getToken);
  const signOut = () => dispatch(Actions.signOut());

  return (
    <View style={styles.container}>
      <Text color="white">Welcome to Dashboard</Text>
      <Text color="white">
        {`Environment: ${CONFIG.ENVIRONMENT}`}
      </Text>
      {token !== null && (
        <TouchableOpacity
          style={styles.buttonSignOut}
          onPress={signOut}
        >
          <Text style={styles.buttonSignOutText}>
            Sign Out
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Dashboard;

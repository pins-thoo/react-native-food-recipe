import React, { useContext } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Actions from 'actions';
import Selectors from 'selectors';
import { Button, Text, ThemeContext } from 'react-native-elements';
import { Field, Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigate } from 'navigators/app/AppNavigationService';
import { useDispatch, useSelector } from 'react-redux';
import { normalize } from 'utils/size';

import * as Yup from 'yup';
import { TextInput } from 'components';

const LoginSchema = Yup.object().shape({
  user_email: Yup.string().email('Invalid email').required('Email is required'),
  user_password: Yup.string().required('Password is required'),
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: normalize(14),
    paddingBottom: normalize(14),
  },
  headingContainer: {
    alignItems: 'center',
    marginTop: normalize(30),
  },
  form: {
    marginTop: normalize(35),
  },
  signInButton: {
    marginTop: normalize(40),
    marginBottom: normalize(38),
  },
});

const SignIn = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(Selectors.createLoadingSelector([Actions.SIGN_IN_REQUEST]));
  const token = useSelector(Selectors.getToken);
  const { theme: { colors } } = useContext(ThemeContext);
  const initialValues = {
    user_email: '',
    user_password: '',
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(Actions.signIn(values));
  };

  return (
    <ScrollView style={{ backgroundColor: colors.primary }}>
      <SafeAreaView style={styles.contentContainer}>
        <View style={styles.headingContainer}>
          <Text
            h1
            style={{ color: colors.secondary, marginTop: normalize(16.5) }}
          >
            Sign In
          </Text>
        </View>
        {token === null && (
          <Formik
            onSubmit={onSubmit}
            validationSchema={LoginSchema}
            initialValues={initialValues}
          >
            {({ handleSubmit }) => (
              <View style={styles.form}>
                <View style={{ minWidth: normalize(75), marginRight: normalize(16) }}>
                  <Field
                    name="user_email"
                    className="py-4"
                    component={TextInput}
                    type="email"
                    placeholder="Email"
                    containerClassName="mb-4"
                  />
                </View>
                <View style={{ marginVertical: normalize(32) }}>
                  <Field
                    name="user_password"
                    className="py-4"
                    component={TextInput}
                    type="password"
                    placeholder="Password"
                    containerClassName="mb-4"
                  />
                </View>
                <Button
                  title="SIGN IN"
                  loading={false}
                  containerStyle={styles.signInButton}
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignIn;

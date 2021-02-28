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
  first_name: Yup.string().required('This is required'),
  last_name: Yup.string().required('This is required'),
  phone_number: Yup.string().required('This is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
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
  signUpButton: {
    marginTop: normalize(40),
    marginBottom: normalize(38),
  },
});

const SignUp = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(Selectors.createLoadingSelector([Actions.SIGN_UP_REQUEST]));
  const { theme: { colors } } = useContext(ThemeContext);
  const initialValues = {
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(Actions.signUp(values));
  };

  return (
    <ScrollView style={{ backgroundColor: colors.primary }}>
      <SafeAreaView style={styles.contentContainer}>
        <View style={styles.headingContainer}>
          <Text
            h1
            style={{ color: colors.secondary, marginTop: normalize(16.5) }}
          >
            Create new account
          </Text>
        </View>
          <Formik
            onSubmit={onSubmit}
            validationSchema={LoginSchema}
            initialValues={initialValues}
          >
            {({ handleSubmit }) => (
              <View style={styles.form}>
                <View style={{ minWidth: normalize(75), marginRight: normalize(16) }}>
                  <Field
                    name="first_name"
                    label="First Name"
                    autoCorrect={false}
                    component={TextInput}
                  />
                </View>
                <View style={{ minWidth: normalize(75), marginRight: normalize(16) }}>
                  <Field
                    name="last_name"
                    label="Last Name"
                    autoCorrect={false}
                    component={TextInput}
                  />
                </View>
                <View style={{ minWidth: normalize(75), marginRight: normalize(16) }}>
                  <Field
                    component={TextInput}
                    name="phone_number"
                    label="Phone Number"
                  />
                </View>
                <View style={{ minWidth: normalize(75), marginRight: normalize(16) }}>
                  <Field
                    name="email"
                    className="py-4"
                    component={TextInput}
                    type="email"
                    placeholder="Email"
                    containerClassName="mb-4"
                  />
                </View>
                <View style={{ marginVertical: normalize(32) }}>
                  <Field
                    name="password"
                    className="py-4"
                    component={TextInput}
                    type="password"
                    placeholder="Password"
                    containerClassName="mb-4"
                  />
                </View>
                <Button
                  title="SIGN UP"
                  loading={isLoading}
                  containerStyle={styles.signUpButton}
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;

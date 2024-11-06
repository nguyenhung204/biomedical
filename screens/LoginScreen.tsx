import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import GoogleLogin from '../components/GoogleLogin';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Text>Login Screen</Text>
      <GoogleLogin />
    </SafeAreaView>
  );
};

export default LoginScreen;

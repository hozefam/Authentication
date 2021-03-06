import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Logo from '../../assets/images/logo.png';

const SignInScreen = () => {
  const {height} = useWindowDimensions();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    console.log('On SignIn');
  };

  const onForgotPasswordPressed = () => {
    console.log('On Forgot Password');
  };

  const onSignUpPressed = () => {
    console.log('On SignUp');
  };

  const onSignInFacebook = () => {};
  const onSignInGoogle = () => {};
  const onSignInApple = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator="false">
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton onPress={onSignInPressed} text="Sign In" />
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot Password?"
          type="TERTIARY"
        />
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In with Apple"
          onPress={onSignInApple}
          bgColor="#E3E3E3"
          fgColor="#363636"
        />
        <CustomButton
          onPress={onSignUpPressed}
          text="Don't have an account? Create one"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

import Input from '../components/atoms/Form/Input';
import Checkbox from '../components/atoms/Form/Checkbox';
import CustomButton from '../components/atoms/Form/CustomButton';
import useBusyIndicator from '../components/atoms/Form/BusyIndicator';
import {RegisterStyle as Style} from './Styles';
import React, {useState, useCallback} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {signInGoogle} from '../auth/authGoogle';
import {SignIn, SignUp} from '../auth/authFirestore';
import {useFormik} from 'formik';
import {
  SignUpSchema,
  validateCredentials,
} from '../utils/schemasValidateProfile';
import SvgComponent from '../assets/svg/Stacked';
import {useUser} from '../utils/user';
const Register = ({navigation}) => {
  const storeUser = useUser(state => state.storeUser);
  const [signUpForm, setSignUpForm] = useState(true);
  const {BIVisible, BusyIndicator} = useBusyIndicator();

  const formik = useFormik({
    initialValues: {userName: '', email: '', password: '', check: false},
    validationSchema: SignUpSchema,
    validateOnChange: false,
    onSubmit: formValue => {},
  });
  const GoogleSing = useCallback(async () => {
    try {
      BIVisible(true);
      const user = await signInGoogle();
      storeUser(user);
      BIVisible(false);
    } catch (err) {
      BIVisible(false);
      console.log('Ocurrio un error' + err);
    }
  }, [BIVisible, storeUser]);

  const submit = async () => {
    try {
      BIVisible(true);
      formik.values.userName = formik.values.userName.replace(/\s/g, '');
      formik.values.password = formik.values.password.replace(/\s/g, '');
      formik.submitForm();
      const {userName, check, email, password} = formik.values;
      if (signUpForm) {
        await validateCredentials(formik.values, true);
        const user = await SignUp({userName, suscribe: check, email, password});
        storeUser(user);
      } else {
        await validateCredentials(formik.values);
        const user = await SignIn(email, password);
        storeUser(user);
      }
      BIVisible(false);
    } catch (err) {
      BIVisible(false);
    }
  };

  return (
    <SafeAreaView style={Style.MainContainer}>
      <View style={Style.SvgComponent}>
        <SvgComponent />
      </View>
      <ScrollView contentContainerStyle={Style.ScrollContainer}>
        <Text style={Style.Title}>Brightshop</Text>
        {signUpForm && (
          <Input
            title="User Name *"
            error={formik.errors.userName}
            value={formik.values.userName}
            onChangeText={text => formik.setFieldValue('userName', text)}
          />
        )}
        <Input
          title="Email *"
          error={formik.errors.email}
          value={formik.values.email}
          onChangeText={text => formik.setFieldValue('email', text)}
        />
        <Input
          title="Password *"
          error={formik.errors.password}
          value={formik.values.password}
          onChangeText={text => formik.setFieldValue('password', text)}
          secure
        />
        {signUpForm && (
          <Checkbox
            title="I agree to the Terms and Privacy Policy *"
            error={formik.errors.check}
            value={formik.values.check}
            onChangeText={Value => formik.setFieldValue('check', Value)}
          />
        )}
        <CustomButton
          style={Style.Btn}
          onPress={submit}
          title={signUpForm ? 'Sign Up' : 'Log In'}
        />
        <CustomButton
          style={Style.Btn}
          onPress={GoogleSing}
          title={signUpForm ? 'Sing Up With Google' : 'Log In With Google'}
          iconName="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png"
        />
        <View style={Style.ContainerRow}>
          <Text style={Style.Text}>
            {signUpForm
              ? 'Already have an account? '
              : 'You need to register? '}
          </Text>
          <CustomButton
            style={Style.ChangeScreenBtn}
            styleText={Style.Link}
            onPress={() => setSignUpForm(!signUpForm)}
            title={signUpForm ? 'Log In' : 'Sing Up'}
          />
        </View>
        <BusyIndicator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {useFormik} from 'formik';
import RegisterStyle from './Style';
import * as Yup from 'yup';
import useBusyIndicator from '../components/atoms/register/BusyIndicator';
import Input from '../components/atoms/register/Input';
import Checkbox from '../components/atoms/register/checkbox';
import {SignIn, logIn} from '../auth/authFirestore';
import {signInGoogle} from '../auth/authGoogle';
import CustomButton from '../components/atoms/register/CustomButton';

const LogInSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Name Required'),
  email: Yup.string().email('Invalid email').required('Email Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .required('Password Required')
    .matches(
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      'Must Contain 6 Characters, One Lowercase, One Number and One Special Case Character',
    ),
  check: Yup.boolean()
    .oneOf([true], 'you must accept the terms')
    .required('Required'),
});
const SingInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .required('Password Required')
    .matches(
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      'Must Contain 6 Characters, One Lowercase, One Number and One Special Case Character',
    ),
});

const Register = ({navigation}) => {
  const [isRegisterScreen, setIsRegister] = useState(true);
  const BusyIndicator = useBusyIndicator();

  const formik = useFormik({
    initialValues: {name: '', email: '', password: '', check: false},
    validationSchema: LogInSchema,
    validateOnChange: false,
    onSubmit: formValue => {},
  });

  const GoogleSing = async () => {
    try {
      BusyIndicator.Visible(true);
      await signInGoogle(navigation);
      BusyIndicator.Visible(false);
    } catch (err) {
      BusyIndicator.Visible(false);
      console.log('Ocurrio un error' + err);
    }
  };

  const MethodLogIn = async () => {
    try {
      BusyIndicator.Visible(true);
      formik.submitForm();
      const {name, check, email, password} = formik.values;
      await LogInSchema.validate(formik.values);
      await logIn(name, check, email, password, navigation);
      BusyIndicator.Visible(false);
    } catch (err) {
      BusyIndicator.Visible(false);
      console.log('Ocurrio un error' + err);
    }
  };

  const MethodSingIn = async () => {
    try {
      BusyIndicator.Visible(true);
      formik.submitForm();
      const {email, password} = formik.values;
      await SingInSchema.validate(formik.values);
      await SignIn(email, password, navigation);
      BusyIndicator.Visible(false);
    } catch (err) {
      BusyIndicator.Visible(false);
      console.log('Ocurrio un error' + err);
    }
  };

  return (
    <ScrollView style={RegisterStyle.container}>
      <Text style={RegisterStyle.title}>Brightshop</Text>
      <View style={RegisterStyle.view}>
        {isRegisterScreen && (
          <Input
            title="First Name *"
            error={formik.errors.name}
            value={formik.values.name}
            onChangeText={text => formik.setFieldValue('name', text)}
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
        {isRegisterScreen && (
          <Checkbox
            title="I agree to the Terms and Privacy Policy *"
            error={formik.errors.check}
            value={formik.values.check}
            onChangeText={Value => formik.setFieldValue('check', Value)}
          />
        )}
        <CustomButton
          onPress={() => {
            isRegisterScreen ? MethodLogIn() : MethodSingIn();
          }}
          title={isRegisterScreen ? 'Log In' : 'Sing In'}
        />
        <CustomButton
          onPress={GoogleSing}
          title={
            isRegisterScreen ? 'Log In With Google"' : 'Sing In With Google"'
          }
          google
        />
        <View style={RegisterStyle.row}>
          <Text>
            {!isRegisterScreen
              ? 'You need to register? '
              : 'Already have an account? '}
          </Text>
          <Pressable onPress={() => setIsRegister(!isRegisterScreen)}>
            <Text style={RegisterStyle.link}>
              {!isRegisterScreen ? 'Log In' : 'Sing In'}
            </Text>
          </Pressable>
        </View>
        {BusyIndicator.Component}
      </View>
    </ScrollView>
  );
};

export default Register;

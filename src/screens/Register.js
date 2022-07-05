import React from 'react';
import {View, Text, Button} from 'react-native';

const Register = ({navigation}) => {
  return (
    <View>
      <Text>Register Screen</Text>
      <Button title="Hola" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Register;

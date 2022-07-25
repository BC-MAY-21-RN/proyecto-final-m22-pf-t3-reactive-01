import React from 'react';
import {View} from 'react-native';
import Header from '../components/atoms/Header';

const Home = ({navigation}) => {
  return (
    <View>
      <Header
        name="Home"
        navigation={navigation}
        optional
        icon="cart"
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

export default Home;

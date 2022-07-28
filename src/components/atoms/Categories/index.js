import React from 'react';
import {Pressable, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesStyles from './categoriesStyles';
import BtnCategory from '../BtnCategory';

const Categories = props => {
  const {navigation, selected} = props;
  return (
    <View style={categoriesStyles.container}>
      <BtnCategory
        selected={selected}
        category="Home"
        title="Home"
        name="home"
        onPress={() => {
          navigation.navigate('Category', {
            category: 'Home',
          });
        }}
      />
      <BtnCategory
        selected={selected}
        category="Supermarket"
        title="Super"
        name="shoppingcart"
        onPress={() => {
          navigation.navigate('Category', {
            category: 'Supermarket',
          });
        }}
      />
      <BtnCategory
        selected={selected}
        category="Fashion"
        title="Fashion"
        name="tshirt-crew-outline"
        onPress={() => {
          navigation.navigate('Category', {
            category: 'Fashion',
          });
        }}
        icon2
      />
      <BtnCategory
        selected={selected}
        category="Technology"
        title="Technology"
        name="monitor-cellphone"
        onPress={() => {
          navigation.navigate('Category', {
            category: 'Technology',
          });
        }}
        icon2
      />
      <BtnCategory
        selected={selected}
        category="Games"
        title="Games"
        name="gamepad-variant-outline"
        onPress={() => {
          navigation.navigate('Category', {
            category: 'Games',
          });
        }}
        icon2
      />
    </View>
  );
};

export default Categories;

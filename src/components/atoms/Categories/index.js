import React from 'react';
import {View} from 'react-native';
import categoriesStyles from './categoriesStyles';
import BtnCategory from '../BtnCategory';

const Categories = props => {
  const {navigation, selected, setProducts, setEmpty} = props;
  return (
    <View style={categoriesStyles.container}>
      <BtnCategory
        selected={selected}
        category="Home"
        title="Home"
        name="home"
        onPress={() => {
          setEmpty ? setEmpty(false) : null;
          setProducts ? setProducts([]) : null;
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
          setEmpty ? setEmpty(false) : null;
          setProducts ? setProducts([]) : null;
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
          setEmpty ? setEmpty(false) : null;
          setProducts ? setProducts([]) : null;
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
          setEmpty ? setEmpty(false) : null;
          setProducts ? setProducts([]) : null;
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
          setEmpty ? setEmpty(false) : null;
          setProducts ? setProducts([]) : null;
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

import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import VerticalList from '../components/atoms/VerticalList';
import Header from '../components/atoms/Header';
import {getMyProducts} from '../auth/cloudFirestore';
import {useUser} from '../utils/user';
import {useFocusEffect} from '@react-navigation/native';
const MyProducts = ({navigation}) => {
  const user = useUser(state => state.user);
  const [products, setProducts] = useState([]);
  useFocusEffect(
    useCallback(() => {
      getMyProducts(user.uid, setProducts);
    }, [user]),
  );
  return (
    <View>
      <Header name="My products" BackBtn />
      <VerticalList data={products} seller navigation={navigation} />
    </View>
  );
};

export default MyProducts;

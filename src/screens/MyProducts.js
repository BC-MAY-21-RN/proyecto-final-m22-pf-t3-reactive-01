import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import VerticalList from '../components/atoms/VerticalList';
import Header from '../components/atoms/Header';
import {subscriberMyProducts} from '../auth/cloudFirestore';
import {useUser} from '../utils/user';
const MyProducts = ({navigation}) => {
  const user = useUser(state => state.user);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const sub = subscriberMyProducts(user.uid, setProducts);
    return sub;
  }, [user.uid]);

  return (
    <View>
      <Header name="My products" BackBtn />
      <VerticalList data={products} seller navigation={navigation} />
    </View>
  );
};

export default MyProducts;

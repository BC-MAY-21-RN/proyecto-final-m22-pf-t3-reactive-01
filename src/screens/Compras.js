import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import Header from '../components/atoms/Header';
import VerticalList from '../components/atoms/VerticalList';
import {WishStyles} from './Styles';
import BtnIcon from '../components/atoms/btnIcon';
import {getMyPruchases} from '../auth/cloudFirestore';
import {useUser} from '../utils/user';
import {useFocusEffect} from '@react-navigation/native';
const Compras = ({navigation}) => {
  const user = useUser(state => state.user);
  const [products, setProducts] = useState([]);
  const [isEmpty, setEmpty] = useState(true);
  useFocusEffect(
    useCallback(() => {
      getMyPruchases(user.uid, setProducts, setEmpty);
    }, [user]),
  );
  console.log(products);
  return (
    <View>
      <Header
        name="Shopping bag"
        icon="cart"
        directory={'Ionicons'}
        onPress={() => navigation.navigate('Cart')}
        BackBtn
      />
    </View>
  );
};

export default Compras;

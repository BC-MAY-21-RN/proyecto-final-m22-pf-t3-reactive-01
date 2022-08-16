import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import Header from '../components/atoms/Header';
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
  return (
    <View>
      <Header
        name="Shopping bag"
        icon="cart"
        directory={'Ionicons'}
        onPress={() => navigation.navigate('Cart')}
        BackBtn
      />
      {isEmpty ? (
        <View style={WishStyles.container}>
          <Text style={WishStyles.text}>You don't have any purchase...</Text>
          <BtnIcon
            iconName={'telescope'}
            directory={'MaterialCommunityIcons'}
            size={50}
            styleIcon={WishStyles.Black}
            style={WishStyles.ImageBtn}
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={WishStyles.text2}>
            Browse now and discover new products (⁀ᗢ⁀)
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default Compras;

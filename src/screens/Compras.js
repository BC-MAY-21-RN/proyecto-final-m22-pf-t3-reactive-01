import React, {useState, useCallback} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../components/atoms/Header';
import {WishStyles, Shopping} from './Styles';
import BtnIcon from '../components/atoms/btnIcon';
import {getMyPruchases} from '../auth/cloudFirestore';
import {useUser} from '../utils/user';
import {useFocusEffect} from '@react-navigation/native';
import ItemShopping from '../components/atoms/ItemShopping';

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
      <Header name="Shopping bag" BackBtn />
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
      ) : (
        <ScrollView style={Shopping.ScrollContainer}>
          {products.map((item, key) => (
            <ItemShopping key={key} index={key} item={item} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Compras;

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Header from '../components/atoms/Header';
import VerticalList from '../components/atoms/VerticalList';
import {WishStyles} from './Styles';
import BtnIcon from '../components/atoms/btnIcon';
import {subscriberMyWishList} from '../auth/cloudFirestore';
import {useUser} from '../utils/user';
const Favoritos = ({navigation}) => {
  const user = useUser(state => state.user);
  const [products, setProducts] = useState([]);
  const [isEmpty, setEmpty] = useState(true);
  useEffect(() => {
    const sub = subscriberMyWishList(user.uid, setProducts, setEmpty);
    return sub;
  }, [user]);
  return (
    <View>
      <Header
        name="Wish List"
        icon="cart"
        directory={'Ionicons'}
        onPress={() => navigation.navigate('Cart')}
        BackBtn
      />
      {isEmpty ? (
        <View style={WishStyles.container}>
          <Text style={WishStyles.text}>Oh no! your Wish List is empty...</Text>
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
        <VerticalList data={products} navigation={navigation} />
      )}
    </View>
  );
};

export default Favoritos;

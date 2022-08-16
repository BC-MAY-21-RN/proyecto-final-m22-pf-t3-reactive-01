import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../components/atoms/Header';
import {WishStyles} from './Styles';
import BtnIcon from '../components/atoms/btnIcon';
import {getMyPruchases, getOneDocumenByUid} from '../auth/cloudFirestore';
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
      ) : (
        <ScrollView style={{width: 350, height: 150}}>
          {products.map((item, key) => (
            <ItemShopping key={key} index={key} item={item} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const ItemShopping = props => {
  const {index, item} = props;
  const address = item.address;
  const payment = item.payment;
  const order = item.order;
  const [product, setProduct] = useState();
  useEffect(() => {
    getOneDocumenByUid('Products', order.productID).then(doc => {
      setProduct(doc);
    });
  }, [order.productID]);
  console.log(product);
  return (
    <View>
      <Text>{index}</Text>
    </View>
  );
};

export default Compras;

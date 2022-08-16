import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import Header from '../components/atoms/Header';
import {WishStyles, Shopping} from './Styles';
import BtnIcon from '../components/atoms/btnIcon';
import {getMyPruchases, getOneDocumenByUid} from '../auth/cloudFirestore';
import {useUser} from '../utils/user';
import {useFocusEffect} from '@react-navigation/native';
import ItemAddress from '../components/atoms/ItemAddress';
import ItemCard from '../components/atoms/ItemCard';

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

const ItemShopping = props => {
  const {index, item} = props;
  const address = item.address;
  const payment = item.payment;
  const order = item.order;
  const [product, setProduct] = useState();
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    getOneDocumenByUid('Products', order.productID).then(doc => {
      setProduct(doc);
    });
  }, [order.productID]);
  return (
    <View>
      {product ? (
        <Item product={product} selected={selected} setSelected={setSelected} />
      ) : null}
      {selected ? <ShowMore address={address} payment={payment} /> : null}
    </View>
  );
};

const Item = props => {
  const {product, selected, setSelected} = props;
  const {name, image} = product;
  return (
    <View style={Shopping.itemContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={Shopping.image}
      />
      <Text style={Shopping.title}>{name}</Text>
      <View style={Shopping.btnContainer}>
        <BtnIcon
          iconName={selected ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
          directory={'MaterialIcons'}
          size={30}
          styleIcon={WishStyles.Black}
          style={
            selected
              ? [Shopping.ImageBtn, {borderColor: 'rgba(65,137,230,.15)'}]
              : Shopping.ImageBtn
          }
          onPress={() => setSelected(!selected)}
        />
      </View>
    </View>
  );
};

const ShowMore = props => {
  const {address, payment} = props;
  return (
    <View style={Shopping.ShowMore}>
      <View>
        <Text style={Shopping.title2}>Address information</Text>
        <ItemAddress
          name={address.name}
          street={address.street}
          state={address.state}
          code={address.code}
          country={address.country}
          phone={address.phone}
          disable
        />
      </View>
      <View>
        <Text style={Shopping.title2}>Payment method</Text>
        <ItemCard
          alias={payment.alias}
          holder={payment.holder}
          month={payment.month}
          year={payment.year}
          disable
        />
      </View>
    </View>
  );
};

export default Compras;

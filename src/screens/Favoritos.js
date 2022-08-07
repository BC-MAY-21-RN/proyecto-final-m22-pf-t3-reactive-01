import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Header from '../components/atoms/Header';
import {useIsFocused} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import VerticalList from '../components/atoms/VerticalList';
import auth from '@react-native-firebase/auth';
import {WishStyles} from './Styles';
import BtnIcon from '../components/atoms/btnIcon';

const Favoritos = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [isEmpty, setEmpty] = useState();
  const userId = auth().currentUser.uid;
  const isFocused = useIsFocused();
  useEffect(() => {
    firestore()
      .collection('Products')
      .where('like', 'array-contains', userId)
      .get()
      .then(querySnapshot => {
        const productsAux = [];
        querySnapshot.forEach(documentSnapshot => {
          documentSnapshot.data().documentId = documentSnapshot.id;
          productsAux.push(documentSnapshot.data());
        });
        productsAux.length > 0 ? setEmpty(false) : setEmpty(true);
        isFocused && setProducts(productsAux);
      })
      .catch();
  }, [userId, isFocused]);

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

import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Header from '../components/atoms/Header';
import {useIsFocused} from '@react-navigation/native';
import Categories from '../components/atoms/Categories';
import firestore from '@react-native-firebase/firestore';
import VerticalList from '../components/atoms/VerticalList';

const Category = ({route: {params}, navigation}) => {
  const [products, setProducts] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    firestore()
      .collection('Products')
      .where('category', '==', params?.category)
      .get()
      .then(querySnapshot => {
        const productsAux = [];
        querySnapshot.forEach(documentSnapshot => {
          documentSnapshot.data().documentId = documentSnapshot.id;
          productsAux.push(documentSnapshot.data());
        });
        isFocused && setProducts(productsAux);
      })
      .catch();
  }, [isFocused, params?.category]);

  return (
    <View>
      <Header
        name={params?.category}
        navigation={navigation}
        icon="cart"
        onPress={() => navigation.navigate('Cart')}
        BackBtn
      />
      <Categories navigation={navigation} selected={params?.category} />
      <VerticalList data={products} navigation={navigation} />
    </View>
  );
};

export default Category;

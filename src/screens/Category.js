import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Header from '../components/atoms/Header';
import Categories from '../components/atoms/Categories';
import firestore from '@react-native-firebase/firestore';
import VerticalList from '../components/atoms/VerticalList';

const Category = ({route: {params}, navigation}) => {
  const [products, setProducts] = useState([]);
  const [isEmpty, setEmpty] = useState();
  useEffect(() => {
    const getData = async () => {
      await firestore()
        .collection('Products')
        .where('category', '==', params?.category)
        .get()
        .then(querySnapshot => {
          const productsAux = [];
          querySnapshot.forEach(documentSnapshot => {
            documentSnapshot.data().documentId = documentSnapshot.id;
            productsAux.push(documentSnapshot.data());
          });
          productsAux.length > 0 ? setEmpty(false) : setEmpty(true);
          setProducts(productsAux);
        })
        .catch();
    };
    getData();
  }, [params?.category]);
  return (
    <View>
      <Header
        name={params?.category}
        navigation={navigation}
        icon="cart"
        onPress={() => navigation.navigate('Cart')}
        BackBtn
      />
      <Categories
        navigation={navigation}
        selected={params?.category}
        setProducts={setProducts}
        setEmpty={setEmpty}
      />
      {isEmpty ? (
        <Text
          style={{
            marginTop: 100,
            textAlign: 'center',
            fontSize: 18,
            fontStyle: 'italic',
          }}>
          {' '}
          No results found{' '}
        </Text>
      ) : (
        <VerticalList data={products} navigation={navigation} />
      )}
    </View>
  );
};

export default Category;

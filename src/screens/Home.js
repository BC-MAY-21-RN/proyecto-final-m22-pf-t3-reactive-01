import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Header from '../components/atoms/Header';
import {useIsFocused} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import VerticalList from '../components/atoms/VerticalList';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const isFocused = useIsFocused();
  const [searchValue, setSearchValue] = useState();
  useEffect(() => {
    firestore()
      .collection('Products')
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
  }, [isFocused]);

  //Search method
  useEffect(() => {
    //Function to get all products
    const getProducts = async () => {
      const data = await firestore().collection('Products').get();
      const productsAux = [];
      data.forEach(documentSnapshot => {
        productsAux.push(documentSnapshot.data());
      });
      return productsAux;
    };
    //Function to filter the products
    const getProductsFiltered = async () => {
      const productsAux = await getProducts();
      const productsAuxFiltered = productsAux.filter(product => {
        const nombreLowCase = product.name.toLowerCase();
        if (searchValue) {
          if (nombreLowCase.includes(searchValue.toLowerCase())) {
            return product;
          }
        }
      });
      isFocused && setFilter(searchValue ? productsAuxFiltered : null);
    };
    getProductsFiltered();
  }, [isFocused, searchValue]);

  return (
    <View>
      <Header
        name="Home"
        navigation={navigation}
        icon="cart"
        onPress={() => navigation.navigate('Cart')}
        search={[searchValue, setSearchValue]}
      />
      <VerticalList data={filter ? filter : products} navigation={navigation} />
    </View>
  );
};

export default Home;

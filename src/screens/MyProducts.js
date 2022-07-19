import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import VerticalList from '../components/atoms/VerticalList';
import Header from '../components/atoms/Header';
import {useIsFocused} from '@react-navigation/native';

const MyProducts = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    const current = auth().currentUser.uid;
    firestore()
      .collection('Products')
      .where('uid', '==', current)
      .get()
      .then(querySnapshot => {
        const productsAux = [];
        querySnapshot.forEach(documentSnapshot => {
          documentSnapshot.data().documentId = documentSnapshot.id;
          productsAux.push(documentSnapshot.data());
        });
        isFocused && setProducts(productsAux);
      })
      .catch(error => console.log(error));
  }, [isFocused]);
  return (
    <View>
      <Header name="My products" navigation={navigation} />
      <VerticalList data={products} seller />
    </View>
  );
};

export default MyProducts;

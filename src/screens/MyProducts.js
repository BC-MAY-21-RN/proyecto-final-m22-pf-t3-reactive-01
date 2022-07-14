import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import VerticalList from '../components/atoms/VerticalList';

const MyProducts = ({navigation}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const current = auth().currentUser.uid;
    firestore()
      .collection('Products')
      .where('uid', '==', current)
      .get()
      .then(querySnapshot => {
        const productsAux = [];
        querySnapshot.forEach(documentSnapshot => {
          productsAux.push(documentSnapshot.data());
        });
        setProducts(productsAux);
      })
      .catch(error => console.log(error));
  }, [navigation]);
  return (
    <View>
      <VerticalList data={products} />
    </View>
  );
};

export default MyProducts;

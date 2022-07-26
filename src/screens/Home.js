import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Header from '../components/atoms/Header';
import {useIsFocused} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import VerticalList from '../components/atoms/VerticalList';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const isFocused = useIsFocused();
  const [searchValue, setSearchValue] = useState();
  useEffect(() => {
    const current = auth().currentUser.uid;
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
      .catch(error => console.log(error));
  }, [isFocused]);
  return (
    <View>
      <Header
        name="Home"
        navigation={navigation}
        icon="cart"
        onPress={() => navigation.navigate('Cart')}
        search={[searchValue, setSearchValue]}
      />
      <VerticalList data={products} navigation={navigation} />
    </View>
  );
};

export default Home;

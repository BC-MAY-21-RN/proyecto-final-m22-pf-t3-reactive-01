import {Text, View, Image} from 'react-native';
import Header from '../components/atoms/Header';
import {ProductsSellerStyle} from './Styles';
import auth from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import {getUserInfo} from '../auth/authFirestore';
import firestore from '@react-native-firebase/firestore';
import ContainerProducts from '../components/atoms/ContainerProducts';
import Loader from '../components/atoms/Loader';

const ProductsSeller = ({route: {params},navigation}) => {
  const current = auth().currentUser;
  const [userInfo, setUserInfo] = useState('');
  const [products, setProducts] = useState('');
  const [loading, setLoading] = useState('')

  useEffect(() => {
    setLoading(true)
    getUserInfo(current, setUserInfo),
      firestore()
        .collection('Products')
        .where('uidUser', '==', current.uid)
        .get()
        .then(querySnapshot => {
          const productsAux = [];
          querySnapshot.forEach(documentSnapshot => {
            productsAux.push(documentSnapshot.data());
          });
          setProducts(productsAux);
          console.log(products);
        })
        .catch();
  }, []);

  return (
    <>
      <Header name="ProductsSeller" navigation={navigation} BackBtn />
      <Loader state={loading} text={'loading..'} stateEdit={setLoading} />
      <View style={ProductsSellerStyle.container}>
        <View style={ProductsSellerStyle.containerTop}>
          <View style={ProductsSellerStyle.containerImageAndName}>
            <Image
              source={{
                uri: userInfo.image
                  ? userInfo.image
                  : 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png',
              }}
              style={ProductsSellerStyle.image}
            />

            <View style={ProductsSellerStyle.containerLabels}>
              <Text style={ProductsSellerStyle.labelName}>
                {userInfo.userName}
              </Text>
              <Text style={ProductsSellerStyle.labelUserType}>
                {userInfo.userType}
              </Text>
            </View>
          </View>
        </View>

        <ContainerProducts data={products} navigation={navigation} />
      </View>
    </>
  );
};

export default ProductsSeller;

import {Text, View, Image} from 'react-native';
import Header from '../components/atoms/Header';
import {ProductsSellerStyle} from './Styles';
import {useEffect, useState} from 'react';
import ContainerProducts from '../components/atoms/ContainerProducts';
import Loader from '../components/atoms/Loader';
import {getMyProducts, getOneDocumenByUid} from '../auth/cloudFirestore';

const ProductsSeller = ({route: {params}, navigation}) => {
  const [userInfo, setUserInfo] = useState('');
  const [products, setProducts] = useState('');
  const [loading, setLoading] = useState('');
  const {uid} = params;
  useEffect(() => {
    setLoading(true);
    getOneDocumenByUid('Users', uid).then(doc => {
      setUserInfo(doc);
      getMyProducts(uid, setProducts);
    });
  }, [uid]);

  return (
    <>
      <Header name="ProductsSeller" navigation={navigation} BackBtn />
      <View style={ProductsSellerStyle.container}>
        {loading ? (
          <>
            <View style={ProductsSellerStyle.imageLoadContainer}>
              <Text></Text>
            </View>
            <View style={ProductsSellerStyle.imageLoad}>
              <Text></Text>
            </View>
            <Loader
              state={loading}
              text={'loading..'}
              stateEdit={setLoading}
              colorBack={'#00000000'}
              iconLoad={'albums'}
            />
            <ContainerProducts
              data={products}
              navigation={navigation}
              loaded={true}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </View>
    </>
  );
};

export default ProductsSeller;

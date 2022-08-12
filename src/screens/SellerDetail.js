import {Text, View} from 'react-native';
import Header from '../components/atoms/Header';
import {SellerDetailStyle} from './Styles';
import auth from '@react-native-firebase/auth';
import { getUserInfo } from '../auth/authFirestore';
import { useState } from 'react';


const SellerDetail = ({navigation}) => {

    const current = auth().currentUser;
    const [userInfo, setUserInfo] = useState('');
    getUserInfo(current, setUserInfo);


  return (
    <>
      <Header name="SellerDetail" navigation={navigation} BackBtn />
      <View style={SellerDetailStyle.container}>
        <Text>Vista seller</Text>
        <View style={SellerDetailStyle.container1}>
          <Text>datooos</Text>
        </View>
        <View style={SellerDetailStyle.container2}>
          <Text>reviewss</Text>
        </View>
        <View style={SellerDetailStyle.container3}>
          <Text>products</Text>
        </View>
      </View>
    </>
  );
};

export default SellerDetail;

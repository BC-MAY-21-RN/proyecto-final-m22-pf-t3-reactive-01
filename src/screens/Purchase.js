import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
  Pressable,
} from 'react-native';
import Header from '../components/atoms/Header';
import {useUser} from '../utils/user';
import Icon from 'react-native-vector-icons/AntDesign';
import {Purchase as Styles} from './Styles';
const Purchase = ({route: {params}, navigation}) => {
  const user = useUser(state => state.user);
  const {uid, name, description, image, condition, stock, price} = params.item;
  const quantity = params.cantidad;
  const [address, setAddress] = useState(false);
  const [method, setMethod] = useState(false);
  const [check, setCheck] = useState(false);

  return (
    <SafeAreaView style={Styles.MainContainer}>
      <Header name="Purchase" BackBtn />
      <ScrollView style={Styles.ScrollContainer}>
        <ButtonSelect
          name="Address"
          selected={address}
          onPress={() => setAddress(!address)}
        />
        <Separator />
        <ButtonSelect
          name="Payment method"
          selected={method}
          onPress={() => setMethod(!method)}
        />
        <Separator />
        <ButtonSelect
          name="Check your order"
          selected={check}
          onPress={() => setCheck(!check)}
        />
        <Separator />
      </ScrollView>
    </SafeAreaView>
  );
};

const ButtonSelect = props => {
  return (
    <Pressable style={Styles.Button} onPress={props.onPress}>
      <Text style={props.selected ? Styles.TextSelect : Styles.Text}>
        {props.name}
      </Text>
      <Icon
        name={props.selected ? 'down' : 'right'}
        size={15}
        color={props.selected ? 'blue' : 'black'}
      />
    </Pressable>
  );
};

const Separator = () => {
  return <View style={Styles.Separator} />;
};
export default Purchase;

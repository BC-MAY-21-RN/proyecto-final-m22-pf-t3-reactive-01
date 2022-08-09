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
import CustomButton from '../components/atoms/Form/CustomButton';
const Purchase = ({route: {params}, navigation}) => {
  const user = useUser(state => state.user);
  const {uid, name, description, image, condition, stock, price} = params.item;
  const quantity = params.cantidad;
  const cost = price * quantity;
  const [address, setAddress] = useState(false);
  const [method, setMethod] = useState(false);
  const [check, setCheck] = useState(false);
  let delivery = 0;
  if (cost >= 1000) delivery = 0;
  else delivery = 200;
  const total = cost + delivery;
  return (
    <SafeAreaView style={Styles.MainContainer}>
      <Header name="Purchase" BackBtn />
      <ScrollView style={Styles.ScrollContainer}>
        <ButtonSelect
          name="1. Address"
          selected={address}
          onPress={() => setAddress(!address)}
        />
        <Separator />
        <ButtonSelect
          name="2. Payment method"
          selected={method}
          onPress={() => setMethod(!method)}
        />
        <Separator />
        <ButtonSelect
          name="3. Check your order"
          selected={check}
          onPress={() => setCheck(!check)}
        />

        <View style={Styles.purchaseContainer}>
          <Text style={Styles.purchaseTitle}>Order confirmation</Text>
          <View style={Styles.purchaseOrder}>
            <Text>Products:</Text>
            <Text>${cost}</Text>
          </View>
          <View style={Styles.purchaseOrder}>
            <Text>Delivery:</Text>
            <Text>${delivery}</Text>
          </View>
          <Separator />
          <Text style={Styles.total}>Total: ${total}</Text>
          <CustomButton
            onPress={() => console.log('hola')}
            title={'Finish order'}
          />
        </View>
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

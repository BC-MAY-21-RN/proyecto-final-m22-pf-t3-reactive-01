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
import BtnIcon from '../components/atoms/btnIcon';
import CounterInput from '../components/atoms/CounterInput';
import PaymentModal from '../components/atoms/PaymentModal';
import { set } from 'react-native-reanimated';
const Purchase = ({route: {params}, navigation}) => {
  const user = useUser(state => state.user);
  const {uid, name, description, stock, image, price} = params.item;
  const [quantity, setquantity] = useState(1);
  const onDecrease = () => (quantity > 1 ? setquantity(quantity - 1) : null);
  const onIncrease = () =>
    quantity < stock ? setquantity(quantity + 1) : null;
  const cost = price * quantity;
  const [isaddress, setIsAddress] = useState(false);
  const [adress, setAddress] = useState([]);
  const [ismethod, setIsMethod] = useState(false);
  const [method, setMethod] = useState([]);
  const [ischeck, setIsCheck] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('regular');
  const [modalPayment, setModalPayment] = useState(false);
  const [card, setCard] = useState();
  const [addAddress, setAddAddress] = useState(false);
  let delivery = 0;
  if (cost >= 1000) delivery = 0;
  else delivery = 199;
  if (deliveryMethod === 'fast') delivery += 50;
  const total = cost + delivery;
  useEffect(() => setquantity(params.cantidad), [params.cantidad]);
  return (
    <SafeAreaView style={Styles.MainContainer}>
      <Header name="Purchase" BackBtn />
      <ScrollView style={Styles.ScrollContainer}>
        <ButtonSelect
          name="1. Address"
          selected={isaddress}
          onPress={() => setIsAddress(!isaddress)}
        />
        {isaddress ? (
          <View style={Styles.ShowMore}>
            {adress.length >= 1 ? null : <Text>No addresses found</Text>}
            <BtnIcon
              iconName={'navigation'}
              directory={'Feather'}
              size={20}
              styleIcon={{color: 'black'}}
              style2={Styles.ImageBtn}
              onPress={() => {
                setModalPayment(!modalPayment);
                setAddAddress(true);
              }}
            />
          </View>
        ) : null}
        <Separator />
        <ButtonSelect
          name="2. Payment method"
          selected={ismethod}
          onPress={() => setIsMethod(!ismethod)}
        />
        {ismethod ? (
          <View style={Styles.ShowMore}>
            {method.length >= 1 ? null : <Text>No payment methods found</Text>}
            <View style={Styles.purchaseOrder}>
              <BtnIcon
                iconName={'credit-card'}
                directory={'FontAwesome'}
                size={20}
                styleIcon={{color: 'black'}}
                style2={Styles.ImageBtn}
                onPress={() => {
                  setModalPayment(!modalPayment);
                  setCard(true);
                }}
              />
              <BtnIcon
                iconName={'money'}
                directory={'FontAwesome'}
                size={20}
                styleIcon={{color: 'black'}}
                style2={Styles.ImageBtn}
                onPress={() => {
                  setModalPayment(!modalPayment);
                  setCard(false);
                }}
              />
            </View>
          </View>
        ) : null}
        <Separator />
        <ButtonSelect
          name="3. Check your order"
          selected={ischeck}
          onPress={() => setIsCheck(!ischeck)}
        />
        {ischeck ? (
          <View style={[Styles.ShowMore, Styles.ShowMore2]}>
            <View style={Styles.purchaseOrder}>
              <Image
                source={{
                  uri: image,
                }}
                style={Styles.image}
              />
              <View style={Styles.infoContainer}>
                <Text style={Styles.purchaseTitle}>{name}</Text>
                <Text style={Styles.desc}>{description}</Text>
                <Text style={Styles.total}>${price}</Text>
                <CounterInput
                  onDecrease={onDecrease}
                  onIncrease={onIncrease}
                  quantity={quantity}
                />
              </View>
            </View>
            <View style={Styles.delivery}>
              {deliveryMethod === 'regular' ? (
                <Text style={Styles.estimated}>Estimated delivery: 7 days</Text>
              ) : (
                <Text style={Styles.estimated}>Estimated delivery: 2 days</Text>
              )}
              <Text style={Styles.purchaseTitle}>Select a delivery method</Text>
              <Delivery
                style={Styles.desc}
                text="Regular"
                onPress={() => setDeliveryMethod('regular')}
                selected={deliveryMethod === 'regular' ? true : false}
              />
              <Delivery
                style={Styles.desc}
                text="Fast"
                onPress={() => setDeliveryMethod('fast')}
                selected={deliveryMethod === 'fast' ? true : false}
              />
            </View>
          </View>
        ) : null}
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
        <PaymentModal
          isModalVisible={modalPayment}
          setModalVisible={setModalPayment}
          card={card}
          productID={uid}
          adress={addAddress}
          setAddAddress={setAddAddress}
        />
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

const Delivery = props => {
  return (
    <Pressable onPress={props.onPress}>
      <Text
        style={
          props.selected
            ? [props.style, {color: 'green', fontWeight: '700'}]
            : props.style
        }>
        {props.text}
      </Text>
    </Pressable>
  );
};
export default Purchase;

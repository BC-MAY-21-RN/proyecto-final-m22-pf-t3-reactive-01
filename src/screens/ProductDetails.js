import React, {useState, useEffect} from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import {money} from '../utils/format';
import {useCart} from '../utils/cart';
import shallow from 'zustand/shallow';
import BtnIcon from '../components/atoms/btnIcon';
import Header from '../components/atoms/Header';
import CounterInput from '../components/atoms/CounterInput';
import CustomButton from '../components/atoms/Form/CustomButton';
import {useUser} from '../utils/user';
import {ProductDetailsStyles as Styles} from './Styles';
import Input from '../components/atoms/Form/Input';
import ButtonToSeller from '../components/atoms/ButtonToSeller';
import {getDataBySeller} from '../auth/authFirestore';
import Loader from '../components/atoms/Loader';
import BtnLike from '../components/atoms/BtnLike';
import {subscriberComments, addCommentSync} from '../auth/cloudFirestore';
const ProductDetails = ({route: {params}, navigation}) => {
  const user = useUser(state => state.user);
  const {uid, like, name, description, image, condition, stock, price} =
    params.item;
  const {addItem} = useCart(state => ({addItem: state.addItem}), shallow);
  const [quantity, setquantity] = useState(1);
  const onDecrease = () => (quantity > 1 ? setquantity(quantity - 1) : null);
  const onIncrease = () =>
    quantity < stock ? setquantity(quantity + 1) : null;
  const BuyItem = () => addItem({...params.item, quantity});
  const Purchase = () => {
    if (stock > 0) {
      navigation.navigate('Purchase', {
        item: {
          ...params.item,
        },
        cantidad: quantity,
      });
    } else {
      alert('This product is not currently available');
    }
  };
  const [textComment, setextComment] = useState('');
  const [commets, setCommets] = useState();
  const [sellerData, setSellerData] = useState();
  const [loading, setLoading] = useState('');

  useEffect(() => {
    getDataBySeller(uid, setSellerData);
    setLoading(true);
  }, [params.item]);

  useEffect(() => {
    const comments = subscriberComments(uid, setCommets);
    return () => comments;
  }, [uid]);

  return (
    <SafeAreaView style={Styles.MainContainer}>
      <Header
        name="Product"
        icon="cart"
        onPress={() => navigation.navigate('Cart')}
        BackBtn
      />
      {loading ? (
        <>
          <Loader
            state={loading}
            text={'loading..'}
            stateEdit={setLoading}
            iconLoad={'document-text'}
          />
        </>
      ) : (
        <></>
      )}
      <ScrollView style={Styles.ScrollContainer}>
        <View style={Styles.ImageContainer}>
          <Image style={Styles.Image} source={{uri: image}} />
          <Text style={Styles.ImageIndicator}>1 / 8</Text>
          <View style={Styles.ImageSocialContainer}>
            <BtnLike ArrayLikes={like} uidUser={user.uid} uidDoc={uid} />
            <BtnIcon
              iconName={'share-social-outline'}
              directory={'Ionicons'}
              size={20}
              styleIcon={Styles.Black}
              style={Styles.ImageBtn}
              onPress={() => {}}
            />
          </View>
        </View>
        <Text style={Styles.Condition}>{condition}</Text>
        <Text style={Styles.Name}>{name}</Text>
        <Separator />
        <Text style={[Styles.Description, Styles.DescriptionTitle]}>
        About this article
        </Text>
        <Text style={Styles.Description}>{description}</Text>
        <Separator />
        <View style={Styles.StockContainer}>
          <View style={Styles.StockItem}>
            <Text style={Styles.StockText}>Available: </Text>
            <Text style={Styles.StockText}>{stock}</Text>
          </View>
          <View style={Styles.StockItem}>
            <Text style={Styles.StockText}>Quantity</Text>
            <CounterInput
              onDecrease={onDecrease}
              onIncrease={onIncrease}
              quantity={quantity}
            />
          </View>
        </View>
        <Separator />
        <ButtonToSeller
          sellerData={sellerData}
          loading={loading}
          navigation={navigation}
        />
        <Separator />
        <Text style={Styles.Price}>{money(price)}</Text>
        <CustomButton
          style={Styles.CartBtn}
          styleText={Styles.CartBtnText}
          onPress={Purchase}
          title={'Buy now'}
        />
        <CustomButton
          style={[Styles.CartBtn, Styles.AddToCartBtn]}
          styleText={[Styles.CartBtnText, Styles.AddToCartBtnText]}
          onPress={BuyItem}
          title={'Add to cart'}
        />
        <Separator />
        <Text style={[Styles.Description, Styles.DescriptionTitle]}>
        Questions and Answers
        </Text>
        <Input
          placeholder="Write Your Question"
          multiline
          onChangeText={text => setextComment(text)}
          styleValue={Styles.InputAskValue}
          styleMainContainer={Styles.InputAskMainContainer}
        />
        <CustomButton
          style={Styles.CartBtn}
          styleText={Styles.CartBtnText}
          onPress={() => {
            if (textComment && textComment.length > 5) {
              addCommentSync(commets.uid, user.uid, textComment);
            }
          }}
          title="Ask"
        />
        <View style={Styles.CommentsMainContainer}>
          {commets &&
            commets.comments.length > 0 &&
            commets.comments.map((item, index) => (
              <View key={index}>
                <Text style={Styles.Black}>{item.question}</Text>
                {item.answer !== '' && (
                  <View style={Styles.CommentsContainer}>
                    <View style={Styles.CommentsBox} />
                    <Text style={Styles.CommentsAnswer}>{item.answer}</Text>
                  </View>
                )}
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Separator = () => {
  return <View style={Styles.Separator} />;
};
export default ProductDetails;

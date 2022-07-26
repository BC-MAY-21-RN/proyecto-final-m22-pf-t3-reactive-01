import React from 'react';
import {View, Text, Pressable as RnPressable} from 'react-native';
import Styles from './headerStyles';
import colors from '../../../constants/colors';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import {useCart, cartQuantity} from '../../../utils/cart';
const Header = ({name, navigation, icon, directory, onPress, BackBtn}) => {
  let navigate, icoName;
  if (BackBtn) {
    navigate = () => navigation.goBack();
    icoName = 'arrow-back';
  } else {
    navigate = () => navigation.openDrawer();
    icoName = 'menu';
  }
  return (
    <View style={Styles.container}>
      <Pressable onPress={navigate} name={icoName} directory={directory} />
      <Text style={Styles.title}>{name}</Text>
      <Pressable
        style={Styles.optionalButton}
        onPress={onPress}
        name={icon}
        directory={directory}
      />
    </View>
  );
};
const Pressable = ({style, name, onPress, directory}) => {
  if (!name) {
    return null;
  }
  return (
    <RnPressable style={style} onPress={onPress}>
      <Icon
        name={name}
        size={30}
        color={colors.ICON_PRIMARY_COLOR}
        directory={directory}
      />
      {name === 'cart' ? <CartIcon /> : null}
    </RnPressable>
  );
};

const Icon = ({directory, ...props}) => {
  //Props name, size, color
  switch (directory) {
    case 'Ionicons':
      return <IconFontAwesome {...props} />;
    case 'EvilIcons':
      return <IconEvilIcons {...props} />;
    case 'FontAwesome5':
      return <IconFontAwesome5 {...props} />;
    default:
      return <IconIon {...props} />;
  }
};

const CartIcon = () => {
  const cart = useCart(state => state.cart);
  const quantity = cartQuantity(cart);

  return (
    <>
      {quantity > 0 && (
        <View style={Styles.headerIconEmbellishment}>
          <Text style={Styles.embellishmentText}>{quantity}</Text>
        </View>
      )}
    </>
  );
};

export default Header;

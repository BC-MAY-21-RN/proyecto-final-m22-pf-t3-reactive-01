import React, {useState, useEffect} from 'react';
import {ToastAndroid, StyleSheet} from 'react-native';
import BtnIcon from '../btnIcon';
import {addLike, removeLike} from '../../../auth/cloudFirestore';
import colors from '../../../constants/colors';

const Styles = StyleSheet.create({
  ImageBtn: {
    backgroundColor: colors.ICON_BACKGROUND_SECONDARY_COLOR,
    borderRadius: 20,
    marginRight: 5,
    borderWidth: 0,
    width: 40,
    height: 40,
  },
  Red: {color: 'red'},
  Black: {color: 'black'},
});

const BtnLike = ({ArrayLikes, uidUser, uidDoc}) => {
  const [liked, setLiked] = useState();
  useEffect(() => {
    ArrayLikes.includes(uidUser) ? setLiked(true) : setLiked(false);
  }, [ArrayLikes, uidUser]);
  const handleLike = () => {
    if (liked) {
      removeLike(uidDoc, uidUser);
      Toas('The product was removed to your Wish List!');
    } else {
      addLike(uidDoc, uidUser);
      Toas('The product was added to your Wish List!');
    }
    setLiked(!liked);
  };
  const Toas = MSG => ToastAndroid.show(MSG, ToastAndroid.SHORT);
  return (
    <BtnIcon
      iconName={'heart'}
      size={20}
      style={Styles.ImageBtn}
      styleIcon={liked ? Styles.Red : Styles.Black}
      onPress={handleLike}
    />
  );
};
export default BtnLike;

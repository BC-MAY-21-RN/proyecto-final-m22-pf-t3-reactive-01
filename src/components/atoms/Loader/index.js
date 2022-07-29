import React, {useEffect, useState} from 'react';
import {Text, View, Modal, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LoaderStyle from './LoaderStyle';

const Loader = props => {
  const {state, stateEdit} = props;
  const [text, setText] = useState('');
  const [animationFade, setAnimationFade] = useState(new Animated.Value(0));
  const [animationScale, setAnimationScale] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationFade, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(animationScale, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setText('.');
    }, 400);
    setTimeout(() => {
      setText('..');
    }, 800);
    setTimeout(() => {
      setText('...');
    }, 1200);
    setTimeout(() => {
      setText('.');
    }, 1600);
    setTimeout(() => {
      setText('..');
    }, 2000);
    setTimeout(() => {
      setText('...');
    }, 2400);
    setTimeout(() => {
      setText('.');
    }, 2800);
    setTimeout(() => {
      setText('..');
    }, 3200);
    setTimeout(() => {
      setText('...');
    }, 3600);
    setTimeout(() => {
      setText('');
    }, 3800);
    setTimeout(() => {
      stateEdit(false);
    }, 4000);
  }, [state]);

  return (
    <Modal visible={state} transparent={true}>
      <View style={LoaderStyle.container}>
        <Animated.View
          style={[LoaderStyle.background, {opacity: animationFade}]}>
          <Animated.View
            style={[
              LoaderStyle.backgroundActivityIndicator,
              {
                opacity: animationFade,
                transform: [
                  {
                    rotate: animationScale.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '1330deg'],
                    }),
                  },
                ],
              },
            ]}>
            <Icon
              color="#3140C2"
              size={25}
              name={'ellipse-outline'}
              style={LoaderStyle.iconReload}
            />
          </Animated.View>

          <Text style={LoaderStyle.message}>Loading{text}</Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Loader;

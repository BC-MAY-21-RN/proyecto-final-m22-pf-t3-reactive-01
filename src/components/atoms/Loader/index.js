import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Modal, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LoaderStyle from './LoaderStyle';

const Loader = props => {
  const {state, stateEdit} = props;
  const [text, setText] = useState('');
  const animationFade = useRef(new Animated.Value(0)).current
  const animationScale = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animationFade, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(animationScale, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setText('.');
    }, 400);
    setTimeout(() => {
      setText('..');
    }, 700);
    setTimeout(() => {
      setText('...');
    }, 700);
    setTimeout(() => {
      setText('.');
    }, 1000);
    setTimeout(() => {
      setText('..');
    }, 1000);
    setTimeout(() => {
      setText('...');
    }, 2000);
   
    setTimeout(() => {
      stateEdit(false);
    }, 1000);
  }, [state]);

  return (
    <Modal visible={state} transparent={true}>
      <View style={LoaderStyle.container}>
        <Animated.View
          style={[LoaderStyle.background, {opacity: animationFade}]}>
          <Icon
            color="#F4F4F4"
            size={60}
            name={'person'}
            style={LoaderStyle.iconReloadCenter}
          />
          <Icon
            color="#0000999e"
            size={66}
            name={'person'}
            style={LoaderStyle.iconReloadCenter2}
          />
          <Icon
            color="#0000999e"
            size={66}
            name={'person'}
            style={LoaderStyle.iconReloadCenter3}
          />
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
            <View style={LoaderStyle.iconReload} />
          </Animated.View>

          <Text style={LoaderStyle.message}>Loading{text}</Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Loader;

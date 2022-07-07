import React, {useState} from 'react';
import {AwesomeTextInput} from 'react-native-awesome-text-input';
import {View, Text, Pressable} from 'react-native';
import {Styles, AwesomeStyles} from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Input = props => {
  const {title, value, onChangeText, error, secure, editable = true} = props;
  const [Secure, setSecure] = useState(secure);
  return (
    <View style={Styles.Container}>
      <AwesomeTextInput
        editable={editable}
        label={title}
        customStyles={{
          container: AwesomeStyles.container,
          title: AwesomeStyles.title,
          inputContainer: AwesomeStyles.inputContainer,
        }}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={Secure}
      />
      {secure ? (
        <Pressable
          style={Styles.icon}
          onPress={() => {
            setSecure(!Secure);
          }}>
          <Icon
            name={Secure ? 'eye' : 'eye-slash'}
            size={25}
            color={value ? '#1600FF' : 'grey'}
          />
        </Pressable>
      ) : null}
      {error ? (
        <View style={Styles.Containerow}>
          <Icon style={Styles.iconerror} name="exclamation-circle" size={13} />
          <Text style={Styles.error}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Input;

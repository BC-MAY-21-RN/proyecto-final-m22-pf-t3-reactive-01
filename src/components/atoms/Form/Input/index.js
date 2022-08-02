import React, {useState} from 'react';
import {AwesomeTextInput} from 'react-native-awesome-text-input';
import {View} from 'react-native';
import Style from './Style';
import ErrorMessage from '../ErrorMessage';
import CustomButton from '../CustomButton';
const Input = ({
  title,
  styleTitle,
  value,
  styleValue,
  onChangeText,
  error,
  secure,
  editable = true,
  styleInput,
  styleContainer,
}) => {
  const [Secure, setSecure] = useState(secure);
  return (
    <View style={Style.MainContainer}>
      <AwesomeTextInput
        style={[Style.Value, styleValue]}
        editable={editable}
        label={title}
        customStyles={{
          container: {...Style.Container, ...styleContainer},
          title: {...Style.Title, ...styleTitle},
          inputContainer: {...Style.Input, ...styleInput},
        }}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={Secure}
      />
      {secure && (
        <CustomButton
          style={Style.Btn}
          styleIcon={Style.Icon}
          onPress={() => {
            setSecure(!Secure);
          }}
          iconName={Secure ? 'eye' : 'eye-slash'}
        />
      )}
      {error && <ErrorMessage errorMsg={error} iconName="exclamation-circle" />}
    </View>
  );
};

export default Input;

import {View, Text} from 'react-native';
import InputStyle from './InputStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {deleteCamp} from '../../../auth/authFirestore';

const InputCampAccount = props => {
  const {
    userInfo,
    campName,
    iconName,
    setModalVisible,
    setInputSelect,
    setIconInput,
    setAction,
    required,
    setLoading,
    uID,
  } = props;
  return (
    <>
      {required ? (
        <View style={InputStyle.containerLabelInfo}>
          <View style={InputStyle.iconData}>
            <Icon name={iconName} size={20} color={'#3140C2'} />
            <Text style={InputStyle.labelInfo}>{campName}</Text>
          </View>
          <Text style={InputStyle.labelInfo}>{userInfo}</Text>
          <Icon
            name={'create-outline'}
            size={20}
            color="#767676"
            onPress={() => {
              setAction('Change');
              setModalVisible(true);
              setInputSelect(campName);
              setIconInput(iconName);
            }}
          />
        </View>
      ) : (
        <View style={InputStyle.containerLabelInfo}>
          <View style={InputStyle.iconData}>
            <Icon name={iconName} size={20} color={'#3140C2'} />
            <Text style={InputStyle.labelInfo}>{campName}</Text>
          </View>
          <Text style={InputStyle.labelInfo}>{userInfo ? userInfo : ''}</Text>

          <Icon
            name={userInfo ? 'create-outline' : 'add-outline'}
            size={20}
            color={userInfo ? '#767676' : '#3140C2'}
            style={userInfo ? InputStyle.iconEdit : ''}
            onPress={() => {
              setAction('Change');
              setModalVisible(true),
                setInputSelect(campName),
                setIconInput(iconName);
            }}
          />
          {userInfo && (
            <Icon
              name={'trash-outline'}
              size={20}
              color={'#D40C1C'}
              onPress={() => {
                deleteCamp(campName, uID);
                setLoading(true);
                setModalVisible('');
              }}
            />
          )}
        </View>
      )}
    </>
  );
};

export default InputCampAccount;

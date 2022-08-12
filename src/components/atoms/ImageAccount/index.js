import {View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ImageAccountStyle from './ImageAccountStyle';


const ImageAccount = props => {
  const {userInfo, setModalVisible, setInputSelect, setIconInput} = props;
  return (
    
      <View style={ImageAccountStyle.containerImageAndName}>
        <Image
          source={{
            uri: userInfo.image
              ? userInfo.image
              : 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png',
          }}
          style={ImageAccountStyle.image}
        />
        <Icon
          style={ImageAccountStyle.iconChangeImage}
          name={'sync-outline'}
          size={16}
          color="#ffff"
          onPress={() => {
          
            setModalVisible(true);
            setInputSelect('Image');
            setIconInput('image-outline');
          }}
        />
        <View style={ImageAccountStyle.containerLabels}>
          <Text style={ImageAccountStyle.labelName}>{userInfo.userName}</Text>
          <Text style={ImageAccountStyle.labelUserType}>{userInfo.userType}</Text>
        </View>
      </View>
    
  );
};

export default ImageAccount;

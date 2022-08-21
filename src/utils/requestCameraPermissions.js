import {PermissionsAndroid} from 'react-native';
import {ToastAndroid} from 'react-native';

const Toast = MSG => ToastAndroid.show(MSG, ToastAndroid.SHORT);
const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'App Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Toast('Camera permission given');
    } else {
      Toast('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export default requestCameraPermission;

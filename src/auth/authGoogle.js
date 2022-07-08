import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {addUserInfo} from './authFirestore';
import {API_URL} from '@env';
export const signInGoogle = async navigation => {
  try {
    GoogleSignin.configure({
      webClientId: API_URL,
    });

    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const authAux = await auth().signInWithCredential(googleCredential);
    if (authAux.additionalUserInfo.isNewUser) {
      const current = auth().currentUser;
      const userData = {
        firstname: authAux.additionalUserInfo.profile.given_name,
        suscribe: false,
        email: authAux.additionalUserInfo.profile.email,
        uid: current.uid,
        usertype: 'client',
        navigation: navigation,
      };
      addUserInfo(
        userData.firstname,
        userData.suscribe,
        userData.email,
        userData.uid,
        userData.usertype,
        userData.navigation,
      );
    }
    return navigation.navigate('Home');
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('user cancelled the login flow: ' + error.code);
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('operation (sign in) is in progress already: ' + error.code);
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('play services not available or outdated: ' + error.code);
    } else {
      console.log(error);
    }
  }
};

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {API_URL} from '@env';
import {setOneDocumentSync, getOneDocumenByUid} from './cloudFirestore';
export const signInGoogle = async () => {
  try {
    GoogleSignin.configure({
      webClientId: API_URL,
    });

    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const authAux = await auth().signInWithCredential(googleCredential);
    const {uid, photoURL, displayName, email} = authAux.user;
    const {given_name} = authAux.additionalUserInfo.profile;
    if (authAux.additionalUserInfo.isNewUser) {
      const User = await setOneDocumentSync(
        {
          userName: given_name,
          suscribe: false,
          email,
          userType: 'client',
          image: photoURL,
          fullName: displayName,
        },
        'Users',
        uid,
      );
      return User;
    } else {
      return await getOneDocumenByUid('Users', uid);
    }
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

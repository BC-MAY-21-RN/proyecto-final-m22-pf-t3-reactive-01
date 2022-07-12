import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const logIn = async (firstname, check, email, password, navigation) => {
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User creado');
      const current = auth().currentUser;
      addUserInfo(firstname, check, email, current.uid, 'client', navigation);
    })
    .catch(err => {
      if (
        err?.message ===
        '[auth/email-already-in-use] The email address is already in use by another account.'
      ) {
        alert('The email address is already in use by another account.');
      }
    });
};

export const SignIn = async (email, password, navigation) => {
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => navigation.navigate('Home'))
    .catch(error => {
      alert('Usuario y/o contraseña incorrectos');
    });
};

export const addUserInfo = async (
  firstname,
  suscribe,
  email,
  uid,
  usertype,
  navigation,
) => {
  await firestore()
    .collection('Users')
    .add({
      firstname: firstname,
      suscribe: suscribe,
      email: email,
      uid: uid,
      usertype: usertype,
    })
    .then(() => {
      navigation.navigate('Home');
    })
    .catch(error => console.log(error));
};

export const getUserInfo = async (currentUser, setUserInfo) => {
  await firestore()
    .collection('Users')
    .where('uid', '==', currentUser.uid)
    .get()
    .then(querySnapshot => {
      querySnapshot
        .forEach(documentSnapshot => {
          setUserInfo(documentSnapshot.data());
        })
        .catch(console.log('No se encontro el usuario'));
    });
};

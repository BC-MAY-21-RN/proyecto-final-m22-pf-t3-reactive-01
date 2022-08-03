import firestore from '@react-native-firebase/firestore';

export const addOneDocumentSync = async (Document, Collection) => {
  const Snapshot = await firestore().collection(Collection).add(Document);
  return {...Document, uid: Snapshot.id};
};

export const setOneDocumentSync = async (Document, Collection, uid) => {
  await firestore().collection(Collection).doc(uid).set(Document);
  return {...Document, uid};
};

export const getOneDocumenByUid = async (Collection, uid) => {
  var docRef = await firestore().collection(Collection).doc(uid);
  const document = await docRef.get();
  if (document.exists) {
    return {...document.data(), uid};
  } else {
    throw new Error('No such document!');
  }
};

export const subscriberUserId = (uid, storeUser) => {
  return firestore()
    .collection('Users')
    .doc(uid)
    .onSnapshot(documentSnapshot => {
      storeUser({...documentSnapshot.data(), uid});
    });
};

export const updateLikes = async (docID, userID, array) => {
  let uidArrayUnion;
  if (array) {
    uidArrayUnion = array;
  } else {
    uidArrayUnion = firestore.FieldValue.arrayUnion(userID);
  }
  await firestore()
    .collection('Products')
    .doc(docID)
    .update({like: uidArrayUnion});
};

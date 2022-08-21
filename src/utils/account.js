import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const accountStore = create(
  persist(
    set => ({
      userInfo: {},
      modalVisble: false,
      inputSelect: '',
      iconInput: 'sync-outline',
      deleteAccount: false,
      restore: false,
      loading: false,
      uID: {},
      action: {},

      setModalVisible: visible => set({modalVisble: visible}),
      setAction: newAction => set({action: newAction}),
      setInputSelect: newInputSelect => set({inputSelect: newInputSelect}),
      setIconInput: newIcon => set({iconInput:newIcon}),
      setLoading: state => set({loading:state}),
      setRestore: restoreState => set({restore:restoreState}),
      setDeleteAccount: state => set({deleteAccount:state})
    }),
    {
      name: 'account',
      getStorage: () => AsyncStorage,
    },
  ),
);

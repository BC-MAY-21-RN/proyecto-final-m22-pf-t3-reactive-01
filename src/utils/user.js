import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useUser = create(
  persist(
    set => ({
      user: {},
      storeUser: Newuser => set({user: Newuser}),
      clearUser: () => set(() => ({user: {}})),
    }),
    {
      name: 'user',
      getStorage: () => AsyncStorage,
    },
  ),
);

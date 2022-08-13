import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const cartQuantity = cart => {
  let quantity = 0;
  cart.forEach(item => {
    quantity += item.quantity;
  });
  return quantity;
};

export const cartTotal = cart => {
  let Suma = 0;
  cart.forEach(item => {
    Suma += item.price * item.quantity;
  });
  return Suma;
};

export const useCart = create(
  persist(
    set => ({
      cart: [],
      addItem: product => {
        set(state => {
          const cart = [...state.cart];
          let include = false;
          cart.forEach(item => {
            if (item.uid === product.uid) {
              item.quantity += product.quantity;
              include = true;
            }
          });
          if (!include) {
            cart.push(product);
          }
          return {cart};
        });
      },
      removeItem: uid => {
        set(state => {
          const cart = state.cart.filter(item => {
            if (item.uid !== uid) {
              return item;
            }
          });
          return {cart};
        });
      },
      addQuantity: uid => {
        set(state => {
          const cart = [...state.cart];
          cart.forEach(item => {
            if (item.uid === uid) {
              item.quantity += 1;
              return {cart};
            }
          });
          return {cart};
        });
      },
      removeQuantity: uid => {
        set(state => {
          const cart = [...state.cart];
          cart.forEach(item => {
            if (item.uid === uid) {
              const newQuantity = item.quantity - 1;
              if (newQuantity >= 1) {
                item.quantity = newQuantity;
              }
              return {cart};
            }
          });
          return {cart};
        });
      },
      clearCart: () => set(() => ({cart: []})),
    }),
    {
      name: 'cart',
      getStorage: () => AsyncStorage,
    },
  ),
);

import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const cartQuantity = cart => {
  let quantity = 0;
  for (let i = 0; i < cart.length; i++) {
    quantity += cart[i].quantity;
  }
  return quantity;
};

export const cartTotal = cart => {
  let Suma = 0;
  for (let i = 0; i < cart.length; i++) {
    Suma += cart[i].price * cart[i].quantity;
  }
  return Suma;
};

export const useCart1 = create(
  persist(
    set => ({
      cart: {},
      addItem: ({id, name, price, imageRef}) => {
        set(state => {
          const cart = {...state.cart};
          let include = false;
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
              cart[i].quantity += 1;
              include = true;
            }
          }
          if (!include) {
            cart.push({
              id,
              name,
              price,
              imageRef,
              quantity: 1,
            });
          }
          return {cart};
        });
      },
      removeItem: id => {
        set(state => {
          const cart = {...state.cart};
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
              delete cart[i];
            }
          }
          return {cart};
        });
      },
      removeQuantity: id => {
        set(state => {
          const cart = {...state.cart};
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
              const newQuantity = cart[id].quantity - 1;
              if (newQuantity <= 0) {
                return {cart};
              } else {
                cart[id].quantity = newQuantity;
              }
            }
          }
          return {cart};
        });
      },
      clearCart: () => set(() => ({cart: {}})),
    }),
    {
      name: 'cart',
      getStorage: () => AsyncStorage,
    },
  ),
);

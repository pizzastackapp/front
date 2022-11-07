import { makeVar } from '@apollo/client';

const CART_STATE_LS_KEY = 'cart_state';

const getCartStateFromLocalStorage = () => {
  try {
    const state = localStorage.getItem(CART_STATE_LS_KEY) ?? '{}';

    return JSON.parse(state);
  } catch (e) {
    return [];
  }
};

const saveCartState = (cart: Record<string, number>) => {
  cartState(cart);

  localStorage.setItem(CART_STATE_LS_KEY, JSON.stringify(cart));
};

export const cartState = makeVar<Record<string, number>>(
  getCartStateFromLocalStorage()
);

export const addItemToCart = (id: string) => {
  const cart = { ...cartState() };

  if (cart[id]) {
    cart[id] += 1;
  } else {
    cart[id] = 1;
  }

  saveCartState(cart);
};

export const changeCartItemAmount = (id: string, amount: number) => {
  const cart = { ...cartState() };

  if (amount === 0) {
    removeItemFromCart(id);
    return;
  }

  cart[id] = amount;

  saveCartState(cart);
};

export const removeItemFromCart = (id: string) => {
  const cart = { ...cartState() };

  delete cart[id];

  saveCartState(cart);
};

export const cleanCart = () => {
  saveCartState({});
};

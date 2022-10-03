import { makeVar } from '@apollo/client';

interface CartItem {
  id: string;
  amount: number;
}

const CART_STATE_LS_KEY = 'cart_state';

const getCartStateFromLocalStorage = () => {
  try {
    const state = localStorage.getItem(CART_STATE_LS_KEY) ?? '[]';

    return JSON.parse(state);
  } catch (e) {
    return [];
  }
};

export const cartState = makeVar<CartItem[]>(getCartStateFromLocalStorage());

export const addItemToCart = (id: string) => {
  const cart = [...cartState()];

  const existingItemIndex = cart.findIndex((v) => v.id === id);

  if (existingItemIndex >= 0) {
    cart[existingItemIndex].amount += 1;
  } else {
    cart.push({ id, amount: 1 });
  }

  cartState(cart);

  localStorage.setItem(CART_STATE_LS_KEY, JSON.stringify(cart));
};

import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cartData: {
    items: {},
    totalQuantity: 0,
    totalAmount: 0,
  },
};

const BakerySlice = createSlice({
  name: "Bakery",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartData = state.cartData;
      const cartDataItems = cartData.items;
      const newItem = payload?.newItem;
      const newItemId = newItem?.id;

      if (newItemId) {
        const oldCartDataById = cartDataItems[newItemId];
        if (oldCartDataById) {
          const oldQty = oldCartDataById?.quantity
            ? oldCartDataById?.quantity
            : 0;
          const oldPrice = oldCartDataById?.totalItemPrice
            ? oldCartDataById?.totalItemPrice
            : 0;
          oldCartDataById.quantity = oldQty + 1;
          oldCartDataById.totalItemPrice = oldPrice + Number(newItem.price);
          state.cartData = cartData;
        } else {
          state.cartData.items[newItemId] = {
            ...newItem,
            quantity: 1,
            totalItemPrice: Number(newItem.price),
          };
        }
      }
      cartData.totalQuantity += 1;
      cartData.totalAmount += Number(newItem.price);
    },
    removeFromCart: (state, { payload }) => {
      const cartData = state.cartData;
      const cartDataItems = cartData.items;
      const itemIdToBeRemoved = payload?.itemId;
      if (cartDataItems && cartDataItems[itemIdToBeRemoved]) {
        const quantity = cartDataItems[itemIdToBeRemoved].quantity;
        cartData.totalAmount -= Number(cartDataItems[itemIdToBeRemoved].price);
        cartData.totalQuantity -= 1;
        if (quantity > 1) {
          cartDataItems[itemIdToBeRemoved].quantity = quantity - 1;
          cartDataItems[itemIdToBeRemoved].totalItemPrice -=
            cartDataItems[itemIdToBeRemoved].price;
        } else if (quantity === 1 || quantity === 0) {
          delete cartDataItems[itemIdToBeRemoved];
        }
      }
    },
    clearCart: (state) => {
      state.cartData = {
        items: {},
        totalQuantity: 0,
        totalAmount: 0,
      };
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = BakerySlice.actions;

export default BakerySlice;

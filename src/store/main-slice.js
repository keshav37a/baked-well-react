import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cartData: {
    items: {},
    totalQuantity: 0,
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
          const oldQty = oldCartDataById.quantity;
          const oldPrice = oldCartDataById.totalItemPrice;
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
    },
    removeFromCart: (state, { payload }) => {
      const cartData = state.cartData;
      const cartDataItems = cartData.items;
      const itemIdToBeRemoved = payload?.itemId;
      if (cartDataItems && cartDataItems[itemIdToBeRemoved]) {
        const quantity = cartDataItems[itemIdToBeRemoved].quantity;
        if (quantity > 1) {
          cartDataItems[itemIdToBeRemoved].quantity = quantity - 1;
        } else if (quantity === 1 || quantity === 0) {
          delete cartDataItems[itemIdToBeRemoved];
        }
        cartData.totalQuantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = BakerySlice.actions;

export default BakerySlice;

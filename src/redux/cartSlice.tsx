import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface products {
  id: number;
  title: string;
  img: string;
  price: number;
  qty: number;
}

const initialState: products[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<products>) => {
      if (
        state.findIndex((productId) => productId.id === action.payload.id) ===
        -1
      ) {
        state.push(action.payload);
      } else {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, aty: item.qty + 1 } : item
        );
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

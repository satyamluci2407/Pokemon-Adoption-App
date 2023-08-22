import { createSlice} from "@reduxjs/toolkit";

const userSession = JSON.parse(sessionStorage.getItem('userSession'));

let name = null;
let cart = [];
let adopted = [];

if (userSession) {
  name = userSession.name;
  cart = userSession.cart;
  adopted = userSession.adopted;
}

const initialState = {
  name,
  cart,
  adopted
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    nameEntered(state, action) {
      state.name = action.payload;
    },
    cartItemAdded(state, action) {
      state.cart.push(action.payload);
    },
    cartItemRemoved(state, action) {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      state.cart.splice(index, 1);
    },
    adoptionSubmitted(state) {
      state.adopted.push(...state.cart);
      state.cart.splice(0);
    }
  }
});


export default userSlice.reducer;

export const {
  nameEntered,
  cartItemAdded,
  cartItemRemoved,
  adoptionSubmitted,
} = userSlice.actions;

export const selectAdopted = (state) => state.user.adopted;

export const selectCartItems = (state) => state.user.cart;

export const selectIsAdopted = (state, id) =>
  state.user.adopted.findIndex((item) => item.id === id) !== -1

export const selectIsInCart = (state, id) =>
  state.user.cart.findIndex((item) => item.id === id) !== -1

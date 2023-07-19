import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      console.log("======================LOGIN USER=====================");
      console.log(state.user);
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

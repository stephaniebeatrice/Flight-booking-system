import { createSlice } from "@reduxjs/toolkit";

const initialState = { booking: [] };
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    createBooking(state, action) {
      state.booking = state.booking.filter(p => p.bookingId !== action.payload.bookingId);
      state.booking.push(action.payload);
    },
    deleteBookig(state, action) {
      state.booking = state.booking.filter(p => !action.payload.includes(p.bookingId));
    },
  },
});

export const bookingActions = bookingSlice.actions;
export const bookingReducer = bookingSlice.reducer;

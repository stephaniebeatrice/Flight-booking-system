import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booking: [],
  pendingBooking: {
    flightNumber: "",
    origin: "",
    destination: "",
    departureTime: "",
    arrivalTime: "",
    fare: "",
  },
  bookingUserInfo: {
    title: "",
    firstName: "",
    lastName: "",
    DOB: "",
    number: "",
    email: "",
  },
};
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    createBooking(state, action) {
      state.booking = state.booking.filter(p => p.bookingId !== action.payload.bookingId);
      state.booking.push(action.payload);
    },
    createPendingBooking(state, action) {
      state.pendingBooking = action.payload;
    },
    createUserBookigInfo(state, action) {
      state.bookingUserInfo = action.payload;
    },
    deleteBookig(state, action) {
      state.booking = state.booking.filter(p => !action.payload.includes(p.bookingId));
    },
  },
});

export const bookingActions = bookingSlice.actions;
export const bookingReducer = bookingSlice.reducer;

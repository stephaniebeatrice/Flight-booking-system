import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booking: [],
  pendingBooking: {
    _id: "",
    flightNumber: "",
    origin: "",
    destination: "",
    departureTime: "",
    arrivalTime: "",
    fare: "",
    class: "",
    passengers: 0,
    passengersInfo: [{ fullName: "" }],
  },
  bookingUserInfo: [],
  payment: { cardHolderFullName: "", cardNumber: "" },
  seatsSelected: [],
};
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    createPendingBooking(state, action) {
      state.pendingBooking = action.payload;
    },
    createUserBookigInfo(state, action) {
      state.bookingUserInfo = [action.payload];
    },
    createPassengers(state, action) {
      state.bookingUserInfo.push(action.payload);
    },
    createSeatSelection(state, action) {
      state.seatsSelected = action.payload;
    },
    createPayment(state, action) {
      state.payment = action.payload;
    },
    clearBooking(state) {
      state.pendingBooking = {};
      state.bookingUserInfo = state.bookingUserInfo.splice(1, 1);
    },
  },
});

export const bookingActions = bookingSlice.actions;
export const bookingReducer = bookingSlice.reducer;

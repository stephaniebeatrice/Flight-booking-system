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
  bookingUserInfo: { title: "", firstName: "", lastName: "", DOB: "", number: "", email: "" },
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
      state.bookingUserInfo = action.payload;
    },
    createSeatSelection(state, action) {
      state.seatsSelected = action.payload;
    },
    createPayment(state, action) {
      state.payment = action.payload;
    },
    clearBooking(state, action) {
      state.booking = state.booking.filter(p => !action.payload.includes(p.bookingId));
    },
  },
});

export const bookingActions = bookingSlice.actions;
export const bookingReducer = bookingSlice.reducer;

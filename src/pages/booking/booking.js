import React from "react";
import { BookingForm } from "../../components/Forms/Booking-form";
import { Header } from "../../components/header/header";

export const BookingPage = () => {
  return (
    <div className="App">
      <Header />
      <BookingForm />
    </div>
  );
};

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Pop } from "../../components/pop/pop";
import { DateTime } from "../../container/search-form/search-form";
import "./style.css";

export const Bookings = () => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState(null);

  const { bookings } = useSelector(state => state.bookingReducer);

  const handleDeleteBooking = booking => {
    setBookingToDelete(booking);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    // Logic to delete the booking and notify the admin
    setShowDeleteConfirmation(false);
    setBookingToDelete(null);
    alert("Forwarded to admin for review");
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
    setBookingToDelete(null);
  };
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <div className="bookings">
          <div className="container">
            <h2>My Bookings</h2>
            <table class="table">
              {TableHeader()}
              <tbody>
                {bookings.map((booking, index) => {
                  return TableRow(index, booking, handleDeleteBooking);
                })}
              </tbody>
            </table>
          </div>

          <div>
            <h2>Booking inquiries</h2>
          </div>
          <div className="container-inquiries">
            <h4>Delete Bookings</h4>
            <table class="table caption-top bg-white rounded mt-2">
              {TableHeader()}
              <tbody>
                {bookings.map((booking, index) => {
                  return TableRow(index, booking, handleDeleteBooking);
                })}
              </tbody>
            </table>
          </div>

          <div className="container-inquiries">
            <h4>Change Bookings</h4>
            <table class="table caption-top bg-white rounded mt-2">
              {TableHeader()}
              <tbody>
                {bookings.map((booking, index) => {
                  return TableRow(index, booking, handleDeleteBooking);
                })}
              </tbody>
            </table>
          </div>

          {showDeleteConfirmation && (
            <Pop
              text={"Are you sure you want to delete the booking?"}
              okText={"Yes"}
              cancelText={"No"}
              cancelHandler={handleCancelDelete}
              yesHandler={handleConfirmDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Full name</th>
        <th scope="col">Flight</th>
        <th scope="col">Departure Time</th>
        <th scope="col">Arrival Time</th>
        <th scope="col">passengers</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
  );
};

const TableRow = (index, booking, deleteHandler) => {
  const time = new Date(new Date(booking.departureTime).getTime() + +booking.flightTime * 60 * 60 * 1000);
  console.log(time);
  return (
    <tr key={index}>
      <td>{booking.fullName}</td>
      <td>{booking.flightName}</td>
      <td>{DateTime(booking.departureTime)}</td>
      <td>{DateTime(time)}</td>
      <td>{booking.passengersInfo.length}</td>
      <td className="buttons">
        <Link to="Edit">
          <button className="btn btn-primary">Edit</button>
        </Link>
        <button className="btn btn-danger" onClick={deleteHandler}>
          Delete
        </button>
      </td>
    </tr>
  );
};

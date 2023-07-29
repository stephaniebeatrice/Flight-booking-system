import React from "react";
import { Header } from "../../components/header/header";
import "./style.css";
import { useState } from "react";
import { Pop } from "../../components/pop/pop";

export const Bookings = ({ bookings }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState(null);

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
      <div className="bookings">
        <div className="container">
          <h2>My Bookings</h2>
          <table class="table caption-top bg-white rounded mt-2">
            <thead>
              <tr>
                <th scope="col">Passenger</th>
                <th scope="col">Flight</th>
                <th scope="col">Departure Time</th>
                <th scope="col">Arrival Time</th>
                <th scope="col">Date</th>
                <th scope="col">Seat</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>F123</td>
                <td>0900hrs</td>
                <td>1000hrs</td>
                <td>01/09/2023</td>
                <td> C3</td>
                <td className="buttons">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger" onClick={handleDeleteBooking}>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Mary Smith</td>
                <td>F123</td>
                <td>0900hrs</td>
                <td>1000hrs</td>
                <td>01/09/2023</td>
                <td> C4</td>
                <td className="buttons">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger" onClick={handleDeleteBooking}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="container">
          <h2>Booking Inqiriries</h2>
        </div>
        <div className="container-inquiries">
          <h4>Delete Bookings</h4>
          <table class="table caption-top bg-white rounded mt-2">
            <thead>
              <tr>
                <th scope="col">Passenger</th>
                <th scope="col">Flight</th>
                <th scope="col">Departure Time</th>
                <th scope="col">Arrival Time</th>
                <th scope="col">Date</th>
                <th scope="col">Seat</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>F582</td>
                <td>0800hrs</td>
                <td>1045hrs</td>
                <td>12/5/2023</td>
                <td> B6</td>
                <td>
                  <button className="btn btn-success">Completed</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="container-inquiries">
        <h4>Change Bookings</h4>
        <table class="table caption-top bg-white rounded mt-2">
          <thead>
            <tr>
              <th scope="col">Passenger</th>
              <th scope="col">Flight</th>
              <th scope="col">Departure Time</th>
              <th scope="col">Arrival Time</th>
              <th scope="col">Date</th>
              <th scope="col">Seat</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>F123</td>
              <td>0900hrs</td>
              <td>1000hrs</td>
              <td>22/05/2023</td>
              <td> D3</td>
              <td>
                <button className="btn btn-warning">Ongoing</button>
              </td>
            </tr>
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
    //  </div>
  );
};

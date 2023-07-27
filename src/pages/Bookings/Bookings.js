import React from "react";
import { Header } from "../../components/header/header";
import "./style.css"

export const Bookings = ({ bookings }) => {
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
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td >Mary Smith</td>
              <td>F123</td>
              <td>0900hrs</td>
              <td>1000hrs</td>
              <td>01/09/2023</td>
              <td> C4</td>
              <td className="buttons">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="container"><h2>Booking Inqiriries</h2></div>
      <div className="container-inquiries"><h4>Delete Bookings</h4>
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
                <button className="btn btn-success">
                  Completed
                </button>
              </td>
            </tr>
          </tbody>
        </table>
     </div>

        <div className="container-inquiries"><h4>Change Bookings</h4>
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
                    <button className="btn btn-warning">
                      Ongoing
                    </button>
                  </td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    // </div>
    // <div className="my-bookings">
    //   <h1>My Bookings</h1>
    //   {bookings.length > 0 ? (
    //     <ul className="booking-list">
    //       {bookings.map((booking, index) => (
    //         <li key={index} className="booking-item">
    //           <p>
    //             <strong>Flight:</strong> {booking.flightName}
    //           </p>
    //           <p>
    //             <strong>Departure Time:</strong> {new Date(booking.departureTime).toLocaleString()}
    //           </p>
    //           <p>
    //             <strong>Passenger:</strong> {booking.passengerName}
    //           </p>
    //           <p>
    //             <strong>Seat:</strong> {booking.seat}
    //           </p>
    //           <hr />
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>No bookings found.</p>
    //   )}
    // </div>
  );
};

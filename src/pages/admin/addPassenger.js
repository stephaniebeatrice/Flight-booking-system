import React, { useState } from "react";
import "./addPassenger.css";
import Sidebar from "./../admin/components/Sidebar";
import Navbar from "./../admin/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AddPassenger = () => {
  const [passenger, setPassenger] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    passportId: "",
    flightDestination: "",
    flightDates: "",
    seatNumber: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setPassenger(prevPassenger => ({ ...prevPassenger, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., dispatch to Redux or send data to a server
    console.log("Passenger data:", passenger);
    // Reset the form after submission
    setPassenger({
      firstName: "",
      lastName: "",
      dob: "",
      passportId: "",
      flightDestination: "",
      flightDates: "",
      seatNumber: "",
      phoneNumber: "",
      email: "",
    });
  };

  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid bg-primary min-vh-100 ">
      <div className="row ">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <Navbar Toggle={Toggle} />
        </div>
        <div className="passenger-form">
          <h2>Add Passenger Details</h2>
          <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input type="text" name="firstName" value={passenger.firstName} onChange={handleChange} required />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastName" value={passenger.lastName} onChange={handleChange} required />
            </label>
            <label>
              Date of Birth:
              <input type="date" name="dob" value={passenger.dob} onChange={handleChange} required />
            </label>
            <label>
              Passport ID:
              <input type="number" name="passportid" value={passenger.passportId} onChange={handleChange} required />
            </label>
            <label>
              Flight Destination:
              <input type="text" name="flightDestination" value={passenger.flightDestination} onChange={handleChange} required />
            </label>
            <label>
              Flight Dates:
              <input type="text" name="flightDates" value={passenger.flightDates} onChange={handleChange} required />
            </label>
            <label>
              Seat Number:
              <input type="text" name="seatNumber" value={passenger.seatNumber} onChange={handleChange} required />
            </label>
            <label>
              Phone Number:
              <input type="tel" name="phoneNumber" value={passenger.phoneNumber} onChange={handleChange} required />
            </label>
            <label>
              Email Address:
              <input type="email" name="email" value={passenger.email} onChange={handleChange} required />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPassenger;

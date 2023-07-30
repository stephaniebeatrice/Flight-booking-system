import React, { useState } from "react";

const TicketEditing = ({ passenger, onSave }) => {
  const [firstName, setFirstName] = useState(passenger?.firstName || "");
  const [lastName, setLastName] = useState(passenger?.lastName || "");
  const [DOB, setDOB] = useState(passenger?.DOB || "");
  const [flightDate, setFlightDate] = useState(passenger?.flightDate || "");
  const [seatNumber, setSeatNumber] = useState(passenger?.seatNumber || "");
  const [phoneNumber, setPhoneNumber] = useState(passenger?.phoneNumber || "");
  const [email, setEmail] = useState(passenger?.email || "");


  const handleSave = () => {
    const updatedPassenger = {
      ...passenger,
      firstName,
      lastName,
      DOB,
      flightDate,
      seatNumber,
      phoneNumber,
      email,
    };
    onSave(updatedPassenger);
  };

  return (
    <div>
      <h2>Edit Passenger Details</h2>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
        />

        <label>Flight Date:</label>
        <input
          type="date"
          value={flightDate}
          onChange={(e) => setFlightDate(e.target.value)}
        />

        <label>Seat Number:</label>
        <input
          type="text"
          value={seatNumber}
          onChange={(e) => setSeatNumber(e.target.value)}
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label>Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default TicketEditing;

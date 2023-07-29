import React, { useState } from "react";
import "./seat-selection.css";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "../../store/bookingSlice";

const SEAT_COLS = 4;
const SEATS_PER_ROW = 2;

const Seat = ({ seat, onClick }) => {
  const seatNumber = seatNumberGenerator(seat.row, seat.col);

  const handleClick = () => {
    onClick(seat.row, seat.col);
  };

  return (
    <div
      className={`seat ${seat.selected ? "selected" : ""}`}
      style={seat.notSelectable ? { opacity: ".5", backgroundColor: "black" } : { opacity: "1" }}
      onClick={handleClick}
    >
      {seatNumber}
    </div>
  );
};

const Aisle = () => {
  return <div className="aisle"></div>;
};

const SeatRow = ({ seats, onClick }) => {
  return (
    <div className="seat-row">
      {seats.map((seat, colIndex) => (
        <React.Fragment key={colIndex}>
          {colIndex !== 0 && colIndex % SEATS_PER_ROW === 0 && <Aisle />}
          <Seat seat={seat} onClick={onClick} />
        </React.Fragment>
      ))}
    </div>
  );
};

export const SeatSelection = ({ setSelectedTab }) => {
  const { pendingBooking } = useSelector(state => state.bookingReducer);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const dispatch = useDispatch();

  // Step 1: Create an object to keep track of already booked seats for faster lookup
  const bookedSeatsMap = {};
  for (const seat of pendingBooking.seatsBookedAlready) {
    bookedSeatsMap[`${seat.row}-${seat.col}`] = true;
  }

  // Step 2:create the initialSeats array
  const initialSeats = Array(pendingBooking.rows * SEAT_COLS)
    .fill()
    .map((_, index) => {
      const row = Math.floor(index / SEAT_COLS);
      const col = index % SEAT_COLS;
      return {
        row,
        col,
        selected: !!bookedSeatsMap[`${row}-${col}`],
        notSelectable: !!bookedSeatsMap[`${row}-${col}`],
      };
    });
  const [seats, setSeats] = useState(initialSeats);

  const handleSeatClick = (row, col) => {
    const foundSeat = seats.find(seat => seat.col === col && seat.row === row && seat.notSelectable === true);
    //prevent already selected seats by other passengers from being selected
    //ensure also the passenger does not book for more seats than the one he/she had selcted when searching for a flight
    if (foundSeat || +pendingBooking.passengers === selectedSeat.length) return;
    setSelectedSeat(prev => {
      const idx = prev.findIndex(s => s.row === row && s.col === col);
      if (idx !== -1) {
        const updatedSeats = [...prev];
        updatedSeats.splice(idx, 1);
        return updatedSeats;
      } else {
        return [...prev, { row, col }];
      }
    });
    setSeats(prevSeats => {
      const updatedSeats = prevSeats.map(seat => (seat.row === row && seat.col === col ? { ...seat, selected: !seat.selected } : seat));
      return updatedSeats;
    });
  };
  const handlerSubmit = () => {
    dispatch(bookingActions.createSeatSelection(selectedSeat));
    setSelectedTab("payment");
  };
  return (
    <div className="container">
      <h1>Select Seat</h1>
      <div className="seats-container">
        {seats.map((_, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            <SeatRow seats={seats.slice(rowIndex * SEAT_COLS, rowIndex * SEAT_COLS + SEAT_COLS)} onClick={handleSeatClick} />
          </div>
        ))}
      </div>
      <button
        type="submit"
        name="btn-primary"
        value="Next"
        id="round_trip_btn"
        className="btn-primary btn-submit-form btn-rnd-trip"
        onClick={handlerSubmit}
      >
        Next
      </button>
    </div>
  );
};

export const seatNumberGenerator = (row, col) => {
  return String.fromCharCode(65 + row) + (col + 1);
};

import React, { useState } from "react";
import "./seat-selection.css";
import { useDispatch } from "react-redux";
import { bookingActions } from "../../store/bookingSlice";

const SEAT_ROWS = 17;
const SEAT_COLS = 4;
const SEATS_PER_ROW = 2;

const Seat = ({ row, col, selected, onClick }) => {
  const seatNumber = String.fromCharCode(65 + row) + (col + 1);
  const handleClick = () => {
    onClick(row, col);
  };

  return (
    <div className={`seat ${selected ? "selected" : ""}`} onClick={handleClick}>
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
          <Seat row={seat.row} col={seat.col} selected={seat.selected} onClick={onClick} />
        </React.Fragment>
      ))}
    </div>
  );
};

export const SeatSelection = ({ setSelectedTab }) => {
  const [selectedSeat, setSelectedSeat] = useState([]);
  const dispatch = useDispatch();
  const [seats, setSeats] = useState(() => {
    const initialSeats = [];
    for (let row = 0; row < SEAT_ROWS; row++) {
      for (let col = 0; col < SEAT_COLS; col++) {
        initialSeats.push({
          row,
          col,
          selected: false,
        });
      }
    }
    // Mark some seats as already reserved (for demo purposes)
    initialSeats[10].selected = true;
    initialSeats[22].selected = true;
    return initialSeats;
  });

  const handleSeatClick = (row, col) => {
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
        {Array.from({ length: SEAT_ROWS }).map((_, rowIndex) => (
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

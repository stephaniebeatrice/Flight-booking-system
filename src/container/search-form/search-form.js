import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./search-form.css";
import { useDispatch } from "react-redux";
import { bookingActions } from "../../store/bookingSlice";

const airports = ["Kenya", "Indonesia", "Uganda", "Tanzania"];

const ErrorLabel = props => {
  return <label style={{ color: "red" }}>{props.message}</label>;
};

export const SearchForm = props => {
  const [isReturn, setFlightType] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [showTimetable, setShowTimetable] = useState(false);
  const [status] = useState({ isValid: false });
  const [form, setForm] = useState({ origin: "", destination: "", passengers: 1, arrivalTime: "", departureTime: "" });

  const navigation = useNavigate();
  const dispatch = useDispatch();

  //const isReturn = true;
  const handleSubmit = async event => {
    event.preventDefault();
    console.log("================FORM======================");
    console.log(form);
    const res = await fetch("https://flight-booking-server-mu.vercel.app/flight/search", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log("===================RESPONSE ON SEARCH FLIGHT=============================");
    if (data.flight) props.setFlights(data.flight.flights);
  };

  // Function to handle flight search
  const handleSearch = () => {
    // Perform flight search based on user input
    // Replace the following code with your actual flight search logic
    const searchResponse = [
      { flightNumber: "FL123", origin: "New York", destination: "London", departureTime: "09:00 AM", arrivalTime: "02:00 PM", fare: "$600" },
      { flightNumber: "FL456", origin: "London", destination: "New York", departureTime: "03:00 PM", arrivalTime: "08:00 PM", fare: "$600" },
      { flightNumber: "FL789", origin: "Los Angeles", destination: "Tokyo", departureTime: "11:30 PM", arrivalTime: "05:30 AM", fare: "$600" },
    ];
    // Update the search result state with the flight search response
    setSearchResult(searchResponse);
    setShowTimetable(true);
  };
  const handleButtonClick = flight => {
    // Perform actions when the button is clicked for a specific flight
    dispatch(bookingActions.createPendingBooking(flight));
    navigation("/Booking");
  };

  return (
    <div className="flight-search-container">
      <div className="flight-search-card">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="flight-type-ctn">
            <div className="flight-type-group">
              <Form.Check
                inline
                checked={!isReturn}
                type="radio"
                label="One way"
                name="flightType"
                id="formHorizontalRadios1"
                onChange={e => setFlightType(false)}
              />
            </div>
            <div className="flight-type-group">
              <Form.Group className="flight-type-group">
                <Form.Check
                  inline
                  checked={isReturn}
                  type="radio"
                  label="Round Trip"
                  name="flightType"
                  id="formHorizontalRadios2"
                  onChange={e => setFlightType(true)}
                />
              </Form.Group>
            </div>
          </div>
          <div className="input-form">
            <div controlId="formGridOrigin" className="form-group">
              <label htmlFor="from">From</label>
              <Typeahead
                labelKey="origin"
                options={airports}
                id="origin"
                placeholder="Select Origin"
                onChange={e =>
                  setForm(prev => {
                    return { ...prev, origin: e[0] };
                  })
                }
              />
              {status.origin && <ErrorLabel message="Please enter a valid airport"></ErrorLabel>}
            </div>

            <div controlId="formGridDestination" className="form-group">
              <label htmlFor="to">To</label>
              <Typeahead
                labelKey="destination"
                options={airports}
                id="destination"
                placeholder="Select Destination"
                onChange={e =>
                  setForm(prev => {
                    return { ...prev, destination: e[0] };
                  })
                }
              />
              {status.destination && <ErrorLabel message="Please enter a valid airport but not same as origin"></ErrorLabel>}
            </div>

            <div controlId="formGridDateOfDep" className="form-group">
              <label>Departure Date</label>
              <Form.Control
                type="date"
                name="dateOfDep"
                placeholder="yyyy-mm-dd"
                required
                onChange={e =>
                  setForm(prev => {
                    return { ...prev, departureTime: e.target.value };
                  })
                }
              />
              {status.departureDate && <ErrorLabel message="Please enter a valid departure date"></ErrorLabel>}
            </div>

            {isReturn && (
              <div controlId="formGridDateOfReturn" className="form-group">
                <label>Return Date</label>
                <Form.Control type="date" name="dateOfReturn" placeholder="yyyy-mm-dd" required />
                {status.returnDate && <ErrorLabel message="Please enter a valid return date"></ErrorLabel>}
              </div>
            )}

            <div controlId="exampleForm.ControlSelect1" className="form-group">
              <label htmlFor="departure">Class</label>
              <Form.Control as="select" name="numOfPassengers" placeholder="Number of Passengers">
                <option>Class A-Executive</option>
                <option>Class B-Middle Class</option>
                <option>Class C-Low Class</option>
              </Form.Control>
            </div>
            <div controlId="exampleForm.ControlSelect1" className="form-group">
              <label htmlFor="departure">Passengers</label>
              <Form.Control
                as="select"
                name="numOfPassengers"
                placeholder="Number of Passengers"
                onChange={e =>
                  setForm(prev => {
                    return { ...prev, passengers: e.target.value };
                  })
                }
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
          </div>
          <div className="button-container">
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </form>

        {showTimetable && (
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Flight Number</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>Fare</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {searchResult.map((flight, index) => (
                  <tr key={index.toString()}>
                    <td>{flight.flightNumber}</td>
                    <td>{flight.origin}</td>
                    <td>{flight.destination}</td>
                    <td>{flight.departureTime}</td>
                    <td>{flight.arrivalTime}</td>
                    <td>{flight.fare}</td>
                    <td>
                      <button onClick={() => handleButtonClick(flight)}>Book</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;

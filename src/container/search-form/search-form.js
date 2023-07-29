import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./search-form.css";
import { useDispatch } from "react-redux";
import { bookingActions } from "../../store/bookingSlice";

const airports = [
  "Grantsburg Municipal Airport",
  "Baimuru Airport",
  "Kratie Airport",
  "Malmstrom Air Force Base",
  "Lanzarote Airport",
  "Gordonsville Municipal Airport",
  "Huacaraje Airport",
  "Shahrekord Airport",
];

const ErrorLabel = props => {
  return <label style={{ color: "red" }}>{props.message}</label>;
};

export const SearchForm = props => {
  const [isReturn, setFlightType] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [showTimetable, setShowTimetable] = useState(false);
  const [status] = useState({ isValid: false });
  const [form, setForm] = useState({ origin: "", destination: "", passengers: 1, departureTime: "", class: "Executive" });
  const [msg, setMsg] = useState("");
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      setMsg("");
      setSearchResult([]);
      const res = await fetch("https://flight-booking-server-3zln.vercel.app/flight/search", {
        method: "POST",
        body: JSON.stringify({ destination: form.destination, departureTime: form.departureTime, origin: form.origin, passengers: form.passengers }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.flights) {
        setSearchResult(data.flights);

        return setShowTimetable(true);
      } else {
        setMsg(data.message);
      }
    } catch (error) {
      setMsg("no flights found");
      console.log("==================================FETCH DATA ERROR==================================");
      console.log(error);
    }
  };

  const handleButtonClick = flight => {
    // Perform actions when the button is clicked for a specific flight
    dispatch(bookingActions.clearBooking());
    dispatch(
      bookingActions.createPendingBooking({
        ...flight,
        passengers: form.passengers,
        class: form.class,
        fare: flight.price[form.class.toLowerCase()] ? flight.price[form.class.toLowerCase()] : flight.price.low,
      })
    );
    navigation("/Booking");
  };

  const focusHandler = () => {
    setShowTimetable(false);
    setSearchResult([]);
    setMsg("");
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
                onFocus={focusHandler}
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
                  onFocus={focusHandler}
                />
              </Form.Group>
            </div>
          </div>
          <div className="input-form">
            <div className="form-group">
              <label htmlFor="from">From</label>
              <Typeahead
                labelKey="origin"
                options={airports}
                id="origin"
                placeholder="Select Origin"
                required={true}
                onChange={e =>
                  setForm(prev => {
                    return { ...prev, origin: e[0] };
                  })
                }
                onFocus={focusHandler}
              />
              {status.origin && <ErrorLabel message="Please enter a valid airport"></ErrorLabel>}
            </div>

            <div className="form-group">
              <label htmlFor="to">To</label>
              <Typeahead
                labelKey="destination"
                options={airports}
                id="destination"
                placeholder="Select Destination"
                required={true}
                onChange={e =>
                  setForm(prev => {
                    return { ...prev, destination: e[0] };
                  })
                }
                onFocus={focusHandler}
              />
              {status.destination && <ErrorLabel message="Please enter a valid airport but not same as origin"></ErrorLabel>}
            </div>

            <div className="form-group">
              <label>Departure Date</label>
              <Form.Control
                type="date"
                name="dateOfDep"
                placeholder="yyyy-mm-dd"
                required={true}
                onChange={e =>
                  setForm(prev => {
                    return { ...prev, departureTime: new Date(e.target.value) };
                  })
                }
                onFocus={focusHandler}
              />
              {status.departureDate && <ErrorLabel message="Please enter a valid departure date"></ErrorLabel>}
            </div>

            {isReturn && (
              <div className="form-group">
                <label>Return Date</label>
                <Form.Control type="date" name="dateOfReturn" placeholder="yyyy-mm-dd" required />
                {status.returnDate && <ErrorLabel message="Please enter a valid return date"></ErrorLabel>}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="departure">Class</label>
              <Form.Control
                as="select"
                name="numOfPassengers"
                placeholder="Number of Passengers"
                required={true}
                onChange={e =>
                  setForm(prev => {
                    return { ...prev, class: e.target.value };
                  })
                }
              >
                <option>Executive</option>
                <option>Middle</option>
                <option>Economy</option>
              </Form.Control>
            </div>
            <div className="form-group">
              <label htmlFor="departure">Passengers</label>
              <Form.Control
                as="select"
                name="numOfPassengers"
                placeholder="Number of Passengers"
                required={true}
                onChange={e =>
                  setForm(prev => {
                    return { ...prev, passengers: e.target.value };
                  })
                }
                onFocus={focusHandler}
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
            <button type="submit">Search</button>
          </div>
          <div style={{ color: "red", textAlign: "center", fontSize: "large" }}>{msg}</div>
        </form>
        {showTimetable && (
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Flight Name</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>Fare</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {searchResult.map((flight, index) => {
                  const match = new Date(flight.departureTime).toLocaleDateString() === new Date(form.departureTime).toLocaleDateString();
                  const price = flight.price[form.class.toLowerCase()] ? flight.price[form.class.toLowerCase()] : flight.price.low;
                  const time = new Date(new Date(flight.departureTime).getTime() + +flight.flightTime * 60 * 60 * 1000);
                  return (
                    <tr key={index.toString()}>
                      <td>{flight.flightName}</td>
                      <td>
                        {new Date(flight.departureTime).toLocaleDateString()}{" "}
                        {new Date(flight.departureTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </td>
                      <td>
                        {time.toLocaleDateString()} {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })}
                      </td>
                      <td>${price}</td>
                      <td style={{ color: match ? "green" : "orange" }}>{match ? "Match!" : "Recommended"}</td>
                      <td>
                        <button onClick={() => handleButtonClick(flight)}>Book</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;

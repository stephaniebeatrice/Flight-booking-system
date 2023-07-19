import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./search-form.css";

const airports = ["Kenya", "Indonesia", "Uganda", "Tanzania"];

const isDate = date => {
  return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
};

const ErrorLabel = props => {
  return <label style={{ color: "red" }}>{props.message}</label>;
};

export const SearchForm = props => {
  const [isReturn, setFlightType] = useState(false);
  const [status, setFormValid] = useState({ isValid: false });
  const [form, setForm] = useState({
    origin: "",
    destination: "",
    passengers: 0,
    arrivalTime: "",
    departureTime: "",
  });

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
    if (data.flight) props.setFlights(data.flight.flights);
  };

  return (
    <div className="flight-search-container">
      <div className="flight-search-card">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="flight-type-ctn">
            <div className="flight-type-group">
              <Button> one way</Button>
              {/* <Form.Check
                inline
                checked={!isReturn}
                type="radio"
                label="One way"
                name="flightType"
                id="formHorizontalRadios1"
                onChange={e => setFlightType(false)}
              /> */}
            </div>
            <div className="flight-type-group">
              <Button> round Trip</Button>
              {/* <Form.Check
                inline
                checked={!isReturn}
                type="radio"
                label="One way"
                name="flightType"
                id="formHorizontalRadios1"
                onChange={e => setFlightType(false)}
              /> */}
            </div>
          </div>
          {/* <Form.Group className="flight-type-group">
              <Form.Check
                inline
                checked={isReturn}
                type="radio"
                label="Round Trip"
                name="flightType"
                id="formHorizontalRadios2"
                onChange={e => setFlightType(true)}
              />
            </Form.Group> */}
          <div className="input-form">
            <div controlId="formGridOrigin" className="form-group">
              <label htmlFor="from">From:</label>
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
              <label htmlFor="to">To:</label>
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
              <label htmlFor="departure">Passengers</label>
              <Form.Control as="select" name="numOfPassengers" placeholder="Number of Passengers">
                <option>1 adult, Economy</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
            <Button variant="primary" type="submit">
              Search
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;

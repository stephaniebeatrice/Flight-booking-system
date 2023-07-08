import React from "react";
import "./flight-grid.css";
import { FlightSearchInfo } from "./../flight-search-info/flight-search-info";
import { FlightInfo } from "./../flight-info/flight-info";
import { MultiFlightInfo } from "./../multi-flight-info/multi-flight-info";

const FlightsGrid = props => {
  const flights = {
    nonStopFlights: [
      {
        name: "JKIA",
        flightNo: 12844875755,
        departureTime: Date.now() + 6455242526,
        origin: "KENYA",
        arrivalTime: Date.now() + 96565758585,
        destination: "DUBAI",
        price: 7565656565,
        date: Date.now(),
      },
    ],
    multiStopFlights: [
      {
        cumulativeFlight: {
          departureTime: Date.now(),
          origin: "KENYA",
          arrivalTime: Date.now(),
          destination: "DUBAI",
          totalFare: 596968683,
          arrivalTimeStamp: Date.now() + 96565758585,
          departureTimeStamp: Date.now() + 6455242526,
          dayChange: Date.now() + 96565758585,
        },
      },
    ],
  };
  const criteria = {
    origin: "KENYA",
    destination: "DUBAI",
    date: Date.now(),
  };
  const flightsCount = (flights.nonStopFlights && flights.nonStopFlights.length) + (flights.multiStopFlights && flights.multiStopFlights.length);
  return (
    <div className="flights-info-container">
      {props.criteria && <FlightSearchInfo criteria={criteria} count={flightsCount || 0} />}
      {flights.nonStopFlights && flights.nonStopFlights.map(flight => <FlightInfo data={flight} />)}
      {flights.multiStopFlights && flights.multiStopFlights.map(flight => <MultiFlightInfo data={flight} />)}
    </div>
  );
};

export default FlightsGrid;

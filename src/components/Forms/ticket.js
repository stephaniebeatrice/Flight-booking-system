import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export const Ticket = ({ flight }) => {
  const ticketRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => ticketRef.current,
  });

  return (
    <div class="ticket-container" ref={ticketRef}>
      <div class="ticket airline">
        <div class="top">
          <h1>boarding pass</h1>
          <div class="big">
            <p class="from">KQ</p>
            <p class="to">{/* <i class="fas fa-arrow-right"></i> SAN */}</p>
          </div>
          <div class="top--side">
            <i class="fas fa-plane"></i>
            <p>{flight.origin}</p>
            <p>{flight.destination}</p>
          </div>
        </div>
        <div class="bottom">
          <div class="column">
            <div class="row row-1">
              <p>
                <span>Flight</span>
                {flight.flightName}
              </p>
              <p class="row--right">{/* <span>Gate</span>B3 */}</p>
            </div>
            <div class="row row-2">
              <p>
                <span>Boards</span>
                {`${new Date(new Date(flight.departureTime).getTime() - 30 * 60 * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}`}
              </p>
              <p class="row--center">
                <span>Departs</span>
                {new Date(flight.departureTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })}
              </p>
              <p class="row--right">
                <span>Arrives</span>
                {new Date(flight.departureTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })}
              </p>
            </div>
            <div class="row row-3">
              <p>
                <span>Passenger</span>Jesus Ramirez
              </p>
              <p class="row--center">
                <span>Seat</span>11E
              </p>
              <p class="row--right">
                <span>Group</span>3
              </p>
            </div>
          </div>
          <div class="bar--code"></div>
        </div>
      </div>
      <button class="btn" onClick={handlePrint}>
        print Ticket
      </button>
    </div>
  );
};

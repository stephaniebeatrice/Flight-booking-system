import React from "react";

export const Ticket = () => {
  return (
    <div class="ticket-container">
      <div class="ticket basic">
        <p>Admit One</p>
      </div>

      <div class="ticket airline">
        <div class="top">
          <h1>boarding pass</h1>
          <div class="big">
            <p class="from">BWI</p>
            <p class="to">
              <i class="fas fa-arrow-right"></i> SAN
            </p>
          </div>
          <div class="top--side">
            <i class="fas fa-plane"></i>
            <p>Baltimore</p>
            <p>San Diego</p>
          </div>
        </div>
        <div class="bottom">
          <div class="column">
            <div class="row row-1">
              <p>
                <span>Flight</span>AA2005
              </p>
              <p class="row--right">
                <span>Gate</span>B3
              </p>
            </div>
            <div class="row row-2">
              <p>
                <span>Boards</span>10:25 AM
              </p>
              <p class="row--center">
                <span>Departs</span>11:00 AM
              </p>
              <p class="row--right">
                <span>Arrives</span>1:05 PM
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
    </div>
  );
};

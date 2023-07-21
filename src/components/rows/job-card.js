import React from "react";
import handlers from "../../img/handlers.jpg";
import clearance from "../../img/clearance.jpg";
import catering from "../../img/catering.jpg";
import hostess from "../../img/hostess.jpg";
import mechanic from "../../img/mechanic.jpg";
import operations from "../../img/operations.jpg";
import pilot from "../../img/pilot.jpg";
import controllers from "../../img/controllers.jpg";
import support from "../../img/support.jpg";


export const JobCard = () => {
  return (
    <div>
      <div className="job-card">
        <div className="job-card-header">
          <div>
            <img src={handlers} alt="Visa" />
          </div>
          {/* <div className="menu-dot"></div> */}
        </div>
        <div className="job-card-title">
          {" "}
          <h3>Airline Baggage handler</h3>
        </div>
        <div className="job-card-subtitle">
          Responsibilities include transfering luggage from check-in areas to
          departure areas, moving luggage to and from the aircraft and loading
          inbound luggage onto conveyors in the arrivals area.
        </div>
        <div className="job-detail-buttons">
          <button className="search-buttons detail-button">Full Time</button>
          <button className="search-buttons detail-button">Min. 1 Year</button>
          <button className="search-buttons detail-button">Senior Level</button>
        </div>
        <div className="job-card-buttons">
          <button className="search-buttons card-buttons">Apply Now</button>
          <button className="search-buttons card-buttons-msg">Messages</button>
        </div>
      </div>

      <div className="job-card">
        <div className="job-card-header">
          <div>
            <img src={operations} alt="" />
          </div>
          {/* <div className="menu-dot"></div> */}
        </div>
        <div className="job-card-title"><h3>Passenger assistant</h3></div>
        <div className="job-card-subtitle">
          A passenger assistant is a customer service professional who will help
          assist travelers at the airport. They will handle passenger check-ins,
          assist with boarding and deplaning and communicate travel information
          to passengers.{" "}
        </div>
        <div className="job-detail-buttons">
          <button className="search-buttons detail-button">Full Time</button>
          <button className="search-buttons detail-button">Min. 2 Year</button>
          <button className="search-buttons detail-button">Junior Level</button>
        </div>
        <div className="job-card-buttons">
          <button className="search-buttons card-buttons">Apply Now</button>
          <button className="search-buttons card-buttons-msg">Messages</button>
        </div>
      </div>

      <div className="job-card">
        <div className="job-card-header">
          <div>
            <img src={clearance} alt="" />
          </div>
          <div className="menu-dot"></div>
        </div>
        <div className="job-card-title"><h3>Airline Clearance agents</h3></div>
        <div className="job-card-subtitle">
          thses agents will verify booking passes and other required documents
          at check-ins and onboarding.
        </div>
        <div className="job-detail-buttons">
          <button className="search-buttons detail-button">Part Time</button>
          <button className="search-buttons detail-button">Min. 2 Year</button>
          <button className="search-buttons detail-button">Senior Level</button>
        </div>
        <div className="job-card-buttons">
          <button className="search-buttons card-buttons">Apply Now</button>
          <button className="search-buttons card-buttons-msg">Messages</button>
        </div>
      </div>
  
      <div className="job-card">
        <div className="job-card-header">
          <div>
            <img src={pilot} alt="" />
          </div>
          <div className="menu-dot"></div>
        </div>
        <div className="job-card-title"><h3>Pilots</h3></div>
        <div className="job-card-subtitle">
          Pilots are responsible for transporting people and cargo,conducting
          pre-flight checks, assessing and adjusting flight paths and updating
          passengers on conditions or delays{" "}
        </div>
        <div className="job-detail-buttons">
          <button className="search-buttons detail-button">Part Time</button>
          <button className="search-buttons detail-button">Min. 1 Year</button>
          <button className="search-buttons detail-button">Junior Level</button>
        </div>
        <div className="job-card-buttons">
          <button className="search-buttons card-buttons">Apply Now</button>
          <button className="search-buttons card-buttons-msg">Messages</button>
        </div>
      </div>

      <div className="job-card">
        <div className="job-card-header">
          <div>
            <img src={hostess} alt="" />
          </div>
          <div className="menu-dot"></div>
        </div>
        <div className="job-card-title"><h3>Flight attendant</h3></div>
        <div className="job-card-subtitle">
          Flight attendants ensure passengers' comfort and safety when in
          flight. This includes demonstrating safety features, communicating
          with the pilot and responding to any emergencies on the flight.{" "}
        </div>
        <div className="job-detail-buttons">
          <button className="search-buttons detail-button">Part Time</button>
          <button className="search-buttons detail-button">Min. 1 Year</button>
          <button className="search-buttons detail-button">Senior Level</button>
        </div>
        <div className="job-card-buttons">
          <button className="search-buttons card-buttons">Apply Now</button>
          <button className="search-buttons card-buttons-msg">Messages</button>
        </div>
      </div>

      <div className="job-card">
        <div className="job-card-header">
          <div>
            <img src={catering} alt="" />
          </div>
          <div className="menu-dot"></div>
        </div>
        <div className="job-card-title"><h3>Airline Caterers</h3></div>
        <div className="job-card-subtitle">
          They are responsible for providing customer service and preparing
          meals for visitors in an airport. These professionals are also
          responsible for cleaning flight kitchen utensils, equipment and
          facilities.{" "}
        </div>
        <div className="job-detail-buttons">
          <button className="search-buttons detail-button">Full Time</button>
          <button className="search-buttons detail-button">Min. 2 Years</button>
          <button className="search-buttons detail-button">Junior Level</button>
        </div>
        <div className="job-card-buttons">
          <button className="search-buttons card-buttons">Apply Now</button>
          <button className="search-buttons card-buttons-msg">Messages</button>
        </div>
      </div>

      <div className="job-card">
        <div className="job-card-header">
          <div>
            <img src={mechanic} alt="" />
          </div>
          <div className="menu-dot"></div>
        </div>
        <div className="job-card-title"><h3>Avionics technician</h3></div>
        <div className="job-card-subtitle">
          Avionics technicians are responsible for installing, repairing and
          maintaining equipment related to airplanes, helicopters and other
          fixed-wing aircraft.
        </div>
        <div className="job-detail-buttons">
          <button className="search-buttons detail-button">Full Time</button>
          <button className="search-buttons detail-button">Min. 2 Year</button>
          <button className="search-buttons detail-button">Senior Level</button>
        </div>
        <div className="job-card-buttons">
          <button className="search-buttons card-buttons">Apply Now</button>
          <button className="search-buttons card-buttons-msg">Messages</button>
        </div>
      </div>

      <div className="job-card">
        <div className="job-card-header">
          <div>
            <img src={controllers} alt="" />
          </div>
          <div className="menu-dot"></div>
        </div>
        <div className="job-card-title"><h3>Air traffic controller</h3></div>
        <div className="job-card-subtitle">
          Air traffic controllers coordinate aircraft traffic in the airfield
          and along flight paths. Their duties include communicating with
          pilots, issuing take-off and landing instructions, monitoring aircraft
          using computer programs and radar and visually surveying the airfield.{" "}
        </div>
        <div className="job-detail-buttons">
          <button className="search-buttons detail-button">Part Time</button>
          <button className="search-buttons detail-button">Min. 3 Years</button>
          <button className="search-buttons detail-button">Senior Level</button>
        </div>
        <div className="job-card-buttons">
          <button className="search-buttons card-buttons">Apply Now</button>
          <button className="search-buttons card-buttons-msg">Messages</button>
        </div>
      </div>

      <div className="job-card">
        <div className="job-card-header">
          <div>
            <img src={support} alt="" />
          </div>
          <div className="menu-dot"></div>
        </div>
        <div className="job-card-title"><h3>Customer service agents</h3></div>
        <div className="job-card-subtitle">
          Customer service agents work at airport counters, information desks
          and airline customer service centers in an airport. They help
          passengers their flight reservations and assist travelers with
          information regarding the airline.
          <div className="job-detail-buttons">
            <button className="search-buttons detail-button">Remote</button>
            <button className="search-buttons detail-button">Min. 1 Year </button>
            <button className="search-buttons detail-button"> Junior Level </button>
          </div>
          <div className="job-card-buttons">
            <button className="search-buttons card-buttons">Apply Now</button>
            <button className="search-buttons card-buttons-msg">
              Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

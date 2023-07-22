import React from "react";
import { Header } from "../../components/header/header";
import { Link } from 'react-router-dom';
import "./style.css";
import handlers from "../../img/handlers.jpg";
import clearance from "../../img/clearance.jpg";
import catering from "../../img/catering.jpg";
import hostess from "../../img/hostess.jpg";
import mechanic from "../../img/mechanic.jpg";
import operations from "../../img/operations.jpg";
import pilot from "../../img/pilot.jpg";
import controllers from "../../img/controllers.jpg";
import support from "../../img/support.jpg";

export const Jobs = () => {

  const jobData = [
    {
      id: 1,
      title: "Airline Baggage handler",
      subtitle:
        "Responsibilities include transferring luggage from check-in areas to departure areas, moving luggage to and from the aircraft.",
      details: ["Full Time", "Min. 2 Years", "Senior Level"],
      imageUrl: handlers,
    },

    {
      id: 2,
      title: "Passenger assistant",
      subtitle: "A passenger assistant is a customer service professional who will help assist travelers at the airport board the right aeroplane as indicated in  the booking pass.",
      details: ["Full Time", "Min. 1 Year", "Junior Level"],
      imageUrl: operations,
    },

    {
      id: 3,
      title: "Airline Clearance agents",
      subtitle: " Airline Clearance agents verify booking passes at check-ins and onboarding.They also verify any other required documents eg passports.",
      details: ["Part Time", "Min. 2 Years", "Junior Level"],
      imageUrl: clearance,
    },
    {
      id: 4,
      title: "Pilots",
      subtitle: "Pilots are responsible for transporting people and cargo,assessing and adjusting flight paths and updating passengers on conditions or delays.",
      details: ["Full Time", "Min. 1 Year", "Senior Level"],
      imageUrl: pilot,
    },

    {
      id: 5,
      title: "Flight attendant",
      subtitle: "They ensure passengers' comfort and safety when in flight by demonstrating safety features and responding to any emergencies on the flight.",
      details: ["Part Time", "Min. 1 Year", "Senior Level"],
      imageUrl: hostess,
    },
    {
      id: 6,
      title: "Airline Caterers",
      subtitle: " They are responsible for providing customer service and preparing meals for visitors in an airport and cleaning flight kitchen utensils. ",
      details: ["Full Time", "Min. 1 Year", "Junior Level"],
      imageUrl: catering,
    },

    {
      id: 7,
      title: "Avionics technician",
      subtitle: "Avionics technicians are responsible for installing, repairing and maintaining equipment related to airplanes, helicopters and other fixed-wing aircraft.",
      details: ["Full Time", "Min. 1 Year", "Senior Level"],
      imageUrl: mechanic,
    },

    {
      id: 8,
      title: "Air traffic controller",
      subtitle: "Their duties include communicating with pilots, issuing take-off and landing instructions, monitoring aircrafts using computers programs and radar .",
      details: ["Full Time", "Min. 1 Year", "Junior Level"],
      imageUrl: controllers,
    },
    {
      id: 9,
      title: "Customer service agents",
      subtitle: "These agents work at airport counters and  information desks. They help passengers their flight reservations and assist travelers with information regarding the airline.",
      details: ["Remote", "Min. 1 Year", "Junior Level"],
      imageUrl: support,
    },

  ];

  return (
    <div className="App">
      <Header />
      <div className="job">
        <div className="job-wrapper">
          <div className="search-menu">
            <div className="search-salary">
              <input type="text" placeholder="search for a job with title" />
            </div>
            <button className="search-button">Find Job</button>
          </div>
          <div className="main-container">
            <div className="search-type">
              <div className="alert">
                <div className="alert-title">Create Job Alert</div>
                <div className="alert-subtitle">Create a job alert now and never miss a job</div>
                <input type="text" placeholder="Enter job keyword" />
                <button className="search-buttons">Create Job Alerts</button>
              </div>
              <div className="job-time">
                <div className="job-time-title">Type of Employment</div>
                <div className="job-wrapper">
                  <div className="type-container">
                    <input type="checkbox" id="job1" className="job-style" checked />
                    <label for="job1">Full Time Jobs</label>
                    <span className="job-number">56</span>
                  </div>
                  <div className="type-container">
                    <input type="checkbox" id="job2" className="job-style" />
                    <label for="job2">Part Time Jobs</label>
                    <span className="job-number">43</span>
                  </div>
                  <div className="type-container">
                    <input type="checkbox" id="job3" className="job-style" />
                    <label for="job3">Remote Jobs</label>
                    <span className="job-number">24</span>
                  </div>
                  <div className="type-container">
                    <input type="checkbox" id="job4" className="job-style" />
                    <label for="job4">Internship Jobs</label>
                    <span className="job-number">27</span>
                  </div>
                  <div className="type-container">
                    <input type="checkbox" id="job5" className="job-style" />
                    <label for="job5">Contract</label>
                    <span className="job-number">76</span>
                  </div>
                  <div className="type-container">
                    <input type="checkbox" id="job6" className="job-style" />
                    <label for="job6">Training Jobs</label>
                    <span className="job-number">28</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="searched-jobs">
              <div className="job-cards">
                {jobData.map((job) => (
                  <div className="job-card" key={job.id}>
                    <div className="job-card-header">
                      {/* <div>{img}</div> */}
                      <img src={job.imageUrl} />
                    </div>
                    <div className="job-card-title">{job.title}</div>
                    <div className="job-card-subtitle">{job.subtitle}</div>
                    <div className="job-detail-buttons">
                      {job.details.map((detail, index) => (
                        
                        <button className="search-buttons detail-button" key={index}>
                          {detail}
                        </button>
                      
                      ))}
                    </div>
                    <div className="job-card-buttons">
                    <Link to="/Apply"><button className="search-buttons card-buttons">Apply Now</button> </Link>
                      {/* <button className="search-buttons card-buttons-msg">Messages</button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

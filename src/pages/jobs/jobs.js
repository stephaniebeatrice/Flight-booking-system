import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import "./style.css";

export const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  const images = [
    {
      imageUrl: ("https://www.pexels.com/photo/photo-of-airplane-1928068/") ,
      imageUrl: ("https://www.pexels.com/photo/airport-workers-in-reflective-vests-standing-next-to-an-airplane-15923439/"),
      imageUrl: ("https://www.pexels.com/photo/person-holding-gray-twist-pen-and-white-printer-paper-on-brown-wooden-table-955389/") ,
      imageUrl: ("https://www.pexels.com/photo/pilots-operating-airplane-in-cockpit-during-flight-4269510/") ,
      imageUrl: ("https://www.pexels.com/photo/aircraft-2059627/") ,
      imageUrl: ("https://www.pexels.com/photo/unrecognizable-airport-workers-directing-helicopter-during-arrival-4490704/") ,
      imageUrl: ("https://www.pexels.com/photo/man-having-a-phone-call-in-front-of-a-laptop-859264/") ,
      imageUrl: ("https://www.pexels.com/photo/flight-attendants-wearing-face-mask-while-standing-on-the-aisle-of-an-airplane-12870864//") ,
      imageUrl: ("https://www.pexels.com/photo/a-flight-attendant-standing-in-the-cabin-11989307/") ,
    }
  ]

  useEffect(() => {
    (async () => {
      const res = await fetch("https://flight-booking-server-3zln.vercel.app/flight/jobs", {
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("------------------------feched jobs--------------");
      console.log(data);
      setJobs(data.jobs);
    })();
  }, []);

  const handleReadMoreClick = jobId => {
    setSelectedJob(jobId === selectedJob ? null : jobId);
  };
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
              {/* <div className="alert">
                <div className="alert-title">Create Job Alert</div>
                <div className="alert-subtitle">Create a job alert now and never miss a job</div>
                <input type="text" placeholder="Enter job keyword" />
                <button className="search-buttons">Create Job Alerts</button>
              </div> */}
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
                {jobs.map(job => (
                  <div className="job-card" key={job.id}>
                    <div className="job-card-header">
                      <img src={job.imageUrl} alt={job.title} />
                    </div>
                    <div className="job-card-title">
                      <h3>{job.title}</h3>
                    </div>
                    <div className="job-card-subtitle">{job.subtitle}</div>
                    <div className="job-detail-buttons">
                      {job.details.map((detail, index) => (
                        <button className="search-buttons detail-button" key={index}>
                          {detail}
                        </button>
                      ))}
                    </div>
                    <div className="job-card-buttons">
                      <button className="search-buttons card-buttons" onClick={() => handleReadMoreClick(job.id)}>
                        Read more
                      </button>
                      <Link to="/Apply">
                        <button className="search-buttons card-buttons">Apply Now</button>
                      </Link>
                    </div>
                    {selectedJob === job.id && (
                      <div>
                        <h3>Requirements:</h3>
                        <p>{job.Requirements}</p>
                        <h3>Salary:</h3>
                        <p>{job.salary}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

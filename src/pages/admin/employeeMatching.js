import React, { useEffect, useState } from "react";
//import { Header } from "../../components/header/header";
import "./employeeMatching.css";
import Sidebar from "./../admin/components/Sidebar";
import Navbar from "./../admin/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const EmployeeMatching = () => {
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    // Mock API call to fetch job applicants and their applied jobs
    // Replace this with your actual API call to fetch data from the backend
    setTimeout(() => {
      const mockApplicants = [
        {
          id: 1,
          name: "John Doe",
          appliedJob: "Flight Attendant",
          status: "Pending",
          cv: "CV for John Doe",
        },
        {
          id: 2,
          name: "Jane Smith",
          appliedJob: "Airport Security",
          status: "Pending",
          cv: "CV for Jane Smith",
        },
        {
          id: 3,
          name: "Bob Johnson",
          appliedJob: "Baggage Handler",
          status: "Pending",
          cv: "CV for Bob Johnson",
        },
        // Add more mock data here
      ];
      setApplicants(mockApplicants);
    }, 1000); // Simulate a 1-second delay to fetch data
  }, []);

  const handleAction = (applicantId, action) => {
    if (action === "Accepted") {
      // Update the status to "Approved" if the "Accept" button is clicked
      const updatedApplicants = applicants.map(applicant => (applicant.id === applicantId ? { ...applicant, status: "Approved" } : applicant));
      setApplicants(updatedApplicants);
    } else if (action === "Declined") {
      const confirmation = window.confirm("Are you sure you want to decline this applicant?");
      if (confirmation) {
        const updatedApplicants = applicants.map(applicant => (applicant.id === applicantId ? { ...applicant, status: "Declined" } : applicant));
        setApplicants(updatedApplicants);
      }
    }
  };

  const handleViewCV = applicantCV => {
    // Show the CV details in a modal or separate section
    setSelectedApplicant(applicantCV);
  };

  return (
    <div className="container-fluid bg-primary min-vh-100 ">
      <div className="row ">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <Navbar Toggle={Toggle} />
        </div>
        <div className="airport-container">
          <h2 className="title">Airport Job Applicants</h2>
          <table className="applicants-table">
            <thead>
              <tr>
                <th className="header">Applicant ID</th>
                <th className="header">Full Names</th>
                <th className="header">Applied Job</th>
                <th className="header">CV</th>
                <th className="header">Status</th>
                <th className="header">Action</th>
                <th className="header">Print</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map(applicant => (
                <tr key={applicant.id}>
                  <td className="detail">{applicant.id}</td>
                  <td className="detail">{applicant.name}</td>
                  <td className="detail">{applicant.appliedJob}</td>
                  <td className="detail">
                    <button onClick={() => handleViewCV(applicant.cv)} className="button">
                      View CV
                    </button>
                  </td>
                  <td className={`status ${applicant.status.toLowerCase()}`}>{applicant.status}</td>
                  <td>
                    <button onClick={() => handleAction(applicant.id, "Accepted")} className="button">
                      Accept
                    </button>
                    <button onClick={() => handleAction(applicant.id, "Declined")} className="button">
                      Decline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Modal or separate section to view the CV */}
          {selectedApplicant && (
            <div className="">
              <h3>CV Details</h3>
              <p>{selectedApplicant}</p>
              <button onClick={() => setSelectedApplicant(null)} className="">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default EmployeeMatching;

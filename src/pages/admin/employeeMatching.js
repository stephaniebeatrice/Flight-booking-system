import React, { useEffect, useState } from "react";
//import { Header } from "../../components/header/header";
import './employeeMatching.css'

const EmployeeMatching = () => {
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  useEffect(() => {
    // Mock API call to fetch job applicants and their applied jobs
    // Replace this with your actual API call to fetch data from the backend
    // For this example, we're using setTimeout to simulate an asynchronous call
    setTimeout(() => {
      const mockApplicants = [
        { id: 1, name: "John Doe", appliedJob: "Flight Attendant", status: "Pending", cv: "CV for John Doe" },
        { id: 2, name: "Jane Smith", appliedJob: "Airport Security", status: "Pending", cv: "CV for Jane Smith" },
        { id: 3, name: "Bob Johnson", appliedJob: "Baggage Handler", status: "Pending", cv: "CV for Bob Johnson" },
        // Add more mock data here
      ];
      setApplicants(mockApplicants);
    }, 1000); // Simulate a 1-second delay to fetch data
  }, []);

  const handleAction = (applicantId, action) => {
    if (action === "Accepted") {
      // Update the status to "Approved" if the "Accept" button is clicked
      const updatedApplicants = applicants.map((applicant) =>
        applicant.id === applicantId ? { ...applicant, status: "Approved" } : applicant
      );
      setApplicants(updatedApplicants);
    } else if (action === "Declined") {
      // Ask for confirmation before changing the status to "Declined"
      const confirmation = window.confirm("Are you sure you want to decline this applicant?");
      if (confirmation) {
        // Update the status to "Declined" if the user confirms
        const updatedApplicants = applicants.map((applicant) =>
          applicant.id === applicantId ? { ...applicant, status: "Declined" } : applicant
        );
        setApplicants(updatedApplicants);
      }
    }
  };

  const handleViewCV = (applicantCV) => {
    // Show the CV details in a modal or separate section
    setSelectedApplicant(applicantCV);
  };

  return (
    <div>
      <h2>Airport Job Applicants</h2>
      <table>
        <thead>
          <tr>
            <th>Applicant ID</th>
            <th>Name</th>
            <th>Applied Job</th>
            <th>CV</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant) => (
            <tr key={applicant.id}>
              <td>{applicant.id}</td>
              <td>{applicant.name}</td>
              <td>{applicant.appliedJob}</td>
              <td>
                <button onClick={() => handleViewCV(applicant.cv)}>View CV</button>
              </td>
              <td className={`status ${applicant.status.toLowerCase()}`}>
                {applicant.status}
              </td>
              <td>
                <button onClick={() => handleAction(applicant.id, "Accepted")}>
                  Accept
                </button>
                <button onClick={() => handleAction(applicant.id, "Declined")}>
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal or separate section to view the CV */}
      {selectedApplicant && (
        <div>
          <h3>CV Details</h3>
          <p>{selectedApplicant}</p>
          <button onClick={() => setSelectedApplicant(null)}>Close</button>
        </div>
      )}
    </div>
  );
};
export default EmployeeMatching;
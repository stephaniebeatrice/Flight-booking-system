import React from "react";

const SuccessfulApplicants = ({ successfulMatches }) => {
  return (
    <div>
      <h2 className="title">Approved Applicants</h2>
      <table className="applicants-table">
        <thead>
          <tr>
            <th className="header">Applicant ID</th>
            <th className="header">Full Names</th>
            <th className="header">Applied Job</th>
          </tr>
        </thead>
        <tbody>
          {successfulMatches.map(applicant => (
            <tr key={applicant.id}>
              <td className="detail">{applicant.id}</td>
              <td className="detail">{applicant.name}</td>
              <td className="detail">{applicant.appliedJob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuccessfulApplicants;

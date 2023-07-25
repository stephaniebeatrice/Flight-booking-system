import React from "react";
import { Header } from "../../components/header/header";
import { useState } from "react";
import "./style.css";

export const Application = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileIsValid, setFileIsValid] = useState(true);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileIsValid(validateFile(file));
  };

  // Validation function for allowed file extensions
  const validateFile = file => {
    if (!file) {
      return true; // No file selected, consider as valid
    }

    const allowedExtensions = ["pdf", "docx"];
    const fileExtension = file.name.split(".").pop().toLowerCase();

    return allowedExtensions.includes(fileExtension);
  };

  const handleSubmit = () => {
    if (fileIsValid && selectedFile) {
      setSubmissionSuccess(true);
    }
  };

  return (
    <div className="App">
      <Header />
      {/* <div className="job">
        <div className="job-wrapper">
          <div className="main-container"> */}
      <div className="form-content">
        <div class="payment-wrapper">
          <div className="tab-wrapper">
            <div className="fieldset third">
              <h2>Job Application Form</h2>
              <div className="field">
                <label id="lbl_rndTripTo" aria-label="To">
                  First Name*
                </label>
                <input
                  name="firstName"
                  type="text"
                  id="rndTripTo"
                  className="form-control"
                  placeholder="John"
                  style={{ width: "100%" }}
                  data-select2-id="rndTripTo"
                />
              </div>

              <div className="field">
                <label id="lbl_rndTripTo" aria-label="To">
                  Last Name*
                </label>
                <input
                  name="lastName"
                  type="text"
                  id="rndTripTo"
                  className="form-control"
                  placeholder="Doe"
                  style={{ width: "100%" }}
                  data-select2-id="rndTripTo"
                />
              </div>
              <div className="field date-field">
                <label id="lbl_rndTripDates" aria-label="Date">
                  Date of Birth*
                </label>
                <input name="DateOfBirth" type="date" className="form-control" placeholder="mm-dd-yyyy" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="fieldset half">
              <div className="field">
                <label id="lbl_rndTripPromoCode" aria-label="Promo Code">
                  Phone number
                </label>
                <input
                  name="phoneNumber"
                  type="tel"
                  id="rndTripPromoCode"
                  autoComplete="off"
                  className="form-control"
                  aria-labelledby="lbl_rndTripPromoCode"
                />
              </div>
              <div className="field">
                <label id="lbl_rndTripPromoCode" aria-label="Promo Code">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="rndTripPromoCode"
                  placeholder="eg. johndoe@gmail.com"
                  autoComplete="off"
                  className="form-control"
                  aria-labelledby="lbl_rndTripPromoCode"
                />
              </div>
            </div>
            <div className="fieldset half">
              <div className="field">
                <label id="lbl_rndTripTo" aria-label="To">
                  City
                </label>
                <input
                  name="firstName"
                  type="text"
                  id="rndTripTo"
                  className="form-control"
                  placeholder="John"
                  style={{ width: "100%" }}
                  data-select2-id="rndTripTo"
                />
              </div>

              <div className="field">
                <label id="lbl_rndTripTo" aria-label="To">
                  Current Address*
                </label>
                <input
                  name="lastName"
                  type="text"
                  id="rndTripTo"
                  className="form-control"
                  placeholder="Doe"
                  style={{ width: "100%" }}
                  data-select2-id="rndTripTo"
                />
              </div>
            </div>
            <div className="fieldset third">
              <div className="field">
                <label class="expiration-year">Position Applying for*</label>
                <select id="experation-year" style={{ width: "100%" }} className="form-control" required>
                  <option value="">Airline Baggage handler</option>
                  <option value="">Passenger assistant</option>
                  <option value="">Airline Clearance agents</option>
                  <option value="">Pilots</option>
                  <option value="">Flight attendant</option>
                  <option value="">Airline Caterers</option>
                  <option value="">Avionics technician</option>
                  <option value="">Air traffic controller</option>
                  <option value="">Customer service agents</option>
                </select>
              </div>
              <div className="field date-field">
                <label id="lbl_rndTripDates" aria-label="Date">
                  Availabe Start Date*
                </label>
                <input name="DateOfBirth" type="date" className="form-control" placeholder="mm-dd-yyyy" style={{ width: "100%" }} />
              </div>
              <div className="field">
                <label class="expiration-year">What is your current employment status*</label>
                <select id="experation-year" style={{ width: "100%" }} className="form-control" required>
                  <option value="">Employed</option>
                  <option value="">Self-Employed</option>
                  <option value="">Unemployed</option>
                  <option value="">Student</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label class="expiration-year">Upload your resume/CV*</label>
              <div className="resume">
                <input type="file" onChange={handleFileChange} />

                {!fileIsValid && (
                  <div>
                    {/* Invalid file message */}
                    <p>Please upload a valid PDF or DOCX file.</p>
                  </div>
                )}
                {/* {selectedFile && fileIsValid && submissionSuccess && (
                  <div>
                    Submission success message
                    <p>Submission successful!</p>
                  </div>
                )} */}
              </div>
              <div className="fieldset">
                <button className="btn-submit" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      //{" "}
    </div>
  );
};

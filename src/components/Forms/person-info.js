import React from "react";

export const PersonlInfo = ({ psnlInfoRef }) => {
  return (
    <div className="booking-form">
      <div id="psnlInfo" className="booking-tab-content active">
        <div className="tab-wrapper">
          <div id="rndTrip" className="pill-tab-content active">
            <p>Please make sure that you fill in the name that is in your passport.</p>
            <div className="fieldset quarter">
              <div className="field">
                <label htmlFor="rndTripFom" id="lbl_rndTripFrom" aria-label="From">
                  Title
                </label>
                <input name="title" type="text" id="rndTripFrom" className="form-control" style={{ width: "100%" }} />
                <select id="titleSelect">
                  <option>Mr</option>
                  <option>Mrs</option>
                  <option>Miss</option>
                  <option>Dr</option>
                  <option>Prof</option>
                </select>
              </div>

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
                <div className="date-field-wrapper date-depart">
                  <input name="DateOfBirth" type="date" className="form-control" placeholder="mm-dd-yyyy" style={{ width: "100%" }} />
                </div>
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

            <input type="submit" name="btn-primary" value="Next" id="round_trip_btn" className="btn-primary btn-submit-form btn-rnd-trip" />
            <span className="required-note">All fields with * are mandatory</span>
            <div className="general-error" id="oneWayErr">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

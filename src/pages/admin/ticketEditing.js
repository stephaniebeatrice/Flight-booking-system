import React from "react";
import Form from "react-bootstrap/Form";
import "./../../styles/style.css";

export const ticketEditing = () => {
  return (
    <div className="form-content">
      <div id="psnlInfo" className="booking-tab-content active">
        <div className="tab-wrapper">
          <div id="rndTrip" className="pill-tab-content active">
            <div className="fieldset quarter">
              <div className="field">
                <label id="lbl_rndTripTo" aria-label="To">
                  Ticket ID
                </label>
                <input
                  name="ticketId"
                  type="text"
                  id="rndTripTo"
                  className="form-control"
                  placeholder="1234"
                  style={{ width: "100%" }}
                  data-select2-id="rndTripTo"
                />
              </div>
              <div className="field">
                <label id="lbl_rndTripTo" aria-label="To">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  id="rndTripTo"
                  className="form-control"
                  placeholder="John"
                  style={{ width: "100%" }}
                  data-select2-id="rndTripTo"
                  // value={userInfo?.firstName}
                  // onChange={e =>
                  //   setUserInfo(prev => ({
                  //     ...prev,
                  //     firstName: e.target.value,
                  //   }))
                  // }
                />
              </div>

              <div className="field">
                <label id="lbl_rndTripTo" aria-label="To">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  id="rndTripTo"
                  className="form-control"
                  placeholder="Doe"
                  style={{ width: "100%" }}
                  data-select2-id="rndTripTo"
                  // value={userInfo?.lastName}
                  // onChange={e =>
                  //   setUserInfo(prev => ({
                  //     ...prev,
                  //     lastName: e.target.value,
                  //   }))
                  // }
                />
              </div>
              <div className="field date-field">
                <label id="lbl_rndTripDates" aria-label="Date">
                  Departure Date
                </label>
                <div className="date-field-wrapper date-depart">
                  <input
                    name="DateOfBirth"
                    type="date"
                    className="form-control"
                    placeholder="mm-dd-yyyy"
                    style={{ width: "100%" }}
                    // value={userInfo?.DOB}
                    // onChange={e => setUserInfo(prev => ({ ...prev, DOB: e.target.value }))}
                  />
                  <div className="field date-field">
                    <label id="lbl_rndTripDates" aria-label="Date">
                      Arrival Date
                    </label>
                    <div className="date-field-wrapper date-depart">
                      <input
                        name="DateOfBirth"
                        type="date"
                        className="form-control"
                        placeholder="mm-dd-yyyy"
                        style={{ width: "100%" }}
                        // value={userInfo?.DOB}
                        // onChange={e => setUserInfo(prev => ({ ...prev, DOB: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label id="lbl_rndTripTo" aria-label="To">
                      Seat No.
                    </label>
                    <input
                      name="seatNo"
                      type="text"
                      id="rndTripTo"
                      className="form-control"
                      placeholder="A1"
                      style={{ width: "100%" }}
                      data-select2-id="rndTripTo"
                      // value={userInfo?.firstName}
                      // onChange={e =>
                      //   setUserInfo(prev => ({
                      //     ...prev,
                      //     firstName: e.target.value,
                      //   }))
                      // }
                    />
                  </div>
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
                  // value={userInfo?.number}
                  // onChange={e => setUserInfo(prev => ({ ...prev, number: e.target.value }))}
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
                  // value={userInfo?.email}
                  // onChange={e => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>
            <button type="submit" name="btn-primary" value="update" id="round_trip_btn" className="btn-primary btn-submit-form btn-rnd-trip">
              Save
            </button>
            <button type="submit" name="btn-primary" value="delete" id="round_trip_btn" className="btn-primary btn-submit-form btn-rnd-trip">
              Delete
            </button>
            <div className="general-error" id="oneWayErr">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

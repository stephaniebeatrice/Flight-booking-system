import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "../../store/bookingSlice";
import { useEffect } from "react";

export const PersonlInfo = ({ psnlInfoRef, setSelectedTab }) => {
  const [userInfo, setUserInfo] = useState({
    title: "",
    firstName: "",
    lastName: "",
    DOB: "",
    number: "",
    email: "",
  });
  const userBookingInfo = useSelector(state => state.bookingReducer.bookingUserInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    setUserInfo(userBookingInfo);
  }, [userBookingInfo]);

  const handlerSubmit = () => {
    dispatch(bookingActions.createUserBookigInfo(userInfo));
    setSelectedTab("seatSelect");
  };
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
                <Form.Control
                  as="select"
                  name="title"
                  placeholder="title"
                  value={userInfo.title}
                  onChange={e =>
                    setUserInfo(prev => {
                      return { ...prev, title: e.target.value };
                    })
                  }
                >
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Miss</option>
                </Form.Control>
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
                  value={userInfo.firstName}
                  onChange={e =>
                    setUserInfo(prev => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
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
                  value={userInfo.lastName}
                  onChange={e =>
                    setUserInfo(prev => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="field date-field">
                <label id="lbl_rndTripDates" aria-label="Date">
                  Date of Birth*
                </label>
                <div className="date-field-wrapper date-depart">
                  <input
                    name="DateOfBirth"
                    type="date"
                    className="form-control"
                    placeholder="mm-dd-yyyy"
                    style={{ width: "100%" }}
                    value={userInfo.DOB}
                    onChange={e => setUserInfo(prev => ({ ...prev, DOB: e.target.value }))}
                  />
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
                  value={userInfo.number}
                  onChange={e => setUserInfo(prev => ({ ...prev, number: e.target.value }))}
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
                  value={userInfo.email}
                  onChange={e => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>
            <button
              type="submit"
              name="btn-primary"
              value="Next"
              id="round_trip_btn"
              className="btn-primary btn-submit-form btn-rnd-trip"
              onClick={handlerSubmit}
            >
              Next
            </button>
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

import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "../../store/bookingSlice";

export const PersonlInfo = ({ setSelectedTab, tab }) => {
  const { bookingUserInfo, pendingBooking } = useSelector(state => state.bookingReducer);

  const [userInfo, setUserInfo] = useState({ title: "Mr.", firstName: "", lastName: "", DOB: "", number: "", email: "" });

  const dispatch = useDispatch();

  useEffect(() => {
    setUserInfo(bookingUserInfo[0]);
  }, []);

  const handlerSubmit = () => {
    if (tab !== "addPassenger") {
      dispatch(bookingActions.createUserBookigInfo(userInfo));
      dispatch(
        bookingActions.createPendingBooking({ ...pendingBooking, passengersInfo: [{ fullName: userInfo.firstName + " " + userInfo.lastName }] })
      );
      if (pendingBooking.passengers > 1) {
        setUserInfo({ title: "Mr.", firstName: "", lastName: "", DOB: "", number: "", email: "" });
        return setSelectedTab("addPassenger");
      } else setSelectedTab("seatSelect");
    } else setSelectedTab("seatSelect");
  };

  const addHandler = () => {
    dispatch(bookingActions.createPassengers(userInfo));
    setUserInfo({ title: "Mr.", firstName: "", lastName: "", DOB: "", number: "", email: "" });
  };

  return (
    <div className="form-content">
      <div id="psnlInfo" className="booking-tab-content active">
        <div className="tab-wrapper">
          <div id="rndTrip" className="pill-tab-content active">
            <p>
              {tab === "addPassenger"
                ? `please fill in the details of ${pendingBooking.passengers}`
                : "Please make sure that you fill in the name that is in your passport."}
            </p>
            <div className="fieldset quarter">
              <div className="field">
                <label htmlFor="rndTripFom" id="lbl_rndTripFrom" aria-label="From">
                  Title*
                </label>
                <Form.Control
                  as="select"
                  name="title"
                  placeholder="title"
                  value={userInfo?.title}
                  required={true}
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
                  value={userInfo?.firstName}
                  required={true}
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
                  value={userInfo?.lastName}
                  required={true}
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
                    required={true}
                    value={userInfo?.DOB}
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
                  value={userInfo?.number}
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
                  value={userInfo?.email}
                  onChange={e => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
              {tab === "addPassenger" && +pendingBooking.passengers !== bookingUserInfo.length ? (
                <button
                  type="submit"
                  name="btn-primary"
                  value="Next"
                  style={{ margin: "1rem" }}
                  id="round_trip_btn"
                  className="btn-primary btn-submit-form btn-rnd-trip"
                  onClick={addHandler}
                >
                  Add
                </button>
              ) : (
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
              )}
            </div>

            <span className="required-note">All fields with * are mandatory</span>
            <div className="general-error" id="oneWayErr">
              <p></p>
            </div>
          </div>
        </div>
      </div>
      {tab === "addPassenger" && bookingUserInfo.length > 1 && (
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {[...bookingUserInfo]?.splice(1, bookingUserInfo.length - 1).map((passenger, index) => {
                return (
                  <tr key={index.toString()}>
                    <td>{passenger.firstName}</td>

                    <td>${passenger.lastName}</td>
                    <td>{passenger.DOB}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

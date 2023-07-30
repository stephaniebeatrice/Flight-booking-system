import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "../../store/bookingSlice";
import countryCodes from "../../PHONEDATA.json";

export const PersonlInfo = ({ setSelectedTab, tab, action }) => {
  const { bookingUserInfo, pendingBooking } = useSelector(state => state.bookingReducer);
  const [userInfo, setUserInfo] = useState({ title: "Mr.", firstName: "", lastName: "", DOB: "", number: "", email: "" });
  const [valid, setValid] = useState({ title: true, firstName: true, lastName: true, DOB: true });
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setUserInfo(bookingUserInfo[0]);
  }, []);

  const validHandler = () => {
    const validationObj = {
      title: !!userInfo.title,
      firstName: !!userInfo.firstName,
      lastName: !!userInfo.lastName,
      DOB: !!userInfo.DOB,
    };
    setValid(validationObj);
    const isValid = Object.values(validationObj).every(isValid => isValid);
    return isValid;
  };

  const handlerSubmit = () => {
    const isValid = validHandler();
    if (!isValid || (tab === "addPassenger" && +pendingBooking.passengers !== bookingUserInfo.length)) return;
    if (tab !== "addPassenger") {
      dispatch(bookingActions.createUserBookigInfo(userInfo));
      if (!action) {
        dispatch(
          bookingActions.createPendingBooking({
            ...pendingBooking,
            passengersInfo: [
              { fullName: userInfo.firstName + " " + userInfo.lastName, email: userInfo.email, phoneNo: userInfo.number, dob: userInfo.DOB },
            ],
          })
        );
      }

      if (pendingBooking.passengers > 1) {
        setUserInfo({ title: "Mr.", firstName: "", lastName: "", DOB: "", number: "", email: "" });
        return setSelectedTab("addPassenger");
      } else setSelectedTab("seatSelect");
    } else setSelectedTab("seatSelect");
  };
  const addHandler = () => {
    const isValid = validHandler();
    if (!isValid) return;
    dispatch(bookingActions.createPassengers(userInfo));
    if (+pendingBooking.passengers - bookingUserInfo.length !== 1)
      setUserInfo({ title: "Mr.", firstName: "", lastName: "", DOB: "", number: "", email: "" });
  };

  const changeHandler = e => {
    const { value, name } = e.target;
    if (name === "countryCode") {
      setSelectedCountryCode(value);
    } else {
      setUserInfo(prev => {
        return { ...prev, [name]: value };
      });
    }
  };

  const focusHandler = () => {
    setValid({ title: true, firstName: true, lastName: true, DOB: true });
  };

  const Edithandler = () => {};

  return (
    <div className="form-content">
      <div id="psnlInfo" className="booking-tab-content active">
        <div className="tab-wrapper">
          <div id="rndTrip" className="pill-tab-content active">
            <p>
              {tab === "addPassenger"
                ? `please fill in the details of ${+pendingBooking.passengers - 1} passengers`
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
                  onChange={changeHandler}
                  style={!valid.title ? { border: "1px solid red" } : {}}
                  onFocus={focusHandler}
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
                  style={{
                    width: "100%",
                    border: !valid.firstName ? "1px solid red" : "",
                  }}
                  onFocus={focusHandler}
                  data-select2-id="rndTripTo"
                  value={userInfo?.firstName}
                  onChange={changeHandler}
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
                  style={{
                    width: "100%",
                    border: !valid.lastName ? "1px solid red" : "",
                  }}
                  onFocus={focusHandler}
                  value={userInfo?.lastName}
                  onChange={changeHandler}
                />
              </div>
              <div className="field date-field">
                <label id="lbl_rndTripDates" aria-label="Date">
                  Date of Birth*
                </label>
                <div className="date-field-wrapper date-depart">
                  <input
                    name="DOB"
                    type="date"
                    className="form-control"
                    placeholder="mm-dd-yyyy"
                    style={{
                      width: "100%",
                      border: !valid.DOB ? "1px solid red" : "",
                    }}
                    onFocus={focusHandler}
                    value={userInfo?.DOB}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="fieldset half">
              <div className="field phone-field">
                <label id="lbl_rndTripPromoCode" aria-label="Promo Code">
                  Phone number
                </label>
                <div className="phone-input">
                  <Form.Control
                    as="select"
                    name="countryCode"
                    placeholder="Select country code"
                    value={selectedCountryCode}
                    onChange={e => setSelectedCountryCode(e.target.value)}
                  >
                    <option value="">Select Country Code</option>
                    {countryCodes.map((country, index) => (
                      <option key={index} value={country.code}>
                        {`${country.name} (${country.code})`}
                      </option>
                    ))}
                  </Form.Control>
                  <input
                    name="phoneNumber"
                    type="tel"
                    id="rndTripPromoCode"
                    className="form-control"
                    placeholder="712 345 678"
                    value={userInfo?.phoneNumber}
                    onChange={changeHandler}
                  />
                </div>
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
                  className="form-control"
                  value={userInfo?.email}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              {tab === "addPassenger" && +pendingBooking.passengers !== bookingUserInfo.length ? (
                <>
                  <button
                    type="submit"
                    name="btn-primary"
                    value="Next"
                    style={{ marginRight: "1rem" }}
                    id="round_trip_btn"
                    className="btn-primary btn-submit-form btn-rnd-trip"
                    onClick={addHandler}
                  >
                    Add
                  </button>
                  {action && (
                    <button
                      type="submit"
                      name="btn-primary"
                      value="Next"
                      id="round_trip_btn"
                      className="btn-primary btn-submit-form btn-rnd-trip"
                      onClick={Edithandler}
                    >
                      Submit
                    </button>
                  )}
                </>
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

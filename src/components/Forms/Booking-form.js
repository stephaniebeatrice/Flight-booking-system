import React from "react";
import "../../styles/style.css";
import "./bootstrap.min.css";
import food from "../../img/food.jpg";
import luggage from "../../img/luggage.jpg";
import priority from "../../img/priority.jpg";
import wifi from "../../img/wifi.jpg";

export const BookingForm = () => {
  return (
    <section className="content-wrapper dark">
      <div className="wrapper">
        <div className="booking-widget">
          <div className="booking-tabs" role="tablist">
            <a href="#bkFlight" className="active icon-book-flight" role="tab" aria-controls="bkFlight" aria-selected="true">
              <span>Personal info</span>
            </a>
            <a href="#chkIn" className="icon-check-in" role="tab" aria-controls="chkIn" aria-selected="false">
              <span>Seat selection</span>
            </a>
            <a href="#services" className="icon-manage-booking" role="tab" aria-controls="mngBooking" aria-selected="false">
              <span>Services</span>
            </a>
            <a href="#flightTimetable" className="icon-flight-info" role="tab" aria-controls="flightStatus" aria-selected="false">
              <span>Payment</span>
            </a>
          </div>
          <div className="booking-form">
            <span id="ctl00_ctBody_Web_Content_Home_BookingEngine_ReturnOneWay_ekapi_language"></span>
            <div id="bkFlight" className="booking-tab-content active">
              <div className="tab-header icon-book-flight">
                <a href="#" role="button" className="icon-close btn-close" aria-label="Close"></a>
                <span>Basic Info</span>
              </div>
              <div className="tab-wrapper">
                <div id="rndTrip" className="pill-tab-content active">
                  <p>Please make sure that you fill in the name that is in your passport.</p>
                  <div className="fieldset quarter">
                    <div className="field">
                      <label id="lbl_rndTripFrom" aria-label="From">
                        Title
                      </label>
                      <div className="input-wrapper">
                        <input
                          name="title"
                          type="text"
                          id="rndTripFrom"
                          className="form-control"
                          style={{ width: "100%" }}
                        />
                        <select >
                          <option>Mr</option>
                          <option>Mrs</option>
                          <option>Miss</option>
                          <option>Dr</option>
                          <option>Prof</option>
                        </select>
                      </div>
                    </div>

                    <div className="field">
                      <label id="lbl_rndTripTo" aria-label="To">
                        First Name*
                      </label>
                      <div className="input-wrapper">
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
                    </div>

                    <div className="field">
                      <label id="lbl_rndTripTo" aria-label="To">
                        Last Name*
                      </label>
                      <div className="input-wrapper">
                        <input
                          name="lastName"
                          type="text"
                          id="rndTripTo"
                          className= 'form-control'
                          placeholder="Doe"
                          style={{ width: "100%" }}
                          data-select2-id="rndTripTo"
                        />
                      </div>
                    </div>
                    <div className="field date-field">
                      <label id="lbl_rndTripDates" aria-label="Date">
                        Date of Birth*
                      </label>
                      <div className="input-wrapper ">
                        <div className="date-field-wrapper date-depart">
                          <input
                            name="DateOfBirth"
                            type="date"
                            id="rndTripDepart"
                            autoComplete="off"
                            placeholder="DD-MM-YYYY"
                            style={{ textTransform: "uppercase" }}
                            className="textbox date-value depart"
                            readOnly
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="date-picker-popup">
                        <div className="date-picker-container-depart">
                          <h2 className="icon-from picker-header">
                            <span>Please choose your date of birth</span>
                          </h2>
                          <div
                            className="pika-single is-hidden is-bound"
                            style={{
                              position: "static",
                              left: "auto",
                              top: "auto",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {/* <label
                      id="date-picker-left-continer"
                      class="date1 date-as-calendar inline-flex std-rad validator0"
                      style="border-color: rgb(221, 221, 221);"
                      placeholder="DD-MM-YYYY"
                    >
                      <span class="departure-date d-block">Departure date</span>
                      <span class="ps-3 date-text-container">
                        <i class="far fa-calendar-alt pop-date-stay float-end date-picker-icon"></i>
                      </span>
                    </label> */}
                  </div>

                  <div className="fieldset half">
                    <div className="field">
                      <label id="lbl_rndTripPromoCode" aria-label="Promo Code">
                        Phone number
                      </label>
                      <div className="input-wrapper">
                        <input
                          name="phoneNumber"
                          type="tel"
                          id="rndTripPromoCode"
                          autoComplete="off"
                          className="form-control"
                          aria-labelledby="lbl_rndTripPromoCode"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label id="lbl_rndTripPromoCode" aria-label="Promo Code">
                        Email
                      </label>
                      <div className="input-wrapper">
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
                  </div>

                  <input
                    type="submit"
                    name="btn-primary"
                    value="Next"
                    id="round_trip_btn"
                    className="btn-primary btn-submit-form btn-rnd-trip"
                  />
                  <span className="required-note">All fields with * are mandatory</span>
                  <div className="general-error" id="oneWayErr">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="chkIn" className="booking-tab-content">
            <div className="tab-header icon-check-in">
              <a href="#" role="button" className="icon-close btn-close" aria-label="Close"></a>
              <span>Check In</span>
            </div>
            <div className="tab-wrapper">
              <div className="custom-alert">
                Please note, we have temporarily suspended online check-in for flights to Lilongwe(LLW). Alternatively, you may check-in at the
                airport.We apologise for incovenience caused.
              </div>
              <div className="pill-tabs" role="tablist">
                <a
                  href="https://www.kenya-airways.com/prepare-for-travel/manage-booking/online-check-in/en/"
                  className="active"
                  role="tab"
                  aria-controls="checkIn"
                  aria-selected="true"
                  target="_blank"
                  rel="noreferrer"
                >
                  Online Check-in Exemptions
                </a>
              </div>
              <div id="checkIn" className="active" style={{ padding: "14px 0 0 0" }}>
                <div className="fieldset third">
                  <div className="field">
                    <label id="lbl_chkInBRN" aria-label="Booking Reference Number">
                      Booking Reference Number
                    </label>
                    <div className="input-wrapper icon-book-flight">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$OnlineCheckin$chkInBRN"
                        type="text"
                        id="chkInBRN"
                        autoComplete="off"
                        className="textbox txtBRN"
                        aria-labelledby="lbl_chkInBRN"
                        placeholder="e.g. AZ6E7G"
                        maxLength={6}
                      />
                    </div>
                  </div>
                  <div className="field field-etn">
                    <div className="inline-fields">
                      <div className="or inline-field">Or</div>
                      <div className="inline-field">
                        <label id="lbl_chkInETNCode" aria-label="E-Ticket Number">
                          E-Ticket Number
                        </label>
                        <div className="inline-fields">
                          <div className="inline-field etncode">
                            <div className="input-wrapper icon-book-flight">
                              <input
                                name="ctl00$ctBody$Web_Content_Home$BookingEngine$OnlineCheckin$chkInETNCode"
                                type="number"
                                id="chkInETNCode"
                                autoComplete="off"
                                className="textbox txtETN"
                                aria-label="Enter the first three digits of the e-ticket number"
                                maxLength={6}
                                placeholder="e.g. 706"
                              />
                            </div>
                          </div>
                          <div className="inline-field etn">
                            <div className="input-wrapper no-icon">
                              <input
                                name="ctl00$ctBody$Web_Content_Home$BookingEngine$OnlineCheckin$chkInETN"
                                type="number"
                                id="chkInETN"
                                autoComplete="off"
                                className="textbox txtETN"
                                aria-label="Enter the last ten digits of the e-ticket number"
                                maxLength={10}
                                placeholder="e.g. 2487967787"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="inline-fields">
                      <div className="or inline-field">Or</div>
                      <div className="inline-field">
                        <label id="lbl_chkInFFN" aria-label="Frequent Flyer Number">
                          Frequent Flyer Number
                        </label>
                        <div className="inline-fields">
                          <div className="inline-field ffn-airline">
                            <div className="input-wrapper icon-book-flight">
                              <select
                                name="ctl00$ctBody$Web_Content_Home$BookingEngine$OnlineCheckin$chkInFFNAirline"
                                id="chkInFFNAirline"
                                className="chkInFFNAirline select2-hidden-accessible"
                                aria-label="Select the Frequent Flyer airline"
                                style={{ width: "100%" }}
                                data-select2-id="chkInFFNAirline"
                                tabIndex={-1}
                                aria-hidden="true"
                              >
                                <option value="" aria-label="Empty" data-select2-id="2731"></option>
                                <option value="1" label="Kenya Airways - KQ">
                                  Kenya Airways - KQ
                                </option>
                                <option value="2" label="Air Europa - UX">
                                  Air Europa - UX
                                </option>
                                <option value="3" label="Air France - AF">
                                  Air France - AF
                                </option>
                                <option value="4" label="Aeroflot - SU">
                                  Aeroflot - SU
                                </option>
                                <option value="5" label="Aerolineas Argentinas - AR">
                                  Aerolineas Argentinas - AR
                                </option>
                                <option value="6" label="Aero Mexico - AM">
                                  Aero Mexico - AM
                                </option>
                                <option value="7" label="Alitalia - AZ">
                                  Alitalia - AZ
                                </option>
                                <option value="8" label="China Airlines - CI">
                                  China Airlines - CI
                                </option>
                                <option value="9" label="China Eastern Airlines - MU">
                                  China Eastern Airlines - MU
                                </option>
                                <option value="10" label="China Southern - CZ">
                                  China Southern - CZ
                                </option>
                                <option value="11" label="Czech Airlines - OK">
                                  Czech Airlines - OK
                                </option>
                                <option value="12" label="Delta - DL">
                                  Delta - DL
                                </option>
                                <option value="13" label="Garuda Indonesia - GA">
                                  Garuda Indonesia - GA
                                </option>
                                <option value="14" label="Korean Air - KE">
                                  Korean Air - KE
                                </option>
                                <option value="15" label="KLM - KL">
                                  KLM - KL
                                </option>
                                <option value="16" label="Middle East Airlines - ME">
                                  Middle East Airlines - ME
                                </option>
                                <option value="17" label="Saudi Arabian Airlines - SV">
                                  Saudi Arabian Airlines - SV
                                </option>
                                <option value="18" label="Tarom - RO">
                                  Tarom - RO
                                </option>
                                <option value="19" label="Vietnam Airlines - VN">
                                  Vietnam Airlines - VN
                                </option>
                                <option value="20" label="Virgin Atlantic- VS">
                                  Virgin Atlantic- VS
                                </option>
                                <option value="21" label="Xiamen Air - MF">
                                  Xiamen Air - MF
                                </option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="2730"
                                style={{ width: "100%" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single"
                                    role="combobox"
                                    aria-controls=""
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabIndex={0}
                                    aria-labelledby="select2-chkInFFNAirline-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-chkInFFNAirline-container"
                                      role="textbox"
                                      aria-readonly="true"
                                    >
                                      <span className="select2-selection__placeholder">Frequent Flyer Airline</span>
                                    </span>
                                    <span className="select2-selection__arrow" role="presentation">
                                      <b role="presentation"></b>
                                    </span>
                                  </span>
                                </span>
                                <span className="dropdown-wrapper" aria-hidden="true"></span>
                              </span>
                            </div>
                          </div>
                          <div className="inline-field ffn">
                            <div className="input-wrapper no-icon">
                              <input
                                name="ctl00$ctBody$Web_Content_Home$BookingEngine$OnlineCheckin$chkInFFN"
                                type="number"
                                id="chkInFFN"
                                autoComplete="off"
                                className="textbox txtETN chkInFFN"
                                aria-label="Enter the frequent flyer number"
                                placeholder="e.g. 2487967787"
                                maxLength={10}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fieldset two-thirds">
                  <div className="field">
                    <label id="lbl_chkInLastName">Last Name*</label>
                    <div className="input-wrapper icon-passenger">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$OnlineCheckin$chkLastName"
                        type="text"
                        id="chkLastName"
                        aria-required="true"
                        className="textbox"
                        ariaExpanded="false"
                        ariaDescribedby="chkLastNameDesc"
                        ariaLabelledby="lbl_chklastName"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <input
                      type="submit"
                      name="ctl00$ctBody$Web_Content_Home$BookingEngine$OnlineCheckin$check_in_btn"
                      value="Continue"
                      id="check_in_btn"
                      className="btn-primary btn-chk-in"
                    />
                  </div>
                </div>
                <span className="required-note">Al fields with * are mandatory</span>
                <div className="general-error">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <span id="ctl00_ctBody_Web_Content_Home_BookingEngine_ManageMyBooking_ekapi_language"></span>
          <div id="mngBooking" className="booking-tab-content">
            <div className="tab-header icon-manage-booking">
              <a href="#" role="button" className="icon-close btn-close" aria-label="Close"></a>
              <span>Manage Booking</span>
            </div>

            <div className="tab-wrapper">
              <div className="pill-tabs" role="tablist">
                <a href="#manageBooking" className="active" role="tab" aria-controls="manageBooking" aria-selected="true">
                  Manage Booking
                </a>
              </div>

              <div id="manageBooking" className="pill-tab-content active">
                <div className="fieldset two-thirds">
                  <div className="field">
                    <div className="inline-fields">
                      <div className="inline-field">
                        <label id="lbl_mngBookingLastName" aria-label="Last Name">
                          Last Name*
                        </label>
                        <div className="input-wrapper icon-passenger">
                          <input
                            name="ctl00$ctBody$Web_Content_Home$BookingEngine$ManageMyBooking$mngBookingLastName"
                            type="text"
                            id="mngBookingLastName"
                            className="textbox txtname"
                            aria-labelledby="lbl_mngBookingLastName"
                            placeholder="Enter Last Name"
                          />
                        </div>
                      </div>
                      <div className="inline-field mngBkBRN">
                        <label id="lbl_mngBookingBRN" aria-label="Booking Reference Number">
                          Booking Reference Number
                        </label>
                        <div className="input-wrapper icon-book-flight">
                          <input
                            name="ctl00$ctBody$Web_Content_Home$BookingEngine$ManageMyBooking$mngBookingBRN"
                            type="text"
                            id="mngBookingBRN"
                            autoComplete="off"
                            className="textbox txtBRN"
                            aria-labelledby="lbl_mngBookingBRN"
                            placeholder="e.g. AZ6E7G"
                            maxLength={6}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="inline-fields">
                      <div className="or inline-field">Or</div>
                      <div className="inline-field">
                        <label id="lbl_mngBookingETNCode" aria-label="E-Ticket Number">
                          E-Ticket Number
                        </label>
                        <div className="inline-fields">
                          <div className="inline-field etncode">
                            <div className="input-wrapper icon-book-flight">
                              <input
                                name="ctl00$ctBody$Web_Content_Home$BookingEngine$ManageMyBooking$mngBookingETNCode"
                                type="number"
                                id="mngBookingETNCode"
                                className="textbox txtETN"
                                placeholder="(706)"
                                aria-label="Enter the first three digits of the e-ticket number"
                                maxLength={3}
                              />
                            </div>
                          </div>
                          <div className="inline-field etn">
                            <div className="input-wrapper no-icon">
                              <input
                                name="ctl00$ctBody$Web_Content_Home$BookingEngine$ManageMyBooking$mngBookingETN"
                                type="number"
                                id="mngBookingETN"
                                className="textbox txtETN"
                                aria-label="Enter the last ten digits of the e-ticket number"
                                maxLength={10}
                                placeholder="(2487967787)"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="inline-field mngBkBtn">
                        <input
                          type="submit"
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$ManageMyBooking$cmdGoManageMyBooking"
                          value="Continue"
                          id="cmdGoManageMyBooking"
                          className="btn-primary btn-mng-booking"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="required-note">All fields with * are mandatory</span>
                <div className="general-error">
                  <p></p>
                </div>
              </div>
            </div>
          </div>

          <div id="services" className="booking-tab-content ">
            <div className="sec-wp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sec-title ">
                      <p className="sec-sub-title ">Enjoy these extra services brought to you by our airline</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="services-list-row">
                <div className="container">
                  <div className="row g-xxl-5 bydefault_show" id="services-service">
                    <div className="col-lg-6 col-sm-6 service-box-wp breakfast" data-cat="breakfast">
                      <div className="service-box text-center">
                        <h3 className="h3-title"> Meal</h3>
                        <div className="dist-img">
                          return <img src={food} alt="food" />
                        </div>
                        <div className="service-title">
                          <p>Get served with a delicous meal during the flight</p>
                        </div>
                        <div className="service-info">
                          <ul>
                            <li>
                              <p>At $ 2.50 Only </p>
                            </li>
                            <li>
                              <p>Per person, per flight</p>
                            </li>
                          </ul>
                        </div>
                        <div className="btn">
                          <button className="service-add-btn">
                            <a href="order.html"> Select </a>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 service-box-wp breakfast" data-cat="breakfast">
                      <div className="service-box text-center">
                        <h3 className="h3-title"> Luggage</h3>
                        <div className="dist-img">
                          return <img src={luggage} alt=" " />
                        </div>
                        <div className="service-title">
                          <p>Carry extra baggage with no worries</p>
                        </div>
                        <div className="service-info">
                          <ul>
                            <li>
                              <p>At $ 14.50 Only </p>
                            </li>
                            <li>
                              <p>Per extra bag,per flight</p>
                            </li>
                          </ul>
                        </div>
                        <div className="btn">
                          <button className="service-add-btn">
                            <a href="order.html"> Select </a>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 service-box-wp breakfast" data-cat="breakfast">
                      <div className="service-box text-center">
                        <h3 className="h3-title"> Wifi</h3>
                        <div className="dist-img">
                          return <img src={wifi} alt="react logo" />
                        </div>
                        <div className="service-title">
                          <p>Stay connected with friends and family while onboard</p>
                        </div>
                        <div className="service-info">
                          <ul>
                            <li>
                              <p> Free </p>
                            </li>
                            <li>
                              <p>All flights</p>
                            </li>
                          </ul>
                        </div>
                        <div className="btn">
                          <button className="service-add-btn">
                            <a href="order.html"> Select </a>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 service-box-wp lunch" data-cat="lunch">
                      <div className="service-box text-center">
                        <h3 className="h3-title">Priority Passenger</h3>
                        <div className="dist-img">
                          return <img src={priority} alt=" " />
                        </div>
                        <div className="service-title">
                          <p>Avoid queing at check-points and onboarding</p>
                        </div>
                        <div className="service-info">
                          <ul>
                            <li>
                              <p>At $ 40.50 Only </p>
                            </li>
                            <li>
                              <p>Per person, per flight</p>
                            </li>
                          </ul>
                        </div>
                        <div className="btn">
                          <button className="service-add-btn">
                            <a href="order.html"> Select </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span id="ctl00_ctBody_Web_Content_Home_BookingEngine_FlightTimeTable_ekapi_language"></span>

          <div id="flightTimetable" className="booking-tab-content">
            <div className="tab-header icon-flight-info">
              <a href="#" role="button" className="icon-close btn-close" aria-label="Close"></a>
              <span>Flight Timetable</span>
            </div>

            <div className="tab-wrapper">
              <div className="pill-tabs" role="tablist">
                <a href="#fltTimetable" className="active" role="tab" aria-controls="fltTimetable" aria-selected="true">
                  Flight Timetable
                </a>
              </div>

              <div id="fltTimetable" className="pill-tab-content active">
                <div className="fieldset fifth">
                  <div className="field one">
                    <label id="lbl_fltTimeDepart" aria-label="Departure City">
                      Departure City*
                    </label>
                    <div className="input-wrapper dd icon-from">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightTimeTable$fltTimeDepart"
                        type="text"
                        id="fltTimeDepart"
                        className="fltTimeDepart select2-hidden-accessible"
                        style={{ width: "100%" }}
                        data-select2-id="fltTimeDepart"
                        tabIndex={-1}
                        aria-hidden="true"
                      />
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="4771"
                        style={{ width: "100%" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-controls=""
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-labelledby="select2-fltTimeDepart-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-fltTimeDepart-container"
                              role="textbox"
                              aria-readonly="true"
                            ></span>
                            <span className="select2-selection__arrow" role="presentation">
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true"></span>
                      </span>
                    </div>
                  </div>
                  <div className="field two">
                    <label id="lbl_fltTimeArrival" aria-label="Arival City">
                      Arrival City*
                    </label>
                    <div className="input-wrapper dd icon-to">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightTimeTable$fltTimeArrival"
                        type="text"
                        id="fltTimeArrival"
                        className="fltTimeArrival select2-hidden-accessible"
                        style={{ width: "100%" }}
                        data-select2-id="fltTimeArrival"
                        tabIndex={-1}
                        aria-hidden="true"
                      />
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="5451"
                        style={{ width: "100%" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-controls=""
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-labelledby="select2-fltTimeArrival-container"
                          >
                            <span className="select2-selection__rendered" id="select2-fltTimeArrival-container" role="textbox" aria-readonly="true">
                              <span className="select2-selection__placeholder">City or Airport</span>
                            </span>
                            <span className="select2-selection__arrow" role="presentation">
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true"></span>
                      </span>
                    </div>
                  </div>
                  <div className="field three">
                    <label id="lbl_fltTimeTrip" aria-label="Trip">
                      Trip*
                    </label>
                    <div className="input-wrapper dd icon-book-flight">
                      <select
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightTimeTable$fltTimeTrip"
                        id="fltTimeTrip"
                        className="fltTimeTrip select2-hidden-accessible"
                        aria-labelledby="lbl_fltTimeTrip"
                        style={{ width: "100%" }}
                        data-select2-id="fltTimeTrip"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value="R" data-select2-id="5453">
                          Return
                        </option>
                        <option value="O">One Way</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="5452"
                        style={{ width: "100%" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-controls=""
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-labelledby="select2-fltTimeTrip-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-fltTimeTrip-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Return"
                            >
                              Return
                            </span>
                            <span className="select2-selection__arrow" role="presentation">
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true"></span>
                      </span>
                    </div>
                  </div>
                  <div className="field four date-field trip-return">
                    <label id="lbl_fltTimeDates" aria-label="Date">
                      Dates*
                    </label>
                    <div className="input-wrapper dates has-arrow icon-calendar">
                      <div className="date-field-wrapper date-depart">
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightTimeTable$fltTblDepartDate"
                          type="component"
                          id="fltTblDepartDate"
                          autoComplete="off"
                          placeholder="Departing"
                          className="textbox date-value depart"
                          readOnly
                          ariaExpanded="false"
                          aria-labelledby="lbl_fltTimeDates"
                          aria-describedby="fltTimeDepartDesc"
                          aria-required="true"
                        />
                        <span className="hidden_description" id="fltTimeDepartDesc">
                          Please choose your departure date. Use arrow keys to select the dates.
                        </span>
                      </div>
                      <div className="date-field-wrapper date-return">
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightTimeTable$fltTblReturnDate"
                          type="component"
                          id="fltTblReturnDate"
                          autoComplete="off"
                          placeholder="Returning"
                          className="textbox date-value return"
                          readOnly
                          ariaExpanded="false"
                          aria-labelledby="lbl_fltTimeDates"
                          aria-describedby="fltTimeReturnDesc"
                          aria-required="true"
                        />
                        <span className="hidden_description" id="fltTimeReturnDesc">
                          When would you like to return? Use arrow keys to select the dates.
                        </span>
                      </div>
                    </div>
                    <div className="date-picker-popup">
                      <div className="date-picker-container-depart">
                        <h2 className="icon-from picker-header">
                          <span>Please choose your departure date</span>
                        </h2>
                        <div
                          className="pika-single is-hidden is-bound"
                          style={{
                            position: "static",
                            left: "auto",
                            top: "auto",
                          }}
                        ></div>
                      </div>
                      <div className="date-picker-container-return">
                        <h2 className="icon-to picker-header">
                          <span>When would you like to return?</span>
                        </h2>
                        <div
                          className="pika-single is-hidden is-bound"
                          style={{
                            position: "static",
                            left: "auto",
                            top: "auto",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="field four date-field trip-oneway">
                    <label id="lbl_fltTimeDate" aria-label="Date">
                      Date*
                    </label>
                    <div className="input-wrapper dates has-arrow icon-calendar">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightTimeTable$fltTimeDepartDate"
                        type="component"
                        id="fltTimeDepartDate"
                        autoComplete="off"
                        placeholder="Departing"
                        className="textbox date-value"
                        readOnly
                        ariaExpanded="false"
                        aria-labelledby="lbl_fltTimeDate"
                        aria-describedby="fltTimeDateDesc"
                        aria-required="true"
                      />
                    </div>
                    <div className="date-picker-popup">
                      <h2 className="icon-from">
                        <span>Please choose your departure date</span>
                      </h2>
                      <div className="date-picker-container flt-time">
                        <div
                          className="pika-single is-hidden is-bound"
                          style={{
                            position: "static",
                            left: "auto",
                            top: "auto",
                          }}
                        ></div>
                      </div>
                    </div>
                    <span hidden className="hidden_description" id="fltTimeDateDesc">
                      Please choose your departure date. Use arrow keys to select the dates.
                    </span>
                  </div>
                  <div className="field five">
                    <input
                      type="submit"
                      name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightTimeTable$cmdGetMyTimetable"
                      value="Go"
                      id="cmdGetMyTimetable"
                      className="btn-primary btn-flt-time"
                    />
                  </div>
                </div>
                <span className="required-note">All fields with * are mandatory</span>
                <div className="general-error">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

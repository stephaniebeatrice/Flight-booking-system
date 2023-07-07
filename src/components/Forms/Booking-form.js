import React from 'react'

export const BookingForm = () => {
  return (
    <section className="content-wrapper dark">
    <div className="wrapper">
      <div className="booking-widget">
        <div className="booking-tabs" role="tablist">
          <a
            href="#bkFlight"
            className="active icon-book-flight"
            role="tab"
            aria-controls="bkFlight"
            aria-selected="true"
          >
            <span>Book Flight</span>
          </a>
          <a
            href="#chkIn"
            className="icon-check-in"
            role="tab"
            aria-controls="chkIn"
            aria-selected="false"
          >
            <span>Check In</span>
          </a>
          <a
            href="#mngBooking"
            className="icon-manage-booking"
            role="tab"
            aria-controls="mngBooking"
            aria-selected="false"
          >
            <span>Manage Booking</span>
          </a>
          <a
            href="#flightStatus"
            className="icon-flight-info"
            role="tab"
            aria-controls="flightStatus"
            aria-selected="false"
          >
            <span>Flight Status</span>
          </a>
          <a
            href="#flightTimetable"
            className="icon-calendar"
            role="tab"
            aria-controls="flightTimetable"
            aria-selected="false"
          >
            <span>Flight Timetable</span>
          </a>
        </div>

        <div className="booking-form">
          <span
            id="ctl00_ctBody_Web_Content_Home_BookingEngine_ReturnOneWay_ekapi_language"
          ></span>
          <div id="bkFlight" className="booking-tab-content active">
            <div className="tab-header icon-book-flight">
              <a
                href="#"
                role="button"
                className="icon-close btn-close"
                aria-label="Close"
              ></a  ><span>Book Flight</span>
            </div>
            <div className="tab-wrapper">
              <div className="pill-tabs" role="tablist">
                <a
                  href="#rndTrip"
                  id="pillRnd"
                  className="active"
                  role="tab"
                  aria-controls="rndTrip"
                  aria-selected="true"
                  >Round Trip</a>
                <a
                  href="#oneWay"
                  id="pillOneWay"
                  role="tab"
                  aria-controls="oneWay"
                  aria-selected="false"
                  >One Way</a >
                <a
                  href="/Multidestination/en/"
                  id="lnk_multidestination"
                  role="tab"
                  aria-controls="mltCity"
                  aria-selected="false"
                  aria-label="Multi-City - Opens in new page"
                  >Multi-City</a >
              </div>
              <div id="rndTrip" className="pill-tab-content active">
                <div className="fieldset quarter">
                  <div className="field">
                    <label
                      id="lbl_rndTripFrom"
                      aria-label="From"
                      >From*</label>
                    <div className="input-wrapper dd icon-from">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$rndTripFrom"
                        type="text"
                        id="rndTripFrom"
                        className="rndTripFrom select2-hidden-accessible"
                        style={{width: '100%'}}
                        data-select2-id="rndTripFrom"
                        tabIndex={-1}
                        aria-hidden="true"
                      /><span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="689"
                        style={{width: "100%"}}
                        ><span className="selection"
                          ><span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex= {0}
                            aria-labelledby="select2-rndTripFrom-container"
                            ><span
                              className="select2-selection__rendered"
                              id="select2-rndTripFrom-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Nairobi - Nairobi Jomo Kenyatta International (NBO), Kenya"
                              >Nairobi - Nairobi Jomo Kenyatta International
                              (NBO), Kenya</span ><span
                              className="select2-selection__arrow"
                              role="presentation"
                              ><b role="presentation"></b></span></span></span><span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span></span>
                    </div>
                  </div>
                  <div className="field">
                    <label id="lbl_rndTripTo" aria-label="To"
                      >To*</label>
                    <div className="input-wrapper dd icon-to">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$rndTripTo"
                        type="text"
                        id="rndTripTo"
                        className="rndTripTo select2-hidden-accessible"
                        style={{width: "100%"}}
                        data-select2-id="rndTripTo"
                        tabIndex={-1}
                        aria-hidden="true"
                      /><span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="1369"
                        style={{width: "100%"}}
                        ><span className="selection"
                          ><span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-labelledby="select2-rndTripTo-container"
                            ><span
                              className="select2-selection__rendered"
                              id="select2-rndTripTo-container"
                              role="textbox"
                              aria-readonly="true"
                              ><span className="select2-selection__placeholder"
                                >City or Airport</span></span ><span
                              className="select2-selection__arrow"
                              role="presentation"
                              ><b role="presentation"></b></span></span></span ><span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span></span>
                    </div>
                  </div>
                  <div className="field date-field">
                    <label
                      id="lbl_rndTripDates"
                      aria-label="Date"
                      >Dates*</label>
                    <div className="input-wrapper dates has-arrow icon-calendar">
                      <div className="date-field-wrapper date-depart">
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$rndTripDepart"
                          type="component"
                          id="rndTripDepart"
                          autoComplete="off"
                          placeholder="Departing"
                          className="textbox date-value depart"
                          readOnly
                          aria-expanded="false"
                          aria-labelledby="lbl_rndTripDates"
                          aria-describedby="rndTripDepartDesc"
                          aria-required="true"
                        />
                        <span
                          className="hidden_description"
                          id="rndTripDepartDesc"
                          >Please choose your departure date. Use arrow keys
                          to select the dates.</span>
                      </div>
                      <div className="date-field-wrapper date-return">
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$rndTripReturn"
                          type="component"
                          id="rndTripReturn"
                          autoComplete="off"
                          placeholder="Returning"
                          className="textbox date-value return"
                          readOnly
                          aria-expanded="false"
                          aria-labelledby="lbl_rndTripDates"
                          aria-describedby="rndTripReturnDesc"
                          aria-required="true"
                        />
                        <span
                          className="hidden_description"
                          id="rndTripReturnDesc"
                          >When would you like to return? Use arrow keys to
                          select the dates.</span >
                      </div>
                    </div>
                    <div className="date-picker-popup">
                      <div className="date-picker-container-depart">
                        <h2 className="icon-from picker-header">
                          <span>Please choose your departure date</span>
                        </h2>
                        <div
                          className="pika-single is-hidden is-bound"
                          style={{position: "static", left: "auto", top: "auto"}}></div>
                      </div>
                      <div className="date-picker-container-return">
                        <h2 className="icon-to picker-header">
                          <span>When would you like to return?</span>
                        </h2>
                        <div
                          className="pika-single is-hidden is-bound"
                          style={{position: "static", left: "auto", top: "auto"}}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="field passengers-field">
                    <label
                      id="lbl_rndTripPassengers"
                      aria-label="Passengers &amp; Cabin"
                      >Passengers &amp; Cabin*</label >
                    <div className="input-wrapper has-arrow icon-passenger">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$rndTripPassengers"
                        type="component"
                        id="rndTripPassengers"
                        className="textbox passengers-value"
                        aria-describedby=""
                        readOnly
                        aria-readonly="true"
                        aria-expanded="false"
                        aria-labelledby="lbl_rndTripPassengers"
                        value="1 Passenger Economy"
                      />
                      <span
                        className="hidden_description"
                        id="rndTripPassengersDesc"
                        >This section is to increase and decrease all
                        passenger categories. Use only tab key to navigate
                        between increase and decrease buttons of each
                        passenger type. Use buttons by pressing Enter key.
                        Please note: You can book a maximum of nine passengers
                        per booking.</span >
                    </div>
                    <div className="passengers-popup">
                      <a
                        href="#"
                        role="button"
                        className="btn-close-passengers icon-close"
                        aria-label="Close"
                      ></a>
                      <h3>Passengers</h3>
                      <div className="error-msg">
                        <p></p>
                      </div>
                      <div
                        id="rndTripAdults"
                        className="number-stepper adults clearfloat"
                        data-valuemin="0"
                        data-valuemax="9"
                        data-valuenow="1"
                      >
                        <button
                          type="button"
                          className="btn-passenger-plus adult-plus icon-plus"
                          aria-label="Add Adult Ages Above 16"
                        ></button>
                        <div className="number-stepper-text">
                          <label className="number-stepper-label"
                            ><span
                              id="adultvalue"
                              className="passenger-value adult-value"
                              >1</span >
                            <span
                              className="passenger-type"
                              data-singular="Adult"
                              data-plural="Adults"
                              >Adult</span>
                          </label>
                          <span className="number-stepper-detail"
                            >Ages Above 16</span >
                        </div>
                        <button
                          type="button"
                          className="btn-passenger-minus adult-minus icon-minus"
                          aria-label="Subtract Adult Ages Above 16"
                        ></button>
                      </div>
                      <div
                        id="rndTripYouth"
                        className="number-stepper youth clearfloat"
                        data-valuemin="0"
                        data-valuemax="9"
                        data-valuenow="0"
                      >
                        <button
                          type="button"
                          className="btn-passenger-plus youth-plus icon-plus"
                          aria-label="Add Youth Ages 12-16"
                        ></button>
                        <div className="number-stepper-text">
                          <label className="number-stepper-label"
                            ><span
                              id="youthvalue"
                              className="passenger-value youth-value"
                              >0</span >
                            <span
                              className="passenger-type"
                              data-singular="Youth"
                              data-plural="Youths"
                              >Youth</span >
                          </label>
                          <span className="number-stepper-detail"
                            >Ages 12-16</span >
                        </div>
                        <button
                          type="button"
                          className="btn-passenger-minus youth-minus icon-minus"
                          aria-label="Subtract Youth Ages 12-16"
                          disabled
                        ></button>
                      </div>
                      <div
                        id="rndTripChild"
                        className="number-stepper child clearfloat"
                        data-valuemin="0"
                        data-valuemax="8"
                        data-valuenow="0"
                      >
                        <button
                          type="button"
                          className="btn-passenger-plus child-plus icon-plus"
                          aria-label="Add Child Ages 2-11"
                        ></button>
                        <div className="number-stepper-text">
                          <label className="number-stepper-label"
                            ><span
                              id="childvalue"
                              className="passenger-value child-value"
                              >0</span >
                            <span
                              className="passenger-type"
                              data-singular="Child"
                              data-plural="Children"
                              >Child</span>
                          </label>
                          <span className="number-stepper-detail">Ages 2-11</span>
                        </div>
                        <button
                          type="button"
                          className="btn-passenger-minus child-minus icon-minus"
                          aria-label="Subtract Child Ages 2-11"
                          disabled
                        ></button>
                      </div>
                      <div
                        id="rndTripInfant"
                        className="number-stepper infant clearfloat"
                        data-valuemin="0"
                        data-valuemax="1"
                        data-valuenow="0"
                      >
                        <button
                          type="button"
                          className="btn-passenger-plus infant-plus icon-plus"
                          aria-label="Add Infant Ages 0-1, On Lap"
                        ></button>
                        <div className="number-stepper-text">
                          <label className="number-stepper-label"
                            ><span
                              id="infantvalue"
                              className="passenger-value infant-value"
                              >0</span >
                            <span
                              className="passenger-type"
                              data-singular="Infant"
                              data-plural="Infants"
                              >Infant</span>
                          </label>
                          <span className="number-stepper-detail"
                            >Ages 0-1, On Lap</span >
                        </div>
                        <button
                          type="button"
                          className="btn-passenger-minus infant-minus icon-minus"
                          aria-label="Subtract Infant Ages 0-1, On Lap"
                          disabled
                        ></button>
                      </div>
                      <h3>Cabin className</h3>
                      <div className="cabin-field rndtrip-cabin">
                        <div className="input-wrapper icon-user">
                          <select
                            name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$rndTripCabin"
                            id="rndTripCabin"
                            aria-label="Cabin className"
                            aria-required="true"
                            style={{width: "100%"}}
                            data-select2-id="rndTripCabin"
                            tabIndex={-1}
                            className="select2-hidden-accessible"
                            aria-hidden="true"
                          >
                            <option value="E" data-select2-id="4">
                              Economy
                            </option>
                            <option value="B">Business</option></select ><span
                            className="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="3"
                            style={{width: "100%"}}
                            ><span className="selection"
                              ><span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-labelledby="select2-rndTripCabin-container"
                                ><span
                                  className="select2-selection__rendered"
                                  id="select2-rndTripCabin-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Economy"
                                  >Economy</span ><span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                  ><b
                                    role="presentation"
                                  ></b></span></span></span><span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            ></span></span>
                        </div>
                      </div>
                      <div className="confirm-field">
                        <button
                          type="button"
                          className="btn-primary btn-confirm-passengers"
                        >
                          Confirm
                          <span className="passengers-final">1 Passenger</span> in
                          <span className="cabin-final">Economy</span>
                        </button>
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$adultCount"
                          type="text"
                          id="adultCount"
                          className="adult-count"
                        />
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$youthCount"
                          type="text"
                          id="youthCount"
                          className="youth-count"
                        />
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$childCount"
                          type="text"
                          id="childCount"
                          className="child-count"
                        />
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$infantCount"
                          type="text"
                          id="infantCount"
                          className="infant-count"
                        />
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$cabinclassName"
                          type="text"
                          id="cabinclassName"
                          className="cabin-className"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fieldset half">
                  <div className="field">
                    <label
                      id="lbl_rndTripPromoCode"
                      aria-label="Promo Code"
                      >Promo Code</label >
                    <div className="input-wrapper icon-plus">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$rndTripPromoCode"
                        type="text"
                        id="rndTripPromoCode"
                        autoComplete="off"
                        className="textbox txtpromo"
                        aria-labelledby="lbl_rndTripPromoCode"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="booking-notification sa">
                      <a
                        href="#"
                        className="btn-close-note icon-close"
                        aria-label="Close"
                      ></a>
                      <p>
                        Read South Africa immigration regulations when
                        traveling with Children (18-)
                        <a
                          href="//www.kenya-airways.com/uploadedFiles/South_Africa_Immigration_Rule_for_pax_travelling_with_Children.pdf"
                          target="_blank"
                          >Read more</a>
                      </p>
                    </div>
                    <div className="booking-notification kiwi">
                      <a
                        href="#"
                        className="btn-close-note icon-close"
                        aria-label="Close"
                      ></a>
                      <p>
                        You might be redirected to kiwi
                        <a
                          href="//www.kenya-airways.com/uploadedFiles/South_Africa_Immigration_Rule_for_pax_travelling_with_Children.pdf"
                          target="_blank"
                          >Read more</a >
                      </p>
                    </div>
                    <div className="booking-notification tz">
                      <a
                        href="#"
                        className="btn-close-note icon-close"
                        aria-label="Close"
                      ></a>
                      <p>
                        Be in the Know on the recent Tanzania plastic bag ban
                        notice.
                        <a
                          href="//www.kenya-airways.com/uploadedFiles/PLASTIC BAN TZ NOTICE.pdf"
                          target="_blank"
                          >Read more</a  >
                      </p>
                    </div>
                    <div className="booking-notification tz1">
                      <a
                        href="#"
                        className="btn-close-note icon-close"
                        aria-label="Close"
                      ></a>
                      <p>
                        Be in the Know on the recent Tanzania plastic bag ban
                        notice.
                        <a
                          href="//www.kenya-airways.com/uploadedFiles/PLASTIC BAN TZ NOTICE.pdf"
                          target="_blank"
                          >Read more</a >
                      </p>
                    </div>
                    <div className="booking-notification tz2">
                      <a
                        href="#"
                        className="btn-close-note icon-close"
                        aria-label="Close"
                      ></a>
                      <p>
                        Be in the Know on the recent Tanzania plastic bag ban
                        notice.
                        <a
                          href="//www.kenya-airways.com/uploadedFiles/PLASTIC BAN TZ NOTICE.pdf"
                          target="_blank"
                          >Read more</a >
                      </p>
                    </div>
                    <div className="booking-notification tz3">
                      <a
                        href="#"
                        className="btn-close-note icon-close"
                        aria-label="Close"
                      ></a>
                      <p>
                        Be in the Know on the recent Tanzania plastic bag ban
                        notice.
                        <a
                          href="//www.kenya-airways.com/uploadedFiles/PLASTIC BAN TZ NOTICE.pdf"
                          target="_blank"
                          >Read more</a >
                      </p>
                    </div>
                    <input
                      type="submit"
                      name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$round_trip_btn"
                      value="Book Now"
                      id="round_trip_btn"
                      className="btn-primary btn-submit-form btn-rnd-trip"
                    />
                  </div>
                </div>
                <span className="required-note"
                  >All fields with * are mandatory</span >
                <div className="general-error">
                  <p></p>
                </div>
              </div>
              <div id="oneWay" className="pill-tab-content">
                <div className="fieldset quarter">
                  <div className="field">
                    <label
                      id="lbl_oneWayFrom"
                      aria-label="From"
                      >From*</label>
                    <div className="input-wrapper dd icon-from">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$oneWayFrom"
                        type="text"
                        id="oneWayFrom"
                        className="oneWayFrom select2-hidden-accessible"
                        style={{width: "100%"}}
                        data-select2-id="oneWayFrom"
                        tabIndex={-1}
                        aria-hidden="true"
                      /><span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="2049"
                        style={{width: "100%"}}
                        ><span className="selection"
                          ><span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-labelledby="select2-oneWayFrom-container"
                            ><span
                              className="select2-selection__rendered"
                              id="select2-oneWayFrom-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Nairobi - Nairobi Jomo Kenyatta International (NBO), Kenya"
                              >Nairobi - Nairobi Jomo Kenyatta International
                              (NBO), Kenya</span ><span
                              className="select2-selection__arrow"
                              role="presentation"
                              ><b role="presentation"></b></span></span></span><span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span></span>
                    </div>
                  </div>
                  <div className="field">
                    <label id="lbl_oneWayTo" aria-label="To"
                      >To*</label >
                    <div className="input-wrapper dd icon-to">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$oneWayTo"
                        type="text"
                        id="oneWayTo"
                        className="oneWayTo select2-hidden-accessible"
                        style={{width: "100%"}}
                        data-select2-id="oneWayTo"
                        tabIndex={-1}
                        aria-hidden="true"
                      /><span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="2729"
                        style={{width: "100%"}}
                        ><span className="selection"
                          ><span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-labelledby="select2-oneWayTo-container"
                            ><span
                              className="select2-selection__rendered"
                              id="select2-oneWayTo-container"
                              role="textbox"
                              aria-readonly="true"
                              ><span className="select2-selection__placeholder"
                                >City or Airport</span ></span ><span
                              className="select2-selection__arrow"
                              role="presentation"
                              ><b role="presentation"></b></span></span></span ><span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span ></span>
                    </div>
                  </div>
                  <div className="field date-field">
                    <label
                      id="lbl_oneWayDate"
                      aria-label="Date"
                      >Date*</label>
                    <div className="input-wrapper dates has-arrow icon-calendar">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$oneWayDepart"
                        type="component"
                        id="oneWayDepart"
                        autoComplete="off"
                        placeholder="Departing"
                        className="textbox date-value"
                        readOnly
                        aria-expanded="false"
                        aria-labelledby="lbl_oneWayDate"
                        aria-describedby="oneWayDateDesc"
                        aria-required="true"
                      />
                    </div>
                    <div className="date-picker-popup">
                      <h2 className="icon-from">
                        <span>Please choose your departure date</span>
                      </h2>
                      <div
                        id="date-picker-container"
                        className="date-picker-container"
                      >
                        <div
                          className="pika-single is-hidden is-bound"
                          style={{position: 'static', left: 'auto', top: 'auto'}}
                        ></div>
                      </div>
                    </div>
                    <span className="hidden_description" id="oneWayDateDesc"
                      >Please choose your departure date. Use arrow keys to
                      select the dates.</span>
                  </div>
                  <div className="field passengers-field">
                    <label
                      id="lbl_oneWayPassengers"
                      aria-label="Passengers &amp; Cabin"
                      >Passengers &amp; Cabin*</label >
                    <div className="input-wrapper has-arrow icon-passenger">
                      <input
                        className="textbox passengers-value"
                        type="component"
                        id="oneWayPassengers"
                        name="oneWayPassengers"
                        aria-describedby="oneWayPassengersDesc"
                        readOnly
                        aria-readonly="true"
                        aria-expanded="false"
                        aria-labelledby="lbl_oneWayPassengers"
                        value="1 Passenger Economy"
                      />
                      <span
                        className="hidden_description"
                        id="oneWayPassengersDesc"
                        >This section is to increase and decrease all
                        passenger categories. Use only tab key to navigate
                        between increase and decrease buttons of each
                        passenger type. Use buttons by pressing Enter key.
                        Please note: You can book a maximum of nine passengers
                        per booking.</span>
                    </div>
                    <div className="passengers-popup">
                      <a
                        href="#"
                        role="button"
                        className="btn-close-passengers icon-close"
                        aria-label="Close"
                      ></a>
                      <h3>Passengers</h3>
                      <div className="error-msg">
                        <p></p>
                      </div>
                      <div
                        id="oneWayAdults"
                        className="number-stepper adults clearfloat"
                        data-valuemin="0"
                        data-valuemax="9"
                        data-valuenow="1"
                      >
                        <button
                          type="button"
                          className="btn-passenger-plus adult-plus icon-plus"
                          aria-label="Add Adult Ages Above 16"
                        ></button>
                        <div className="number-stepper-text">
                          <label className="number-stepper-label"
                            ><span className="passenger-value adult-value"
                              >1</span>
                            <span
                              className="passenger-type"
                              data-singular="Adult"
                              data-plural="Adults"
                              >Adult</span>
                          </label>
                          <span className="number-stepper-detail"
                            >Ages Above 16</span >
                        </div>
                        <button
                          type="button"
                          className="btn-passenger-minus adult-minus icon-minus"
                          aria-label="Subtract Adult Ages Above 16"
                        ></button>
                      </div>
                      <div
                        id="oneWayYouth"
                        className="number-stepper youth clearfloat"
                        data-valuemin="0"
                        data-valuemax="9"
                        data-valuenow="0"
                      >
                        <button
                          type="button"
                          className="btn-passenger-plus youth-plus icon-plus"
                          aria-label="Add Youth Ages 12-16"
                        ></button>
                        <div className="number-stepper-text">
                          <label className="number-stepper-label"
                            ><span className="passenger-value youth-value"
                              >0</span >
                            <span
                              className="passenger-type"
                              data-singular="Youth"
                              data-plural="Youths"
                              >Youth</span>
                          </label>
                          <span className="number-stepper-detail"
                            >Ages 12-16</span >
                        </div>
                        <button
                          type="button"
                          className="btn-passenger-minus youth-minus icon-minus"
                          aria-label="Subtract Youth Ages 12-16"
                          disabled
                        ></button>
                      </div>
                      <div
                        id="oneWayChild"
                        className="number-stepper child clearfloat"
                        data-valuemin="0"
                        data-valuemax="8"
                        data-valuenow="0"
                      >
                        <button
                          type="button"
                          className="btn-passenger-plus child-plus icon-plus"
                          aria-label="Add Child Ages 2-11"
                        ></button>
                        <div className="number-stepper-text">
                          <label className="number-stepper-label"
                            ><span className="passenger-value child-value"
                              >0</span>
                            <span
                              className="passenger-type"
                              data-singular="Child"
                              data-plural="Children"
                              >Child</span>
                          </label>
                          <span className="number-stepper-detail">Ages 2-11</span>
                        </div>
                        <button
                          type="button"
                          className="btn-passenger-minus child-minus icon-minus"
                          aria-label="Subtract Child Ages 2-11"
                          disabled
                        ></button>
                      </div>
                      <div
                        id="oneWayInfant"
                        className="number-stepper infant clearfloat"
                        data-valuemin="0"
                        data-valuemax="1"
                        data-valuenow="0"
                      >
                        <button
                          type="button"
                          className="btn-passenger-plus infant-plus icon-plus"
                          aria-label="Add Infant Ages 0-1, On Lap"
                        ></button>
                        <div className="number-stepper-text">
                          <label className="number-stepper-label"
                            ><span className="passenger-value infant-value"
                              >0</span >
                            <span
                              className="passenger-type"
                              data-singular="Infant"
                              data-plural="Infants"
                              >Infant</span>
                          </label>
                          <span className="number-stepper-detail"
                            >Ages 0-1, On Lap</span>
                        </div>
                        <button
                          type="button"
                          className="btn-passenger-minus infant-minus icon-minus"
                          aria-label="Subtract Infant Ages 0-1, On Lap"
                          disabled
                        ></button>
                      </div>
                      <h3>Cabin className</h3>
                      <div className="cabin-field oneway-cabin">
                        <div className="input-wrapper icon-user">
                          <select
                            name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$oneWayCabin"
                            id="oneWayCabin"
                            aria-label="Cabin className"
                            aria-required="true"
                            style={{width: "100%"}}
                            data-select2-id="oneWayCabin"
                            tabIndex={-1}
                            className="select2-hidden-accessible"
                            aria-hidden="true"
                          >
                            <option value="E" data-select2-id="2">
                              Economy
                            </option>
                            <option value="B">Business</option></select><span
                            className="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="1"
                            style={{width: "100%"}}
                            ><span className="selection"
                              ><span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-labelledby="select2-oneWayCabin-container"
                                ><span
                                  className="select2-selection__rendered"
                                  id="select2-oneWayCabin-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Economy"
                                  >Economy</span><span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                  ><b
                                    role="presentation"
                                  ></b></span></span></span><span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            ></span></span>
                        </div>
                      </div>
                      <div className="confirm-field">
                        <button
                          type="button"
                          className="btn-primary btn-confirm-passengers"
                        >
                          Confirm
                          <span className="passengers-final">1 Passenger</span> in
                          <span className="cabin-final">Economy</span>
                        </button>
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$onewayAdult"
                          type="text"
                          id="onewayAdult"
                          className="adult-count"
                        />
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$onewayYouth"
                          type="text"
                          id="onewayYouth"
                          className="youth-count"
                        />
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$onewayChild"
                          type="text"
                          id="onewayChild"
                          className="child-count"
                        />
                        <input
                          name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$onewayInfant"
                          type="text"
                          id="onewayInfant"
                          className="infant-count"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fieldset half">
                  <div className="field">
                    <label
                      id="lbl_oneWayPromoCode"
                      aria-label="Promo Code"
                      >Promo Code</label >
                    <div className="input-wrapper icon-plus">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$oneWayPromoCode"
                        type="text"
                        id="ctl00_ctBody_Web_Content_Home_BookingEngine_ReturnOneWay_oneWayPromoCode"
                        autoComplete="off"
                        className="textbox txtpromo"
                        aria-labelledby="lbl_oneWayPromoCode"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="booking-notification sa">
                      <a
                        href="#"
                        className="btn-close-note icon-close"
                        aria-label="Close"
                      ></a>
                      <p>
                        Read South Africa immigration regulations when
                        traveling with Children (18-)
                        <a
                          href="//www.kenya-airways.com/uploadedFiles/South_Africa_Immigration_Rule_for_pax_travelling_with_Children.pdf"
                          target="_blank"
                          >Read more</a >
                      </p>
                    </div>
                    <div className="booking-notification kiwi">
                      <a
                        href="#"
                        className="btn-close-note icon-close"
                        aria-label="Close"
                      ></a>
                      <p>
                        You may be redirected to KIWI.com
                        <a
                          href="//www.kenya-airways.com/uploadedFiles/South_Africa_Immigration_Rule_for_pax_travelling_with_Children.pdf"
                          target="_blank"
                          >Read more</a>
                      </p>
                    </div>
                    <div className="booking-notification tz">
                      <a
                        href="#"
                        className="btn-close-note icon-close"
                        aria-label="Close"
                      ></a>
                      <p>
                        Be in the Know on the recent Tanzania plastic bag ban
                        notice.
                        <a
                          href="//www.kenya-airways.com/uploadedFiles/PLASTIC BAN TZ NOTICE.pdf"
                          target="_blank"
                          >Read more</a>
                      </p>
                    </div>
                    <div className="booking-notification tz1">
                      <a
                        href="#"
                        className="btn-close-note icon-close"
                        aria-label="Close"
                      ></a>
                      <p>
                        Be in the Know on the recent Tanzania plastic bag ban
                        notice.
                        <a
                          href="//www.kenya-airways.com/uploadedFiles/PLASTIC BAN TZ NOTICE.pdf"
                          target="_blank"
                          >Read more</a>
                      </p>
                    </div>
                    <div className="booking-notification tz2">
                      <a
                        href="#"
                        className="btn-close-note icon-close"
                        aria-label="Close"
                      ></a>
                      <p>
                        Be in the Know on the recent Tanzania plastic bag ban
                        notice.
                        <a
                          href="//www.kenya-airways.com/uploadedFiles/PLASTIC BAN TZ NOTICE.pdf"
                          target="_blank"
                          >Read more</a>
                      </p>
                    </div>
                    <div className="booking-notification tz3">
                      <a
                        href="#"
                        className="btn-close-note icon-close"
                        aria-label="Close"
                      ></a>
                      <p>
                        Be in the Know on the recent Tanzania plastic bag ban
                        notice.
                        <a
                          href="//www.kenya-airways.com/uploadedFiles/PLASTIC BAN TZ NOTICE.pdf"
                          target="_blank"
                          >Read more</a >
                      </p>
                    </div>
                    <input
                      type="submit"
                      name="ctl00$ctBody$Web_Content_Home$BookingEngine$ReturnOneWay$btn_OneWay"
                      value="Book Now"
                      id="ctl00_ctBody_Web_Content_Home_BookingEngine_ReturnOneWay_btn_OneWay"
                      className="btn-primary btn-submit-form btn-one-way"
                    />
                  </div>
                </div>
                <span className="required-note"
                  >All fields with * are mandatory</span>
                <div className="general-error" id="oneWayErr">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div id="chkIn" className="booking-tab-content">
            <div className="tab-header icon-check-in">
              <a
                href="#"
                role="button"
                className="icon-close btn-close"
                aria-label="Close"
              ></a>
              <span>Check In</span>
            </div>
            <div className="tab-wrapper">
              <div className="custom-alert">
                Please note, we have temporarily suspended online check-in for
                flights to Lilongwe(LLW). Alternatively, you may check-in at
                the airport.We apologise for incovenience caused.
              </div>
              <div className="pill-tabs" role="tablist">
                <a
                  href="https://www.kenya-airways.com/prepare-for-travel/manage-booking/online-check-in/en/"
                  className="active"
                  role="tab"
                  aria-controls="checkIn"
                  aria-selected="true"
                  target="_blank"
                  >Online Check-in Exemptions</a >
              </div>
              <div id="checkIn" className="active" style={{padding: "14px 0 0 0"}}>
                <div className="fieldset third">
                  <div className="field">
                    <label
                      id="lbl_chkInBRN"
                      aria-label="Booking Reference Number"
                      >Booking Reference Number</label>
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
                        <label
                          id="lbl_chkInETNCode"
                          aria-label="E-Ticket Number"
                          >E-Ticket Number</label>
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
                        <label
                          id="lbl_chkInFFN"
                          aria-label="Frequent Flyer Number"
                          >Frequent Flyer Number</label>
                        <div className="inline-fields">
                          <div className="inline-field ffn-airline">
                            <div className="input-wrapper icon-book-flight">
                              <select
                                name="ctl00$ctBody$Web_Content_Home$BookingEngine$OnlineCheckin$chkInFFNAirline"
                                id="chkInFFNAirline"
                                className="chkInFFNAirline select2-hidden-accessible"
                                aria-label="Select the Frequent Flyer airline"
                                style={{width: "100%"}}
                                data-select2-id="chkInFFNAirline"
                                tabIndex={-1}
                                aria-hidden="true"
                              >
                                <option
                                  value=""
                                  aria-label="Empty"
                                  data-select2-id="2731"
                                ></option>
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
                                <option
                                  value="5"
                                  label="Aerolineas Argentinas - AR"
                                >
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
                                <option
                                  value="9"
                                  label="China Eastern Airlines - MU"
                                >
                                  China Eastern Airlines - MU
                                </option>
                                <option
                                  value="10"
                                  label="China Southern - CZ"
                                >
                                  China Southern - CZ
                                </option>
                                <option
                                  value="11"
                                  label="Czech Airlines - OK"
                                >
                                  Czech Airlines - OK
                                </option>
                                <option value="12" label="Delta - DL">
                                  Delta - DL
                                </option>
                                <option
                                  value="13"
                                  label="Garuda Indonesia - GA"
                                >
                                  Garuda Indonesia - GA
                                </option>
                                <option value="14" label="Korean Air - KE">
                                  Korean Air - KE
                                </option>
                                <option value="15" label="KLM - KL">
                                  KLM - KL
                                </option>
                                <option
                                  value="16"
                                  label="Middle East Airlines - ME"
                                >
                                  Middle East Airlines - ME
                                </option>
                                <option
                                  value="17"
                                  label="Saudi Arabian Airlines - SV"
                                >
                                  Saudi Arabian Airlines - SV
                                </option>
                                <option value="18" label="Tarom - RO">
                                  Tarom - RO
                                </option>
                                <option
                                  value="19"
                                  label="Vietnam Airlines - VN"
                                >
                                  Vietnam Airlines - VN
                                </option>
                                <option
                                  value="20"
                                  label="Virgin Atlantic- VS"
                                >
                                  Virgin Atlantic- VS
                                </option>
                                <option value="21" label="Xiamen Air - MF">
                                  Xiamen Air - MF
                                </option></select><span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="2730"
                                style={{width: "100%"}}
                                ><span className="selection"
                                  ><span
                                    className="select2-selection select2-selection--single"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabIndex={0}
                                    aria-labelledby="select2-chkInFFNAirline-container"
                                    ><span
                                      className="select2-selection__rendered"
                                      id="select2-chkInFFNAirline-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      ><span
                                        className="select2-selection__placeholder"
                                        >Frequent Flyer Airline</span></span ><span
                                      className="select2-selection__arrow"
                                      role="presentation"
                                      ><b
                                        role="presentation"
                                      ></b></span></span></span><span
                                  className="dropdown-wrapper"
                                  aria-hidden="true"
                                ></span></span>
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
                    <label id="lbl_chkInLastName"
                      >Last Name*</label>
                    <div className="input-wrapper icon-passenger">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$OnlineCheckin$chkLastName"
                        type="text"
                        id="chkLastName"
                        aria-required="true"
                        className="textbox"
                        aria-expanded="false"
                        aria-describedby="chkLastNameDesc"
                        aria-labelledby="lbl_chklastName"
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
                <span className="required-note"
                  >Al fields with * are mandatory</span >
                <div className="general-error">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <span
            id="ctl00_ctBody_Web_Content_Home_BookingEngine_ManageMyBooking_ekapi_language"
          ></span>
          <div id="mngBooking" className="booking-tab-content">
            <div className="tab-header icon-manage-booking">
              <a
                href="#"
                role="button"
                className="icon-close btn-close"
                aria-label="Close"
              ></a>
              <span>Manage Booking</span>
            </div>

            <div className="tab-wrapper">
              <div className="pill-tabs" role="tablist">
                <a
                  href="#manageBooking"
                  className="active"
                  role="tab"
                  aria-controls="manageBooking"
                  aria-selected="true"
                  >Manage Booking</a >
              </div>

              <div id="manageBooking" className="pill-tab-content active">
                <div className="fieldset two-thirds">
                  <div className="field">
                    <div className="inline-fields">
                      <div className="inline-field">
                        <label
                          id="lbl_mngBookingLastName"
                          aria-label="Last Name"
                          >Last Name*</label >
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
                        <label
                          id="lbl_mngBookingBRN"
                          aria-label="Booking Reference Number"
                          >Booking Reference Number</label >
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
                        <label
                          id="lbl_mngBookingETNCode"
                          aria-label="E-Ticket Number"
                          >E-Ticket Number</label>
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
                <span className="required-note"
                  >All fields with * are mandatory</span>
                <div className="general-error">
                  <p></p>
                </div>
              </div>
            </div>
          </div>

          <div id="flightStatus" className="booking-tab-content">
            <div className="tab-header icon-flight-info">
              <a
                href="#"
                role="button"
                className="icon-close btn-close"
                aria-label="Close"
              ></a>
              <span>Flight Status</span>
            </div>

            <div className="tab-wrapper">
              <div className="pill-tabs" role="tablist">
                <a
                  href="#fltStatus"
                  className="active"
                  role="tab"
                  aria-controls="fltStatus"
                  aria-selected="true"
                  >Flight Status</a >
              </div>
              <div id="fltStatus" className="pill-tab-content active">
                <div className="fieldset fifth">
                  <div className="field one">
                    <label
                      id="lbl_fltStatusDepart"
                      aria-label="Departure City"
                      >Departure City*</label>
                    <div className="input-wrapper dd icon-from">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightStatus$fltStatusDepart"
                        type="text"
                        id="fltStatusDepart"
                        className="fltStatusDepart select2-hidden-accessible"
                        style={{width: "100%"}}
                        data-select2-id="fltStatusDepart"
                        tabIndex={-1}
                        aria-hidden="true"
                      /><span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="3411"
                        style={{width:"100%"}}
                        ><span className="selection"
                          ><span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-labelledby="select2-fltStatusDepart-container"
                            ><span
                              className="select2-selection__rendered"
                              id="select2-fltStatusDepart-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Nairobi - Nairobi Jomo Kenyatta International (NBO), Kenya"
                              >Nairobi - Nairobi Jomo Kenyatta International
                              (NBO), Kenya</span><span
                              className="select2-selection__arrow"
                              role="presentation"
                              ><b role="presentation"></b></span></span></span><span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span ></span>
                    </div>
                  </div>
                  <div className="field two">
                    <label
                      id="lbl_fltStatusArrival"
                      aria-label="Arival City"
                      >Arrival City*</label >
                    <div className="input-wrapper dd icon-to">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightStatus$fltStatusArrival"
                        type="text"
                        id="fltStatusArrival"
                        className="fltStatusArrival select2-hidden-accessible"
                        style={{width: "100%"}}
                        data-select2-id="fltStatusArrival"
                        tabIndex={-1}
                        aria-hidden="true"
                      /><span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="4091"
                        style={{width: "100%"}}
                        ><span className="selection"
                          ><span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-labelledby="select2-fltStatusArrival-container"
                            ><span
                              className="select2-selection__rendered"
                              id="select2-fltStatusArrival-container"
                              role="textbox"
                              aria-readonly="true"
                              ><span className="select2-selection__placeholder"
                                >City or Airport</span></span ><span
                              className="select2-selection__arrow"
                              role="presentation"
                              ><b role="presentation"></b></span></span></span><span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span ></span>
                    </div>
                  </div>
                  <div className="field three">
                    <label
                      id="lbl_fltStatusFlightNumber"
                      aria-label="Flight Number"
                      >Flight Number*</label >
                    <div className="input-wrapper icon-book-flight">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightStatus$fltStatusFlightNumber"
                        type="text"
                        id="fltStatusFlightNumber"
                        className="textbox txtBRN fltStatusFlightNumber"
                        aria-labelledby="lbl_fltStatusFlightNumber"
                        placeholder="eg.KQ600"
                      />
                    </div>
                  </div>
                  <div className="field four date-field">
                    <label
                      id="lbl_fltStatusDate"
                      aria-label="Date"
                      >Date*</label>
                    <div className="input-wrapper dates has-arrow icon-calendar">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightStatus$fltStatusDepartDate"
                        type="component"
                        id="fltStatusDepartDate"
                        autoComplete="off"
                        placeholder="Departing"
                        className="textbox date-value"
                        readOnly
                        aria-expanded="false"
                        aria-labelledby="lbl_fltStatusDate"
                        aria-describedby="fltStatusDateDesc"
                        aria-required="true"
                      />
                    </div>
                    <div className="date-picker-popup">
                      <h2 className="icon-from">
                        <span>Please choose your departure date</span>
                      </h2>
                      <div className="date-picker-container flt-status">
                        <div
                          className="pika-single is-hidden is-bound"
                          style={{position: "static", left: "auto", top: "auto"}}
                        ></div>
                      </div>
                    </div>
                    <span className="hidden_description" id="fltStatusDateDesc"
                      >Please choose your departure date. Use arrow keys to
                      select the dates.</span>
                  </div>
                  <div className="field five">
                    <input
                      type="submit"
                      name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightStatus$flight_status_btn"
                      value="Search"
                      id="flight_status_btn"
                      className="btn-primary btn-flt-status"
                    />
                  </div>
                </div>
                <span className="required-note"
                  >All fields with * are mandatory</span>
                <div className="general-error">
                  <p></p>
                </div>
              </div>
            </div>
          </div>

          <span
            id="ctl00_ctBody_Web_Content_Home_BookingEngine_FlightTimeTable_ekapi_language"
          ></span>

          <div id="flightTimetable" className="booking-tab-content">
            <div className="tab-header icon-flight-info">
              <a
                href="#"
                role="button"
                className="icon-close btn-close"
                aria-label="Close"
              ></a>
              <span>Flight Timetable</span>
            </div>

            <div className="tab-wrapper">
              <div className="pill-tabs" role="tablist">
                <a
                  href="#fltTimetable"
                  className="active"
                  role="tab"
                  aria-controls="fltTimetable"
                  aria-selected="true"
                  >Flight Timetable</a>
              </div>

              <div id="fltTimetable" className="pill-tab-content active">
                <div className="fieldset fifth">
                  <div className="field one">
                    <label
                      id="lbl_fltTimeDepart"
                      aria-label="Departure City"
                      >Departure City*</label >
                    <div className="input-wrapper dd icon-from">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightTimeTable$fltTimeDepart"
                        type="text"
                        id="fltTimeDepart"
                        className="fltTimeDepart select2-hidden-accessible"
                        style={{width: "100%"}}
                        data-select2-id="fltTimeDepart"
                        tabIndex={-1}
                        aria-hidden="true"
                      /><span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="4771"
                        style={{width: "100%"}}
                        ><span className="selection"
                          ><span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-labelledby="select2-fltTimeDepart-container"
                            ><span
                              className="select2-selection__rendered"
                              id="select2-fltTimeDepart-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Nairobi - Nairobi Jomo Kenyatta International (NBO), Kenya"
                              >Nairobi - Nairobi Jomo Kenyatta International
                              (NBO), Kenya</span><span
                              className="select2-selection__arrow"
                              role="presentation"
                              ><b role="presentation"></b></span></span></span><span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span></span>
                    </div>
                  </div>
                  <div className="field two">
                    <label
                      id="lbl_fltTimeArrival"
                      aria-label="Arival City"
                      >Arrival City*</label >
                    <div className="input-wrapper dd icon-to">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightTimeTable$fltTimeArrival"
                        type="text"
                        id="fltTimeArrival"
                        className="fltTimeArrival select2-hidden-accessible"
                        style={{width: "100%"}}
                        data-select2-id="fltTimeArrival"
                        tabIndex={-1}
                        aria-hidden="true"
                      /><span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="5451"
                        style={{width: "100%"}}
                        ><span className="selection"
                          ><span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-labelledby="select2-fltTimeArrival-container"
                            ><span
                              className="select2-selection__rendered"
                              id="select2-fltTimeArrival-container"
                              role="textbox"
                              aria-readonly="true"
                              ><span className="select2-selection__placeholder"
                                >City or Airport</span></span><span
                              className="select2-selection__arrow"
                              role="presentation"
                              ><b role="presentation"></b></span></span></span ><span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span ></span>
                    </div>
                  </div>
                  <div className="field three">
                    <label
                      id="lbl_fltTimeTrip"
                      aria-label="Trip"
                      >Trip*</label >
                    <div className="input-wrapper dd icon-book-flight">
                      <select
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightTimeTable$fltTimeTrip"
                        id="fltTimeTrip"
                        className="fltTimeTrip select2-hidden-accessible"
                        aria-labelledby="lbl_fltTimeTrip"
                        style={{width: "100%"}}
                        data-select2-id="fltTimeTrip"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value="R" data-select2-id="5453">
                          Return
                        </option>
                        <option value="O">One Way</option></select><span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="5452"
                        style={{width: "100%"}}
                        ><span className="selection"
                          ><span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-labelledby="select2-fltTimeTrip-container"
                            ><span
                              className="select2-selection__rendered"
                              id="select2-fltTimeTrip-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Return"
                              >Return</span><span
                              className="select2-selection__arrow"
                              role="presentation"
                              ><b role="presentation"></b></span></span></span><span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span></span>
                    </div>
                  </div>
                  <div className="field four date-field trip-return">
                    <label
                      id="lbl_fltTimeDates"
                      aria-label="Date"
                      >Dates*</label>
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
                          aria-expanded="false"
                          aria-labelledby="lbl_fltTimeDates"
                          aria-describedby="fltTimeDepartDesc"
                          aria-required="true"
                        />
                        <span
                          className="hidden_description"
                          id="fltTimeDepartDesc"
                          >Please choose your departure date. Use arrow keys
                          to select the dates.</span>
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
                          aria-expanded="false"
                          aria-labelledby="lbl_fltTimeDates"
                          aria-describedby="fltTimeReturnDesc"
                          aria-required="true"
                        />
                        <span
                          className="hidden_description"
                          id="fltTimeReturnDesc"
                          >When would you like to return? Use arrow keys to
                          select the dates.</span >
                      </div>
                    </div>
                    <div className="date-picker-popup">
                      <div className="date-picker-container-depart">
                        <h2 className="icon-from picker-header">
                          <span>Please choose your departure date</span>
                        </h2>
                        <div
                          className="pika-single is-hidden is-bound"
                          style={{position: 'static', left: 'auto', top: 'auto'}}
                        ></div>
                      </div>
                      <div className="date-picker-container-return">
                        <h2 className="icon-to picker-header">
                          <span>When would you like to return?</span>
                        </h2>
                        <div
                          className="pika-single is-hidden is-bound"
                          style={{position: 'static', left: 'auto', top: 'auto'}}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="field four date-field trip-oneway">
                    <label
                      id="lbl_fltTimeDate"
                      aria-label="Date"
                      >Date*</label>
                    <div className="input-wrapper dates has-arrow icon-calendar">
                      <input
                        name="ctl00$ctBody$Web_Content_Home$BookingEngine$FlightTimeTable$fltTimeDepartDate"
                        type="component"
                        id="fltTimeDepartDate"
                        autoComplete="off"
                        placeholder="Departing"
                        className="textbox date-value"
                        readOnly
                        aria-expanded="false"
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
                          style={{position: 'static', left: 'auto', top: 'auto'}}
                        ></div>
                      </div>
                    </div>
                    <span
                      hidden
                      className="hidden_description"
                      id="fltTimeDateDesc"
                      >Please choose your departure date. Use arrow keys to
                      select the dates.</span>
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
                <span className="required-note"
                  >All fields with * are mandatory</span>
                <div className="general-error">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

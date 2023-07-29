import React, { useState } from "react";
import discover from "../../img/discover.png";
import mastercard from "../../img/mastercard1.png";
import mpesa from "../../img/mpesa.png";
import paypal from "../../img/paypal.png";
import visa from "../../img/visa.png";

import { FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "../../store/bookingSlice";
import { Link } from "react-router-dom";
import { Alert } from "bootstrap";
import { Pop } from "../pop/pop";

export const Payment = ({ setSelectedTab }) => {
  const { seatsSelected, bookingUserInfo: user, pendingBooking } = useSelector(state => state.bookingReducer);

  const [paymentForm, setPaymentForm] = useState({
    cardHolderFullName: "",
    cardNumber: "",
  });
  const [showPop, setShowPop] = useState(false);

  const okHandler = () => setShowPop(false);

  const dispatch = useDispatch();
  const submitHandler = async e => {
    try {
      e.preventDefault();
      if (+pendingBooking.passengers !== user.length || seatsSelected.length !== +pendingBooking.passengers) {
        return setShowPop(true);
      }
      dispatch(bookingActions.createPayment(paymentForm));
      const res = await fetch("https://flight-booking-server-3zln.vercel.app/flight/create-booking", {
        method: "POST",
        body: JSON.stringify(jsonObj(pendingBooking, user, seatsSelected)),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("==============================DATA========================");
      console.log(data);
      setSelectedTab("flightTicket");
    } catch (error) {
      console.log("====================================error===========================");
      console.log(error);
    }
  };
  return (
    <div className="form-content">
      <div className="payment-wrapper">
        <div className="tab-wrapper">
          <form encType="text/plain" method="get" target="_blank" onSubmit={submitHandler}>
            <div className="cards">
              {/* <p>Accepted cards:</p> */}
              <div className="card-logos">
                <img src={visa} alt="Visa" />
              </div>
              <div className="card-logos">
                <img src={mastercard} alt="Mastercard" />
              </div>
              <div className="card-logos">
                <img src={discover} alt="Discover" />
              </div>
              <div className="card-logos">
                <img src={paypal} alt="PayPal" />
              </div>
              <div className="card-logos">
                <img src={mpesa} alt="Mpesa" style={{ height: " 64px", width: "74px" }} />
              </div>
            </div>
            <div className="fieldset half">
              <div className="field">
                <label htmlFor="full-name">Card Holder Full Name</label>
                <input
                  id="full-name"
                  className="form-control"
                  placeholder="Satoshi Nakamoto"
                  required
                  type="text"
                  value={paymentForm.cardHolderFullName}
                  onChange={e =>
                    setPaymentForm(prev => {
                      return { ...prev, cardHolderFullName: e.target.value };
                    })
                  }
                />
              </div>

              <div className="field">
                <label htmlFor="credit-card-num">Card Number</label>
                <input
                  id="credit-card-num"
                  className="form-control"
                  placeholder="1111-2222-3333-4444"
                  required
                  type="number"
                  value={paymentForm.cardNumber}
                  onChange={e =>
                    setPaymentForm(prev => {
                      return { ...prev, cardNumber: +e.target.value };
                    })
                  }
                />
              </div>
            </div>
            <div>
              <p className="expires">Expires on:</p>
              <div className="card-experation">
                <div className="fieldset quarter">
                  <div className="field">
                    <label htmlFor="expiration-month">Month</label>
                    <select id="expiration-month" style={{ width: "100%" }} className="form-control" required>
                      <option value="">Month:</option>
                      <option value="">January</option>
                      <option value="">February</option>
                      <option value="">March</option>
                      <option value="">April</option>
                      <option value="">May</option>
                      <option value="">June</option>
                      <option value="">July</option>
                      <option value="">August</option>
                      <option value="">September</option>
                      <option value="">October</option>
                      <option value="">November</option>
                      <option value="">Decemeber</option>
                    </select>
                  </div>
                  <div className="field">
                    <label className="expiration-year">Year</label>
                    <select id="experation-year" style={{ width: "100%" }} className="form-control" required>
                      <option value="">Year</option>
                      <option value="">2023</option>
                      <option value="">2024</option>
                      <option value="">2025</option>
                      <option value="">2026</option>
                    </select>
                  </div>
                  <div className="field">
                    <label for="cvv">CVV</label>
                    <input style={{ width: "100%" }} id="cvv" className="form-control" placeholder="415" type="text" required />
                  </div>
                  <div className="field">
                    <Link
                      className="cvv-info"
                      href="https://en.wikipedia.org/wiki/CVV#:~:text=Card%20Verification%20Value%2C%20also%20known,Renaissance%20photographer%20and%20portrait%20artist"
                      target="_blank"
                    >
                      What is CVV?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn" type="submit">
              Pay Now
            </button>
          </form>
          <div>
            <p className="footer-text">
              <FaLock />
              Your credit card information is encrypted
            </p>
          </div>
        </div>
      </div>
      {showPop && (
        <Pop text={"Please fill in the previous forms details before making payments"} okText={"Ok"} yesHandler={okHandler} doNotShowCancel={true} />
      )}
    </div>
  );
};

const jsonObj = (pendingBooking, user, seatsSelected) => {
  return {
    bookingId: pendingBooking._id,
    fullName: user.firstName + " " + user.lastName,
    class: pendingBooking.class,
    passengers: pendingBooking.passengers,
    passengersInfo: pendingBooking.passengersInfo,
    payment: pendingBooking.fare,
    paymentMethod: "VISA",
    seatBooked: seatsSelected,
  };
};

import React from "react";
import paypal from "../../img/paypal.png";
import mastercard from "../../img/mastercard1.png";
import visa from "../../img/visa.png";
import discover from "../../img/discover.png";
import mpesa from "../../img/mpesa.png";



import {
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaLock,
} from "react-icons/fa";

export const Payment = () => {
  return (
    <div className="booking-form">
      <div class="payment-wrapper">
        <div class="tab-wrapper">
          <form
            //  class="form-box"
            enctype="text/plain"
            method="get"
            target="_blank"
          >
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
                <img src={mpesa} alt="Mpesa" 
                style={{height:" 64px", width : "74px"}}/>
              </div>
            </div>
            <div className="fieldset half">
              <div className="field">
                <label for="full-name">Full Name</label>
                <input
                  id="full-name"
                  className="form-control"
                  placeholder="Satoshi Nakamoto"
                  required
                  type="text"
                />
              </div>

              <div className="field">
                <label for="credit-card-num">Card Number</label>
                <input
                  id="credit-card-num"
                  className="form-control"
                  placeholder="1111-2222-3333-4444"
                  required
                  type="text"
                />
              </div>
            </div>
            <div>
              <p class="expires">Expires on:</p>
              <div class="card-experation">
                <div className="fieldset quarter">
                  <div className="field">
                    <label for="expiration-month">Month</label>
                    <select
                      id="expiration-month"
                      style={{ width: "100%" }}
                      className="form-control"
                      required
                    >
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
                    <label class="expiration-year">Year</label>
                    <select
                      id="experation-year"
                      style={{ width: "100%" }}
                      className="form-control"
                      required
                    >
                      <option value="">Year</option>
                      <option value="">2023</option>
                      <option value="">2024</option>
                      <option value="">2025</option>
                      <option value="">2026</option>
                    </select>
                  </div>
                  <div className="field">
                    <label for="cvv">CVV</label>
                    <input
                      style={{ width: "100%" }}
                      id="cvv"
                      className="form-control"
                      placeholder="415"
                      type="text"
                      required
                    />
                  </div>
                  <div className="field">
                    <a class="cvv-info" href="#" target="_blank">
                      What is CVV?
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn">
              Pay Now
            </button>
          </form>
         <div>
         <p class="footer-text">
            <FaLock/>
            Your credit card information is encrypted
          </p>
         </div>
          
        </div>
      </div>
    </div>
  );
};

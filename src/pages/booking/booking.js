import React, { useRef, useState } from "react";
import { FaAddressCard, FaChair, FaMoneyBill, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Payment, SeatSelection, Ticket } from "../../components/Forms";
import { PersonlInfo } from "../../components/Forms/person-info";
import { Header } from "../../components/header/header";
import "../../styles/style.css";

export const BookingPage = () => {
  const flight = useSelector(state => state.bookingReducer.pendingBooking);

  const [selectedTab, setSelectedTab] = useState("psnlInfo");
  const psnlInfoRef = useRef(null);
  const seatSelectRef = useRef(null);
  const paymentRef = useRef(null);
  const flightTicketRef = useRef(null);
  const scrollToSection = (ref, tabId) => {
    // ref.current.scrollIntoView({ behavior: 'smooth', start: 'block' });
    setSelectedTab(tabId);
  };
  return (
    <div className="App">
      <Header />
      <section className="content-wrapper dark">
        <div className="wrapper">
          <div className="booking-widget">
            <div className="booking-tabs" role="tablist">
              <a
                href="#psnlInfo"
                onClick={() => scrollToSection(psnlInfoRef, "psnlInfo")}
                className={selectedTab === "psnlInfo" ? "active  fa fa-user" : "fa fa-user"}
                role="tab"
                aria-controls="psnlInfo"
                aria-selected={selectedTab === "psnlInfo"}
              >
                <span>
                  <FaUser className="user-icon" /> Personal info
                </span>
              </a>
              {flight.passengers > 1 && (
                <a
                  href="#addPassenger"
                  onClick={() => scrollToSection(seatSelectRef, "addPassenger")}
                  className={selectedTab === "addPassenger" ? "active icon-check-in" : "icon-check-in"}
                  role="tab"
                  aria-controls="addPassenger"
                  aria-selected={selectedTab === "addPassenger"}
                >
                  <span>
                    <FaChair className="user-icon" />
                    add Passenger
                  </span>
                </a>
              )}

              <a
                href="#seatSelect"
                onClick={() => scrollToSection(seatSelectRef, "seatSelect")}
                className={selectedTab === "seatSelect" ? "active icon-check-in" : "icon-check-in"}
                role="tab"
                aria-controls="seatSelect"
                aria-selected={selectedTab === "seatSelect"}
              >
                <span>
                  <FaChair className="user-icon" />
                  Seat selection
                </span>
              </a>
              <a
                href="#payment"
                onClick={() => scrollToSection(paymentRef, "payment")}
                className={selectedTab === "payment" ? "active icon-flight-info" : "icon-flight-info"}
                role="tab"
                aria-controls="payment"
                aria-selected={selectedTab === "payment"}
              >
                <span>
                  <FaMoneyBill className="user-icon" />
                  Payment
                </span>
              </a>
              <a
                href="#flightTicket"
                onClick={() => scrollToSection(flightTicketRef, "flightTicket")}
                className={selectedTab === "flightTicket" ? "active icon-manage-booking" : "icon-manage-booking"}
                role="tab"
                aria-controls="flightTicket"
                aria-selected={selectedTab === "flightTicket"}
              >
                <span>
                  <FaAddressCard className="user-icon" />
                  Ticket
                </span>
              </a>
            </div>
            {activeTab(selectedTab, setSelectedTab)}
            <span id="ctl00_ctBody_Web_Content_Home_BookingEngine_ManageMyBooking_ekapi_language"></span>
          </div>
        </div>
      </section>
    </div>
  );
};

const activeTab = (tab, setSelectedTab) => {
  if (tab === "psnlInfo" || tab === "addPassenger") return <PersonlInfo tab={tab} setSelectedTab={setSelectedTab} />;
  else if (tab === "seatSelect") return <SeatSelection setSelectedTab={setSelectedTab} />;
  else if (tab === "payment") return <Payment setSelectedTab={setSelectedTab} />;
  else if (tab === "flightTicket") return <Ticket />;
};

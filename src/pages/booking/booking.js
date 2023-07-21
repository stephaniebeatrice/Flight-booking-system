import React, { useRef, useState } from "react";
import { PersonlInfo } from "../../components/Forms/person-info";
import { Header } from "../../components/header/header";
import { Payment,  Ticket } from "../../components/Forms";
import  SeatSelection  from "../../components/Forms/seat-selection";
import "../../styles/style.css";
import { useSelector } from "react-redux";

export const BookingPage = () => {
  const flight = useSelector(state => state.bookingReducer.pendingBooking);
  console.log("====================slected flight=============================");
  console.log(flight);
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
                className={selectedTab === "psnlInfo" ? "active icon-book-flight" : "icon-book-flight"}
                role="tab"
                aria-controls="psnlInfo"
                aria-selected={selectedTab === "psnlInfo"}
              >
                <span>Personal Info</span>
              </a>
              <a
                href="#seatSelect"
                onClick={() => scrollToSection(seatSelectRef, "seatSelect")}
                className={selectedTab === "seatSelect" ? "active icon-check-in" : "icon-check-in"}
                role="tab"
                aria-controls="seatSelect"
                aria-selected={selectedTab === "seatSelect"}
              >
                <span>Seat Selection</span>
              </a>
              <a
                href="#payment"
                onClick={() => scrollToSection(paymentRef, "payment")}
                className={selectedTab === "payment" ? "active icon-flight-info" : "icon-flight-info"}
                role="tab"
                aria-controls="payment"
                aria-selected={selectedTab === "payment"}
              >
                <span>Payment</span>
              </a>
              <a
                href="#flightTicket"
                onClick={() => scrollToSection(flightTicketRef, "flightTicket")}
                className={selectedTab === "flightTicket" ? "active icon-manage-booking" : "icon-manage-booking"}
                role="tab"
                aria-controls="flightTicket"
                aria-selected={selectedTab === "flightTicket"}
              >
                <span>Ticket</span>
              </a>
            </div>
            {activeTab(selectedTab, psnlInfoRef)}
            <span id="ctl00_ctBody_Web_Content_Home_BookingEngine_ManageMyBooking_ekapi_language"></span>
          </div>
        </div>
      </section>
    </div>
  );
};

const activeTab = (tab, psnlInfoRef) => {
  if (tab === "psnlInfo") return <PersonlInfo psnlInfoRef={psnlInfoRef} />;
  else if (tab === "seatSelect") return <SeatSelection />;
  else if (tab === "payment") return <Payment />;
  else if (tab === "flightTicket") return <Ticket />;
};

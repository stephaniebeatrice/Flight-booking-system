import React, { useRef, useState } from "react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { PersonlInfo } from "../../components/Forms/person-info";
import { Header } from "../../components/header/header";
import "../../styles/style.css";

export const EditForm = () => {
  const flight = useSelector(state => state.bookingReducer.pendingBooking);

  const [selectedTab, setSelectedTab] = useState("psnlInfo");
  const psnlInfoRef = useRef(null);
  const seatSelectRef = useRef(null);
  const scrollToSection = (ref, tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <div className="App">
      <Header />
      <section className="content-wrapper dark">
        <h3>Edit Your Information</h3>
        <div className="wrapper">
          <div className="booking-widget">
            <div className="bookingtabs" role="tablist">
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
              <a
                href="#addPassenger"
                onClick={() => scrollToSection(seatSelectRef, "addPassenger")}
                className={selectedTab === "addPassenger" ? "active icon-check-in" : "icon-check-in"}
                role="tab"
                aria-controls="addPassenger"
                aria-selected={selectedTab === "addPassenger"}
              >
                <span>
                  <FaUserPlus className="user-icon" />
                  Add Passenger
                </span>
              </a>
            </div>
            {activeTab(setSelectedTab, selectedTab)}
            <span id="ctl00_ctBody_Web_Content_Home_BookingEngine_ManageMyBooking_ekapi_language"></span>
          </div>
        </div>
      </section>
    </div>
  );
};

const activeTab = (setSelectedTab, tab) => {
  return <PersonlInfo setSelectedTab={setSelectedTab} tab={tab} action={"edit"} />;
};

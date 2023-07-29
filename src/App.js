import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import { Bookings } from "./pages/Bookings/Bookings";
import { Home } from "./pages/Home/home";
import { SignUp } from "./pages/SignUp.js/SignUp";
import Dashboard from "./pages/admin/components/Dashboard";
import { BookingPage } from "./pages/booking/booking";
import { Application } from "./pages/jobs/apply-page";
import { Jobs } from "./pages/jobs/jobs";
import { Login } from "./pages/login/Login";
import { ticketEditing } from "./pages/admin/ticketEditing";
import { Notification } from "./pages/admin/Notification";
import { EmployeeMatching } from "./pages/admin/employeeMatching";

const App = () => {
  const user = useSelector(state => state.authReducer.user);

  const renderRestrictedComponent = Component => {
    if (user) {
      return <Component />;
    } else {
      // If the user is not logged in, navigate to the home page
      return <Navigate to="/" />;
    }
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Booking" element={<BookingPage />} />

        <Route path="/Admin" element={renderRestrictedComponent(Dashboard)} />
        <Route path="/TicketEdit" element={renderRestrictedComponent(ticketEditing)} />
        <Route path="/Notification" element={renderRestrictedComponent(Notification)} />
        <Route path="/employeeMatching" element={renderRestrictedComponent(EmployeeMatching)} />
        <Route path="/Jobs" element={renderRestrictedComponent(Jobs)} />
        <Route path="/Apply" element={renderRestrictedComponent(Application)} />
        <Route path="/Bookings" element={renderRestrictedComponent(Bookings)} />
      </Routes>
    </Router>
  );
};

export default App;

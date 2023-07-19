import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { BookingPage } from "./pages/booking/booking";
import { Home } from "./pages/Home/home";
import { Profile } from "./pages/profile/profile";
import { Admin } from "./pages/admin/admin";
import { Jobs } from "./pages/jobs/jobs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<BookingPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
}
export default App;

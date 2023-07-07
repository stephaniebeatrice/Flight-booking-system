import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { connect } from "react-redux";
import "./App.css";
import { getFlights } from "./actions";

import { BookingPage } from "./pages/booking/booking";
import { Home } from "./pages/Home/home";
function App(props) {
  useEffect(() => {
    props.getFlights();
  }, [props]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = state => ({
  flights: state.flights,
  routes: state.routes,
  filters: state.filters,
});

const mapDispatchToProps = {
  getFlights,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

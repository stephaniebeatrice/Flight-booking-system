import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlightInfo from "../../components/flight-info/flight-info";
import SearchForm from "../../container/search-form/search-form";
import image from "../../img/homepage.jpg";
import "./style.css";
import { Header } from "../../components/header/header";

export const Home = () => {
  const [flights, setFlights] = useState([]);
  console.log("========================FLIGHTS================");
  console.log(flights);
  return (
    <div className="App">
      <Header />
      <section className="Main-container" style={{ backgroundImage: `url(${image})`, backgroundPosition: "center" }}>
        <div className="search-flight">
          <p>Search Flight</p>
        </div>
        <aside className="Search-section">
          <SearchForm setFlights={setFlights} />
        </aside>
      </section>
      {/* <section className="Results-section"><FlightInfo /></section> */}
    </div>
  );
};

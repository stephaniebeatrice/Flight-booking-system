import React from "react";
import SearchForm from "../../container/search-form/search-form";
import { Link } from "react-router-dom";
import image from "../../img/homepage.jpg";
import FlightsGrid from "../../components/flights-grid/flights-grid";
export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          <Link to={"/Booking"}>Flight Booking System</Link>
        </h2>
      </header>
      <div className="Login">
        <p>Login</p>
      </div>
      <section className="Main-container" style={{ backgroundImage: `url(${image})` }}>
        <div className="search-flight">
          <p>Search Flight</p>
        </div>
        <aside className="Search-section">
          <SearchForm />
        </aside>

        <section className="Results-section">
          {<FlightsGrid></FlightsGrid>}
          {<FlightsGrid></FlightsGrid>}
        </section>
      </section>
    </div>
  );
};

import React from "react";
import SearchForm from "../../container/search-form/search-form";
import FlightsGrid from "../../components/flights-grid/flights-grid";
import { Link } from "react-router-dom";
// import image from "../img/homepage.jpg";
export const Home = props => {
  const { origin, destination, departureDate, returnDate } = props.filters || {};
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
      <section className="Main-container" style={{}}>
        <div className="search-flight">
          <p>Search Flight</p>
        </div>
        <aside className="Search-section">
          <SearchForm />
        </aside>

        <section className="Results-section">
          {props.routes && props.routes.onwards && (
            <FlightsGrid flights={props.routes.onwards} criteria={{ origin, destination, date: departureDate }}></FlightsGrid>
          )}
          {props.routes && props.routes.return && (
            <FlightsGrid
              flights={props.routes.return}
              criteria={{
                origin: destination,
                destination: origin,
                date: returnDate,
              }}
            ></FlightsGrid>
          )}
        </section>
      </section>
    </div>
  );
};

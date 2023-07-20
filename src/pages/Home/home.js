import React, { useState } from "react";
import { Header } from "../../components/header/header";
import SearchForm from "../../container/search-form/search-form";
import image from "../../img/homepage.jpg";
import "./style.css";

export const Home = () => {
  const [flights, setFlights] = useState([]);
  console.log("========================FLIGHTS================");
  console.log(flights);
  return (
    <div className="App">
      <Header />
      <section className="Main-container" style={{ backgroundImage: `url(${image})`, backgroundPosition: "center" }}>
        <aside className="Search-section">
          <div className="search-flight">
            <p style={{ textAlign: "left", marginLeft: "8rem" }}>Search Flight</p>
          </div>
          <SearchForm setFlights={setFlights} />
        </aside>
      </section>
    </div>
  );
};

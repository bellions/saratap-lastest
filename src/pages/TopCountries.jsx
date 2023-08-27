import React from "react";
import Country from "../scenes/Country";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";

function TopCountries() {
  return (
    <div className="App bg-primary-100">
      <Navbar />
      <Country />
      <Footer />
    </div>
  );
}

export default TopCountries;

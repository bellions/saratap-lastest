import React from "react";
import Navbar from "../scenes/Navbar";
import Contact from "../scenes/Contact";
import Footer from "../scenes/Footer";

function ContactNow() {
  return (
    <div className="App bg-primary-100">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactNow;

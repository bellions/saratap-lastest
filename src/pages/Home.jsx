import About from "../scenes/About";
import Countries from "../scenes/Countries";
import Ceo from "../scenes/Ceo";
import Hero from "../scenes/Hero";
import Navbar from "../scenes/Navbar";
import Footer from "../scenes/Footer";
import Features from "../scenes/Features";
import Footery from "../forms/Requote";

const Home = () => {
  return (
    <div className="App bg-primary-100">
      <Navbar />
      <Hero />
      <Features />
      <Countries />
      <About />
      <Ceo />
      <Footery />
      <Footer />
    </div>
  );
};

export default Home;

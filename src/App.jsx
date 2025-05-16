import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import UpcomingEvents from "./components/UpcomingEvents";
import HowItWorks from "./components/HowItWorks";
import TopVolunteers from "./components/TopVolunteers";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Benefits />
      <UpcomingEvents />
      <HowItWorks />
      <TopVolunteers />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;

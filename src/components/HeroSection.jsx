import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/hero-main.jpg'; // Adjust the path to your image

const HeroSection = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <h1 className="hero-title">Make a Difference in Your Community</h1>
        <p className="hero-description">
          Join VolunBee and discover meaningful volunteer opportunities that match your interests while boosting your social GPA.
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Browse Events</button>
          <button className="btn outline">Learn More</button>
        </div>
        <div className="hero-stats">
          <div className="stat-box">
            <p className="stat-value">500+</p>
            <p className="stat-label">Active Volunteers</p>
          </div>
          <div className="stat-box">
            <p className="stat-value">50+</p>
            <p className="stat-label">Monthly Events</p>
          </div>
          <div className="stat-box">
            <p className="stat-value">1000+</p>
            <p className="stat-label">Hours Contributed</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Volunteering" />
      </div>
    </section>
  );
};

export default HeroSection;

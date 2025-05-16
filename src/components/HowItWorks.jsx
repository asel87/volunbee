import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Create an account & complete your profile to start your volunteer journey",
  },
  {
    number: "2",
    title: "Find an Opportunity",
    description: "Browse through available events that match your interests",
  },
  {
    number: "3",
    title: "Join & Participate",
    description: "Contribute to meaningful causes and earn social GPA points",
  },
  {
    number: "4",
    title: "Track Your Impact",
    description: "Monitor your progress and collect achievement certificates",
  },
];

const HowItWorks = () => (
  <section className="how-it-works">
    <h2 className="how-it-works__title">How It Works</h2>
    <div className="how-it-works__steps">
      {steps.map((step) => (
        <div key={step.number} className="how-it-works__step-card">
          <div className="how-it-works__step-number">{step.number}</div>
          <h3 className="how-it-works__step-title">{step.title}</h3>
          <p className="how-it-works__step-desc">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;

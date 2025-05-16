import React from "react";
import "./Benefits.css";

// Example imports for images - adjust the paths after you add your images
import scheduleIcon from '../assets/clock.png';
import gpaIcon from '../assets/gpa.png';
import impactIcon from '../assets/impact.png';


const benefits = [
  {
    title: "Flexible Schedule",
    text: "Choose events that fit your schedule and interests.",
    icon: scheduleIcon,
  },
  {
    title: "GPA Benefits",
    text: "Earn social GPA points for your volunteer work.",
    icon: gpaIcon,
  },
  {
    title: "Community Impact",
    text: "Make real change in your university community.",
    icon: impactIcon,
  },
];

const Benefits = () => (
  <section className="benefits-container">
    {benefits.map((b, i) => (
      <div key={i} className="benefit-box">
        <img src={b.icon} alt={b.title} className="benefit-icon" />
        <h3 className="benefit-title">{b.title}</h3>
        <p className="benefit-description">{b.text}</p>
      </div>
    ))}
  </section>
);

export default Benefits;

import React from "react";
import "./UpcomingEvents.css";
import cleanupImg from "../assets/cleanup.jpg";
import libraryImg from "../assets/library.jpg";
import sportsImg from "../assets/sports.jpg";

const events = [
  {
    title: "Campus Clean-up Drive",
    date: "Oct 15, 2023 • 10:00 AM",
    location: "Campus Center",
    gpa: "+0.2 GPA",
    tags: ["Environmental", "Outdoors"],
    perks: ["Free Lunch + T-shirt"],
    image: cleanupImg,
  },
  {
    title: "Library Book Drive",
    date: "Oct 20, 2023 • 2:00 PM",
    location: "University Library",
    gpa: "+0.3 GPA",
    tags: ["Education", "Community"],
    perks: ["Certificate + Refreshments"],
    image: libraryImg,
  },
  {
    title: "Youth Sports Day",
    date: "Oct 25, 2023 • 9:00 AM",
    location: "Sports Complex",
    gpa: "+0.2 GPA",
    tags: ["Sports", "Youth"],
    perks: ["Sports Kit + Meals"],
    image: sportsImg,
  },
];

const UpcomingEvents = () => (
  <section className="upcoming-events">
    <h2 className="upcoming-events__title">Upcoming Events</h2>
    <div className="upcoming-events__list">
      {events.map((event, index) => (
        <article key={index} className="event-card">
          <img
            src={event.image}
            alt={event.title}
            className="event-card__image"
            loading="lazy"
          />
          <div className="event-card__header">
            <h3 className="event-card__title">{event.title}</h3>
            <span className="event-card__gpa">{event.gpa}</span>
          </div>
          <p className="event-card__datetime">{event.date}</p>
          <p className="event-card__location">{event.location}</p>
          <div className="event-card__tags">
            {event.tags.map((tag, i) => (
              <span key={i} className="event-card__tag">{tag}</span>
            ))}
          </div>
          <ul className="event-card__perks">
            {event.perks.map((perk, i) => (
              <li key={i}>{perk}</li>
            ))}
          </ul>
          <button
            className="event-card__button"
            aria-label={`View details for ${event.title}`}
          >
            View Details
          </button>
        </article>
      ))}
    </div>
  </section>
);

export default UpcomingEvents;

import React from "react";
import "./TopVolunteers.css";

const volunteers = [
  {
    rank: 1,
    name: "Ospanova Tomiris",
    badge: "Gold",
    gpa: 4.8,
    hours: 150,
    events: 12,
    major: "Environmental Science Major",
    tags: ["Environmental", "Education", "Community"],
    quote:
      "Volunteering has given me the opportunity to make a real difference while meeting amazing people.",
  },
  {
    rank: 2,
    name: "Turgarayeva Merey",
    badge: "Silver",
    gpa: 4.5,
    hours: 120,
    events: 10,
  },
  {
    rank: 3,
    name: "Aspandiyar Assel",
    badge: "Bronze",
    gpa: 4.2,
    hours: 100,
    events: 8,
  },
];

const badgeColors = {
  Gold: "#FFD700",
  Silver: "#C0C0C0",
  Bronze: "#CD7F32",
};

const TopVolunteers = () => {
  const mainVolunteer = volunteers[0];

  return (
    <section className="top-volunteers">
      <div className="titles-row">
        <h2 className="title">Top Volunteers</h2>
        <h2 className="volunteer-month-title">Volunteer of the Month</h2>
      </div>

      <div className="list-and-highlight">
        <ol className="volunteer-list">
          {volunteers.map(({ rank, name, badge, gpa, hours, events }) => (
            <li key={rank} className="volunteer-item">
              <div className="rank">{rank}</div>
              <div className="avatar" aria-label={`${name} avatar`} />
              <div className="info">
                <div className="name">{name}</div>
                <div className="hours-events">
                  {hours} Hours &bull; {events} Events
                </div>
              </div>
              <div
                className="badge"
                style={{ backgroundColor: badgeColors[badge] }}
                title={badge}
              >
                {badge}
              </div>
              <div className="gpa">{gpa.toFixed(1)}</div>
            </li>
          ))}
        </ol>

        <aside className="volunteer-highlight">
          <h3 className="highlight-name">{mainVolunteer.name}</h3>
          <p className="highlight-major">{mainVolunteer.major}</p>
          <div className="highlight-stats">
            <div className="highlight-hours">
              <span className="number">{mainVolunteer.hours}</span>
              <span className="label">Hours</span>
            </div>
            <div className="highlight-events">
              <span className="number">{mainVolunteer.events}</span>
              <span className="label">Events</span>
            </div>
          </div>
          <div className="highlight-tags">
            {mainVolunteer.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <blockquote className="quote">"{mainVolunteer.quote}"</blockquote>
        </aside>
      </div>
    </section>
  );
};

export default TopVolunteers;

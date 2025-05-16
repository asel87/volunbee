// FAQ.jsx
import React from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How do I increase my social GPA?",
    answer:
      "Participate in events to earn points. Each volunteer hour contributes to your social GPA, with bonus points awarded for leadership roles and organizing events.",
  },
  {
    question: "How do I track my volunteer hours?",
    answer:
      "Hours are automatically logged when you check in/out at events. View your total hours, certificates, and impact in your profile dashboard.",
  },
  {
    question: "What rewards can I earn?",
    answer:
      "Earn VolunBee merch, certificates, free meals at events, and recommendation letters. Top volunteers receive special recognition and networking opportunities.",
  },
  {
    question: "What types of events are available?",
    answer:
      "We offer environmental projects, educational programs, community service, food drives, mentoring, and special campus events.",
  },
];

const FAQ = () => (
  <section className="faq-container">
    <h2 className="faq-title">Frequently Asked Questions</h2>
    <div className="faq-box">
      {faqs.map(({ question, answer }, i) => (
        <div key={i} className="faq-item">
          <h3 className="faq-question">{question}</h3>
          <p className="faq-answer">{answer}</p>
          <hr />
        </div>
      ))}
      <div className="faq-footer">
        <p className="faq-footer-title">Still have questions?</p>
        <p className="faq-footer-subtitle">Contact our support team for assistance</p>
        <button className="faq-contact-btn">Contact Support</button>
      </div>
    </div>
  </section>
);

export default FAQ;

import React, { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      setSubmitted(true);
      setMessage("");
    }
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            cols={40}
          />
          <br />
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <p>Thank you! Your message has been sent.</p>
      )}
    </div>
  );
}

export default Contact;

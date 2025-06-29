import React, { useState } from 'react';
import './css/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const api = import.meta.env.VITE_API_BASE_URL;

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch(`${api}/api/contacts`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      {success && <p className="success-message">Your message has been sent!</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;

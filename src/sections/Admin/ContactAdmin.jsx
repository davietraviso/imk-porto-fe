import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ContactAdmin.css';
import { useNavigate } from 'react-router-dom';

const ContactAdmin = () => {
  const api = import.meta.env.VITE_API_BASE_URL;
  const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${api}/api/contacts`)
      .then((res) => setMessages(res.data))
      .catch((err) => console.error('Error fetching contacts', err));
  }, []);

  return (
    <div className="contacts-admin">
      <h1>Contact Messages</h1>
      <ul className="contact-list">
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.name}</strong> ({msg.email}):<br />
            <span>{msg.message}</span>
          </li>
        ))}
      </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button style={{ backgroundColor:'grey'}} onClick={() => navigate('/admin/dashboard')}>Back</button>
        </div>
    </div>
  );
};

export default ContactAdmin;

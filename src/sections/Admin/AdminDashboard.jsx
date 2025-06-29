import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  return (
    <div className="admin-dashboard body">
      <div className="admin-sidebar"> 
        <h2>Admin Panel</h2>
        <ul>
          <li onClick={() => navigate('/admin/landing')}>Edit Landing Page</li>
          <li onClick={() => navigate('/admin/projects')}>Manage Projects</li>
          <li onClick={() => navigate('/admin/articles')}>Manage Articles</li>
          <li onClick={() => navigate('/admin/contacts')}>View Messages</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>

      <div className="admin-content">
        <h1>Welcome, Admin!</h1>
        <p>Select an option from the menu.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;

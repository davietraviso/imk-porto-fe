import React from 'react';
import { Link } from 'react-router-dom';
import '../../sections/css/AdminSidebar.css'; // Optional: for styling

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li><Link to="/admin/landing">Landing</Link></li>
          <li><Link to="/admin/projects">Projects</Link></li>
          <li><Link to="/admin/articles">Articles</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;

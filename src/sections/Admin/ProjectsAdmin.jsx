import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ProjectsAdmin.css';
import { useNavigate } from 'react-router-dom';

const ProjectsAdmin = () => {
  const api = import.meta.env.VITE_API_BASE_URL;
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    link: ''
  });
  const [status, setStatus] = useState('');
    const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${api}/api/projects`);
      setProjects(res.data);
    } catch (err) {
      console.error('Failed to fetch projects:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      await axios.post(`${api}/api/projects`, formData);
      setStatus('✔️ Project added!');
      setFormData({ title: '', description: '', image: '', link: '' });
      fetchProjects();
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to add project.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api}/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  return (
    <div className="projects-admin">
      <h1>Manage Projects</h1>
      {status && <p className="status-msg">{status}</p>}

      <div className="add-project-form">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image filename (e.g., lyra.png)" value={formData.image} onChange={handleChange} />
        <input type="text" name="link" placeholder="Project Link" value={formData.link} onChange={handleChange} />
        <button onClick={handleAdd}>Add Project</button>
      </div>

      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.title}</strong> - {project.description}
            <button onClick={() => handleDelete(project.id)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button style={{ backgroundColor:'grey'}} onClick={() => navigate('/admin/dashboard')}>Back</button>

        </div>
    </div>
  );
};

export default ProjectsAdmin;

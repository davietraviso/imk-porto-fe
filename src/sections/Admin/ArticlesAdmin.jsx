import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ArticlesAdmin.css';
import { useNavigate } from 'react-router-dom';

const ArticlesAdmin = () => {
  const api = import.meta.env.VITE_API_BASE_URL;
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    image: '',
    referenceLink: '',
    referenceTitle: '',
    referenceDescription: '',
    referenceImage: ''
  });
  const [status, setStatus] = useState('');
    const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await axios.get(`${api}/api/articles`);
      setArticles(res.data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAdd = async () => {
    try {
      await axios.post(`${api}/api/articles`, formData);
      setStatus('✔️ Article added!');
      setFormData({ title: '', summary: '', content: '' });
      fetchArticles();
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to add article.');
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api}/api/articles/${id}`);
      fetchArticles();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };


  return (
    <div className="articles-admin">
      <h1>Manage Articles</h1>
      {status && <p className="status-msg">{status}</p>}

      <div className="add-article-form">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <input type="text" name="summary" placeholder="Summary" value={formData.summary} onChange={handleChange} />
        <input
          type="text"
          name="image"
          placeholder="Image filename (e.g., article1.jpg)"
          value={formData.image}
          onChange={handleChange}
        />
        <textarea name="content" placeholder="Content..." value={formData.content} onChange={handleChange}></textarea>
        <input
          type="text"
          name="referenceLink"
          placeholder="Reference URL"
          value={formData.referenceLink || ''}
          onChange={handleChange}
        />

        <input
          type="text"
          name="referenceTitle"
          placeholder="Reference Title"
          value={formData.referenceTitle || ''}
          onChange={handleChange}
        />

        <input
          type="text"
          name="referenceDescription"
          placeholder="Reference Description"
          value={formData.referenceDescription || ''}
          onChange={handleChange}
        />

        <input
          type="text"
          name="referenceImage"
          placeholder="Reference Image Path (e.g., /assets/thumb.jpg)"
          value={formData.referenceImage || ''}
          onChange={handleChange}
        />

        <button onClick={handleAdd}>Add Article</button>
      </div>

      <ul className="article-list">
        {articles.map((a) => (
          <li key={a.id}>
            <strong>{a.title}</strong> - {a.summary}
            <button onClick={() => handleDelete(a.id)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button style={{ backgroundColor:'grey'}} onClick={() => navigate('/admin/dashboard')}>Back</button>

      </div>
    </div>
  );
};

export default ArticlesAdmin;

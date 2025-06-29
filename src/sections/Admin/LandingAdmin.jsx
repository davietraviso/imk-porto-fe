import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/LandingAdmin.css';
import { useNavigate } from 'react-router-dom';

const LandingAdmin = () => {
  const [landingData, setLandingData] = useState(null);
  const [status, setStatus] = useState('');
  const api = import.meta.env.VITE_API_BASE_URL;

  const navigate = useNavigate();

  useEffect(() => {
  axios.get(`${api}/api/landing`)
    .then((res) => {
      const data = res.data;

      // ✅ Ensure skills is always an array
      if (typeof data.skills === 'string') {
        try {
          data.skills = JSON.parse(data.skills);
        } catch (err) {
          data.skills = [];
        }
      }

      setLandingData(data);
    });
}, []);


  const handleChange = (e) => {
    setLandingData({ ...landingData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (idx, field, value) => {
    const updatedSkills = [...landingData.skills];
    updatedSkills[idx][field] = value;
    setLandingData({ ...landingData, skills: updatedSkills });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
      ...landingData,
      skills: JSON.stringify(landingData.skills),
      };

      await axios.put(`${api}/api/landing/${landingData.id}`, payload);
      setStatus('✔️ Successfully updated!');
    } catch (error) {
      console.error(error);
      setStatus('❌ Update failed.');
    }
  };

  if (!landingData) return <p>Loading...</p>; 

  


  return (
    
    <>
      <div className="landing-admin">
        <h1>Edit Landing Page</h1>
        
        {status && <p className="status-msg">{status}</p>}
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input name="title" value={landingData.title} onChange={handleChange} />

          <label>Subtitle</label>
          <input name="subtitle" value={landingData.subtitle} onChange={handleChange} />

          <label>Description</label>
          <textarea name="description" value={landingData.description} onChange={handleChange} />

          <label>GitHub</label>
          <input name="github" value={landingData.github} onChange={handleChange} />

          <label>LinkedIn</label>
          <input name="linkedin" value={landingData.linkedin} onChange={handleChange} />

          <label>X (Twitter)</label>
          <input name="xdotcom" value={landingData.xdotcom} onChange={handleChange} />

          <label>YouTube</label>
          <input name="youtube" value={landingData.youtube} onChange={handleChange} />

          <label>Resume Link</label>
          <input name="resumeLink" value={landingData.resumeLink} onChange={handleChange} />

          <h2>Skills</h2>
          {landingData.skills.map((skill, idx) => (
            <div key={idx} className="skill-input-group">
              <input
                value={skill.name}
                onChange={(e) => handleSkillChange(idx, 'name', e.target.value)}
                placeholder="Skill Name"
              />
              <input
                value={skill.level}
                onChange={(e) => handleSkillChange(idx, 'level', e.target.value)}
                placeholder="Level (e.g., 80%)"
              />
            </div>
          ))}

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button type="submit">Save Changes</button>
            <button style={{ backgroundColor:'grey'}} onClick={() => navigate('/admin/dashboard')}>Back</button>

          </div>

        </form>
      </div>
    
    </>
  );
};

export default LandingAdmin;

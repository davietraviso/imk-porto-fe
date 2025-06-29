import { useEffect, useState } from 'react';
import axios from 'axios';

// Main
import styles_main from './Foto/MainStyles.module.css';
import mainImg from '../assets/me.png';
import xdotcomIcon from '../assets/twitter-dark.svg';
import githubIcon from '../assets/github-dark.svg';
import linkedinIcon from '../assets/linkedin-dark.svg';
import youtubeIcon from '../assets/youtube-dark.svg';
import CV from '../assets/cv.pdf';

// Tentang
import './Tentang Saya/tentangstyle.css';

// Proyek
import styles_proyek from './Proyek/ProyekStyles.module.css';
import paa from '../assets/map.png';
import grafika from '../assets/3d.png';
import sfm from '../assets/sfm.jpg'; 
import lyra from '../assets/lyra.png';
import Cardd from '../common/Cardd';

// Skills
import './Skill/skillstyles.css';

// Kontak
import styles_kontak from './Kontak/KontakStyles.module.css';

import Footer from './Footer/Footer'


function LandingPage() { 

  const [landingData, setLandingData] = useState(null);
  const api = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios.get(`${api}/api/landing`)
      .then(res => setLandingData(res.data))
      .catch(err => console.error('Failed to fetch landing content:', err));
  }, []);

  let parsedSkills = [];

  if (landingData?.skills) {
    if (Array.isArray(landingData.skills)) {
      parsedSkills = landingData.skills;
    } else if (typeof landingData.skills === 'string') {
      try {
        parsedSkills = JSON.parse(landingData.skills);
        if (!Array.isArray(parsedSkills)) {
          parsedSkills = [];
        }
      } catch (e) {
        console.error("Failed to parse landingData.skills:", e);
        parsedSkills = [];
      }
    }
  }


  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${api}/api/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.error("Error loading projects", err));
  }, []);






  return (
    <>
        {/* <Main/> */}
        <section id="main" className={styles_main.container}> 
          <div className={styles_main.colorModeContainer}>
              <img className={styles_main.Main} 
              src={mainImg} 
              alt="Foto profil Dave Travis" />
          </div>
          <div className={styles_main.informasi}>
              <h1>{landingData?.title || 'Dave Travis'}</h1>
              <h2>{landingData?.subtitle || 'Art Enthusiast'}</h2>
              <span>
                  <a href={landingData?.xdotcom} target="_blank">
                    <img src={xdotcomIcon} alt="Xdotcom" />
                  </a>
                  <a href={landingData?.github} target="_blank">
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  <a href={landingData?.linkedin} target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                  <a href={landingData?.youtube} target="_blank">
                    <img src={youtubeIcon} alt="YouTube" />
                  </a>

              </span>
              <p className={styles_main.description}>
                {landingData?.description || 'Default description...'}
              </p>
              <a href={landingData?.resumeLink || '/assets/cv.pdf'} download>
                <button className="hover">Resume</button>
              </a>
          </div>
        </section>

        {/* <Tentang/> */}
        <section className="about_section" id="about">
          <h1 className="section_tittle">
          Tentang Saia
          </h1>
          <p className="section_subtitle">Perkenalkan</p>

          <div className="about_container container grid">
            <div className="about_data">
                {/* <Info /> */}
                <div className="about_info grid about_icon">
                  <div className="about_box">
                  <i class='bx bx-award'></i>
                    <h3 className="about_title">Pengalaman</h3>
                    <span>{landingData?.pengalaman}</span>
                  </div>

                  <div className="about_box">
                  <i class='bx bx-briefcase-alt'></i>
                    <h3 className="about_title">Proyek</h3>
                    <span>{landingData?.proyekCount}</span>
                  </div>

                  <div className="about_box">
                  <i class='bx bx-support'></i>
                    <h3 className="about_title">Komunikasi</h3>
                    <span>{landingData?.layanan}</span>
                  </div>
                </div>

                <p>{landingData?.tentangText}</p>

            </div>
          </div>
        </section>

        {/* <Proyek/> */}
        <section id="proyek" className={styles_proyek.container}>
          <h1 className="section_title">Proyek-proyek</h1>
          <p className="section_subtitle">What I do so far</p>

          <div className={styles_proyek.proyekContainer}>
            {projects.map((proj, idx) => (
              <Cardd
                key={idx}
                src={proj.image}
                link={proj.link}
                h3={proj.title}
                p={proj.description}
              />
            ))}
          </div>
        </section>

        {/* <section id="proyek"
        className={styles_proyek.container}>
            <h1 className="section_title">Proyek-proyek</h1>
            <p className="section_subtitle">What I do so far</p>
            <div className={styles_proyek.proyekContainer}>
                <Cardd src={paa} 
                link='https://github.com/Afiefanugrah/PAA_Random_Map' 
                h3="Map Generator"
                p="Python Coded Randomized Map" />

                <Cardd src={grafika} 
                link='https://github.com/davietraviso/Grafika_Komputer_3D-World' 
                h3="3D World"
                p="Python Coded 3D Graphic World" />
    
                <Cardd src={sfm} 
                link='https://www.youtube.com/watch?v=HWI7znEBKmc' 
                h3="SFM Movie"
                p="Music Video Animation" />

                <Cardd src={lyra} 
                link='https://www.youtube.com/watch?v=qLplS5ta0jw' 
                h3="Cartoon Animation"
                p="Flash Fanmade Animated Cartoon" />
            </div>
          
        </section> */}


        {/* <Skills/> */}
        <section className="skills_section" id="skills">
          <h1 className="section_title">Kemampuan</h1>
          <p className="section_subtitle">What I bring to the table</p>

          <div className="skills_container">
            {parsedSkills.map((skill, idx) => (
              <div className="skill_item" key={idx}>
                <h3 className="skill_name">{skill.name}</h3>
                <div className="skill_bar">
                  <div
                    className="skill_progress"
                    style={{
                      width: skill.level,
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}

          </div>
        </section>


        {/* <Kontak/> */}
        {/* <section id="kontak" className={styles_kontak.container}>
          <h1 className="sectionTitle">Hubungi Saya</h1>
          <form action="">
              <div className="formGroup" >
                  <label htmlFor="nama" hidden>
                      Nama
                  </label>
                  <input 
                  type="text"
                  name="nama"
                  id="nama"
                  placeholder="Nama"
                  required />
              </div>
  
              <div className="formGroup" >
                  <label htmlFor="email" hidden>
                      Email
                  </label>
                  <input 
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required />
              </div>
  
              <div className="formGroup" >
                  <label htmlFor="pesan" hidden>
                      Pesan
                  </label>
                  <textarea 
                  type="message"
                  name="pesan"
                  id="pesan"
                  placeholder="Pesan"
                  required />
              </div>
              <input className="hover btn" type="submit" value="Submit" />
          </form>
        </section> */}

        <Footer/>
    </>
  )
}

export default LandingPage
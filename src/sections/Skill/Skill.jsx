import './skillstyles.css';

const Skills = () => {
  return (
    <section className="skills_section" id="skills">
      <h1 className="section_title">Kemampuan</h1>
      <p className="section_subtitle">What I bring to the table</p>

      <div className="skills_container">
        <div className="skill_item">
          <h3 className="skill_name">JavaScript</h3>
          <div className="skill_bar">
            <div className="skill_progress javascript_progress"></div>
          </div>
        </div>

        <div className="skill_item">
          <h3 className="skill_name">ReactJS</h3>
          <div className="skill_bar">
            <div className="skill_progress reactjs_progress"></div>
          </div>
        </div>

        <div className="skill_item">
          <h3 className="skill_name">CSS</h3>
          <div className="skill_bar">
            <div className="skill_progress css_progress"></div>
          </div>
        </div>

        <div className="skill_item">
          <h3 className="skill_name">Animation</h3>
          <div className="skill_bar">
            <div className="skill_progress nodejs_progress"></div>
          </div>
        </div>

        <div className="skill_item">
          <h3 className="skill_name">UI/UX Design</h3>
          <div className="skill_bar">
            <div className="skill_progress design_progress"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

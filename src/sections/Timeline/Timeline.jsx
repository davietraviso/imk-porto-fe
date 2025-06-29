import './timelinestyle.css';

const Timeline = () => {
  return (
    <div className="timeline">

      <div className="timeline_event">
        <div className="timeline_dot"></div>
        <div className="timeline_content">
          <h3 className="timeline_year">2022</h3>
          <p className="timeline_description">Memulai kuliah di Universitas Maritim Raja Ali Haji.</p>
        </div>
      </div>

      <div className="timeline_event">
        <div className="timeline_dot"></div>
        <div className="timeline_content">
          <h3 className="timeline_year">2023</h3>
          <p className="timeline_description">Membuat 2 proyek animasi pertama.</p>
        </div>
      </div>

      <div className="timeline_event">
        <div className="timeline_dot"></div>
        <div className="timeline_content">
          <h3 className="timeline_year">2024</h3>
          <p className="timeline_description">Mendapatkan tugas pengerjaan 2 aplikasi kodingan.</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

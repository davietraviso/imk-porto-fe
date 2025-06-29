import Info from './Info.jsx';
import './tentangstyle.css';

function Tentang() {
  return (
    <section className="about_section" id="about">
        <h1 className="section_tittle">
        Tentang Saia
        </h1>
        <p className="section_subtitle">Perkenalkan</p>

        <div className="about_container container grid">
            <div className="about_data">
                <Info />

                <p className="about_description">
                    Seorang penyuka seni yang menempuh jalan hidup sebagai seorang Engineer dalam konsep bidang IT. <br />
                    Memiliki ketertarikan pada dunia seni dan juga desain. <br />
                    Mencoba untuk menikmati hidup selagi bisa.
                </p>

            </div>
        </div>
    </section>
  )
}
 
export default Tentang
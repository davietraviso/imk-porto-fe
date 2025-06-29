import styles_proyek from './ProyekStyles.module.css';
import paa from '../../assets/map.png';
import grafika from '../../assets/3d.png';
import sfm from '../../assets/sfm.jpg';
import lyra from '../../assets/lyra.png';
import Cardd from '../../common/Cardd';

function Proyek() {
  return (
    <section id="proyek"
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
       
    </section>
  )
}

export default Proyek
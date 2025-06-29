import styles_main from './MainStyles.module.css';
import mainImg from '../../assets/me.png';
import xdotcomIcon from '../../assets/twitter-dark.svg';
import githubIcon from '../../assets/github-dark.svg';
import linkedinIcon from '../../assets/linkedin-dark.svg';
import youtubeIcon from '../../assets/youtube-dark.svg';
import CV from '../../assets/cv.pdf';

function Main() {
  return (
  <section id="main" className={styles_main.container}> 
    <div className={styles_main.colorModeContainer}>
        <img className={styles_main.Main} 
        src={mainImg} 
        alt="Foto profil Dave Travis" />
    </div>
    <div className={styles_main.informasi}>
        <h1>Dave <br/> Travis</h1>
        <h2>Art Enthusiast</h2>
        <span>
            <a href="https:/x.com/racapinang" target="_blank">
                <img src={xdotcomIcon} alt="Ikon Xdotcom" />
            </a>
            <a href="https://github.com/davietraviso" target="_blank">
                <img src={githubIcon} alt="Ikon GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/dave-travis-9777b3172/" target="_blank">
                <img src={linkedinIcon} alt="Ikon LinkedIn" />
            </a>
            <a href="https://www.youtube.com/@racapinang/" target="_blank">
                <img src={youtubeIcon} alt="Ikon YouTube" />
            </a>
        </span>
        <p className={styles_main.description}>
            Music lovers, reader & art creator.
            <br /> <br />
            Favourite quote: <br />
            "Dear journal, when did music begin? Did it begin with a question? Or an exclamation?" <br />
        </p>
        <a href={CV} download>
            <button className="hover" >Resume</button>
        </a>
    </div>
  </section>
  );
}

export default Main;
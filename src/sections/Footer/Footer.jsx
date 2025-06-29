import styles_footer from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className = {styles_footer.container}> 
        <p> &copy; Dave (Davey) Traviso == 2024 <br />
        Hak Cipta</p>
    </section>
  )
}

export default Footer
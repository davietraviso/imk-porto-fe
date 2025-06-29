import styles_kontak from './KontakStyles.module.css';

function Kontak() {
  return (
    <section id="kontak" className={styles_kontak.container}>
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
    </section>
  )
}

export default Kontak
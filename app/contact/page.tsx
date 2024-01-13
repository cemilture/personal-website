import Image from "next/image";
import styles from "./contact.module.css";
import Link from "next/link";
import qrcodewa from "./qrwhatsapp.png";
import qrcodeli from "./linkedin.png";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact</h1>
      <div style={{ display: "flex" }}>
        <div className={styles.contactInfo}>
          <div>
            <h2>
              Scan or click and contact me on <em>Whatsapp</em>
            </h2>
            <Link
              href="https://wa.me/905516481009"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={qrcodewa}
                width={350}
                alt="Cemil Türe Whatsapp QR Code"
              />
            </Link>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <div>
            <h2>
              Scan or click and contact me on <em>Linkedin</em>
            </h2>
            <Link
              href="https://www.linkedin.com/in/cemilture"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={qrcodeli}
                width={400}
                alt="Cemil Türe LinkedIn QR Code"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59267.00015759895!2d29.364397532595756!3d38.675591020876126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c87fd9700e8031%3A0xe9e1c5b72df9bba3!2zVcWfYWssIFXFn2FrIE1lcmtlei9VxZ9haw!5e0!3m2!1sen!2str!4v1705156960840!5m2!1sen!2str"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

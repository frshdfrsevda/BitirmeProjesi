import React from 'react';
import { assets } from '../assets/assets';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      {/* Title */}
      <div className={styles.header}>
        <h2>Bize <span>Ulaşınız</span></h2>
      </div>

      {/* Content Grid */}
      <div className={styles.content}>
        {/* Left Image */}
        <div className={styles.imageContainer}>
          <img src={assets.contact_image} alt="Contact" className={styles.image} />
        </div>

        {/* Right Info */}
        <div className={styles.info}>
          <p className={styles.text}> Adres: Sakarya, Türkiye</p>
          <p className={styles.text}> Telefon: +90 123 456 7890</p>
          <p className={styles.text}> E-mail: info@dentalcarepro.com</p>

          <button className={styles.button}>Bize Mesaj Gönder</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

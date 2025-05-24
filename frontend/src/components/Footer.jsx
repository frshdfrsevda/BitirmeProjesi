import React from 'react';
import styles from './Footer.module.css';
import Beyin from '../assets/Beyin.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src={Beyin} alt='Beyin' />
          <h2>Randevu Alma Sistemi</h2>
          <p>Sağlıklı bir gülümseme için yanınızdayız.</p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Bağlantılar</h3>
          <ul>
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/hakkimizda">Hakkımızda</a></li>
            <li><a href="/doktorlar">Doktorlar</a></li>
            <li><a href="/iletisim">İletişim</a></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h3>İletişim</h3>
          <p>Email: info@dentalcare.com</p>
          <p>Telefon: +90 123 456 7890</p>
          <p>Adres: Sakarya, Türkiye</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 Randevu Alma Sistemi. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}

export default Footer;

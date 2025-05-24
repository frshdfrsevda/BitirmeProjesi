import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import styles from './Navbar.module.css';
import Beyin from '../assets/Beyin.png'

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true); // Replace with actual auth logic
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleCloseDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img onClick={()=> navigate('/')} src={Beyin} alt='Beyin' />
        <a href='#'> Randevu Alma Sistemi </a>
      </div>

      {/* Navigation Links */}
      <ul className={styles.navlist}>
        <li>
          <NavLink to="/" className={styles.navItem}>Ana Sayfa</NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/doctors" className={styles.navItem}>Tüm Doktorlar</NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/about" className={styles.navItem}>Hakkında</NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/contact" className={styles.navItem}>İlitişim</NavLink>
          <hr />
        </li>

        <li>
          <NavLink to="/AdminLogin" className={styles.navItem}>Admin</NavLink>
          <hr />
        </li>

        <li>
          <NavLink to="/Registration" className={styles.navItem}>Kayıt ol</NavLink>
          <hr />
        </li>

        {/* Profile or Signup */}
        <li className={styles.profileWrapper}>
          {
            token ? (
              <div className={styles.profileDropdown}>
                <div className={styles.profile} onClick={handleToggleDropdown}>
                  <img src={assets.profile_pic} alt="Profile" className={styles.profilePic} />
                  <img src={assets.dropdown_icon} alt="Dropdown" className={styles.dropdownIcon} />
                </div>

                {dropdownOpen && (
                    <div className={styles.dropdownMenu}>
                        <p onClick={() => navigate('my-profile')} className={styles.dropdownItem}>Profilim</p>
                        <p onClick={() => navigate('my-appointments')} className={styles.dropdownItem}>Randevularım</p>
                        <p onClick={()=> setToken(false)} className={styles.dropdownItem}>Çıkış yap</p>
                    </div>
                )} 
              </div>
            ) : (
              <button onClick={() => navigate('/Registration')} className={styles.signupButton}>Yeni Hesap oluştur</button>
            )
          }
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

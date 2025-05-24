import React, { useState } from 'react';
import styles from './Registration.module.css'; // Reusing the same styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const BaseUrl= "http://example.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!formData.email || !formData.password) {
      setError('Lütfen E-posta veya şifre giriniz.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${BaseUrl}/Login/UserLogin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      if (!response.ok) {
        throw new Error('Bşarısız giriş!');
      }

      const data = await response.json();
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className={styles.successContainer}>
        <h2>Welcome Back!</h2>
        <p>You’ve successfully logged in.</p>
        <button
          className={styles.backButton}
          onClick={() => {
            setSuccess(false);
            setFormData({ email: '', password: '' });
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.formHeader}>
        <div className={styles.logo}>
          <h2>Beyin Tomografi Sistemi</h2>
        </div>
        <h3>Giriş</h3>
      </div>

      <form onSubmit={handleLogin} className={styles.registrationForm}>
        <div className={`${styles.formGroup} ${styles.floating}`}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
          <input
            type="email"
            name="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">E-posta</label>
        </div>

        <div className={`${styles.formGroup} ${styles.floating}`}>
          <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
          <input
            type="password"
            name="password"
            placeholder=" "
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Şifre</label>
        </div>

        {error && <div className={`${styles.errorMessage} ${styles.animateShake}`}>{error}</div>}

        <div className={styles.formGroup}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </div>

        <div className={styles.formFooter}>
          <p>Hesabınız yok? <NavLink to="/registration">Kayıt ol</NavLink> </p>

        </div>
      </form>
    </div>
  );
};

export default Login;

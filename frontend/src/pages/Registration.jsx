import React, { useState } from 'react';
import styles from './Registration.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faPhone, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Registration = () => {
  const [state, setState] = useState('Kayıt');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    ID: '',
    email: '',
    TeleNo: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Şifreler Uyuşmuyor!');
      setIsSubmitting(false);
      return;
    }

    if (!Object.values(formData).every(field => field.trim() !== '')) {
      setError('Lütfen tüm alanları doldurun.');
      setIsSubmitting(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Şifre en az 6 karakter olmalıdır.');
      setIsSubmitting(false);
      return;
    }


    try {
      const response = await fetch('https://example.com/Register/UserRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          surName: formData.surname, // ........................................
          userEmail: formData.email,
          userTelNo: formData.TeleNo,
          userName: formData.ID,
          password: formData.password
        }),
      });

      if (!response.ok) {
        throw new Error('Sunucu hatası oluştu.');
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError('Kayıt başarısız oldu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }

  };

  if (success) {
    return (
      <div className={styles.successContainer}>
        <h2>Registration Successful!</h2>
        <p>Thank you for registering with our dental system.</p>
        <button
          className={styles.backButton}
          onClick={() => {
            setSuccess(false);
            setFormData({
              name: '',
              surname: '',
              ID: '',
              email: '',
              TeleNo: '',
              password: '',
              confirmPassword: ''
            });
          }}
        >
          Back to Form
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
        <h3>{state} Formu</h3>
      </div>

      <form onSubmit={onSubmitHandler} className={styles.registrationForm}>
        <div className={`${styles.formGroup} ${styles.floating}`}>
          <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="name">Adı</label>
        </div>

        <div className={`${styles.formGroup} ${styles.floating}`}>
          <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="surname">Soyadı</label>
        </div>

        <div className={`${styles.formGroup} ${styles.floating}`}>
          <FontAwesomeIcon icon={faIdBadge} className={styles.inputIcon} />
          <input
            type="text"
            id="ID"
            name="ID"
            value={formData.ID}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="ID">T.C. Kimlik No</label>
        </div>

        <div className={`${styles.formGroup} ${styles.floating}`}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="email">E-posta</label>
        </div>

        <div className={`${styles.formGroup} ${styles.floating}`}>
          <FontAwesomeIcon icon={faPhone} className={styles.inputIcon} />
          <input
            type="tel"
            id="TeleNo"
            name="TeleNo"
            value={formData.TeleNo}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="TeleNo">Telefon</label>
        </div>

        <div className={`${styles.formGroup} ${styles.floating}`}>
          <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="password">Şifre</label>
        </div>

        <div className={`${styles.formGroup} ${styles.floating}`}>
          <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="confirmPassword">Şifre Tekrar</label>
        </div>

        {error && <div className={`${styles.errorMessage} ${styles.animateShake}`}>{error}</div>}

        <div className={styles.formGroup}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className={styles.spinner}></span> Processing...
              </>
            ) : (
              'Kayıt ol'
            )}
          </button>
        </div>

        <div className={styles.formFooter}>
          <p> Hesabınız var? <NavLink to="/login">Giriş yap</NavLink></p>
        </div>
      </form>
    </div>
  );
};

export default Registration;

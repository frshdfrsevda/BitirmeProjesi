import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Ahmet Ahmet",
    image: assets.profile_pic,
    email: 'ahmet@gmail.com',
    phone: '+90 555 999 33 44',
    address: {
      line1: "Sakarya Üniversitesi,",
      line2: "Sakarya/ Turkiye"
    },
    gender: 'Erkek',
    dob: '2000-01-01'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <div style={styles.imageContainer}>
          <img src={userData.image} alt='Profile' style={styles.profileImage} />
        </div>

        <div style={styles.section}>
          {
            isEdit
              ? <input 
                  type='text' 
                  value={userData.name} 
                  onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
                  style={styles.input}
                />
              : <h2>{userData.name}</h2>
          }
        </div>

        <hr style={styles.hr} />

        <div style={styles.section}>
          <h3>İletişim Bilgileri</h3>
          <p><strong>E-posta:</strong> {userData.email}</p>
          <p><strong>Telefon:</strong></p>
          {
            isEdit
              ? <input
                  type='text'
                  value={userData.phone}
                  onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                  style={styles.input}
                />
              : <p>{userData.phone}</p>
          }

          <p><strong>Adres:</strong></p>
          {
            isEdit
              ? <>
                  <input
                    type='text'
                    value={userData.address.line1}
                    onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                    style={styles.input}
                  />
                  <input
                    type='text'
                    value={userData.address.line2}
                    onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                    style={{ ...styles.input, marginTop: '8px' }}
                  />
                </>
              : <p>{userData.address.line1}<br />{userData.address.line2}</p>
          }
        </div>

        <hr style={styles.hr} />

        <div style={styles.section}>
          <h3>Bilgiler</h3>

          <p><strong>Cinsiyet:</strong></p>
          {
            isEdit
              ? <select
                  value={userData.gender}
                  onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                  style={styles.input}
                >
                  <option value="Erkek">Erkek</option>
                  <option value="Kadın">Kadın</option>
                </select>
              : <p>{userData.gender}</p>
          }

          <p><strong>Doğum Tarihi:</strong></p>
          {
            isEdit
              ? <input
                  type='date'
                  value={userData.dob}
                  onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                  style={styles.input}
                />
              : <p>{userData.dob}</p>
          }
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          {
            isEdit
              ? <button style={styles.button} onClick={() => setIsEdit(false)}>Kaydet</button>
              : <button style={styles.button} onClick={() => setIsEdit(true)}>Düzenle</button>
          }
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    padding: '20px'
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.2)',
    padding: '30px',
    maxWidth: '500px',
    width: '100%'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  profileImage: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  section: {
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  },
  hr: {
    margin: '20px 0',
    border: 'none',
    height: '1px',
    backgroundColor: '#eee'
  },
  button: {
    backgroundColor: '#1bad4e', // Green color
    color: 'white',
    padding: '12px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  }
}

export default MyProfile





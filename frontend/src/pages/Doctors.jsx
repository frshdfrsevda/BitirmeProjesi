
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext' 
import styles from './Doctors.module.css';


const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const { doctors } = useContext(AppContext) 

  const navigate = useNavigate()

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className={styles.container}>
      <p>Doktor uzmanlarını inceleyin.</p>
      <div className={styles.mainContent}>
        <div className={styles.filterSide}>
          <p className onClick={()=> speciality === 'Genel pratisyen hekim' ? navigate('/doctors') : navigate('/doctors/Genel pratisyen hekim')}>Genel pratisyen hekim</p>
          <p onClick={()=> speciality === 'Kadın doğum uzmanı' ? navigate('/doctors') : navigate('/doctors/Kadın doğum uzmanı')}>Kadın doğum uzmanı</p>
          <p onClick={()=> speciality === 'Dermatolog' ? navigate('/doctors') : navigate('/doctors/Dermatolog')}>Dermatolog</p>
          <p onClick={()=> speciality === 'Çocuk Doktorları' ? navigate('/doctors') : navigate('/doctors/Çocuk Doktorları')}>Çocuk Doktorları</p>
          <p onClick={()=> speciality === 'Nörolog' ? navigate('/doctors') : navigate('/doctors/Nörolog')}>Nörolog</p>
          <p onClick={()=> speciality === 'Gastroenterolog' ? navigate('/doctors') : navigate('/doctors/Gastroenterolog')}>Gastroenterolog</p>
        </div>
        <div className={styles.doctorsGrid}>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} className={styles.doctorCard}>
                <img src={item.image} alt='' className={styles.doctorImage} />
                <div className={styles.doctorInfo}>
                  <div className={styles.doctorStatus}>
                    <span className={styles.statusDot}></span>
                    <p></p><p className={styles.statusText}>Mevcut</p>
                  </div>
                  <p className={styles.doctorName}>{item.name}</p>
                  <p className={styles.doctorSpeciality}>{item.speciality}</p>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors;

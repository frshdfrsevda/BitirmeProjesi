import React, { useContext } from 'react'
// import { doctors } from '../assets/assets'
import styles from './TopDoctor.module.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
    return (
        <div className={styles.topDoctorsContainer}>
            <h1 className={styles.topDoctorsTitle}>En iyi doktorlarımız </h1>
            <p className={styles.topDoctorsSubtitle}>Uzman ve güvenilir doktoları kolayca keşfedin.</p>

            <div className={styles.doctorsGrid}>
                {doctors.slice(0, 10).map((item, index) => (
                    <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className={styles.doctorCard}>
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
                ))}
            </div>

            <div className={styles.moreButtonWrapper}>
                <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className={styles.moreButton}>Daha Fazla</button>
            </div>
        </div>
    )
}

export default TopDoctors
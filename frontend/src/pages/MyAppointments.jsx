// import React, { useContext } from 'react'
// import { AppContext } from '../context/AppContext'
// import { ssrImportMetaKey } from 'vite/module-runner'

// const MyAppointments = () => {

//   const {doctors } = useContext(AppContext)
//   return (
//     <div>
//         <p>Randevularım</p>
//         <div>
//           {doctors.slice(0,2).map((item, index)=>(
//             <div key={index}>
//               <div>
//                 <img src={item.image} alt='' />
//               </div>
//             <div>
//               <p>{item.name}</p>
//               <p>{item.speciality}</p>
//               <p>Adress:</p>
//               <p>{item.address.line1}</p>
//               <p>{item.address.line2}</p>
//               <p><span>Date & Time: </span> 24, May, 2025 | 3:30 PM</p>
//             </div>

//             <div>
//               <button>Online Odeme</button>
//               <button>Iptal Randevu</button>
//             </div>

//           </div>

//           ))}
//         </div>
//     </div>
//   )
// }

// export default MyAppointments


import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import styles from './MyAppointments.module.css';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Randevularım</h2>
      <div className={styles.appointmentList}>
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.name} className={styles.doctorImage} />
            </div>

            <div className={styles.details}>
              <h3>{item.name}</h3>
              <p className={styles.speciality}>{item.speciality}</p>
              <p className={styles.address}> {item.address.line1}, {item.address.line2}</p>
              <p className={styles.datetime}>
                <strong>24 May 2025</strong> | <strong>3:30 PM</strong>
              </p>
            </div>

            <div className={styles.actions}>
              <button className={styles.payBtn}> Online Ödeme Yap</button>
              <button className={styles.cancelBtn}> İptal Et</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;

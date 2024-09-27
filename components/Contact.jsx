import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'
import { useRouter } from 'next/router'
const Contact = () => {
  const router = useRouter()
  const [details, setDetails] = useState({})
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2>Fill In Your Info</h2>
          <span className={styles.close} onClick={() => router.push('/')}>
            X
          </span>
        </div>
        <div className={styles.form__container}>
          <div className={styles.field}>
            <label>*First Name</label>
            <input
              type='text'
              placeholder='Example: Saif'
              value={details.firstName}
              onChange={e =>
                setDetails({ ...details, firstName: e.target.value })
              }
            />
          </div>
          <div className={styles.field}>
            <label>*Last Name</label>
            <input
              type='text'
              placeholder='Example: Rahman'
              value={details.lastName}
              onChange={e =>
                setDetails({ ...details, lastName: e.target.value })
              }
            />
          </div>
          <div className={styles.field}>
            <label>*Email </label>
            <input
              type='text'
              placeholder='Example: quincesoftwaredev@gmail.com'
              value={details.email}
              onChange={e => setDetails({ ...details, email: e.target.value })}
            />
          </div>
          <div className={styles.field}>
            <label>*Phone Number</label>
            <input
              type='text'
              placeholder='Example:01744329811'
              value={details.phone}
              onChange={e => setDetails({ ...details, phone: e.target.value })}
            />
          </div>
          <div className={styles.field}>
            <label>Facebook Page </label>
            <input
              type='text'
              placeholder='Example: https://www.facebook.com/profile.php?id=61563280450815'
              value={details.page}
              onChange={e =>
                setDetails({ ...details, firstName: e.target.value })
              }
            />
          </div>
          <div className={styles.field}>
            <label>*Your Needs</label>
            <select
              onChange={e => setDetails({ ...details, need: e.target.value })}
            >
              {[
                'I Need Website',
                'I Need Ecomerce Website',
                'I Need News Portal Website'
              ].map((i, index) => (
                <option>{i}</option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label>*Your Budget</label>
            <input
              type='text'
              placeholder='Example: 30000'
              value={details.budget}
              onChange={e => setDetails({ ...details, budget: e.target.value })}
            />
          </div>
          <div className={styles.field}>
            <label>Message</label>
            <textarea
              type='text'
              placeholder='Example: I am an online retailer , I need a website for my bussiness . I want to talk with you regarding this !'
              value={details.message}
              onChange={e =>
                setDetails({ ...details, message: e.target.value })
              }
            ></textarea>
          </div>
          <div className={styles.button}>Here We Go </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

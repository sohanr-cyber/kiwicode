import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import CopyrightIcon from '@mui/icons-material/Copyright'
import Logo from './utils/Logo'
import { useRouter } from 'next/router'
import t from '../utils/dict'

const routes = [
  [
    { title: 'Home', route: '/' },
    { title: 'About', route: '/about' }
  ],
  [
    { title: 'Contact', route: '/' },
    { title: 'Projects', route: '#projects' }
  ],

  [
    { title: 'Service', route: '#service' },
    { title: 'Websites', route: '#website' }
  ],
  [
    { title: 'Technologies', route: '/#technologies' },
    { title: 'privacyPolicy', route: '/privacy-policy' }
  ],
  [
    { title: 'termsAndConditions', route: '/terms-and-conditions' },
    { title: 'Career', route: '/' }
  ]
]

const Footer = () => {
  const router = useRouter()
  const { locale } = router
  return (
    <div className={styles.wrapper} id='footer'>
      <div className={styles.grid}>
        <div className={styles.left}>
          <logo></logo>
          <div className={styles.name} style={{ textAlign: 'left' }}>
            <Logo />
          </div>

          <p>
            {t("footerP", locale)}
          </p>
        </div>
        <div className={styles.mid}>
          <h2>
            {t("ourCompany", locale)}
          </h2>
          {routes.map(item => (
            <div className={styles.flex}>
              <div
                className={styles.link}
                onClick={() => router.push(item[0].route)}
              >
                {t(item[0].title, locale)}
              </div>
              <div
                className={styles.link}
                onClick={() => router.push(item[1].route)}
              >
                {t(item[1].title, locale)}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.right}>
          <h2 className={styles.contact}>{t("contactUs", locale)} </h2>
          <div className={styles.email}>
            {t("emailUs", locale)} : <span> quincesoftwaredev@gmail.com</span>
          </div>
          <div className={styles.phone}>
            {t("contactUs", locale)} : <span> 01744329811</span>
          </div>
          {/* <div className={styles.telegram}>
            Telegram : Click <span>Here</span> to contact use
          </div> */}
          <div className={styles.flex}>
            <div className={styles.icon}>
              <Image
                src='/images/instagram.png'
                width='30px'
                height='30px'
                alt='inst'
              />
            </div>
            <div className={styles.icon}>
              {' '}
              <Image
                src='/images/facebook.png'
                width='30px'
                height='30px'
                alt='inst'
                onClick={() =>
                  router.push(
                    'https://www.facebook.com/profile.php?id=61563280450815'
                  )
                }
              />
            </div>
            <div className={styles.icon}>
              {' '}
              <Image
                src='/images/telegram.png'
                width='30px'
                height='30px'
                alt='inst'
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <CopyrightIcon style={{ fontSize: '130%' }} />
        2022 All Rights Reserved
      </div>
    </div>
  )
}

export default Footer

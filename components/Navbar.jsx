import React, { useEffect, useState } from 'react'
import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'
import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'
import Logo from './utils/Logo'
import { motion } from 'framer-motion'
import t from '../utils/dict'
const Navbar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const { locale } = useRouter()

  useEffect(() => {
    setInterval(() => {
      setVisible(prev => !prev)
    }, 20000)
  }, [])

  useEffect(() => {
    if (!visible) {
      setVisible(true)
    }
  }, [visible])

  const user = false
  return (
    <div
      initial={{ opacity: 0, y: -600 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1.3 }
      }}
      className={styles.navbar}
    >
      <div className={styles.nav__logo} onClick={() => router.push('/')}>
        {visible ? <Logo dyanamic={true} /> : <></>}
      </div>

      <div
        initial={{ opacity: 0, y: -2000 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 2 }
        }}
        className={styles.nav__items}
      >
        <div className={styles.item} onClick={() => router.push('/')}>
          {t("Home", locale)}
        </div>
        <div className={styles.item} onClick={() => router.push('/#header')}>
          {t("About", locale)}

        </div>
        <div className={styles.item} onClick={() => router.push('/#projects')}>
          {t("Projects", locale)}

        </div>
        <div
          className={styles.item}
          onClick={() => router.push('/#architecture')}
        >
          {t("Service", locale)}

        </div>
        <div className={styles.item} onClick={() => router.push('/#reviews')}>
          {t("Reviews", locale)}

        </div>
        <div className={styles.item} onClick={() => router.push('/#news')}>
          {t("News", locale)}

        </div>
      </div>
      <div
        className={styles.nav__right}
        initial={{ opacity: 0, y: -20000 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 2.5 }
        }}
      >
        <div className={styles.profile}>
          <div
            className={styles.item}
            onClick={() => router.push('?contactNow=true')}
          >
            Let's Talk
          </div>
        </div>
      </div>
      {!open && (
        <div className={styles.icon} onClick={() => setOpen(true)}>
          <MenuIcon />
        </div>
      )}
      {open && (
        <div className={styles.nav__vertical}>
          <div className={styles.nav__items}>
            <div className={styles.icon} onClick={() => setOpen(false)}>
              <ClearIcon />
            </div>
            <div className={styles.item} onClick={() => router.push('/')}>
              {t("Home", locale)}

            </div>
            <div
              className={styles.item}
              onClick={() => router.push('/#header')}
            >
              {t("About", locale)}
            </div>
            <div
              className={styles.item}
              onClick={() => router.push('/#project')}
            >
              {t("Projects", locale)}
            </div>
            <div
              className={styles.item}
              onClick={() => router.push('/#architecture')}
            >
              {t("Service", locale)}
            </div>
            <div
              className={styles.item}
              onClick={() => router.push('/#reviews')}
            >
              {t("Reviews", locale)}
            </div>
            <div className={styles.item} onClick={() => router.push('/#news')}>
              {t("News", locale)}
            </div>
          </div>

          <div className={styles.nav__right}>
            <div className={styles.profile}>
              <div
                className={styles.item}
                onClick={() => router.push('mailto:sohanur25800@gmail.com')}
              >
                    {t("Contact", locale)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar

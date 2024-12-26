import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from '../styles/Header.module.css'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import VideoPlayer from './utils/VideoPlayer'
import { header } from '../utils/data'
import t from '../utils/dict'
const welcomeData =
  'Code Your Way to Success Where Attractiveness Meets Effectiveness'
const welcomePData =
  "At Quince we're passionate about creating innovative and cutting-edge software solutions. Our mission is to transform your ideas into reality, providing you with software that not only meets your needs but exceeds your expectations."
const welcomeP2Data =
  'Discover Our Services And Reach Out Today To Explore How We Can Elevate Your Success'

const backgrounds = [
  'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg',
  'https://images.pexels.com/photos/167259/pexels-photo-167259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]

const Header = () => {
  const router = useRouter()
  const [backgroundIndex, setBackgroundIndex] = useState(0)
  const { locale } = router
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the background index to change the picture
      setBackgroundIndex(prevIndex => (prevIndex + 1) % backgrounds.length)
    }, 5000) // Change background every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval)
  }, [backgroundIndex, backgrounds.length])
  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <div
      className={styles.header}
      id='header'
      style={{
        backgroundImage: `url("${backgrounds[backgroundIndex]}")`,
        backgroundPosition: 'center'
      }}
    >
      <div className={styles.surface}>
        <h1>
          {header[locale].h1}
        </h1>
        <h3>{header[locale].p
        }
        </h3>
        <div className={styles.btn}>
          {t("Contact", locale)}
        </div>
      </div>


      <div
        initial={{ opacity: 0, y: -20000 }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{ duration: 4 }}
        className={styles.star}
      ></div>
      <div
        initial={{ opacity: 0, y: -20000 }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{ duration: 4.3 }}
        className={styles.triangle}
      ></div>
      <div
        initial={{ opacity: 0, x: -20000 }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{ duration: 4.5 }}
        className={styles.circle_1}
      >
        <div className={styles.inner_cirlce_1}></div>
      </div>
      <div
        initial={{ opacity: 0, x: 20000 }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{ duration: 4.8 }}
        className={styles.circle_2}
      >
        <div className={styles.inner_cirlce_1}></div>
      </div>
    </div>
  )
}

export default Header

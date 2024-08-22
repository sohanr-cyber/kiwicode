import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from '../styles/Header.module.css'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
const welcomeData =
  'Code Your Way to Success Where Attractiveness Meets Effectiveness'
const welcomePData =
  "At Quince we're passionate about creating innovative and cutting-edge software solutions. Our mission is to transform your ideas into reality, providing you with software that not only meets your needs but exceeds your expectations."
const welcomeP2Data =
  'Discover Our Services and Reach Out Today to Explore How We Can Elevate Your Success'

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
        staggerChildren: 0.3
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
      <div className={styles.surface}></div>
      {/* <video autoPlay={true} muted loop id="myVideo">
        <source src="assets/bg3.mp4" type="video/mp4" />
      </video> */}
      <motion.div
        className={styles.content}
        initial='hidden'
        animate='visible'
        variants={parentVariants}
      >
        <motion.h1
          // initial={{ opacity: 0 }}
          // animate={{
          //   opacity: 1,
          // }}
          // transition={{ duration: 0.5 }}
          variants={childVariants}
        >
          {welcomeData}
        </motion.h1>
        <motion.p variants={childVariants}>{welcomePData}</motion.p>
        <motion.p variants={childVariants}>{welcomeP2Data}</motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20000 }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{ duration: 5 }}
          className={styles.btn}
          onClick={() => router.push('http://m.me/61563280450815')}
        >
          Contact Us
        </motion.div>
      </motion.div>{' '}
      <motion.div
        initial={{ opacity: 0, y: -20000 }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{ duration: 4 }}
        className={styles.star}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20000 }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{ duration: 4.3 }}
        className={styles.triangle}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20000 }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{ duration: 4.5 }}
        className={styles.circle_1}
      >
        <div className={styles.inner_cirlce_1}></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20000 }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{ duration: 4.8 }}
        className={styles.circle_2}
      >
        <div className={styles.inner_cirlce_1}></div>
      </motion.div>
    </div>
  )
}

export default Header

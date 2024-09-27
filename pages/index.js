import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Architecture from '../components/Architecture'
import Benifit from '../components/Benifit'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'

import { NextSeo } from 'next-seo'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies'
import WebsiteTypes from '../components/WebsiteTypes/WebsiteTypes'
import VideoPlayer from '../components/utils/VideoPlayer'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NextSeo
        title='Quince - Your Source for Innovative Software Solutions'
        description='At Quince, we craft custom software solutions to meet your unique business needs. Our expert team delivers cutting-edge technology and unparalleled quality.'
        openGraph={{
          type: 'website',
          url: 'https://www.Quince.com',
          title: 'Quince - Your Source for Innovative Software Solutions',
          description:
            'At Quince, we craft custom software solutions to meet your unique business needs. Our expert team delivers cutting-edge technology and unparalleled quality.',
          images: [
            {
              url: '/images/kiwi.png',
              width: 1200,
              height: 630,
              alt: 'Quince'
            }
          ]
        }}
        twitter={{
          handle: '@Quince',
          site: '@Quince',
          cardType: 'summary_large_image',
          title: 'Quince - Your Source for Innovative Software Solutions',
          description:
            'At Quince, we craft custom software solutions to meet your unique business needs. Our expert team delivers cutting-edge technology and unparalleled quality.',
          image: '/images/kiwi.png'
        }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Quince',
          legalName: 'Quince Software Solutions, Inc.',
          url: 'https://www.Quince.com',
          logo: 'https://www.Quince.com/Quince.jpg',
          foundingDate: 'Year Founded',
          sameAs: [
            'https://www.facebook.com/Quince',
            'https://twitter.com/Quince',
            'https://www.linkedin.com/company/Quince'
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Main Street',
            addressLocality: 'City',
            addressRegion: 'State',
            postalCode: 'ZIP Code',
            addressCountry: 'Country'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-123-456-7890',
            contactType: 'customer service'
          },
          description:
            'At Quince, we craft custom software solutions to meet your unique business needs. Our expert team delivers cutting-edge technology and unparalleled quality.'
        }}
      />

      <main className={styles.main}>
        {/* <Navbar id="home" /> */}
        <Header />
        <Architecture />
        <WebsiteTypes />
        <Projects />
        <Benifit /> <Technologies />
        {/* <Reviews />

        <FAQ /> */}
        {/* <Footer /> */}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export async function getServerSideProps (context) {
  return {
    props: {} // will be passed to the page component as props
  }
}

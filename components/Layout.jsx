import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Chat from './Chat'
import { useRouter } from 'next/router'
import Contact from './Contact'

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <>
      {router.query.contactNow == 'true' && <Contact />}
      <Navbar />
      {children}
      <Footer />
      <Chat />
    </>
  )
}

export default Layout

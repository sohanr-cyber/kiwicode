import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Chat from './Chat'
import { useRouter } from 'next/router'
import Contact from './Contact'
import Loading from './utils/Loading'
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'

const Layout = ({ children }) => {
  const router = useRouter()
  const loading = useSelector(state => state.state.loading)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const notistack = useSelector(state => state.notistack.notistack)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (notistack) {
      enqueueSnackbar(notistack.message, notistack.option || 'default')
    }
  }, [notistack])
  return (
    <>
      {' '}
      {loading && <Loading />}
      {router.query.contactNow == 'true' && <Contact />}
      <Navbar />
      {children}
      <Footer />
      <Chat />
    </>
  )
}

export default Layout

import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

export default DefaultLayout

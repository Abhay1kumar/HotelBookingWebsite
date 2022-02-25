import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeadDown from './HeadDown'
import SecoundMainPage from './SecoundMainPage'
import './StayPage.css'

export default function StayPage() {
  return (
    <>
    <div className="headerMain">
    <Header/>
    </div>
   
    <HeadDown />
    <SecoundMainPage />
    <Footer />
    </>
  )
}

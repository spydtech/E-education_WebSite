import React from 'react'
import Navbar from '../../../../../Navbar'
import Footer from '../../../../footer/Footer'
import DBCard from './DBCard'
import DBFoot from './DBFoot'
import DBhero from './DBhero'
import DBNavigation from './AboutDB/DBNavigation'
const DB = () => {
  return (
    <>
    <Navbar />
    <DBhero />
    <DBCard />
    <DBNavigation />
    <DBFoot />
    <Footer />
    </>
  )
}

export default DB
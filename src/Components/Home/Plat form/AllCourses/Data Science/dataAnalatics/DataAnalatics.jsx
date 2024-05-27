import React from 'react'
import DataHero from './DataHero'
import DataAbout from './DataAbout'
import DataAnalaticsNavigation from './DataAnalaticsNavigation'
import Navbar from '../../../../../Navbar'
import Footer from '../../../../footer/Footer'
// import Footer from '../../../footer/Footer'
const DataAnalatics = () => {
  return (
    <>
    <Navbar />
    <DataHero />
    <DataAbout />
    <DataAnalaticsNavigation />
    <Footer />
    </>
  )
}

export default DataAnalatics
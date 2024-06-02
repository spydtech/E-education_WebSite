import React,{useEffect} from 'react'
import DataHero from './DataHero'
import DataAbout from './DataAbout'
import DataAnalaticsNavigation from './DataAnalaticsNavigation'
import Navbar from '../../../../../Navbar'
import Footer from '../../../../footer/Footer'
const DataAnalatics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
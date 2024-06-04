import React,{useEffect} from 'react'
import Navbar from '../Navbar'
import WaterDropGrid from './WaterDropGrid'
import Counter from './Counter'
import Benefits from './Benefits'
import StartLearning from './StartLearning';
import MostPopular from './MostPopular'
import Footer from '../Home/footer/Footer'
const MyCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <WaterDropGrid />
      <Counter />
      <StartLearning />
      <MostPopular />
      <Benefits />
      <Footer />

    </>
  )
}

export default MyCourse
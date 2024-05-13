import React from 'react'
import Navbar from '../../../../Navbar'
import Footer from '../../../footer/Footer'
import MachineLearningHero from './MachineLearningHero'
import MachineLearningCard from './MachineLearningCard'
import MachineLearningNavigation from './MachineLearningAbout/MachineLearningNavigation'
const MachineLearning = () => {
  return (
    <>
    <Navbar />
    <MachineLearningHero />
    <MachineLearningCard />
    <MachineLearningNavigation />
    <Footer />
    </>
  )
}

export default MachineLearning
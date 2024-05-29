/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import IMG from "../../../assets/Platform/student.png"
import IMG1 from "../../../assets/E- education logo .png"
import EducationCarousel from '../eductionCarousel/EductionCarousel'
import Certified from './Certified'
import { Link } from 'react-router-dom'
function Platform() {
  return (
    <>

      <Certified />
      <EducationCarousel />
      <div className='bg-blue-200 font-lora'>

        <div className='ml-96 h-92 w-96 -mb-16'>
          <img
            src={IMG1}
          />
        </div>

        <h1 className="text-7xl font-bold text-center p-[5%] font-lora">The perfect platform to boost your technical skills</h1>
        <div className='flex p-20 gap-8 '>

          <Link to="/student">

            <div className='shyam text-center shadow-2xl p-4 font-lora transform hover:-translate-y-2 transition-transform '>
              <div className=' flex justify-center items-center '>
                <img src={IMG} className='h-[360px] w-[360px]' />
              </div>
              <h2 className='text-3xl font-bold'>Students</h2>
              <p className='text-gray-500 text-md'>
                Kickstart your career in tech with industry-relevant skills and certifications that make you stand out to employers.
              </p>
              <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
              </div>

            </div>

          </Link>

          <style jsx>
            {`
            .bar {
              position: relative;
              // top: 250px;
            
              height: 50px;
              width: 100%;
            }
            
            .emptybar {
              background-color: #201c29;
              width: 100%;
              height: 100%;
            }
            
            .filledbar {
              position: absolute;
              top: 0px;
              z-index: 3;
              width: 0px;
              height: 100%;
              background: #d059ff;
              background: linear-gradient(90deg, #6831cfab, #0369a1 100%);
              transition: 0.6s ease-out;
            }
            
            .shyam:hover .filledbar {
              width: 100%;
              transition: 0.4s ease-out;
            }
            `}
          </style>
          <Link to='/professional'>

            <div className='shyam text-center shadow-2xl p-4 font-lora transform hover:-translate-y-2 transition-transform'>
              <div className='flex justify-center items-center '>

                <img src='https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-man-seated-using-laptop-character-png-image_11581009.png' />
              </div>
              <h2 className='text-3xl font-bold'>Professionals</h2>
              <p className='text-gray-500 text-md'>
                Stay ahead of the curve by mastering emerging technologies and techniques that drive innovation in your field.
              </p>
              <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Platform
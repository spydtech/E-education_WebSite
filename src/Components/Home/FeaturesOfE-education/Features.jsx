import React from 'react'
import Features2 from './Features2'
import Navbar from '../../Navbar'
import Footer from '../footer/Footer'
import HeroSection from './HeroSection'


function Features() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <h1 className='text-4xl font-lora text-center py-24 '>Why Choose E-education?</h1>
        <h2 className='text-xl text-center font-semibold text-[#16a34a] hover:underline cursor-pointer' >Feature of E-education</h2>
        <div className="flex flex-col md:flex-row md:gap-10 gap-10 px-32 md:justify-center justify-center py-10">
        <div class="card border-2  border-[#16a34a]">
    <div class="header">
        <div class="img-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" fill="rgba(66,193,110,1)"></path>
            </svg>
        </div>
        <span class="title">Flexibility
    </span></div>

    <div class="content">
        <p>
        Learn at your own pace, on your own schedule. 
        Whether you're a busy professional or a full-time student, 
        E-education fits seamlessly into your lifestyle.
        </p>

        <a class="btn-link1">Read More...</a>
    </div>
</div>


{/* 2nd card */}
<div class="card border-2  border-[#16a34a]">
    <div class="header">
        <div class="img-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" fill="rgba(66,193,110,1)"></path>
            </svg>
        </div>
        <span class="title">Accessibility
    </span></div>

    <div class="content">
        <p>
        Access high-quality learning resources anytime, anywhere. 
        No commute, no geographical boundaries – just knowledge at your fingertips.
        </p>

        <a class="btn-link1">Read More...</a>
    </div>
</div>

{/* 3rd card */}
<div class="card border-2  border-[#16a34a]">
    <div class="header">
        <div class="img-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" fill="rgba(66,193,110,1)"></path>
            </svg>
        </div>
        <span class="title">Diverse Courses
    </span></div>

    <div class="content">
        <p>
        Explore a wide range of courses catering to every interest and skill level. 
        From academic subjects to professional development, there's something for everyone.
        </p>

        <a class="btn-link1">Read More...</a>
    </div>
</div>

{/* 4th card */}
<div class="card border-2  border-[#16a34a]">
    <div class="header">
        <div class="img-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" fill="rgba(66,193,110,1)"></path>
            </svg>
        </div>
        <span class="title">Interactive Learning
    </span></div>

    <div class="content">
        <p>
        Engage with instructors and fellow learners through interactive discussions,
         forums, and virtual classrooms. Collaborate, share ideas, and grow together.
        </p>

        <a class="btn-link1">Read More...</a>
    </div>
</div>

{/* 5th card */}

<div class="card border-2  border-[#16a34a]">
    <div class="header">
        <div class="img-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" fill="rgba(66,193,110,1)"></path>
            </svg>
        </div>
        <span class="title">Affordability
    </span></div>

    <div class="content">
        <p>
        Enjoy cost-effective learning solutions that won't break the bank. 
        Say goodbye to expensive textbooks and tuition fees.
        </p>

        <a class="btn-link1">Read More...</a>
    </div>
</div>

        </div>


        <style jsx>{`
        .card {
            width: 190px;
            height: 120px;
            transition: all .5s;
            box-shadow: 15px 15px 30px rgba(25, 25, 25, 0.11),
                       -15px -15px 30px rgba(60, 60, 60, 0.082);
            text-align: center;
            overflow: hidden;
          }
          
          .card:hover {
            height: 400px;
            background: linear-gradient(360deg, #edededc5 60%, hsla(0, 0%, 13%, 1) 70%);
          }
          
          .card .header {
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #212121;
            margin-bottom: 16px;
          }
          
          .card .header .img-box {
            width: 50px;
          }
          
          .card .header .title {
            font-size: 1em;
            letter-spacing: .1em;
            font-weight: 900;
            text-transform: uppercase;
            padding: 4px 0 14px 0;
            transition: all .5s;
            color: #edededc5;
          }
          
          .card:hover .header {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 96%);
          }
          
          .card:hover .card .header .title {
            padding: 0;
          }
          
          .card .content {
            display: block;
            text-align: left;
            color: #212121;
            margin: 0 18px;
          }
          
          .card .content p {
            transition: all .5s;
            font-size: .8em;
            margin-bottom: 8px;
          }
          
          .card .content a {
            color: #1d8122;
            cursor: pointer;
            transition: all .5s;
            font-size: .7rem;
            font-weight: 700;
            text-transform: uppercase;
          }
          
          .card .content .btn-link1:hover {
            border-bottom: 1px solid #1d8122;
          }
        
        `}
            </style>

            <div className='py-10 px-10'>
                <h1 className='text-4xl border-l-8 md:ml-72   font-lora '>Start Your Learning Journey Today</h1>
           <Features2 />
            </div>
          
            <Footer />
    </div>
  )
}

export default Features
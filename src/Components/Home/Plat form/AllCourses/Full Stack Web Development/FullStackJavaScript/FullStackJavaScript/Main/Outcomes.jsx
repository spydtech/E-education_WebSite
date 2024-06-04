import React from "react";
import { FaCaretRight } from "react-icons/fa";

const Outcomes = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2">
          <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
            Transform your career with sought-after skills in JavaScript Full
            Stack web development
          </div>
          <div className="pl-4">
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />
              </div>
              <div className="text-base text-gray-600 text-md font-lora">
                Acquire JavaScript Full Stack skills. Industry-recognized
                certification. Excel in tech.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />
              </div>
              <div className="text-base text-gray-600 text-md font-lora">
                Master JavaScript Full Stack technologies with real-world
                projects. Career-ready in web development.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />
              </div>
              <div className="text-base text-gray-600 text-md font-lora">
                Elevate career with JavaScript Full Stack. Google-endorsed.
                Prepare for industry. Success awaits.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/2 mt-6 md:mt-0">
          <img
            src="https://media.istockphoto.com/id/2004923721/video/indian-young-adult-professional-concentrated-business-woman-sitting-on-chair-indoor-office.jpg?s=640x640&k=20&c=HK3o29FdQ5BFTZE8lp3uColeSA7w08DEcQoabjqqA8A="
            className="rounded-xl w-full"
            alt="Office"
          />
        </div>
      </div>

      <div className="flex md:flex-row justify-center items-center flex-col mt-6">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/2 order-2 md:order-1">
          <img
            src="https://media.istockphoto.com/id/1810002603/video/young-asian-student-celebrating-an-achievement-while-using-laptop.jpg?s=640x640&k=20&c=1I8BbAlwYj3lIy9hFOseZ2kvKGxrUOFgz7nUexDiBN8="
            className="rounded-xl w-full"
            alt="Student"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2 order-1 md:order-2 mt-6 md:mt-0">
          <div className="mt-3 text-base font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora pl-12">
            Master JavaScript Full Stack Development for Career Advancement
          </div>
          <div className="pl-16">
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />
              </div>
              <div className="text-base text-gray-600 text-md font-lora">
                Acquire comprehensive JavaScript Full Stack skills for industry
                recognition.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />
              </div>
              <div className="text-base text-gray-600 text-md font-lora">
                Excel in JavaScript Full Stack development with real-world
                projects.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />
              </div>
              <div className="text-base text-gray-600 text-md font-lora">
                Elevate your career with Google-endorsed training, preparing you
                for industry success.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center mt-6">
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2">
          <div className="text-base font-extrabold text-gray-600 sm:text-xl lg:text-lg xl:text-xl font-lora">
            Unlock Career Opportunities with JavaScript Full Stack Web
            Development
          </div>
          <div className="pl-4">
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />
              </div>
              <div className="text-base text-gray-600 font-lora">
                Master both front-end and back-end technologies with JavaScript
                Full Stack for diverse job roles.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />
              </div>
              <div className="text-base text-gray-600 font-lora">
                Gain hands-on experience through real-world projects and case
                studies.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />
              </div>
              <div className="text-base text-gray-600 font-lora">
                Prepare for success with industry-recognized certification and
                Google-endorsed training.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/2 mt-6 md:mt-0">
          <img
            src="https://media.istockphoto.com/id/1473668785/video/mother-talking-with-her-kids-when-working-from-home.jpg?s=640x640&k=20&c=Th9amVrd_Kk93ZSJxnQiRfAq9xW8gMR0Cku-pGbr5wA="
            className="rounded-xl w-full"
            alt="Home office"
          />
        </div>
      </div>
    </>
  );
};

export default Outcomes;

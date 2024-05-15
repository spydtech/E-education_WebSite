import React from 'react'

const EthicalHackingCard2 = () => {
  return (
    <>
          <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 md:py-0 font-lora">
          <h1 className="text-3xl font-semibold text-violet-800 xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Master the Art of Ethical Hacking
            </span>{" "}
            and Secure Your Digital World!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Equipping you with cutting-edge techniques and cybersecurity
            expertise, we stand by your side in safeguarding your digital
            assets...
          </p>

          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-violet-500 rounded-lg md:px-8 hover:bg-violet-800 group"
            >
              <span>Discover More</span>{" "}
            </a>
          </div>
        </div>

        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://media.istockphoto.com/id/1372098110/vector/business-technology-cloud-computing-service-and-technology-file-upload-backup-on-cloud.jpg?s=612x612&w=0&k=20&c=EX5RbNCdBm3mPku1AQCW5Hb30_6B5roBdKIiQ5LWn-g="
            alt="Awesome hero page image"
            width={500}
            height={488}
          />
        </div>
      </div>
    </>
  )
}

export default EthicalHackingCard2
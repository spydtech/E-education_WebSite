// import React from 'react'

// const DBAbout = () => {
//   return (
//     <div>DBAbout</div>
//   )
// }

// export default DBAbout

import React from 'react'
import programmer from "../../../../../../../assets/dataAnalatics/programmer.jpg";
import assistance from "../../../../../../../assets/dataAnalatics/assistance.jpg";
const DBAbout = () => {
  return (
    <>
    <div className="mx-auto w-full md:lg:xl:px-10 p-1 bg-gradient-to-r from-rose-500 to-red-500">
  <div className="pt-0">
    <p className="text-[#f9ac13] text-xl font-medium">
      About Cloud Computing Essentials
    </p>
  </div>
  <div className="py-2">
    <p className="text-6xl font-lora">
      Explore the
      <p className="text-[#f9ac13] my-2">Cloud Computing Essentials Program</p>
    </p>
  </div>

  <div className="flex flex-wrap -mx-4 items-center pb-6">
    <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-52 object-cover object-center"
          src={programmer}
          alt="cloud-computing-essentials"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Expert Guidance</h2>
          <p className="text-gray-700">
            Learn from industry experts about fundamental concepts and
            advanced practices in cloud computing to enhance your skillset.
          </p>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-52 object-cover"
          src={assistance}
          alt="cloud-career-assistance"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Career Support</h2>
          <p className="text-gray-700">
            Receive career guidance and support to navigate opportunities in
            the rapidly growing field of cloud computing.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default DBAbout
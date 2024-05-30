// import React from 'react'

// const DBhero = () => {
//   return (
//     <div>DBhero</div>
//   )
// }

// export default DBhero


import React from 'react';

const DBhero = () => {
  return (
    <>
    <div>
    <img
      src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4084683/cover_image/regular_1708x683/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Newsletter-549c07a55cc276f4204263b6e6bef737.png"
      className="w-full object-cover md:h-[500px]"
    />
  </div>
 
  <div
    className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
    data-aos="fade-right"
    data-aos-duration={800}
  >
    <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
    <h1 className="text-3xl font-semibold text-[#00509d] xl:text-5xl lg:text-3xl">
    <span className="block w-full">Transform Your Database Management Strategy</span>{" "}
    to Achieve Unmatched Scalability and Efficiency!
</h1>
<p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
    Empowering you to leverage cutting-edge database technologies, ensuring optimal performance, security, and cost-effectiveness for your business...
</p>


      <div className="mt-4">
        <a
          href="#contact"
          className="px-5 py-3 text-lg tracking-wider text-white bg-blue-400 rounded-lg md:px-8 hover:bg-blue-500 group"
        >
          <span>Explore More</span>{" "}
        </a>
      </div>
    </div>
    <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
      <img
        id="heroImg1"
        className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
        src="https://cdn.pixabay.com/photo/2017/01/05/11/57/database-1954920_640.jpg"
        alt="Usability Testing hero image"
        width={500}
        height={488}
      />
    </div>
  </div>

  {/* Second Part */}
</>
  );
};

export default DBhero;

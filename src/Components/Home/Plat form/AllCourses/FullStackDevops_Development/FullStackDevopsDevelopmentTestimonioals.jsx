import React from "react";

const FullStackDevopsDevelopmentTestimonioals = () => {
  return (
    <>
      <div className="md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="py-8">
          <h3 className="mt-3 font-extrabold text-[#25a244]   sm:mt-5 sm:text-xl lg:text-lg xl:text-4xl font-lora">
            Why people choose E-education for their career
          </h3>
          <p className=" text-base text-gray-600 text-md font-lora mt-4 pl-2">
            As E-education continues to evolve and expand, its transformative
            impact on the future of learning and career development remains
            undeniable. By embracing the flexibility, accessibility, and
            opportunities offered by online education, individuals can unlock
            their full potential and pursue rewarding career paths with
            confidence and resilience.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* featured card */}
          <div className="w-full">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
              <div
                className="rounded-[35px] h-96 shadow-2xl p-8 flex
        justify-center items-center flex-col hover:-translate-y-4 transition-all duration-300 border border-gray-50"
              >
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1185326263/photo/happy-student-in-london.jpg?s=612x612&w=0&k=20&c=SQHdU5QJpdgZ65uYc-LkYIC1F-vgfEk5ID3kN3o8L-0="
                    alt=""
                    className="rounded-full h-40 w-40"
                  />
                </div>
                <div>Stone .G</div>
                <h5 className="text-gray-800 px-5 text-center mt-5">
                  "The structured learning paths helped me focus and progress
                  quickly. The flexibility is unparalleled."
                </h5>
              </div>
              <div
                className="rounded-[35px] h-96 shadow-2xl p-8 flex flex-col
        justify-center items-center hover:-translate-y-4 transition-all duration-300 md:mt-16 border border-gray-50"
              >
                <img
                  src="https://media.istockphoto.com/id/1455300330/photo/young-smiling-man-with-beard-dressed-in-an-olive-color-shirt-uses-phone-map-app-on-the-old.jpg?s=612x612&w=0&k=20&c=yCkUXKS3sTqI_RvDmyPVCJCbGaJ7RJpx9A7SHuOdRko="
                  alt=""
                  className="rounded-full h-40 w-40 "
                />
                <div>Steve .R</div>
                <h5 className="text-gray-800 px-5 text-center mt-5">
                  "The hands-on projects were invaluable. They gave me the
                  confidence to tackle real-world challenges."
                </h5>
              </div>
              <div
                className="rounded-[35px] h-96 shadow-2xl p-8 flex flex-col border border-gray-50
        justify-center items-center hover:-translate-y-4 transition-all duration-300"
              >
                <img
                  src="https://media.istockphoto.com/id/1144287280/photo/focused-african-student-looking-at-laptop-holding-book-doing-research.jpg?s=612x612&w=0&k=20&c=Ee2sGNsiZXbkCchKwZPX8Z9JDzcBscr4fGAjx5kDnUc="
                  alt=""
                  className="rounded-full h-40 w-40"
                />
                <div>Gwen K.</div>
                <h5 className="text-gray-800 px-5 text-center mt-5">
                  "The courses offered deep insights and practical knowledge.
                  I've grown both professionally and personally."
                </h5>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default FullStackDevopsDevelopmentTestimonioals;

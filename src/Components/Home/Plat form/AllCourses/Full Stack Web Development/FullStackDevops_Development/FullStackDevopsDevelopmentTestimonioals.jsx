import React from "react";

const FullStackDevopsDevelopmentTestimonioals = () => {
  return (
    <>
      <div className="md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="py-8">
          <h3 className="mt-3 font-extrabold text-violet-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-4xl font-lora">
            Why people choose E-education for their career
          </h3>
          <p className="text-base text-gray-600 text-md font-lora mt-4 pl-2">
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
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 items-start">
              <div className="testimonial-card">
                <img
                  src="https://media.istockphoto.com/id/1185326263/photo/happy-student-in-london.jpg?s=612x612&w=0&k=20&c=SQHdU5QJpdgZ65uYc-LkYIC1F-vgfEk5ID3kN3o8L-0="
                  alt=""
                  className="rounded-full h-48 w-48 mx-auto"
                />
                <div className="text-center mt-5">
                  <div>Stone .G</div>
                  <h5 className="text-gray-800 px-5 text-center mt-5">
                    "The structured learning paths helped me focus and progress
                    quickly. The flexibility is unparalleled."
                  </h5>
                </div>
              </div>
              <div className="testimonial-card">
                <img
                  src="https://media.istockphoto.com/id/1144287280/photo/focused-african-student-looking-at-laptop-holding-book-doing-research.jpg?s=612x612&w=0&k=20&c=Ee2sGNsiZXbkCchKwZPX8Z9JDzcBscr4fGAjx5kDnUc="
                  alt=""
                  className="rounded-full h-52 w-52 mx-auto"
                />
                <div className="text-center mt-5">
                  <div>Gwen K.</div>
                  <h5 className="text-gray-800 px-5 text-center mt-5">
                    "The courses offered deep insights and practical knowledge.
                    I've grown both professionally and personally."
                  </h5>
                </div>
              </div>
              <div className="testimonial-card">
                <img
                  src="https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg?t=st=1715830841~exp=1715834441~hmac=2346133ec64dcee998aeefeb1d577beec37175baa1f0c5b0c16db1c232342ccf&w=996"
                  alt=""
                  className="rounded-full h-48 w-48 mx-auto"
                />
                <div className="text-center mt-5">
                  <div>Julie S.</div>
                  <h5 className="text-gray-800 px-5">
                    "Education goes beyond improving work skills; it's about
                    personal growth. E-learning empowers me to learn without
                    boundaries."
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackDevopsDevelopmentTestimonioals;

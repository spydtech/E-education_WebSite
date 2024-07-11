import React from "react";

const MeanStackDevelopmentTestimonioals = () => {
  return (
    <>
      <div className="md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="py-8">
          <h3 className="mt-3 font-extrabold text-violet-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-4xl font">
            Why people choose E-education for their career
          </h3>
          <p className="text-base text-gray-600 text-md font mt-4 pl-2">
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
                  src="https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg"
                  alt=""
                  className="rounded-full h-48 w-48 mx-auto"
                />
                <div className="text-center mt-5">
                  <div>Neha Kumals.</div>
                  <h5 className="text-gray-800 px-5 text-center mt-5">
                    "Having the flexibility to learn at my own speed and on my
                    own time has been incredible. I can study when it's most
                    convenient for me."
                  </h5>
                </div>
              </div>
              <div className="testimonial-card">
                <img
                  src="https://img.freepik.com/free-photo/young-tender-curly-girl-holding-documents_176420-239.jpg?t=st=1715830236~exp=1715833836~hmac=c8944d11f1810de4bb54a4acbdfb10c17b0087c83f953b6d09d4b60a896e6ca6&w=996"
                  alt=""
                  className="rounded-full h-52 w-52 mx-auto"
                />
                <div className="text-center mt-5">
                  <div>sara K.</div>
                  <h5 className="text-gray-800 px-5">
                    "The knowledge and skills I gained from my courses allowed
                    me to tackle an innovative project at my job with
                    confidence."
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
                  <div>Jane S.</div>
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

export default MeanStackDevelopmentTestimonioals;

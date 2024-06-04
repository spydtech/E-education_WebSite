import React from "react";

const JavascriptDevelopmentTestimonioals = () => {
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
                  src="https://media.istockphoto.com/id/1345182823/video/latin-hispanic-young-female-student-standing-looking-at-camera-headshot.jpg?s=640x640&k=20&c=VIkLTRV95KStDMZ1xJh1NOyDB9OmHrganX_75F8cLP0="
                  alt=""
                  className="rounded-full h-48 w-48 mx-auto"
                />
                <div className="text-center mt-5">
                  <div>Gwen k.</div>
                  <h5 className="text-gray-800 px-5">
                    "Having the flexibility to learn at my own speed and on my
                    own time has been incredible. I can study when it's most
                    convenient for me."
                  </h5>
                </div>
              </div>
              <div className="testimonial-card">
                <img
                  src="https://media.istockphoto.com/id/666619692/video/portrait-of-a-young-woman.jpg?s=640x640&k=20&c=V6NvqhHplZmF7Eg5G4qodhtwM9X8UHzNyamstk6D9CU="
                  alt=""
                  className="rounded-full h-52 w-52 mx-auto"
                />
                <div className="text-center mt-5">
                  <div>Savanah J.</div>
                  <h5 className="text-gray-800 px-5">
                    "The knowledge and skills I gained from my courses allowed
                    me to tackle an innovative project at my job with
                    confidence."
                  </h5>
                </div>
              </div>
              <div className="testimonial-card">
                <img
                  src="https://media.istockphoto.com/id/476228508/photo/close-up-of-female-college-student.jpg?s=612x612&w=0&k=20&c=d6ZCv3jSua8y9bCt0etvM8QI7M99KuTGS3oQsdU6c5A="
                  alt=""
                  className="rounded-full h-48 w-48 mx-auto"
                />
                <div className="text-center mt-5">
                  <div>Julious S.</div>
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

export default JavascriptDevelopmentTestimonioals;

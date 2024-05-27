import React from "react";

const NetworkSecurityBestPracticesHero = () => {
  return (
    <>
      {/* First Part */}
      <div>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKhq4jcFEdc4obx8mRinwJAejpfb34-Jt71zwUhUPqplgZCvA3GFfUgVETiA3bkLebYEFdq3Sti_1H1-8A-sTzGoogRcJB7SIb6Qv3kb1nSPKBw3al6cpj9Hi8VJecrGH6EApBKeatBY985fe2_Z0TqMJAQAFB52bGgLEPwlHbopYb9UN8p7hYnFtN/s728-rw-e30/network-security.png"
          className="md:lg:xl:w-screen md:lg:xl:h-screen md:lg:xl:block hidden"
        />
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 font-lora md:py-0">
          <h1 className="text-3xl font-semibold text-[#ec3400] xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Implement the Best Practices in Network Security
            </span>{" "}
            to Safeguard Your Business!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Equip your organization with the latest network security strategies
            and practices to protect against cyber threats. Partner with us to
            ensure your business remains secure and resilient...
          </p>

          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-orange-500 rounded-lg md:px-8 hover:bg-orange-700 group"
            >
              <span>Learn More</span>{" "}
            </a>
          </div>
        </div>
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://img.freepik.com/free-vector/professional-group-working-project_1262-19870.jpg?t=st=1716451730~exp=1716455330~hmac=fd01243d56f7ec3da7ef48d177d9989de62264b5b9f74f0b6e10b5c282f304b3&w=826"
            alt="Network Security Best Practices"
            width={500}
            height={488}
          />
        </div>
      </div>

      {/* Second Part */}
    </>
  );
};

export default NetworkSecurityBestPracticesHero;

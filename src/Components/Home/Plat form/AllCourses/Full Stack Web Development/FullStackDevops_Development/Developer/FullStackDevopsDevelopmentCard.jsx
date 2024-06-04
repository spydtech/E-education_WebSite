import React from "react";

const FullStackDevOpsDevelopmentCard = () => {
  return (
    <>
      <div className="max-w-screen-xl px-4 mx-auto mt-8 sm:mt-12 sm:px-6 md:mt-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg
              className="absolute top-0 hidden origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden"
              width={640}
              height={784}
              fill="none"
              viewBox="0 0 640 784"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x={118}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                y={72}
                width={640}
                height={640}
                className="text-gray-50"
                fill="currentColor"
              />
              <rect
                x={118}
                width={404}
                height={784}
                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              />
            </svg>
            <div className="relative justify-start hidden w-full lg:flex">
              <div className="flex justify-start  p-8 pr-8 text-base leading-relaxed text-[#25a244] bg-[#14213d]  rounded-lg shadow-lg xl:text-lg xl:pr-16">
                <pre>
                  <span className="text-white">
                    // Setting Up a Kubernetes Environment cluster
                  </span>
                  {"\n"}apiVersion: apps/v1
                  {"\n"}kind: Deployment
                  {"\n"}metadata:
                  {"\n"}
                  {"  "}name: nginx-deployment
                  {"\n"}spec:
                  {"\n"}
                  {"  "}replicas: 3{"\n"}
                  {"  "}selector:
                  {"\n"}
                  {"    "}matchLabels:
                  {"\n"}
                  {"      "}app: nginx
                  {"\n"}
                  {"  "}template:
                  {"\n"}
                  {"    "}metadata:
                  {"\n"}
                  {"      "}labels:
                  {"\n"}
                  {"        "}app: nginx
                  {"\n"}
                  {"    "}spec:
                  {"\n"}
                  {"      "}containers:
                  {"\n"}
                  {"      "}- name: nginx
                  {"\n"}
                  {"        "}image: nginx:1.14.2
                  {"\n"}
                  {"        "}ports:
                  {"\n"}
                  {"        "}- containerPort: 80
                  {"\n"}
                </pre>
              </div>
            </div>
          </div>
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base font-lora">
              Full Stack DevOps Development
            </div>
            <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-[#25a244] sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl font-lora">
              Next-Gen Full Stack DevOps
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Our Full Stack DevOps solutions are designed to help you navigate
              the complexities of modern software development. With our
              comprehensive courses, you will gain the knowledge and skills
              needed to implement DevOps practices that accelerate your delivery
              process, improve software quality, and enhance team collaboration.
              Join us to revolutionize your approach to software development and
              stay ahead in the competitive tech landscape.
            </p>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Enroll in our Full Stack DevOps courses today and take the first
              step towards a more efficient, reliable, and scalable software
              delivery process.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow font-lora">
                <a
                  href="/"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-[#25a244] border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackDevOpsDevelopmentCard;

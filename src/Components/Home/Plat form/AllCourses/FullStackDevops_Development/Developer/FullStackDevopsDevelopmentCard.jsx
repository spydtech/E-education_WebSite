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
              <div className="flex justify-start  p-8 pr-8 text-base leading-relaxed text-[#25a244] bg-gradient-to-r from-[#e8aa14] to-[#ff5714]  rounded-lg shadow-lg xl:text-lg xl:pr-16">
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
              Accelerate your software delivery process with our Full Stack
              DevOps solutions. From continuous integration and delivery to
              automated deployments, our comprehensive courses cover all aspects
              of DevOps practices to help you build, test, and release software
              faster and more reliably.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackDevOpsDevelopmentCard;

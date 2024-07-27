import React from "react";
import fullstackwebdevelopmentcard from "../../../../../../../../assets/WebDeveloper/fullstackwebdevelopmentcard.png";
import { MdArrowOutward } from "react-icons/md";

const WebDevelopmentCard = () => {
  return (
    <>
      <div className="max-w-screen-xl px-4  ml-6 mr-6 mx-auto mt-8 sm:mt-12 sm:px-6 md:mt-16">
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
              {/* <div className="flex justify-start inline-block p-8 pr-8 text-base leading-relaxed text-blue-400 bg-indigo-900 rounded-lg shadow-lg xl:text-lg xl:pr-16">
                <pre>
                  <span className="text-blue-100">// Create a Web page</span>
                  {"\n"}$tenant = Tenant::create();{"\n"}
                  $tenant-&gt;createDomain([
                  {"\n"}
                  {"  "}'domain' =&gt; 'acme.com',{"\n"}]);{"\n"}
                  {"\n"}
                  <span className="text-blue-100">
                    // Write your Web page like you're used to
                  </span>
                  {"\n"}Order::where('status', 'shipped')-&gt;get();{"\n"}
                  Cache::get('order_count');{"\n"}asset('logo.png');{"\n"}
                  dispatch(new SendOrderCreatedMail);
                </pre>
              </div> */}
              <img
                src={fullstackwebdevelopmentcard}
                alt="fullstackwebdevelopmentcard"
                className="w-[594px] h-[380px]"
              />
            </div>
          </div>
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left pl-8">
            {/* <div className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base font-lora">
              Full Stack Web Development
            </div> */}
            <h2 className="mt-1 text-4xl font-semibold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-4xl xl:text-4xl ">
              Next - Gen <span className=" text-[#F6AC14]">Full Stack</span>
              <br /> Web Development
            </h2>
            <p className="mt-3 text-base  text-[#0098F1] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl ">
              Elevate your digital presence with our comprehensive full-stack
              web development solutions. From robust backend architecture to
              engaging front-end interfaces, we empower your online presence
              with cutting-edge technologies and seamless user experiences.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              {/* <div className="rounded-md shadow font-lora"></div> */}
              <button
                // onClick={handleEnroll}
                className="bg-[#0098F1] text-white mt-5 w-[200px] h-[50px] font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95 flex items-center justify-center"
              >
                Enroll Now <MdArrowOutward className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopmentCard;

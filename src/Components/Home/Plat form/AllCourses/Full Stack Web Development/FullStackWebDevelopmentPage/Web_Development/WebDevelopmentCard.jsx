import React from "react";
// import nextgen from "../../../../../../assetss/fullstackwebdev/nextGen.png"
import Nextgen from "../../../../../../../assetss/fullstackwebdev/nextGen.png"

const WebDevelopmentCard = () => {
  return (
    <>
      <div className="max-w-screen-xl px-4 mx-auto mt-8 sm:mt-12 sm:px-6 md:mt-16">
        <div className="  lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="relative mt-8 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img src={Nextgen} alt="" className="" />
          </div>
          <div className="sm:text-center pt-6 md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left pl-4 mb-8">
            <div className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base font">
              Full Stack Web Development
            </div>
            <h2 className="mt-1  tracking-tight text-gray-900 sm:leading-none text-xl md:text-4xl lg:text-5xl font-bold ">
              Next-Gen <span className="text-[#F6AC14]">Full Stack</span> Web Development
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-md lg:text-lg xl:text-xl font">
              Elevate your digital presence with our comprehensive full-stack
              web development solutions. From robust backend architecture to
              engaging front-end interfaces, we empower your online presence
              with cutting-edge technologies and seamless user experiences.
            </p>

            <div className="mt-5 sm:mt-8 flex sm:justify-center lg:justify-start">

              
                <button
          
            className="mt-6 bg-[#0098F1] text-white   md:w-auto py-3 px-6 rounded transition-all hover:bg-[#007acc] active:scale-95 xl:lg:text-2xl xl:lg:w-[280px] xl:lg:h-[80px] md:text-xl">
            <a href="/"
               className=""
                >
                  Explore Now
                </a>
          </button>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default WebDevelopmentCard;

//  {/* <svg
//               className="absolute top-0 hidden origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden"
//               width={640}
//               height={784}
//               fill="none"
//               viewBox="0 0 640 784"
//             >
//               <defs>
//                 <pattern
//                   id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
//                   x={118}
//                   y={0}
//                   width={20}
//                   height={20}
//                   patternUnits="userSpaceOnUse"
//                 >
//                   <rect
//                     x={0}
//                     y={0}
//                     width={4}
//                     height={4}
//                     className="text-gray-200"
//                     fill="currentColor"
//                   />
//                 </pattern>
//               </defs>
//               <rect
//                 y={72}
//                 width={640}
//                 height={640}
//                 className="text-gray-50"
//                 fill="currentColor"
//               />
//               <rect
//                 x={118}
//                 width={404}
//                 height={784}
//                 fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
//               />
//             </svg>
//             <div className="relative justify-start hidden w-full lg:flex">
//               <div className="flex justify-start inline-block p-8 pr-8 text-base leading-relaxed text-blue-400 bg-indigo-900 rounded-lg shadow-lg xl:text-lg xl:pr-16">
//                 <pre>
//                   <span className="text-blue-100">// Create a Web page</span>
//                   {"\n"}$tenant = Tenant::create();{"\n"}
//                   $tenant-&gt;createDomain([
//                   {"\n"}
//                   {"  "}'domain' =&gt; 'acme.com',{"\n"}]);{"\n"}
//                   {"\n"}
//                   <span className="text-blue-100">
//                     // Write your Web page like you're used to
//                   </span>
//                   {"\n"}Order::where('status', 'shipped')-&gt;get();{"\n"}
//                   Cache::get('order_count');{"\n"}asset('logo.png');{"\n"}
//                   dispatch(new SendOrderCreatedMail);
//                 </pre>
//               </div>
//             // </div> */}

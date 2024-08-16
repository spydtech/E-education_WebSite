import React from "react";
import Nextgen from "../../../../../../../assetss/fullstackwebdev/nextGen.png";

const MeanStackDevelopmentCard = () => {
  return (
    <>

<div className="max-w-screen-xl px-4 mx-auto mt-8 sm:mt-12 sm:px-6 md:mt-16">
        <div className="  lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img src={Nextgen} alt="" className="" />
          </div>
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left pl-4 mb-8">
            <div className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base font">
            MEAN Stack Development
            </div>
            <h2 className="mt-1   tracking-tight text-gray-900 sm:leading-none text-xl md:text-4xl lg:text-5xl font-bold font">
              Next-Gen <span className="text-[#F6AC14]">   MEAN Stack</span> Development
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-md lg:text-lg xl:text-xl font">
            Elevate your digital presence with our comprehensive MEAN stack
              development solutions. From robust backend architecture to dynamic
              front-end interfaces, we empower your online presence with
              cutting-edge technologies and seamless user experiences.JavaScript
              is a multi-paradigm, dynamic language with types and operators,
              standard built-in objects, and methods
              </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
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

export default MeanStackDevelopmentCard;



// import React from "react";

// const MeanStackDevelopmentCard = () => {
//   return (
//     <>
//       <div className="max-w-screen-xl px-4 mx-auto mt-8 sm:mt-12 sm:px-6 md:mt-16">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//           <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
//             <svg
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
//               <div className="flex justify-start  p-8 pr-8 text-base leading-relaxed text-violet-900 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg xl:text-lg xl:pr-16">
//                 <pre>
//                   <span className="text-blue-100">// Create a MEAN app </span>
//                   {"\n"}const app = express();{"\n"}
//                   app.use(express.json());{"\n"}
//                   app.use(cors());{"\n"}
//                   {"\n"}
//                   <span className="text-blue-100">
//                     // Define your API endpoints
//                   </span>
//                   {"\n"}app.get('/api/orders', (req, res) =&gt; {"{"}
//                   {"\n"}
//                   {"  "}Order.find().then(orders =&gt; res.json(orders));{"\n"}
//                   {"}"});{"\n"}
//                   {"\n"}
//                   <span className="text-blue-100">// Start the server</span>
//                   {"\n"}app.listen(3000, () =&gt; {"{"}
//                   {"\n"}
//                   {"  "}console.log('Server is running on port 3000');{"\n"}
//                   {"}"});{"\n"}
//                 </pre>
//               </div>
//             </div>
//           </div>
//           <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
//             <div className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base font">
//               MEAN Stack Development
//             </div>
//             <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-violet-800 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl font">
//               Next-Gen MEAN Stack Development
//             </h2>
//             <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
//               Elevate your digital presence with our comprehensive MEAN stack
//               development solutions. From robust backend architecture to dynamic
//               front-end interfaces, we empower your online presence with
//               cutting-edge technologies and seamless user experiences.JavaScript
//               is a multi-paradigm, dynamic language with types and operators,
//               standard built-in objects, and methods
//             </p>

//             <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//               <div className="rounded-md shadow font">
//                 <a
//                   href="/"
//                   className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
//                 >
//                   Explore Now
//                 </a>
//               </div>
//               {/* <div className="mt-3 sm:mt-0 sm:ml-3">
//                 <a
//                   href=""
//                   className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 md:py-4 md:text-lg md:px-10"
//                 >
//                   Tutorial
//                 </a>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MeanStackDevelopmentCard;

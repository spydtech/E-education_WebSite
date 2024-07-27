import React from 'react';
// import image1 from '../assets/Learning.png';
import image1 from '../../../assetss/feature/Learning.png';
import image2 from '../../../assetss/feature/image001.png';
import image3 from '../../../assetss/feature/Easy-access.png';
import image4 from '../../../assetss/feature/Money.png';
import image5 from '../../../assetss/feature/InteractiveLearning.png';
import image6 from '../../../assetss/feature/GlobalConnectivity.png';

const features = [
  {
    image: image1,
    title: 'Flexibility',
    description: 'Learn at your own pace, on your own schedule. Whether you\'re a busy professional or a full-time student, E-education fits seamlessly into your lifestyle.',
  },
  {
    image: image2,
    title: 'Accessibility',
    description: 'Access high-quality learning resources anytime, anywhere. No commute, no geographical boundaries just knowledge at your fingertips.',
  },
  {
    image: image3,
    title: 'Diverse Courses',
    description: 'Explore a wide range of courses catering to every interest and skill level. From academic subjects to professional development, there\'s something for everyone.',
  },
  {
    image: image4,
    title: 'Affordability',
    description: 'E-education offers cost-effective learning solutions, ensuring you get value for your money. Say goodbye to expensive textbooks and hello to affordable education.',
  },
  {
    image: image5,
    title: 'Interactive Learning',
    description: 'Engage with interactive and multimedia-rich content. E-Education platforms often include videos, quizzes, and interactive assignments that enhance the learning experience.',
  },
  {
    image: image6,
    title: 'Global Connectivity',
    description: 'Connecting students across the globe through collaborative projects Exposing students to diverse cultures and perspectives through virtual exchanges.',
  },
];

function Features() {
  return (
    <div className="bg-opacity-30 bg-[#F6AC14] p-6">
      <h1 className="text-4xl font-lora text-center py-10">
        Feature of{" "}
        <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
          E-education
        </span>
      </h1>
      <div className='flex md:flex-row flex-col justify-center items-center'>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md w-full h-60 max-w-sm">
              <div className="flex items-center gap-4">
                <img src={feature.image} alt="Feature Icon" className="rounded-full border-4 border-[#0098f1] w-[75px] h-[75px]" />
                <h3 className="text-lg font-semibold text-[#0098f1] ">{feature.title}</h3>
              </div>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;


// import React from 'react';
// import image1 from '../assets/Learning.png';
// import image2 from '../assets/image001.png';
// import image3 from '../assets/Easy-access.png';
// import image4 from '../assets/Money.png';
// import image5 from '../assets/InteractiveLearning.png';
// import image6 from '../assets/GlobalConnectivity.png'
// function Features() {
//   return (
//     <div className="  bg-opacity-30 bg-[#F6AC14] p-6">
//       <h1 className="text-4xl font-lora text-center py-10">
//         Feature of{" "}
//         <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
//           E-education
//         </span>
//       </h1>
//       <div className='flex md:flex-row flex-col justify-center items-center'>
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4">

//         {/* Feature 1 */}

//           <div className="bg-white p-4 rounded-lg shadow-md w-full h-60 max-w-sm">
//             <div className="flex items-center gap-4">
//               <img src={image1} alt="Feature Icon" className="rounded-full border-4 border-[#0098f1] w-[75px] h-[75px]" />
//               <h3 className="text-xl font-semibold">Flexibility</h3>
//             </div>
//             <p className="mt-2">
//               Learn at your own pace, on your own schedule. Whether you're a busy professional or a full-time student, E-education fits seamlessly into your lifestyle.
//             </p>

//           </div>

//         {/* Feature 2 */}

//           <div className="bg-white p-4 rounded-lg shadow-md w-full h-60 max-w-sm">
//             <div className="flex items-center gap-4">
//               <img src={image2} alt="Feature Icon" className="rounded-full border-4 border-[#0098f1]  w-[75px] h-[75px]" />
//               <h3 className="text-lg font-semibold text-[var(--foreground)]">Accessibility</h3>
//             </div>
//             <p className="mt-2 text-[var(--muted-foreground)]">
//               Access high-quality learning resources anytime, anywhere. No commute, no geographical boundaries just knowledge at your fingertips.
//             </p>

//           </div>

//         {/* Feature 3 */}
//         <div className="col-span-1 flex justify-center">
//           <div className="bg-white p-4 rounded-lg shadow-md w-full h-60 max-w-sm">
//             <div className="flex items-center gap-4">
//               <img src= {image3} alt="Feature Icon" className="rounded-full border-4 border-[#0098f1] w-[75px] h-[75px]" />
//               <h3 className="text-lg font-semibold">Diverse Courses</h3>
//             </div>
//             <p className="mt-2">
//               Explore a wide range of courses catering to every interest and skill level. From academic subjects to professional development, there's something for everyone.
//             </p>

//           </div>
//         </div>
//         {/* Feature 4 */}

//         <div className="col-span-1 flex justify-center">
//           <div className="bg-white p-4 rounded-lg shadow-md w-full h-60 max-w-sm">
//             <div className="flex items-center gap-4">
//               <img src={image4} alt="Feature Icon" className="rounded-full border-4 border-[#0098f1] w-[75px] h-[75px]" />
//               <h3 className="text-lg font-semibold">Affordability</h3>
//             </div>
//             <p className="mt-2">
//               E-education offers cost-effective learning solutions, ensuring you get value for your money. Say goodbye to expensive textbooks and hello to affordable education.
//             </p>

//           </div>
//         </div>
//         {/* Feature 5 */}
//         <div className="col-span-1 flex justify-center">
//           <div className="bg-white p-4 rounded-lg shadow-md w-full h-60 max-w-sm">
//             <div className="flex items-center gap-4">
//               <img src={image5} alt="Feature Icon" className="rounded-full border-4 border-[#0098f1] w-[75px] h-[75px]" />
//               <h3 className="text-xl font-semibold text-center">Interactive Learning</h3>
//             </div>
//             <p className="mt-2 text-[var(--muted-foreground)]">
//               Engage with interactive and multimedia-rich content. E-Education platforms often include videos, quizzes, and interactive assignments that enhance the learning experience.
//             </p>
//           </div>
//           </div>
//             {/* Feature 6 */}
//         <div className="col-span-1 flex justify-center">
//           <div className="bg-white p-4 rounded-lg shadow-md w-full h-60 max-w-sm">
//             <div className="flex items-center gap-4">
//               <img src={image6} alt="Feature Icon" className="rounded-full border-4 border-[#0098f1] w-[75px] h-[75px]" />
//               <h3 className="text-xl font-semibold text-center">Global Connectivity</h3>
//             </div>
//             <p className="mt-2 text-[var(--muted-foreground)]">
//             Connecting students across the globe through collaborative projects Exposing students to diverse cultures and perspectives through virtual exchanges.
//             </p>
//           </div>
//           </div>
//           </div>

//         </div>
//       </div>
//   );
// }

// export default Features;

// import React from "react";
// import image1 from "../assets/Learning.png";
// import image2 from "../assets/image001.png";
// import image3 from "../assets/Easy-access.png";
// import image4 from "../assets/Money.png";
// import image5 from "../assets/InteractiveLearning.png";
// import image6 from "../assets/GlobalConnectivity.png";

// const features = [
//   {
//     image: image1,
//     title: "Flexibility",
//     description:
//       "Learn at your own pace, on your own schedule. Whether you're a busy professional or a full-time student, E-education fits seamlessly into your lifestyle.",
//   },
//   {
//     image: image2,
//     title: "Accessibility",
//     description:
//       "Access high-quality learning resources anytime, anywhere. No commute, no geographical boundaries just knowledge at your fingertips.",
//   },
//   {
//     image: image3,
//     title: "Diverse Courses",
//     description:
//       "Explore a wide range of courses catering to every interest and skill level. From academic subjects to professional development, there's something for everyone.",
//   },
//   {
//     image: image4,
//     title: "Affordability",
//     description:
//       "E-education offers cost-effective learning solutions, ensuring you get value for your money. Say goodbye to expensive textbooks and hello to affordable education.",
//   },
//   {
//     image: image5,
//     title: "Interactive Learning",
//     description:
//       "Engage with interactive and multimedia-rich content. E-Education platforms often include videos, quizzes, and interactive assignments that enhance the learning experience.",
//   },
//   {
//     image: image6,
//     title: "Global Connectivity",
//     description:
//       "Connecting students across the globe through collaborative projects Exposing students to diverse cultures and perspectives through virtual exchanges.",
//   },
// ];

// function Features() {
//   return (
//     <div className="bg-opacity-20 bg-[#F6AC14] p-6 ">
//       <h1 className="  text-4xl font-semibold text-center py-10">
//         Features of{" "}
//         <span className="   bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
//           E-education
//         </span>
//       </h1>

//       <div className="grid  items-center gap-4 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3  ">
//         {features.map((feature, index) => (
//           <div key={index} className="flex justify-center ">
//             <div className="bg-white p-4 items-center  rounded-lg shadow-md w-full h-60 max-w-sm">
//               <div className="flex gap-4 items-start">
//                 <div className="rounded-full flex items-center justify-center  border-4 border-[#0098f1] w-[75px] h-[75px]">
//                 <img src={feature.image} alt="Feature Icon" className="w-[75%] " />
//                 </div>
//                 <h3 className="text-2xl text-[#0098f1] pt-4 font-semibold">
//                   {feature.title}
//                 </h3>
//               </div>
//               <p className="mt-2">{feature.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Features;

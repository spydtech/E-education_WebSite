// import React from "react";
import React, { useState, useEffect } from "react";
// import DotnetSuccess from "../../DotnetSuccess/DotnetSuccess3.jpg";
import DotnetSuccess from "../../../../../../assets/success.png";
import company from "../../../../../../assets/company.png";
import webcertificate from "../../../../../../assets/webcertificate.png";
import { ImQuotesLeft } from "react-icons/im";

function SuccessStory() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative  flex flex-col justify-center items-center bg-white ">
    {/* Background Image */}
  
    {/* Content */}
    <div className="text-center mb-8 bg-white rounded-lg p-8 shadow-lg border border-gray-200">
      <h1
        className="text-4xl  pb-4"
          style={{ fontStyle: "italic", color: "#f6ac14", fontSize: "30px" }}
        >
          The Success Story of{" "}
          <span className="text-[#0098F1]" style={{ fontFamily: "Arial" }}>
            Ethan
          </span>
        </h1>

        <p className="text-[#0098F1] mb-4 mx-4 text-justify">
          Ethan embarked on his journey with a clear vision and <br />{" "}
          unwavering determination.
          <br /> Despite encountering numerous obstacles, he never faltered.
          <br /> Through relentless perseverance and unyielding resilience
          <br /> Ethan's relentless pursuit of his dreams inspires us all.
          <br /> He began his adventure with passion and unwavering resolve.
          <br /> In the face of adversity, he stood firm and persevered.
        </p>
        <button className="bg-[#0098F1] hover:bg-[#f6ac14] text-white py-2 px-4 rounded-md">
          Start your success story
        </button>
      </div>
    </div>
  );
}

export default SuccessStory;


// <div
//         className="relative bg-cover bg-center w-96 h-96 mb-4 mt-4 sm:w-80 sm:h-80 md:w-96 md:h-96"
//         style={{
//           backgroundImage: `url(https://media.istockphoto.com/id/1310896133/photo/happy-smiling-afro-businessman-using-laptop-at-the-desk-in-office.jpg?s=612x612&w=0&k=20&c=QUQpwqaaPswBIJB6_lk5xU6HY_RevWNSwcqAErPZsOc=)`,
//           backgroundPosition: "top ",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {isLargeScreen && (
//           <>
//             {/* Company Background Strip */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 marginLeft: "400px",
//                 transform: "translateX(-50%)",
//                 display: "flex",
//                 alignItems: "center",
//                 backgroundColor: "white",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 zIndex: 1,
//                 height: "40px",
//                 width: "120px",
//               }}
//             >
//               <img
//                 src={company}
//                 alt="company"
//                 style={{
//                   height: "30px",
//                   width: "30px",
//                 }}
//               />
//               <p style={{ marginLeft: "10px", fontSize: "10px" }}>
//                 finished
//                 <br /> kotlin track
//               </p>
//             </div>

//             {/* Web Developer Certificate */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "60px",
//                 left: "-50px",
//                 display: "flex",
//                 alignItems: "center",
//                 backgroundColor: "white",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 zIndex: 1,
//                 height: "40px",
//                 width: "160px",
//               }}
//             >
//               <img
//                 src={webcertificate}
//                 alt="webdeveloper"
//                 style={{
//                   height: "30px",
//                   width: "30px",
//                 }}
//               />
//               <p style={{ marginLeft: "0px", fontSize: "10px" }}>
//                 full stack .net
//                 <br /> certificate
//               </p>
//             </div>

//             {/* ImQuotesLeft Strip */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 left: "10px",
//                 display: "flex",
//                 alignItems: "center",
//                 backgroundColor: "white",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 zIndex: 1,
//                 height: "40px",
//                 width: "60px",
//               }}
//             >
//               <ImQuotesLeft
//                 style={{
//                   color: "skyblue",
//                   fontSize: "20px",
//                   marginBottom: "10px",
//                 }}
//               />
//               <p
//                 style={{ marginLeft: "10px", color: "white", fontSize: "14px" }}
//               ></p>
//             </div>
//           </>
//         )}
//       </div>
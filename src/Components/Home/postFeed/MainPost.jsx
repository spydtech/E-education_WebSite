// import React from "react";
// import LeftSide from "./LeftSide";
// import Post from "./Post";
// import RightSide from "./RightSide";
// const MainPost = () => {
//   return (
//     <div className="grid-cols-1  w-auto grid lg:grid-cols-3  gap-4 justify-between mx-auto p-2  py-2">
//       <div className="bg-yellow-400 w-[300px] ">
//         <LeftSide />
//       </div>
//       <div className=" lg:mt-0 mt-96 w-[600px] mx-4 ">
//         <Post />
//       </div>
//       <div className=" bg-blue-400">
//         <RightSide />
//       </div>
//     </div>
//   );
// };

// export default MainPost;
import React from "react";
import LeftSide from "./LeftSide";
import Post from "./Post";
import RightSide from "./RightSide";
import Navbar from "../../Navbar";

const MainPost = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4   lg:w-auto  p-2 gap-4">
        {/* Left Side */}
        <div className=" lg:mt-0 mt-20 ld:block flex justify-center ">
          <LeftSide />
        </div>

        {/* Middle Post Section */}
        <div className="   lg:mx-0">
          <Post />
        </div>

        {/* Right Side */}
        <div className=" absolute right-3  ">
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default MainPost;

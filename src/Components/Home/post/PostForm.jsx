// import React, { useState } from 'react';
// import { FaRegImage, FaVideo } from "react-icons/fa";

// // Post form component
// const PostForm = ({ onSubmit }) => {
//     const [message, setMessage] = useState('');
//     const [image, setImage] = useState(null);
//     const [video, setVideo] = useState(null);
//     const [taggedUsers, setTaggedUsers] = useState([]);
//     const [showSymbols, setShowSymbols] = useState(false); // State to control visibility of symbol menu
  
//     const handleChange = (e) => {
//         setMessage(e.target.value);
//     };
  
//     const handleImageChange = (e) => {
//       const file = e.target.files[0];
//       setImage(file);
//     };
  
//     const handleVideoChange = (e) => {
//       const file = e.target.files[0];
//       setVideo(file);
//     };
  
//     const handleTaggedUserChange = (e) => {
//       // Implement logic to handle tagged users
//     };

//     const handleSymbolClick = (symbol) => {
//       setMessage(prevMessage => prevMessage + symbol); // Append symbol to message
//     };

//     const handleShowSymbols = () => {
//       setShowSymbols(!showSymbols); // Toggle symbol menu visibility
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const currentTime = new Date();
//       // Implement logic to submit post data
//       onSubmit({ message, image, video, taggedUsers, timestamp: currentTime  });
//       // Reset form fields
//       setMessage('');
//       setImage(null);
//       setVideo(null);
//       setTaggedUsers([]);
//     };
  
//     return (
//       <form onSubmit={handleSubmit} className=" p-2 mb-4">
//         <textarea
//           value={message}
//           onChange={handleChange}
//           placeholder="What's on your mind?"
//           className="w-full resize-none border rounded-xl p-2 mb-2"
//           rows="3"
//         ></textarea>
//         <div className="flex text-2xl gap-5">
//           <label htmlFor="imageInput" className="mb-2 cursor-pointer">
//             <FaRegImage />
//           </label>
//           <input
//             type="file"
//             id="imageInput"
//             accept="image/*"
//             onChange={handleImageChange}
//             style={{ display: "none" }}
//           />

//           <label htmlFor="videoInput" className="mb-2 cursor-pointer">
//             <FaVideo />
//           </label>
//           <input
//             type="file"
//             id="videoInput"
//             accept="video/*"
//             onChange={handleVideoChange}
//             style={{ display: "none" }}
//           />
//            <div className="flex gap-2">
//         <div className="flex items-center cursor-pointer">
//             <span onClick={handleShowSymbols}>😊</span>
//             {showSymbols && (
//               <div>
//                 <span onClick={() => handleSymbolClick('😀')}>😀</span>
// <span onClick={() => handleSymbolClick('😁')}>😁</span>
// <span onClick={() => handleSymbolClick('😂')}>😂</span>
// <span onClick={() => handleSymbolClick('🤣')}>🤣</span>
// <span onClick={() => handleSymbolClick('😃')}>😃</span>
// <span onClick={() => handleSymbolClick('😄')}>😄</span>
// <span onClick={() => handleSymbolClick('😅')}>😅</span>
// <span onClick={() => handleSymbolClick('😆')}>😆</span>
// <span onClick={() => handleSymbolClick('😉')}>😉</span>
// <span onClick={() => handleSymbolClick('😊')}>😊</span>
// <span onClick={() => handleSymbolClick('😋')}>😋</span>
// <span onClick={() => handleSymbolClick('😎')}>😎</span>
// <span onClick={() => handleSymbolClick('😍')}>😍</span>
// <span onClick={() => handleSymbolClick('😘')}>😘</span>
// <span onClick={() => handleSymbolClick('🥰')}>🥰</span>
// <span onClick={() => handleSymbolClick('😗')}>😗</span>
// <span onClick={() => handleSymbolClick('😙')}>😙</span>
// <span onClick={() => handleSymbolClick('😚')}>😚</span>
// <span onClick={() => handleSymbolClick('☺️')}>☺️</span>
// <span onClick={() => handleSymbolClick('🙂')}>🙂</span>
// <span onClick={() => handleSymbolClick('🤗')}>🤗</span>
// <span onClick={() => handleSymbolClick('🤩')}>🤩</span>
// <span onClick={() => handleSymbolClick('🤔')}>🤔</span>
// <span onClick={() => handleSymbolClick('🤨')}>🤨</span>
// <span onClick={() => handleSymbolClick('😐')}>😐</span>
// <span onClick={() => handleSymbolClick('😑')}>😑</span>
// <span onClick={() => handleSymbolClick('😶')}>😶</span>
// <span onClick={() => handleSymbolClick('😏')}>😏</span>
// <span onClick={() => handleSymbolClick('😒')}>😒</span>
// <span onClick={() => handleSymbolClick('🙄')}>🙄</span>
// <span onClick={() => handleSymbolClick('😬')}>😬</span>
// <span onClick={() => handleSymbolClick('🤥')}>🤥</span>
// <span onClick={() => handleSymbolClick('😌')}>😌</span>
// <span onClick={() => handleSymbolClick('😔')}>😔</span>
// <span onClick={() => handleSymbolClick('😪')}>😪</span>
// <span onClick={() => handleSymbolClick('🤤')}>🤤</span>
// <span onClick={() => handleSymbolClick('😴')}>😴</span>
// <span onClick={() => handleSymbolClick('😷')}>😷</span>
// <span onClick={() => handleSymbolClick('🤒')}>🤒</span>
// <span onClick={() => handleSymbolClick('🤕')}>🤕</span>
// <span onClick={() => handleSymbolClick('🤢')}>🤢</span>
// <span onClick={() => handleSymbolClick('🤮')}>🤮</span>
// <span onClick={() => handleSymbolClick('🤧')}>🤧</span>
// <span onClick={() => handleSymbolClick('🥵')}>🥵</span>
// <span onClick={() => handleSymbolClick('🥶')}>🥶</span>
// <span onClick={() => handleSymbolClick('🥴')}>🥴</span>
// <span onClick={() => handleSymbolClick('😵')}>😵</span>
// <span onClick={() => handleSymbolClick('🤯')}>🤯</span>
// <span onClick={() => handleSymbolClick('🤠')}>🤠</span>
// <span onClick={() => handleSymbolClick('🥳')}>🥳</span>
// <span onClick={() => handleSymbolClick('😎')}>😎</span>
// <span onClick={() => handleSymbolClick('🤓')}>🤓</span>
// <span onClick={() => handleSymbolClick('🧐')}>🧐</span>
// <span onClick={() => handleSymbolClick('😕')}>😕</span>
// <span onClick={() => handleSymbolClick('😟')}>😟</span>
// <span onClick={() => handleSymbolClick('🙁')}>🙁</span>
// <span onClick={() => handleSymbolClick('☹️')}>☹️</span>
// <span onClick={() => handleSymbolClick('😮')}>😮</span>
// <span onClick={() => handleSymbolClick('😯')}>😯</span>
// <span onClick={() => handleSymbolClick('😲')}>😲</span>
// <span onClick={() => handleSymbolClick('😳')}>😳</span>
// <span onClick={() => handleSymbolClick('🥺')}>🥺</span>
// <span onClick={() => handleSymbolClick('😦')}>😦</span>
// <span onClick={() => handleSymbolClick('😧')}>😧</span>
// <span onClick={() => handleSymbolClick('😨')}>😨</span>
// <span onClick={() => handleSymbolClick('😰')}>😰</span>
// <span onClick={() => handleSymbolClick('😥')}>😥</span>
// <span onClick={() => handleSymbolClick('😢')}>😢</span>
// <span onClick={() => handleSymbolClick('😭')}>😭</span>
// <span onClick={() => handleSymbolClick('😱')}>😱</span>
// <span onClick={() => handleSymbolClick('😖')}>😖</span>
// <span onClick={() => handleSymbolClick('😣')}>😣</span>
// <span onClick={() => handleSymbolClick('😞')}>😞</span>
// <span onClick={() => handleSymbolClick('😓')}>😓</span>
// <span onClick={() => handleSymbolClick('😩')}>😩</span>
// <span onClick={() => handleSymbolClick('😫')}>😫</span>
// <span onClick={() => handleSymbolClick('🥱')}>🥱</span>
// <span onClick={() => handleSymbolClick('😤')}>😤</span>
// <span onClick={() => handleSymbolClick('😡')}>😡</span>
// <span onClick={() => handleSymbolClick('😠')}>😠</span>
// <span onClick={() => handleSymbolClick('🤬')}>🤬</span>
// <span onClick={() => handleSymbolClick('😈')}>😈</span>
// <span onClick={() => handleSymbolClick('👿')}>👿</span>
// <span onClick={() => handleSymbolClick('💀')}>💀</span>
// <span onClick={() => handleSymbolClick('☠️')}>☠️</span>
// <span onClick={() => handleSymbolClick('💩')}>💩</span>
// <span onClick={() => handleSymbolClick('🤡')}>🤡</span>
// <span onClick={() => handleSymbolClick('👹')}>👹</span>
// <span onClick={() => handleSymbolClick('👺')}>👺</span>
// <span onClick={() => handleSymbolClick('👻')}>👻</span>
// <span onClick={() => handleSymbolClick('👽')}>👽</span>
// <span onClick={() => handleSymbolClick('👾')}>👾</span>
// <span onClick={() => handleSymbolClick('🤖')}>🤖</span>
// <span onClick={() => handleSymbolClick('🎃')}>🎃</span>
// <span onClick={() => handleSymbolClick('😺')}>😺</span>
// <span onClick={() => handleSymbolClick('😸')}>😸</span>
// <span onClick={() => handleSymbolClick('😹')}>😹</span>
// <span onClick={() => handleSymbolClick('😻')}>😻</span>
// <span onClick={() => handleSymbolClick('😼')}>😼</span>
// <span onClick={() => handleSymbolClick('😽')}>😽</span>
// <span onClick={() => handleSymbolClick('🙀')}>🙀</span>
// <span onClick={() => handleSymbolClick('😿')}>😿</span>
// <span onClick={() => handleSymbolClick('😾')}>😾</span>

//               </div>
//             )}
//           </div>
//           <div className="flex items-center">
//             {/* <span> @ </span>
//             <span> # </span>
//             <span> 💼 </span> */}
//             {/* Add more symbols here */}
//           </div>
//         </div>
//         </div>
      
       
        
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         >
//           Post
//         </button>
//       </form>
//     );
// };

// export default PostForm;


import React, { useState } from 'react';
import { FaRegImage, FaVideo } from "react-icons/fa";
import Avatar from "./Avatar"
import { CiFaceSmile } from "react-icons/ci";

// Post form component
const PostForm = ({ onSubmit }) => {
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [taggedUsers, setTaggedUsers] = useState([]);
    const [showSymbols, setShowSymbols] = useState(false); // State to control visibility of symbol menu
  
    const handleChange = (e) => {
        setMessage(e.target.value);
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
  
    const handleVideoChange = (e) => {
      const file = e.target.files[0];
      setVideo(file);
    };
  
    const handleTaggedUserChange = (e) => {
      // Implement logic to handle tagged users
    };

    const handleSymbolClick = (symbol) => {
      setMessage(prevMessage => prevMessage + symbol); // Append symbol to message
    };

    const handleShowSymbols = () => {
      setShowSymbols(!showSymbols); // Toggle symbol menu visibility
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const currentTime = new Date();
      // Implement logic to submit post data
      onSubmit({ message, image, video, taggedUsers, timestamp: currentTime  });
      // Reset form fields
      setMessage('');
      setImage(null);
      setVideo(null);
      setTaggedUsers([]);
    };
  
    return (
      <form onSubmit={handleSubmit} className=" p-2 mb-4 border-2 shadow-lg">
         <div className="relative  mb-[-10%] left-2">
          <Avatar alt="User Avatar" />
        </div>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="What's on your mind?"
          className="w-full border-black   resize-none border rounded-xl p-2 mb-2 pl-12"
          rows="3"
        />
                                                       
          {/* <Avatar /> */}
         
        
        {/* <div className="absolute top-2 left-2 z-20">
        <Avatar alt="User Avatar" />
        </div> */}
        <div className="flex text-2xl gap-5">
          <label htmlFor="imageInput" className="mb-2 text-[#3a6ea5] cursor-pointer">
            <FaRegImage />
          </label>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />

          <label htmlFor="videoInput" className="mb-2 text-[#3a6ea5] cursor-pointer">
            <FaVideo />
          </label>
          <input
            type="file"
            id="videoInput"
            accept="video/*"
            onChange={handleVideoChange}
            style={{ display: "none" }}
          />
           <div className="flex gap-2">
        <div className="flex items-center mt-[-2%] cursor-pointer">
            <CiFaceSmile className='text-[#3a6ea5]' onClick={handleShowSymbols}>😊</CiFaceSmile>
            {showSymbols && (
              <div>
                <span onClick={() => handleSymbolClick('😀')}>😀</span>
<span onClick={() => handleSymbolClick('😁')}>😁</span>
<span onClick={() => handleSymbolClick('😂')}>😂</span>
<span onClick={() => handleSymbolClick('🤣')}>🤣</span>
<span onClick={() => handleSymbolClick('😃')}>😃</span>
<span onClick={() => handleSymbolClick('😄')}>😄</span>
<span onClick={() => handleSymbolClick('😅')}>😅</span>
<span onClick={() => handleSymbolClick('😆')}>😆</span>
<span onClick={() => handleSymbolClick('😉')}>😉</span>
<span onClick={() => handleSymbolClick('😊')}>😊</span>
<span onClick={() => handleSymbolClick('😋')}>😋</span>
<span onClick={() => handleSymbolClick('😎')}>😎</span>
<span onClick={() => handleSymbolClick('😍')}>😍</span>
<span onClick={() => handleSymbolClick('😘')}>😘</span>
<span onClick={() => handleSymbolClick('🥰')}>🥰</span>
<span onClick={() => handleSymbolClick('😗')}>😗</span>
<span onClick={() => handleSymbolClick('😙')}>😙</span>
<span onClick={() => handleSymbolClick('😚')}>😚</span>
<span onClick={() => handleSymbolClick('☺️')}>☺️</span>
<span onClick={() => handleSymbolClick('🙂')}>🙂</span>
<span onClick={() => handleSymbolClick('🤗')}>🤗</span>
<span onClick={() => handleSymbolClick('🤩')}>🤩</span>
<span onClick={() => handleSymbolClick('🤔')}>🤔</span>
<span onClick={() => handleSymbolClick('🤨')}>🤨</span>
<span onClick={() => handleSymbolClick('😐')}>😐</span>
<span onClick={() => handleSymbolClick('😑')}>😑</span>
<span onClick={() => handleSymbolClick('😶')}>😶</span>
<span onClick={() => handleSymbolClick('😏')}>😏</span>
<span onClick={() => handleSymbolClick('😒')}>😒</span>
<span onClick={() => handleSymbolClick('🙄')}>🙄</span>
<span onClick={() => handleSymbolClick('😬')}>😬</span>
<span onClick={() => handleSymbolClick('🤥')}>🤥</span>
<span onClick={() => handleSymbolClick('😌')}>😌</span>
<span onClick={() => handleSymbolClick('😔')}>😔</span>
<span onClick={() => handleSymbolClick('😪')}>😪</span>
<span onClick={() => handleSymbolClick('🤤')}>🤤</span>
<span onClick={() => handleSymbolClick('😴')}>😴</span>
<span onClick={() => handleSymbolClick('😷')}>😷</span>
<span onClick={() => handleSymbolClick('🤒')}>🤒</span>
<span onClick={() => handleSymbolClick('🤕')}>🤕</span>
<span onClick={() => handleSymbolClick('🤢')}>🤢</span>
<span onClick={() => handleSymbolClick('🤮')}>🤮</span>
<span onClick={() => handleSymbolClick('🤧')}>🤧</span>
<span onClick={() => handleSymbolClick('🥵')}>🥵</span>
<span onClick={() => handleSymbolClick('🥶')}>🥶</span>
<span onClick={() => handleSymbolClick('🥴')}>🥴</span>
<span onClick={() => handleSymbolClick('😵')}>😵</span>
<span onClick={() => handleSymbolClick('🤯')}>🤯</span>
<span onClick={() => handleSymbolClick('🤠')}>🤠</span>
<span onClick={() => handleSymbolClick('🥳')}>🥳</span>
<span onClick={() => handleSymbolClick('😎')}>😎</span>
<span onClick={() => handleSymbolClick('🤓')}>🤓</span>
<span onClick={() => handleSymbolClick('🧐')}>🧐</span>
<span onClick={() => handleSymbolClick('😕')}>😕</span>
<span onClick={() => handleSymbolClick('😟')}>😟</span>
<span onClick={() => handleSymbolClick('🙁')}>🙁</span>
<span onClick={() => handleSymbolClick('☹️')}>☹️</span>
<span onClick={() => handleSymbolClick('😮')}>😮</span>
<span onClick={() => handleSymbolClick('😯')}>😯</span>
<span onClick={() => handleSymbolClick('😲')}>😲</span>
<span onClick={() => handleSymbolClick('😳')}>😳</span>
<span onClick={() => handleSymbolClick('🥺')}>🥺</span>
<span onClick={() => handleSymbolClick('😦')}>😦</span>
<span onClick={() => handleSymbolClick('😧')}>😧</span>
<span onClick={() => handleSymbolClick('😨')}>😨</span>
<span onClick={() => handleSymbolClick('😰')}>😰</span>
<span onClick={() => handleSymbolClick('😥')}>😥</span>
<span onClick={() => handleSymbolClick('😢')}>😢</span>
<span onClick={() => handleSymbolClick('😭')}>😭</span>
<span onClick={() => handleSymbolClick('😱')}>😱</span>
<span onClick={() => handleSymbolClick('😖')}>😖</span>
<span onClick={() => handleSymbolClick('😣')}>😣</span>
<span onClick={() => handleSymbolClick('😞')}>😞</span>
<span onClick={() => handleSymbolClick('😓')}>😓</span>
<span onClick={() => handleSymbolClick('😩')}>😩</span>
<span onClick={() => handleSymbolClick('😫')}>😫</span>
<span onClick={() => handleSymbolClick('🥱')}>🥱</span>
<span onClick={() => handleSymbolClick('😤')}>😤</span>
<span onClick={() => handleSymbolClick('😡')}>😡</span>
<span onClick={() => handleSymbolClick('😠')}>😠</span>
<span onClick={() => handleSymbolClick('🤬')}>🤬</span>
<span onClick={() => handleSymbolClick('😈')}>😈</span>
<span onClick={() => handleSymbolClick('👿')}>👿</span>
<span onClick={() => handleSymbolClick('💀')}>💀</span>
<span onClick={() => handleSymbolClick('☠️')}>☠️</span>
<span onClick={() => handleSymbolClick('💩')}>💩</span>
<span onClick={() => handleSymbolClick('🤡')}>🤡</span>
<span onClick={() => handleSymbolClick('👹')}>👹</span>
<span onClick={() => handleSymbolClick('👺')}>👺</span>
<span onClick={() => handleSymbolClick('👻')}>👻</span>
<span onClick={() => handleSymbolClick('👽')}>👽</span>
<span onClick={() => handleSymbolClick('👾')}>👾</span>
<span onClick={() => handleSymbolClick('🤖')}>🤖</span>
<span onClick={() => handleSymbolClick('🎃')}>🎃</span>
<span onClick={() => handleSymbolClick('😺')}>😺</span>
<span onClick={() => handleSymbolClick('😸')}>😸</span>
<span onClick={() => handleSymbolClick('😹')}>😹</span>
<span onClick={() => handleSymbolClick('😻')}>😻</span>
<span onClick={() => handleSymbolClick('😼')}>😼</span>
<span onClick={() => handleSymbolClick('😽')}>😽</span>
<span onClick={() => handleSymbolClick('🙀')}>🙀</span>
<span onClick={() => handleSymbolClick('😿')}>😿</span>
<span onClick={() => handleSymbolClick('😾')}>😾</span>

              </div>
            )}
          </div>
          
          <div className="flex items-center">
            {/* <span> @ </span>
            <span> # </span>
            <span> 💼 </span> */}
            {/* Add more symbols here */}
          </div>
          <button
          type="submit"
          className="bg-[#3a6ea5] text-lg justify-end ml-[12rem] text-white px-4  rounded-md hover:bg-[#e0afa0] "
        >
          Post
        </button>
        </div>
        </div>
      
       
        
       
      </form>
    );
};

export default PostForm;
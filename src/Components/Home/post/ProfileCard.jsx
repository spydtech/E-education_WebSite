// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Post from './Post';

// function ProfileCard({ posts = [] }) {
//   const [showFeeds, setShowFeeds] = useState(false);

//   const handleFeedsClick = () => {
//     setShowFeeds(!showFeeds);
//   };

//     const userData = [
//         {
//           id: 1,
//           image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
//           name: 'Anna Wilson',
//           role: 'Developer',
//           phone: '+123-458-784',
//           email: 'smkys@gmail.com',
//         },
//         // Add more users if needed
//       ];

// //       const [userData, setUserData] = useState([]);

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       const response = await fetch('https://api.example.com/users');
// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }
// //       const data = await response.json();
// //       setUserData(data);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

//   return (
//     <div className='p-5'>
//        <h1 className='text-xl'>Profile</h1>
//       {userData.map(user => (
//         <div
//           key={user.id}
//           className="profile-card w-[300px] pt-5 rounded-md shadow-xl   cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
//         >
//           {/* Avatar and other profile info */}
//           <img 
//              src={user.image}
//              alt='user'
//              className='w-[100px] h-[100px] rounded-full'
//              />
//           <div className="headings text-center leading-4">
//             <p className="text-xl font-serif font-semibold text-[#434955]">
//               {user.name}
//             </p>
//             <p className="text-sm font-semibold text-[#434955]">
//               {user.role}
//             </p>
//           </div>
//           <div className="w-full items-center justify-center flex">
//             <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 inline-flex gap-2 items-center justify-center border-b-[1.5px] border-b-stone-700 border-dotted text-xs font-semibold text-[#434955] pb-3">
//               {/* Contact info */}
//               <li>
//                 <svg
//                   id="phone"
//                   viewBox="0 0 24 24"
//                   className="fill-stone-700 group-hover:fill-[#58b0e0]"
//                   height="15"
//                   width="15"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   {/* Phone icon SVG */}
//                 </svg>
//                 <p>{user.phone}</p>
//               </li>
//               <li>
//                 <svg
//                   className="fill-stone-700 group-hover:fill-[#58b0e0]"
//                   height="15"
//                   width="15"
//                   id="mail"
//                   viewBox="0 0 32 32"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   {/* Mail icon SVG */}
//                 </svg>
//                 <p>{user.email}</p>
//               </li>
//             </ul>
//           </div>
//           <hr
//             className="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300"
//           />
//         </div>
//       ))}
//       <div className='flex p-2 gap-10 justify-center bg-white'>
//         <Link to="/Profile">
//         <button className='hover:underline'>Visit Profile</button>
//         </Link>
       
       
//         <button className='' onClick={handleFeedsClick}>Feeds</button>
//       </div>
//       {showFeeds && (
//         <div className='p-5 mt-5 bg-gray-100 rounded-md shadow-md'>
//           <h2 className='text-lg font-semibold'>Feeds</h2>
//           <ul className='list-disc list-inside'>
//             <div style={{ overflowY: 'scroll', maxHeight: '500px' }}>
//               {posts.map((post, index) => (
//                 <Post key={index} {...post} />
//               ))}
//             </div>
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ProfileCard


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

function ProfileCard({ posts = [] }) {
  const [showFeeds, setShowFeeds] = useState(false);

  const handleFeedsClick = () => {
    setShowFeeds(!showFeeds);
  };

    const userData = [
        {
          id: 1,
          image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
          name: 'Anna Wilson',
          role: 'Developer',
          phone: '+123-458-784',
          email: 'smkys@gmail.com',
        },
        // Add more users if needed
      ];

//       const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://api.example.com/users');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setUserData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

  return (
    <div className='p-5'>
       
      {userData.map(user => (
        <div
          key={user.id}
          className="profile-card border-2 shadow-lg md:w-[300px] pt-5 rounded-md   cursor-pointer snap-start shrink-0 bg-[#e0afa0] flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
        >
         <h1 className='text-xl text-white'>Profile</h1>
          {/* Avatar and other profile info */}
          <img 
             src={user.image}
             alt='user'
             className='w-[100px] h-[100px] rounded-full'
             />
          <div className="headings text-center leading-4">
            <p className="text-xl font-serif font-semibold text-[#434955]">
              {user.name}
            </p>
            <p className="text-sm font-semibold text-[#434955]">
              {user.role}
            </p>
          </div>
          <div className="w-full items-center justify-center flex">
            <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 inline-flex gap-2 items-center justify-center border-b-[1.5px] border-b-stone-700 border-dotted text-xs font-semibold text-[#434955] pb-3">
              {/* Contact info */}
              <li>
                <svg
                  id="phone"
                  viewBox="0 0 24 24"
                  className="fill-stone-700 group-hover:fill-[#58b0e0]"
                  height="15"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Phone icon SVG */}
                </svg>
                <p>{user.phone}</p>
              </li>
              <li>
                <svg
                  className="fill-stone-700 group-hover:fill-[#58b0e0]"
                  height="15"
                  width="15"
                  id="mail"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Mail icon SVG */}
                </svg>
                <p>{user.email}</p>
              </li>
            </ul>
          </div>
          <hr
            className="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300"
          />
        </div>
      ))}
      <div className='flex p-2 gap-10 md:w-[300px]  justify-center bg-white border-2 shadow-lg'>
        <Link to="/Profile">
        <button className='hover:underline'>Visit Profile</button>
        </Link>
       
       
        <button className='hover:underline' onClick={handleFeedsClick}>Feeds</button>
      </div>
      {showFeeds && (
        <div className='p-5 mt-5 bg-gray-100 rounded-md shadow-md'>
          <h2 className='text-lg font-semibold'>Feeds</h2>
          
          <ul className='list-disc list-inside'>
            <div style={{ overflowY: 'scroll', maxHeight: '500px' }}>
              {posts.map((post, index) => (
                <Post key={index} {...post} />
              ))}
            </div>
          </ul>
        </div>
      )}
    </div>
  )
}

export default ProfileCard
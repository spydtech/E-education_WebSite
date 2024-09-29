import React, { useEffect } from "react";

const MyLearning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const dummyVideos = [
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video.",
      url: "https://res.cloudinary.com/dfftgkkev/image/upload/v1727173712/Rectangle_1_z6u7pa.png",
    },
    {
      id: 2,
      title: "Sample Video 2",
      description:
        "Sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video.",
      url: "https://res.cloudinary.com/dfftgkkev/image/upload/v1727173712/Rectangle_1_z6u7pa.png",
    },
    {
      id: 3,
      title: "Sample Video 3",
      description:
        "Sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video sample video.",
      url: "https://res.cloudinary.com/dfftgkkev/image/upload/v1727173712/Rectangle_1_z6u7pa.png",
    },
  ];
  
  return (
    <>
    <h2 className="text-4xl font-bold text-center py-8 my-10">
  Embark on Your <span className="bg-gradient-to-r from-[#F6AC14] to-[#0098F1] bg-clip-text text-transparent">Learning Journey</span> with MyLearning Courses
</h2>

<div className="video-container mt-4 mx-4 sm:mx-5">
  {dummyVideos.map((video, index) => (
    <div
      key={index}
      className="video-wrapper rounded-md p-4 flex flex-col sm:flex-row items-start mb-4"
    >
      <div className="image mb-4 sm:mb-0 sm:mr-4 flex-shrink-0 w-full sm:w-2/5">
        <img
          src={video.url}
          alt={video.title}
          className="w-full h-auto rounded-md lg:h-[220px] sm:h-auto" // Adjust height on large screens
          style={{ aspectRatio: "16 / 9" }} // Maintain aspect ratio
        />
      </div>
      <div className="video-details flex-grow flex flex-col justify-between w-full sm:w-3/5">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#0098F1]">{video.title}</h3>
          <p className="text-base sm:text-lg text-gray-500 mb-2">{video.description}</p>
        </div>
        <button className="bg-gradient-to-r from-[#0098F1] to-[#00588B] text-white h-[40px] w-full sm:w-[120px] mt-4">
          Start Now
        </button>
      </div>
    </div>
  ))}
</div>


    </>
  );
};

export default MyLearning;

import React from "react";

const MyLearning = () => {
  const dummyVideos = [
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },

    {
      id: 2,
      title: "Sample Video 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample2.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },
    {
      id: 1,
      title: "Sample Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample1.mp4",
    },

    {
      id: 2,
      title: "Sample Video 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisi id consequat vestibulum, nunc ligula laoreet nisi, eu dictum lorem est vel eros. Nulla facilisi. Integer ut augue ut arcu consequat vulputate nec eget velit.",
      url: "https://www.samplevideo.com/sample2.mp4",
    },
    // Add more dummy videos as needed
  ];
  return (
    <>
      <h2 className="text-2xl font-bold text-center  font-lora py-8">
        Embark on Your Learning Journey with MyLearning Courses
      </h2>
      <div className="video-container mt-4- ml-5">
        {dummyVideos.map((video, index) => (
          <div
            key={index}
            className="video-wrapper bg-white shadow-md rounded-md p-4 flex flex-col sm:flex-row items-center mb-4"
          >
            <div className="video mb-4 sm:mr-4">
              <video
                className="w-full h-auto"
                style={{ height: "32vh" }}
                controls
              >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-details flex-grow">
              <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{video.description}</p>
              <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
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

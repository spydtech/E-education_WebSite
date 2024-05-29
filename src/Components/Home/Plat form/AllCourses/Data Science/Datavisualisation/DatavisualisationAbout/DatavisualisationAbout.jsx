import React from "react";
// import dataVisualizationImage1 from "../../../../../../assets/datavisualization/datavisualization_image1.jpg";
// import dataVisualizationImage2 from "../../../../../../assets/datavisualization/datavisualization_image2.jpg";

const DatavisualisationAbout = () => {
  return (
    <div className="mx-auto w-full md:lg:xl:pl-20 p-1 mb-8  bg-gradient-to-br from-blue-300 via-purple-500 to-pink-600">
      <div className="pt-0">
        <p className="text-pink-800 text-xl font-medium">
          About The Data Visualization Course
        </p>
      </div>
      <div className="py-2">
        <p className="text-6xl font-lora">
          Discover the
          <p className="text-violet-800 my-2">Data Visualization Program</p>
        </p>
      </div>

      <div className="flex flex-wrap -mx-4 items-center pb-6">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover object-center"
              src="https://media.istockphoto.com/id/1163818522/video/professional-young-african-businesswoman-dealing-with-finances-on-meeting.jpg?s=640x640&k=20&c=OPQmMM4sOgC3lDul0ssdo0IJKIWOw_VwnFEi8o256uY="
              alt="data-visualization1"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                Visualization Techniques
              </h2>
              <p className="text-gray-700">
                Learn various data visualization techniques including charts,
                graphs, maps, and more to represent data effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mr-16">
            <img
              className="w-full h-52 object-cover "
              src="https://media.istockphoto.com/id/1036906810/video/african-business-man-giving-a-presentation-in-a-glass-conference-room.jpg?s=640x640&k=20&c=hL4dB98tSpRVkQAQavjV099yOGX7AOW8PODqIZwVwcI="
              alt="data-visualization2"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Data Analysis Skills</h2>
              <p className="text-gray-700">
                Develop strong data analysis skills to interpret and derive
                meaningful insights from complex datasets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatavisualisationAbout;

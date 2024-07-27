import React from "react";


const DatavisualisationOutcomes = () => {
  return (
    <div className="mx-auto w-full md:lg:xl:pl-20 p-1  mb-8 bg-gradient-to-br from-blue-300 via-purple-500 to-pink-600">
      <div className="pt-0">
        <p className="text-pink-800 text-xl font-medium">
          About The Data Visualization Course
        </p>
      </div>
      <div className="py-2">
        <p className="md:text-6xl text-xl font">
          Explore the
          <p className="text-violet-800 my-2">Data Visualization Program</p>
        </p>
      </div>

      <div className="flex flex-wrap -mx-4 items-center pb-6">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover object-center"
              src="https://img.freepik.com/premium-vector/software-concept-system-data-monitoring-control-panel-dashboard-people-looking-diagrams_675567-1510.jpg?w=740"
              alt="data-visualization"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                Data Visualization Techniques
              </h2>
              <p className="text-gray-700">
                Learn various data visualization techniques including charts,
                graphs, maps, and more to represent data effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-52 object-cover"
              src="https://img.freepik.com/free-vector/dashboard-element-set-template_23-2148370472.jpg?t=st=1716440083~exp=1716443683~hmac=468bb9ab25b5519e38146f3b8658a5792073336452a5ac6e8e1cdc2d9cad63e6&w=740"
              alt="data-analysis"
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

export default DatavisualisationOutcomes;

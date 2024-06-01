/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Navbar from "../../Navbar";
import Certificate121 from "./Certificate121";
import IMG from "../../../assets/WorkSpace.png";
import Footer from "../../Home/footer/Footer";

function WSpace() {
  const [isBrowseProjectOpen, setIsBrowseProjectOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState({});

  const ExplorBrowseProject = [
    {
      image:
        "https://t3.ftcdn.net/jpg/02/88/80/38/360_F_288803822_0CJ8L3gr6w6nGnUeje6pCllCX7s986xz.jpg",
      title: "Data Science",
      timing: "7-9 hours (self-learning)",
      description:
        "Discover the transformative world of data science, from machine learning to big data analytics.",
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/02/86/02/67/360_F_286026740_xWkobcEk5g38qrH7cpfeImAnlUUSIrc5.jpg",
      title: "Business",
      timing: "5-7 hours (self-learning)",
      description:
        "Navigate the complexities of business strategy, finance, and leadership with expert-led courses.",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/06/17/88/90/360_F_617889061_ZO5zsPTfTmxTfcMG8spbnPHf4wfJMGLY.jpg",
      title: "Computer Science",
      timing: "6-8 hours (self-learning)",
      description:
        "Embark on a journey through algorithms, programming, and emerging technologies in computer science.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxlauEo4V1_Bnb172cQTKE-i1Uc_3nBcf7tuB9MqqHhKgxLftD-g1aFIJi7PqVMJrWpc&usqp=CAU",
      title: "Health",
      timing: "4-6 hours (self-learning)",
      description:
        "Explore the latest in healthcare innovations, wellness practices, and medical advancements.",
    },
    {
      image:
        "https://videohive.img.customer.envatousercontent.com/files/229501069/Preview_Image_Di.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=9d60d3dfa35cee5db662c381e886696f",
      title: "Social Science",
      timing: "5-7 hours (self-learning)",
      description:
        "Uncover insights into human behavior, societies, and cultural phenomena across diverse disciplines.",
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/02/86/02/67/360_F_286026740_xWkobcEk5g38qrH7cpfeImAnlUUSIrc5.jpg",
      title: "Personal Development",
      timing: "4-6 hours (self-learning)",
      description:
        "Invest in your personal growth and self-improvement through tailored development courses.",
    },
    {
      image:
        "https://ats.org/wp-content/uploads/2020/04/Index-High-Tech-Future-2400x1374.jpg",
      title: "Arts and Humanities",
      timing: "3-5 hours (self-learning)",
      description:
        "Immerse yourself in the beauty of arts, literature, and philosophical ideas from around the world.",
    },
  ];

  const openBrowseProject = () => {
    setIsBrowseProjectOpen(true);
  };

  const closeBrowseProject = () => {
    setIsBrowseProjectOpen(false);
  };

  const handleFileUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles((prevFiles) => ({
        ...prevFiles,
        [index]: file,
      }));
      setCompletedTasks((prevCount) => prevCount + 1);
    }
  };

  const progressBarWidth = `${
    (completedTasks / ExplorBrowseProject.length) * 100
  }%`;

  const awardCertificate = () => {
    if (completedTasks === ExplorBrowseProject.length) {
      alert(
        "Congratulations! You've completed all tasks and earned the certificate!"
      );
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold py-10 px-10  text-[#1e3a8a] text-center hover:underline">
        WorkSpace
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="px-10 ">
          <div className="p-5 border bg-white md:w-[500px] md:h-[250px] h-auto w-auto rounded text-gray-500">
            <div className="flex items-center">
              <div>
                <button
                  onClick={openBrowseProject}
                  href="#"
                  className="font-bold text-lg leading-none hover:underline text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  Browse your Projects
                </button>

                {isBrowseProjectOpen && (
                  <div className="fixed rounded-md inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
                    <div className="relative w-auto max-w-3xl mx-auto my-6 overflow-y-auto max-h-full">
                      <div className="bg-[#023047] rounded-lgs">
                        <div className="text-white text-2xl p-2">
                          Browse Projects
                        </div>
                        <div className="text-white p-2">
                          Projects give you real-world challenges to solve with
                          industry tools, and produce work samples that help you
                          demonstrate your capabilities and stand out.
                        </div>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg relative flex flex-col p-8">
                        <div className="grid grid-cols-1 gap-4">
                          {ExplorBrowseProject.map((course, index) => (
                            <div
                              key={index}
                              className="hover:shadow-2xl border h-[150px]"
                            >
                              <div className="flex justify-start items-start flex-row gap-8">
                                <div className="md:w-36 h-[35px] w-28">
                                  <img
                                    src={course.image}
                                    alt={course.title}
                                    className="rounded-lg"
                                  />
                                </div>
                                <div className="md:w-[500px] flex justify-center items-start flex-col pt-3 font-semibold text-gray-600 text-sm">
                                  <div>{course.description}</div>
                                  <div className="flex items-center gap-2">
                                    <div>{course.title}</div>
                                    <input
                                      type="file"
                                      onChange={(event) =>
                                        handleFileUpload(index, event)
                                      }
                                      className="hidden"
                                      id={`file-upload-${index}`}
                                    />
                                    <label
                                      htmlFor={`file-upload-${index}`}
                                      className="border-2 text-white bg-blue-900 p-2 cursor-pointer"
                                    >
                                      {uploadedFiles[index]
                                        ? "Completed"
                                        : "Upload file"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 text-white">
                          <button
                            className="bg-blue-800 p-2 w-[100px] text-white hover:bg-black"
                            onClick={() => {
                              closeBrowseProject();
                              awardCertificate();
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <h2 className="text-lg font-semibold">
                  Showcase your skills to recruiters with job-relevant projects
                </h2>
                <p>
                  Add projects here to demonstrate your technical expertise and
                  ability to solve real-world problems.
                </p>

                <h1 className="text-2xl text-[#581c87] font-semibold">
                  Work Progress
                </h1>
                <div className="w-full h-4 bg-gray-200 rounded-lg mt-4 relative">
                  <div
                    className="h-full bg-blue-500 rounded-lg"
                    style={{
                      width: progressBarWidth,
                      transition: "width 0.5s",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={IMG} />
        </div>
      </div>

      <Certificate121 />
      <Footer />
    </div>
  );
}

export default WSpace;

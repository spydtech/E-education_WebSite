import Navbar from "../Navbar";
import React, { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import Footer from "../Home/footer/Footer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../State/Auth/Action";

function Profile() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileName, setProfileName] = useState("");
  const [firstName, lastName] = profileName.split(" ");
  const [isOpen, setIsOpen] = useState(false);
  const [iseducationopen, setIsEducationOpen] = useState(false);
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);

  const [isBrowseProjectOpen, setIsBrowseProjectOpen] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('jwt'); // Fetch JWT token from local storage
    if (token && !auth) {
      dispatch(getUser(token));
    }
  }, [auth, dispatch]);

  useEffect(() => {
    if (auth) {
      setUserName(auth.userName || '');
      setUserEmail(auth.email || '')
      setFormData({
        fullName: auth.fullName || '',
        emailAddress: auth.emailAddress || '',
        mobileNumber: auth.mobileNumber || '',
        location: auth.location || '',
        profileImage: auth.profileImage || '', // Assuming profileImage is a URL
      });
    }
  }, [auth]);

  const openEducationModel = () => {
    setIsEducationOpen(true);
  };
  const closeEducationModel = () => {
    setIsEducationOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openBrowseProject = () => {
    setIsBrowseProjectOpen(true);
  };

  const closeBrowseProject = () => {
    setIsBrowseProjectOpen(false);
  };

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
      title: "Business. 5-7 hours (self-learning)",
      description:
        "Navigate the complexities of business strategy, finance, and leadership with expert-led courses.",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/06/17/88/90/360_F_617889061_ZO5zsPTfTmxTfcMG8spbnPHf4wfJMGLY.jpg",
      title: "Computer Science. 6-8 hours (self-learning)",
      description:
        "Embark on a journey through algorithms, programming, and emerging technologies in computer science.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxlauEo4V1_Bnb172cQTKE-i1Uc_3nBcf7tuB9MqqHhKgxLftD-g1aFIJi7PqVMJrWpc&usqp=CAU",
      title: "Health. 4-6 hours (self-learning)",
      description:
        "Explore the latest in healthcare innovations, wellness practices, and medical advancements.",
    },
    {
      image:
        "https://videohive.img.customer.envatousercontent.com/files/229501069/Preview_Image_Di.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=9d60d3dfa35cee5db662c381e886696f",
      title: "Social Science. 5-7 hours (self-learning)",
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
      title: "Arts and Humanities. 3-5 hours (self-learning)",
      description:
        "Immerse yourself in the beauty of arts, literature, and philosophical ideas from around the world.",
    },
  ];

  const firstLetter = firstName.charAt(0).toUpperCase();
  const secondLetter = lastName ? lastName.charAt(0).toUpperCase() : null;
  const combinedLetters = secondLetter
    ? firstLetter + secondLetter
    : firstName.slice(0, 1).toUpperCase();

  const [avatar, setAvatar] = useState(combinedLetters);

  const [removeImage, setRemoveimage] = useState(false);

  useEffect(() => {
    const hasStoredData = localStorage.getItem("hasStoredData");
    if (!hasStoredData) {
      const newData = { userName, userEmail, password, removeImage };
      console.log(removeImage); //false-store in LS
      const existingData =
        (localStorage.getItem("user")) || [];
      const updatedList = [...existingData, newData];
      localStorage.setItem("user", JSON.stringify(updatedList));
      localStorage.setItem("hasStoredData", true);
    }
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result);
      const formDataListJSON = localStorage.getItem("user");
      let formDataList = [];
      if (formDataListJSON) {
        formDataList = JSON.parse(formDataListJSON);
      }

      formDataList.forEach((user) => {
        user.removeImage = true;
      });

      localStorage.setItem("formDataList", JSON.stringify(formDataList));

      if (userEmail) {
        localStorage.setItem("image", reader.result);
      } else {
        alert("User email not found in local storage.");
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const formDataListJSON = localStorage.getItem("user");
    const formDataList = JSON.parse(formDataListJSON);

    const statusFromLocalStorage = formDataList[0]; //false-getFrom LS
    const avatarFromLocalStorage = localStorage.getItem("image");

    if (statusFromLocalStorage === true && avatarFromLocalStorage) {
      setAvatar(avatarFromLocalStorage);
    }
  }, [removeImage, userEmail]);

  useEffect(() => {
    const formDataListJSON = localStorage.getItem("user");
    const formDataList = JSON.parse(formDataListJSON);

    const statusFromLocalStorage = formDataList[0];

    console.log(" statusFromLocalStorage:" + statusFromLocalStorage);

    if (statusFromLocalStorage === false) {
      setAvatar(" ");
    }
  }, [removeImage, userEmail]);

  const createDefaultAvatar = (letter) => {
    return `data:image/svg+xml;base64,${window.btoa(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        viewBox="0 0 150 150"
      >
        <rect width="100%" height="100%" fill="#fff" />
        <text
          x="50%"
          y="50%"
          dy=".1em"
          dominant-baseline="middle"
          text-anchor="middle"
          font-family="Arial"
          font-size="96"
          fill="#000"
        >
          ${letter}
        </text>
      </svg>
    )}`;
  };
  const [fullName, setFullName] = useState("");

  const [gender, setGender] = useState("male");

  const handleSubmit = (e) => {
    e.preventDefault();


    const formDataListJSON = localStorage.getItem("formDataList");
    let formDataList = [];
    if (formDataListJSON) {
      formDataList = JSON.parse(formDataListJSON);
    }

    const userEmail = userEmail;
    const userIndex = formDataList.findIndex(
      (user) => user.email === userEmail
    );

    if (userIndex !== -1) {
      formDataList[userIndex] = {
        ...formDataList[userIndex],
        name: fullName,
        gender: gender,
      };

      const updatedFormDataListJSON = JSON.stringify(formDataList);
      localStorage.setItem("formDataList", updatedFormDataListJSON);

      setProfileName(fullName);

      setFullName("");

      setGender("");

      alert("Data stored successfully.");
    } else {
      alert("User not found in formDataList.");
    }
  };

  const handleImageRemove = () => {
    setAvatar(" ");

    const formDataListJSON = localStorage.getItem("formDataList");
    let formDataList = [];
    if (formDataListJSON) {
      formDataList = JSON.parse(formDataListJSON);
    }

    formDataList.forEach((user) => {
      user.removeImage = false;
    });

    localStorage.setItem("formDataList", JSON.stringify(formDataList));
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const generateYearOptions = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year.toString());
    }
    return years;
  };

  const years = generateYearOptions(1990, new Date().getFullYear());

  const profiles = [
    {
      id: 1,
      Email: "Emily Wilson",
      role: "Share Profile Link",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia Maiores et perferendis eaque.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/024/354/297/small_2x/business-woman-isolated-illustration-ai-generative-free-photo.jpg",
    },
  ];

  const [formData, setFormData] = useState({
    educationInstitute: "",
    degree: "",
    educationStartMonth: "",
    educationStartYear: "",
    graduationMonth: "",
    graduationYear: "",
    currentlyStudying: false,
  });

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("educationData", JSON.stringify(formData));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData1) => ({
      ...prevData1,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const generateYearOptions2 = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year.toString());
    }
    return years;
  };

  const years2 = generateYearOptions2(1990, new Date().getFullYear());

  return (
    <>
      <Navbar />
      {/* left cards */}

      {/* Map over the profiles and render each profile card */}
      <div className="flex flex-col md:flex-row bg-blue-100 justify-center items-center">
        <div>
          {profiles.map((profile) => (
            <div key={profile.id} className="flex">
              <div className="m-20 shadow-xl w-[300px] ">
                <div className="relative">
                  {/* Profile Image */}
                  <div className="py-5 p-10 px-20 bg-white rounded text-center text-gray-500 max-w-2xl">
                    <div className="flex space-x-2 -mr-4 ">
                      <h1 className="text-sm w-full">Personal Details</h1>
                      <div>
                        <CiEdit
                          className="text-2xl cursor-pointer"
                          onClick={() => setIsPopupOpen(true)}
                        />
                      </div>

                      {isPopupOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                          <div className="bg-white p-8 rounded-lg">
                            <a
                              onClick={() => setIsPopupOpen(false)}
                              className=" text-sm font-bold justify-end  ml-[80%] hover:underline hover:text-blue-600"
                            >
                              Close X
                            </a>
                            <h1 className="text-2xl font-bold mb-4">
                              Edit Profile
                            </h1>
                            <form onSubmit={handleSubmit}>
                              {/* Upload Image */}
                              <div className="mb-4  space-x-10 flex">
                                <div>
                                  <button
                                    onClick={() =>
                                      document
                                        .getElementById("avatarInput")
                                        .click()
                                    }
                                    className="p-2 text-white border rounded bg-blue-500 px-4"
                                  >
                                    Change Photo
                                  </button>
                                  <input
                                    type="file"
                                    id="avatarInput"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                    className="hidden"
                                  />
                                </div>

                                {/* Remove Image */}
                                {profile.imageUrl && (
                                  <div className="mb-4">
                                    <button
                                      onClick={handleImageRemove}
                                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                      Remove image
                                    </button>
                                  </div>
                                )}
                              </div>

                              {/* First Name */}
                              <div className="mb-4 flex gap-2">
                                <label
                                  htmlFor="firstName"
                                  className="block mb-2"
                                >
                                  First Name & Lastname:
                                </label>
                                <input
                                  required
                                  type="text"
                                  id="firstName"
                                  value={fullName}
                                  onChange={(e) => setFullName(e.target.value)}
                                  className="border rounded-lg p-2"
                                />
                              </div>
                              {/* Last Name */}

                              {/* Gender */}
                              <div className="mb-4 flex space-x-[7.5rem]">
                                <label htmlFor="gender" className="block mb-2">
                                  Gender:
                                </label>
                                <select
                                  id="gender"
                                  value={gender}
                                  onChange={(e) => setGender(e.target.value)}
                                  className="border rounded-lg p-2 px-16"
                                >
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>

                              <button className="bg-blue-500 text-start text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                Save
                              </button>
                            </form>
                            {/* Close Button */}
                          </div>
                        </div>
                      )}
                    </div>

                    <img
                      className="w-32 h-32  rounded-full mx-auto border-2 bg-gray-700 hover:border-gray-900"
                      src={
                        avatar === combinedLetters
                          ? createDefaultAvatar(combinedLetters)
                          : avatar
                      }
                      alt=""
                    />
                    {/* Image Upload Button (Hidden by default) */}
                    <input
                      type="file"
                      name="profile"
                      // id={upload_profile_${profile.imageUrl}}
                      hidden
                      required
                      className="absolute top-0 left-0 ml-10 w-32 h-32 opacity-0 cursor-pointer"
                    />
                    {/* Label to trigger file input */}
                    <label
                      // htmlFor={upload_profile_${profile.imageUrl}}
                      className="absolute top-10 left-[45%] w-32 h-32"
                    >
                      <div className=" rounded-full  text-center mt-4">
                        <svg
                          data-slot="icon"
                          className="w-6 h-5 hide hover:"
                          fill="none"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <h1 className="text-center font-bold p-2">{profileName}</h1>
                    <button className="py-2 p-2 text-lg border-2 border-blue-600">
                      {profile.role}
                    </button>
                    <p className="mt-2 text-sm text-gray-900 p-2">
                      <Link to="#" htmlFor="" className="text-blue-500">
                        Update Profile visibility
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* right cards */}
        <div className="pt-10 pl-10 pr-6 flex flex-col mb-8">
          <h1 className="text-2xl font-bold py-2">WorkSpace</h1>
          <div class="p-5 border bg-white rounded text-gray-500">
            <div class="flex items-center">
              <div class="">
                <button
                  onClick={openBrowseProject}
                  href="#"
                  class=" font-bold text-lg leading-none hover:underline text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  Browse your Projects
                </button>

                {isBrowseProjectOpen && (
                  <div className=" fixed rounded-md inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center  ">
                    <div className="relative w-auto max-w-3xl mx-auto my-6 overflow-y-auto max-h-full  ">
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
                      <div className="bg-white rounded-lg shadow-lg relative flex flex-col  p-8">
                        <div className="grid  grid-cols-1 gap-4">
                          {ExplorBrowseProject.map((course, index) => (
                            <div
                              key={index}
                              className="hover:shadow-2xl border h-[85px]"
                            >
                              <Link
                                to={`/course/${(
                                  course.title
                                )}`}
                                className="flex justify-start items-start flex-row gap-8"
                              >
                                <div className="md:w-36 h-[35px] w-28">
                                  <img
                                    src={course.image}
                                    alt={course.title}
                                    className="rounded-lg"
                                  />
                                </div>
                                <div className="md:w-[500px] flex justify-center items-start flex-col pt-3 font-semibold text-gray-600 text-sm">
                                  <div>{course.description}</div>
                                  <div>{course.title}</div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 text-white">
                          <button
                            className="bg-blue-800 p-2 w-[100px]  text-white  hover:bg-black "
                            onClick={closeBrowseProject}
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
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold py-4">Education</h1>
          <div class="p-5 border bg-white rounded text-gray-500">
            <div class="flex items-center">
              <div class="">
                <div class="font-bold text-lg py-2 leading-none hover:underline text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
                  Credentials
                </div>
                <div className="mb-4">
                  Update your educational background to showcase where you are
                  currently studying or have recently graduated. Including this
                  information is essential for potential employers. Even if you
                  are still in school or haven't completed your studies, it's
                  beneficial to share your educational path. If you have
                  obtained a college degree, you can exclude your high school or
                  GED details. Remember, all fields are optional but can greatly
                  enhance your profile.
                </div>

                <div className="py-2 gap-5 boder bg-gray-200 flex flex-col md:flex-row p-2">
                  <button
                    onClick={openEducationModel}
                    className="px-5 h-10 border-2 border-blue-700"
                  >
                    + Add Education
                  </button>
                  {/* education open */}
                  {iseducationopen && (
                    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center mt-16 ">
                      <div className="relative w-auto max-w-lg mx-auto my-6 overflow-y-auto max-h-full">
                        <div className="bg-white rounded-lg shadow-lg relative flex flex-col w-full p-8">
                          <button
                            className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
                            onClick={closeEducationModel}
                          >
                            <svg
                              className="h-6 w-6 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>

                          {/* Modal content */}
                          <form
                            className="text-start"
                            onSubmit={handleEducationSubmit}
                          >
                            <h2 className="text-xl font-bold mb-4">
                              Education
                            </h2>
                            <p className="mb-4">
                              Add your educational background to let employers
                              know where you studied or are currently studying.
                              Even if you didn’t finish, it’s important to
                              include it here. And if you’ve earned a college
                              degree, you don’t need to add your high
                              school/GED. All fields are optional.
                            </p>
                            <div className="max-w-sm">
                              <label
                                htmlFor="educationInstitute"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                              >
                                Name of institution
                              </label>
                              <select
                                value={formData.educationInstitute}
                                onChange={handleInputChange}
                                id="educationInstitute"
                                name="educationInstitute"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option value="">Choose an institution</option>
                                <option value="Harvard University">
                                  Harvard University
                                </option>
                                <option value="Stanford University">
                                  Stanford University
                                </option>
                                <option value="Massachusetts Institute of Technology (MIT)">
                                  Massachusetts Institute of Technology (MIT)
                                </option>
                                <option value="University of Oxford">
                                  University of Oxford
                                </option>
                                <option value="University of Cambridge">
                                  University of Cambridge
                                </option>
                              </select>
                            </div>

                            <div className="max-w-sm">
                              <label
                                htmlFor="degree"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-4"
                              >
                                Degree
                              </label>
                              <select
                                value={formData.degree}
                                onChange={handleInputChange}
                                name="degree"
                                id="degree"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option value="">Choose a degree</option>
                                <option value="Less than high school diploma">
                                  Less than high School diploma (or equivalent)
                                </option>
                                <option value="High school diploma">
                                  High school diploma (or equivalent)
                                </option>
                                <option value="Associate Degree">
                                  Associate Degree (e.g.,AA,AS)
                                </option>
                                <option value="Bachelor's degree">
                                  Bachelor's degree (e.g.,BA,BTECH)
                                </option>
                                <option value="Master's degree">
                                  Master's degree (e.g.,MA,MS,MEd,MSW,MBA)
                                </option>
                                <option value="Professional school degree ">
                                  Professional school degree
                                  (e.g.,MD,DDS,DVM,LLB,JD)
                                </option>
                                <option value="Doctorate degree ">
                                  Doctorate degree (e.g.,phD,EdD)
                                </option>
                              </select>
                            </div>
                            {/* start Month */}
                            <label
                              htmlFor="EducationStartDate"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-4 "
                            >
                              Start date
                            </label>
                            <div className="flex justify-start items-start flex-rows gap-12">
                              <div className="max-w-sm">
                                <label
                                  htmlFor="educationStartMonth"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Month
                                </label>
                                <select
                                  value={formData.educationStartMonth}
                                  onChange={handleInputChange}
                                  name="educationStartMonth"
                                  id="educationStartMonth"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option value="">Choose a month</option>
                                  <option value="January">January</option>
                                  <option value="February">February</option>
                                  <option value="March">March</option>
                                  <option value="April">April</option>
                                  <option value="May">May</option>
                                  <option value="June">June</option>
                                  <option value="July">July</option>
                                  <option value="August">August</option>
                                  <option value="September">September</option>
                                  <option value="October">October</option>
                                  <option value="November">November</option>
                                  <option value="December">December</option>
                                </select>
                              </div>
                              <div className="max-w-sm">
                                <label
                                  htmlFor="educationStartYear"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Year
                                </label>
                                <select
                                  value={formData.educationStartYear}
                                  onChange={handleInputChange}
                                  name="educationStartYear"
                                  id="educationStartYear"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option value="">Choose a year</option>
                                  {/* List of year options */}
                                  {years2.map((year2) => (
                                    <option key={year2} value={year2}>
                                      {year2}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            {/* End month  */}
                            <label
                              htmlFor="graduationDate"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-4"
                            >
                              Graduation date or expected graduation date
                            </label>

                            <div className="flex justify-start items-start flex-rows gap-12">
                              <div className="max-w-sm">
                                <label
                                  htmlFor="graduationMonth"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Month
                                </label>
                                <select
                                  value={formData.graduationMonth}
                                  onChange={handleInputChange}
                                  name="graduationMonth"
                                  id="graduationMonth"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option value="">Choose a month</option>
                                  <option value="January">January</option>
                                  <option value="February">February</option>
                                  <option value="March">March</option>
                                  <option value="April">April</option>
                                  <option value="May">May</option>
                                  <option value="June">June</option>
                                  <option value="July">July</option>
                                  <option value="August">August</option>
                                  <option value="September">September</option>
                                  <option value="October">October</option>
                                  <option value="November">November</option>
                                  <option value="December">December</option>
                                </select>
                              </div>
                              <div className="max-w-sm">
                                <label
                                  htmlFor="graduation-Year"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Year
                                </label>
                                <select
                                  value={formData.graduationYear}
                                  name="graduationYear"
                                  onChange={handleInputChange}
                                  id="graduationYear"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  <option value="">Choose a year</option>
                                  {/* List of year options */}
                                  {years2.map((year2) => (
                                    <option key={year2} value={year2}>
                                      {year2}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            {/* Currently work here */}

                            <div className="flex items-center py-4">
                              <input
                                value={formData.currentlyStudying}
                                onChange={handleInputChange}
                                name="currentlyStudying"
                                id="currentlyStudying"
                                type="checkbox"
                                // value="currently studying"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="currentlyStudying"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                I currently studying here
                              </label>
                            </div>

                            <div className="flex md:flex-row justify-start items-start mt-4 gap-8">
                              <div>
                                <button
                                  type="submit"
                                  className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white border border-gray-400 hover:border-none font-bold py-2 px-4 rounded"
                                >
                                  Save
                                </button>
                              </div>
                              <div>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                  onClick={closeEducationModel}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* education close */}
                  <p className="font-bold hover:underline hover:text-blue-600 py-2">
                    Browse your Certificate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;

/*}


// import Navbar from "../Navbar";
// import React, { useState, useEffect } from "react";
// import { CiEdit } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { getUser } from "../../State/Auth/Action";

// function Profile() {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const [formData, setFormData] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [userEmail, setUserEmail] = useState('')

//   useEffect(() => {
//     const token = localStorage.getItem('jwt'); // Fetch JWT token from local storage
//     if (token && !user) {
//       dispatch(getUser(token));
//     }
//   }, [user, dispatch]);

//   useEffect(() => {
//     if (user) {
//       setUserName(user.userName || '');
//       setUserEmail(user.email||'')
//       setFormData({
//         fullName: user.fullName || '',
//         emailAddress: user.emailAddress || '',
//         mobileNumber: user.mobileNumber || '',
//         location: user.location || '',
//         profileImage: user.profileImage || '', // Assuming profileImage is a URL
//       });
//     }
//   }, [user]);

//   const [removeImage, setRemoveimage] = useState(false);

//   useEffect(() => {
//     const hasStoredData = localStorage.getItem(user);
//     if (!hasStoredData) {
//       const newData = { userName, userEmail };
//       console.log(removeImage); //false-store in LS
//       const existingData = JSON.parse(localStorage.getItem("jwt")) || [];
//       const updatedList = [...existingData, newData];
//       localStorage.setItem("jwt", JSON.stringify(updatedList));
//       localStorage.setItem("hasStoredData", true);
//     }
//   }, []);

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setAvatar(reader.result);
//       const formDataListJSON = localStorage.getItem("formDataList");
//       let formDataList = [];
//       if (formDataListJSON) {
//         formDataList = JSON.parse(formDataListJSON);
//       }

//       formDataList.forEach((user) => {
//         user.removeImage = true;
//       });

//       localStorage.setItem("formDataList", JSON.stringify(formDataList));

//       if (email) {
//         localStorage.setItem("image", reader.result);
//       } else {
//         alert("User email not found in local storage.");
//       }
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   useEffect(() => {
//     const formDataListJSON = localStorage.getItem("formDataList");
//     const formDataList = JSON.parse(formDataListJSON);

//     const statusFromLocalStorage = formDataList[0].removeImage; //false-getFrom LS
//     const avatarFromLocalStorage = localStorage.getItem("image");

//     if (statusFromLocalStorage === true && avatarFromLocalStorage) {
//       setAvatar(avatarFromLocalStorage);
//     }
//   }, [removeImage, email]);

//   useEffect(() => {
//     const formDataListJSON = localStorage.getItem("formDataList");
//     const formDataList = JSON.parse(formDataListJSON);

//     const statusFromLocalStorage = formDataList[0].removeImage;

//     console.log(" statusFromLocalStorage:" + statusFromLocalStorage);

//     if (statusFromLocalStorage === false) {
//       setAvatar(" ");
//     }
//   }, [removeImage, email]);

//   const createDefaultAvatar = (letter) => {
//     return `data:image/svg+xml;base64,${window.btoa(
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="150"
//         height="150"
//         viewBox="0 0 150 150"
//       >
//         <rect width="100%" height="100%" fill="#fff" />
//         <text
//           x="50%"
//           y="50%"
//           dy=".1em"
//           dominant-baseline="middle"
//           text-anchor="middle"
//           font-family="Arial"
//           font-size="96"
//           fill="#000"
//         >
//           ${letter}
//         </text>
//       </svg>
//     )}`;
//   };
//   const [fullName, setFullName] = useState("");

//   const [gender, setGender] = useState("male");

//   const handleSubmit = (e) => {
//     e.preventDefault();


//     const formDataListJSON = localStorage.getItem("formDataList");
//     let formDataList = [];
//     if (formDataListJSON) {
//       formDataList = JSON.parse(formDataListJSON);
//     }

//     const userEmail = email;
//     const userIndex = formDataList.findIndex(
//       (user) => user.email === userEmail
//     );

//     if (userIndex !== -1) {
//       formDataList[userIndex] = {
//         ...formDataList[userIndex],
//         name: fullName,
//         gender: gender,
//       };

//       const updatedFormDataListJSON = JSON.stringify(formDataList);
//       localStorage.setItem("formDataList", updatedFormDataListJSON);

//       setProfileName(fullName);

//       setFullName("");

//       setGender("");

//       alert("Data stored successfully.");
//     } else {
//       alert("User not found in formDataList.");
//     }
//   };

//   const handleImageRemove = () => {
//     setAvatar(" ");

//     const formDataListJSON = localStorage.getItem("formDataList");
//     let formDataList = [];
//     if (formDataListJSON) {
//       formDataList = JSON.parse(formDataListJSON);
//     }

//     formDataList.forEach((user) => {
//       user.removeImage = false;
//     });

//     localStorage.setItem("formDataList", JSON.stringify(formDataList));
//   };

//   const [isPopupOpen, setIsPopupOpen] = useState(false);




//   return (
//     <>
//       {/* <Navbar usernameFirstLetter={usernameFirstLetter} /> */
//       {/* left cards */}

//       {/* Map over the profiles and render each profile card */}
//       <div className="flex flex-col md:flex-row bg-blue-100 justify-center items-center">
//         {/* profile start */}
//         <div>
//           {/* {profiles.map((profile) => ( */}
//           <div
//             //   key={profile.id}
//             className="flex"
//           >
//             <div className="m-20 shadow-xl w-[300px] ">
//               <div className="relative">
//                 {/* Profile Image */}
//                 <div className="py-5 p-10 px-20 bg-white rounded text-center text-gray-500 max-w-2xl">
//                   <div className="flex space-x-2 -mr-4 ">
//                     <h1 className="text-sm w-full">Personal Details</h1>
//                     <div>
//                       <CiEdit
//                         className="text-2xl cursor-pointer"
//                         onClick={() => setIsPopupOpen(true)}
//                       />
//                     </div>

//                     {/* edit profile start */}
//                     {isPopupOpen && (
//                       <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//                         <div className="bg-white p-8 rounded-lg">
//                           <a
//                             onClick={() => setIsPopupOpen(false)}
//                             className=" text-sm font-bold justify-end  ml-[80%] hover:underline hover:text-blue-600"
//                           >
//                             Close X
//                           </a>
//                           <h1 className="text-2xl font-bold mb-4">
//                             Edit Profile
//                           </h1>
//                           <form onSubmit={handleSubmit}>
//                             {/* Upload Image */}
//                             <div className="mb-4  space-x-10 flex">
//                               <div>
//                                 <button
//                                   onClick={() =>
//                                     document
//                                       .getElementById("avatarInput")
//                                       .click()
//                                   }
//                                   className="p-2 text-white border rounded bg-blue-500 px-4"
//                                 >
//                                   Change Photo
//                                 </button>
//                                 <input
//                                   type="file"
//                                   id="avatarInput"
//                                   accept="image/*"
//                                   onChange={handleAvatarChange}
//                                   className="hidden"
//                                 />
//                               </div>

//                               {/* Remove Image */}
//                               {/* {profile.imageUrl && ( */}
//                               <div className="mb-4">
//                                 <button
//                                   onClick={handleImageRemove}
//                                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                                 >
//                                   Remove image
//                                 </button>
//                               </div>
//                               {/* )} */}
//                             </div>

//                             {/* First Name */}
//                             <div className="mb-4 flex gap-2">
//                               <label htmlFor="firstName" className="block mb-2">
//                                 User Name
//                               </label>
//                               <input
//                                 required
//                                 type="text"
//                                 id="firstName"
//                                 value={fullName}
//                                 onChange={(e) => setFullName(e.target.value)}
//                                 className="border rounded-lg p-2"
//                               />
//                             </div>
//                             {/* Last Name */}

//                             {/* Gender */}
//                             <div className="mb-4 flex space-x-[7.5rem]">
//                               <label htmlFor="gender" className="block mb-2">
//                                 Gender:
//                               </label>
//                               <select
//                                 id="gender"
//                                 value={gender}
//                                 onChange={(e) => setGender(e.target.value)}
//                                 className="border rounded-lg p-2 px-16"
//                               >
//                                 <option value="male">Male</option>
//                                 <option value="female">Female</option>
//                                 <option value="other">Other</option>
//                               </select>
//                             </div>

//                             <button className="bg-blue-500 text-start text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                               Save
//                             </button>
//                           </form>
//                           {/* Close Button */}
//                         </div>
//                       </div>
//                     )}
//                     {/* edit profile end */}
//                   </div>

//                   <img
//                     className="w-32 h-32  rounded-full mx-auto border-2 bg-gray-700 hover:border-gray-900"
//                     src={
//                       avatar === combinedLetters
//                         ? createDefaultAvatar(combinedLetters)
//                         : avatar
//                     }
//                     alt=""
//                   />
//                   {/* Image Upload Button (Hidden by default) */}
//                   <input
//                     type="file"
//                     name="profile"
//                     // id={upload_profile_${profile.imageUrl}}
//                     hidden
//                     required
//                     className="absolute top-0 left-0 ml-10 w-32 h-32 opacity-0 cursor-pointer"
//                   />
//                   {/* Label to trigger file input */}
//                   <label
//                     // htmlFor={upload_profile_${profile.imageUrl}}
//                     className="absolute top-10 left-[45%] w-32 h-32"
//                   >
//                     <div className=" rounded-full  text-center mt-4">
//                       <svg
//                         data-slot="icon"
//                         className="w-6 h-5 hide hover:"
//                         fill="none"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                         aria-hidden="true"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
//                         ></path>
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
//                         ></path>
//                       </svg>
//                     </div>
//                   </label>
//                   <h1 className="text-center font-bold p-2">{userName}</h1>
//                   <button className="py-2 p-2 text-lg border-2 border-blue-600">
//                     {/* {profile.role} */} Share profile Link
//                   </button>
//                   <p className="mt-2 text-sm text-gray-900 p-2">
//                     <Link to="#" htmlFor="" className="text-blue-500">
//                       Update Profile visibility
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ))} */}
//         </div>

//         {/* profile end */}
//       </div>

//       {/* <Footer /> */}
//     </>
//   );
// }

// export default Profile;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getUser } from '../../State/Auth/Action';
// import { useState, useEffect } from 'react';
// import Navbar from '../Navbar';


// const Profile = () => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const [formData, setFormData] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [userEmail, setUserEmail] = useState('')
//   useEffect(() => {
//     const token = localStorage.getItem('jwt'); // Fetch JWT token from local storage
//     if (token && !user) {
//       dispatch(getUser(token));
//     }
//   }, [user, dispatch]);

//   useEffect(() => {
//     if (user) {
//       setUserName(user.userName || '');
//       setUserEmail(user.email || '')
//       setFormData({
//         fullName: user.fullName || '',
//         emailAddress: user.emailAddress || '',
//         mobileNumber: user.mobileNumber || '',
//         location: user.location || '',
//         profileImage: user.profileImage || '', // Assuming profileImage is a URL
//       });
//     }
//   }, [user]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted with data:', formData);
//     // You can dispatch an action here to update user details
//   };
//   const toggleEditMode = () => {
//     setEditMode(!editMode);
//   };

//   return (
//     <>
//       <Navbar />

//       <div>
//         {user ? (
//           <div>
//             {editMode ? (
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="fullName">Full Name:</label>
//                   <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="emailAddress">Email Address:</label>
//                   <input type="email" name="emailAddress" id="emailAddress" value={formData.emailAddress} onChange={handleInputChange} />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="mobileNumber">Mobile Number:</label>
//                   <input type="text" name="mobileNumber" id="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="location">Location:</label>
//                   <input type="text" name="location" id="location" value={formData.location} onChange={handleInputChange} />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="profileImage">Profile Image URL:</label>
//                   <input type="text" name="profileImage" id="profileImage" value={formData.profileImage} onChange={handleInputChange} />
//                 </div>
//                 <button type="submit">Save</button>
//               </form>
//             ) : (
//               <div>
//                 <h3>Personal Information</h3>
//                 <p><strong>Full Name:</strong> {userName}</p>
//                 <p><strong>Email Address:</strong> {userEmail}</p>
//                 <p><strong>Mobile Number:</strong> {user.mobileNumber}</p>
//                 <p><strong>Location:</strong> {user.location}</p>
//                 <img src={user.profileImage} alt="Profile" />
//                 <button onClick={toggleEditMode}>Edit</button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <p>Loading user information...</p>
//         )}
//       </div>
//     </>

//   );
// }

// export default Profile;
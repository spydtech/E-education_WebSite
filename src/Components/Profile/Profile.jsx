
import Navbar from "../Navbar"
import Footer from "../Home/footer/Footer"
import React, { useState } from 'react';

function EditModal({ userData, onSave, onClose }) {
  const [editedData, setEditedData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prevData => ({
      ...prevData,
      details: {
        ...prevData.details,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedData);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Edit Details</h2>
        <form className="" onSubmit={handleSubmit}>
            <div className='flex gap-5'>
            <div>
            <div className="mb-4">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
            <input type="text" id="bio" name="bio" value={editedData.details.bio} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
           
          </div>
             <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="firstName" name="firstName" value={editedData.details.firstName} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
           
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={editedData.details.lastName} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
           
          </div>
          <div className="mb-4">
            <label htmlFor="DateOfBirth" className="block text-sm font-medium text-gray-700">Date Of Birth</label>
            <input type="text" id="DateOfBirth" name="DateOfBirth" value={editedData.details.DateOfBirth} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
           
          </div>
         
          <div className="mb-4">
            <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <input type="text" id="Gender" name="Gender" value={editedData.details.Gender} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
           
          </div>

            </div>
         <div>
         <div className="mb-4">
            <label htmlFor="Location" className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" id="Location" name="Location" value={editedData.details.Location} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
           
          </div>
          <div className="mb-4">

            <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="text" id="PhoneNumber" name="PhoneNumber" value={editedData.details.PhoneNumber} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
           
          </div>
          <div className="mb-4">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="text" id="Email" name="Email" value={editedData.details.Email} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
           
          </div>
          <div className="mb-4">
            <label htmlFor="Website" className="block text-sm font-medium text-gray-700">Website</label>
            <input type="text" id="Website" name="Website" value={editedData.details.Website} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
           
          </div>
         </div>
            </div>
          
         
          {/* Repeat for other fields */}
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
            <button type="button" onClick={onClose} className="text-gray-500 px-4 py-2 rounded-md">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Profile() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [userData, setUserData] = useState({
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080',
    profileImage: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080',
   
    details: {
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis labore consectetur voluptatibus mollitia dolorem veniam omnis ut quibusdam minima sapiente repellendus asperiores explicabo, eligendi odit, dolore similique fugiat dolor, doloremque eveniet. Odit, consequatur. Ratione voluptate exercitationem hic eligendi vitae animi nam in, est earum culpa illum aliquam.',
   
      firstName: 'Samuel',
      lastName: 'Abera',
      DateOfBirth: '21/02/1997',
      Gender: 'Male',
      Location: 'Ethiopia, Addis Ababa',
      PhoneNumber: '+251913****30',
      Email: 'samuelabera87@gmail.com',
      Website: 'https://www.teclick.com'
    }
  });

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleSave = (editedData) => {
    setUserData(editedData);
    setShowEditModal(false);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = event.target.result;
        setUserData((prevUserData) => ({
          ...prevUserData,
          profileImage: newImage,
        }));
      };
      reader.readAsDataURL(file);
    }
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

//   const profiles = [
//     {
//       id: 1,
//       Email: "Emily Wilson",
//       role: "Share Profile Link",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia Maiores et perferendis eaque.",
//       imageUrl:
//         "https://static.vecteezy.com/system/resources/thumbnails/024/354/297/small_2x/business-woman-isolated-illustration-ai-generative-free-photo.jpg",
//     },
//   ];


  const [isOpen, setIsOpen] = useState(false);
  const [iseducationopen, setIsEducationOpen] = useState(false);

  

  const openEducationModel = () => {
    setIsEducationOpen(true);
  };
  const closeEducationModel = () => {
    setIsEducationOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };


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
    fetchEducationDetails();
  };

  const fetchEducationDetails = () => {
    // Mock implementation to simulate fetching education details
    const mockData = {
      institution: formData.educationInstitute,
      degree: formData.degree,
      startMonth: formData.educationStartMonth,
      startYear: formData.educationStartYear,
      graduationMonth: formData.graduationMonth,
      graduationYear: formData.graduationYear,
      currentlyStudying: formData.currentlyStudying
    };
    setEducationDetails(mockData);
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

  
  const [educationDetails, setEducationDetails] = useState(null);
 

  const years2 = generateYearOptions2(1990, new Date().getFullYear());
  
  

  return (
    <div>
       <Navbar />
      
      <section className="w-full p-2 border-2 shadow-lg overflow-hidden dark:bg-gray-900">
        <div className="flex flex-col">
          <img src={userData.coverImage} alt="User Cover" className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" />
          <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
              <label htmlFor="profile-image-input" className="cursor-pointer">
                <img
                src={userData.profileImage}
                alt="User Profile"
                className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
                onClick={() => document.getElementById('profile-image-input').click()}  
                    />

                 </label>
            <input type="file" id="profile-image-input" className="hidden" onChange={handleProfileImageChange} accept="image/*" />
           
             <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
              {userData.details.firstName} {userData.details.lastName}
            </h1>
          </div>
          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            <p className="w-fit text-gray-700 dark:text-gray-400 text-md">{userData.details.bio}</p>
            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">First Name</dt>
                      <dd className="text-lg font-semibold">{userData.details.firstName}</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name</dt>
                      <dd className="text-lg font-semibold">{userData.details.lastName}</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date Of Birth</dt>
                      <dd className="text-lg font-semibold">{userData.details.DateOfBirth}</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gender</dt>
                      <dd className="text-lg font-semibold">{userData.details.Gender}</dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Location</dt>
                      <dd className="text-lg font-semibold">{userData.details.Location}</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                      <dd className="text-lg font-semibold">{userData.details.PhoneNumber}</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                      <dd className="text-lg font-semibold">{userData.details.Email}</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Website</dt>
                      <dd className="text-lg font-semibold">{userData.details.Website}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
            {showEditModal && <EditModal userData={userData} onSave={handleSave} onClose={handleCloseModal} />}
          </div>
        </div>
      </section>
     
      <div className=" p-10 pt-10 md:justify-end  mb-8">
         

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
                   className="px-5  h-16 border-2 border-blue-700"
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
         {educationDetails && (
        <div className="mt-8">
          {/* Render education details */}
          <h2 className="text-2xl font-semibold">Education Details:</h2>
          <ul className="flex gap-10">
            <li>
            <p>Institution: {educationDetails.institution}</p>
          <p>Degree: {educationDetails.degree}</p>
         <p>startMonth:{educationDetails.startMonth}</p>
         <p>startYear:{educationDetails.startYear}</p>
            </li>

            <li>
            <p>graduationMonth:{educationDetails.graduationMonth}</p>
         <p>graduationYear:{educationDetails.graduationYear}</p>
         <p>currentlyStudying:{educationDetails.currentlyStudying}</p>
                </li>
          
        
         </ul>
        </div>
      )}
       </div>
     
      <Footer />
    </div>

  );
}

export default Profile;

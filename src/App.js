import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MyLearning from './Components/MyLearning/MyLearningHero'
import SignUp from "./Components/Login/SignUp";
import Certificates from "./Components/Home/Professional Certificates/Certificates";
import Profile from "./Components/Profile/Profile";
import AdminRouter from "./Routers/AdminRouter"
import WSpace from "./Components/Profile/WorkSpace1/WSpace"
import Settings from "./Components/Profile/Settings";
import PostFeeds from "./Components/Home/post/PostFeeds"
import QuestionForm from "./Components/Home/AskMe/QuestionForm"
import ForgotPassword from "./Components/Login/ForgotPassword";
import Purchases from "./Components/Profile/Purchases/Purchases";
import Payment from "./Components/Profile/Payment/Payment";
import MyCourse from "./Components/mycourse/MyCourse";
import DataAnalytics from "./Components/Profile/BrowseProject/dataAnalytics/DataAnalytics";
import FullStackWebDevelopmentArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/FullStackWebDevelopmentArray";
// import DataAnalatics from "./Components/Home/Plat form/AllCourses/StudentPlatForm/DataAnalatics";
import Student from "./Components/Home/Plat form/Student";
import Professional from "./Components/Home/Plat form/perofessionals/Professionals";
import ArtsandHumanities from "./Components/Home/Plat form/AllCourses/ArtsandHumanities";
import Business from "./Components/Home/Plat form/AllCourses/Business";
import ComputerScience from "./Components/Home/Plat form/AllCourses/ComputerScience";
import FullStackWebDevelopment from './Components/Home/Plat form/AllCourses/FullStackWebDevelopmentPage/FullStackWebDevelopment'
import DataScienceArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/DataScienceArray";
import Health from "./Components/Home/Plat form/AllCourses/Health";
// import FullStackWebDev from "./Components/Home/Plat form/perofessionals/PerofessionalsParticularPage/FullStackWebDevelopment";
import Features from './Components/Home/FeaturesOfE-education/Features'
import PersonalDevelopment from "./Components/Home/Plat form/AllCourses/PersonalDevelopment";
import SocialScience from "./Components/Home/Plat form/AllCourses/SocialScience";
import DataAnalatics from "./Components/Home/Plat form/AllCourses/dataAnalatics/DataAnalatics";
import MachineLearning from "./Components/Home/Plat form/AllCourses/MachineLearning/MachineLearning";
import Reactjs from "./Components/Home/eductionCarousel/ReactjsMastery/Reactjs";
import EthicalHacking from "./Components/Home/Plat form/AllCourses/EthicalHacking/EthicalHacking";
import Cybersecurity from "./Components/Home/Plat form/AllCourses/Cybersecurity/cybersecurity";
import WishLists from "./Components/Home/Plat form/AddtoCart/WishLists";
import Cart from "./Components/Home/Plat form/AddtoCart/Cart";
import EthicalHackingStudentArray from './Components/Home/Plat form/AllCourses/StudentPlatForm/EthicalHackingStudentArray'
import CyberSecurityArray from './Components/Home/Plat form/AllCourses/StudentPlatForm/CyberSecurityArray'
import NetworkSecurityArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/NetworkSecurityArray";
import MeanStackDeveloper from './Components/Home/Plat form/AllCourses/MernStackDevelopment/Main/MeanStackDevelopment';
import FullStackDevops from './Components/Home/Plat form/AllCourses/FullStackDevops_Development/FullStackDevopsDevelopment';
import FullStackPythonDevelopment from "./Components/Home/Plat form/AllCourses/fullStackPython/Main/FullStackPythonDevelopment";
import FullStackJava from "./Components/Home/Plat form/AllCourses/FullStackJava_Development/FullStackJavaDevelopment";
import BasicArray from "./Components/BasicCourse/BasicCourseArray";
import AboutUs from './Components/AboutUs/AboutUs'
import SoftwareTestingArray from './Components/Home/Plat form/AllCourses/StudentPlatForm/SoftwareTestingArray'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/mylearning" element={<MyLearning />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/PostFeeds" element={<PostFeeds />} />
          <Route path="/QuestionForm" element={<QuestionForm />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Purchases" element={<Purchases />} />
          <Route path="/Mycourse" element={<MyCourse />} />
          <Route path="/course/Data Science" element={<DataAnalytics />} />
          <Route path="/student" element={<Student />} />
          <Route path="/dataAnalatics" element={<DataAnalatics />} />
          <Route path="/fullStackWebDevelopment" element={<FullStackWebDevelopment />} />
          <Route path="/artsandHumanities" element={<ArtsandHumanities />} />
          <Route path="/business" element={<Business />} />
          <Route path="/computerscience" element={<ComputerScience />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/reactjs" element={<Reactjs />} />
          <Route path="/health" element={<Health />} />
          <Route path="/meanStackDeveloper" element={<MeanStackDeveloper />} />
          <Route path="/machineLearning" element={<MachineLearning />} />
          <Route path="/fullStackDevops" element={<FullStackDevops />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/student/fullStackWebDevelopmentArray" element={<FullStackWebDevelopmentArray />} />
          <Route path="/student/dataScienceArray" element={<DataScienceArray />} />
          <Route path="/student/ethicalHackingStudentArray" element={<EthicalHackingStudentArray />} />
          <Route path="/student/networkSecurityArray" element={<NetworkSecurityArray />} />
          <Route path="/student/softwareTestingArray" element={<SoftwareTestingArray />} />
          <Route path="/student/cyberSecurityArray" element={<CyberSecurityArray />} />
          <Route path="/ethicalHacking" element={<EthicalHacking />} />
          <Route path="/fullStackPythonDevelopment" element={<FullStackPythonDevelopment />} />
          <Route path="/fullStackJavaDevelopment" element={<FullStackJava />} />
          <Route path="/wishLists" element={<WishLists />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/personaldevelopment"
            element={<PersonalDevelopment />}
          />
          <Route path="/socialscience" element={<SocialScience />} />
          <Route path="/admin/*" element={<AdminRouter />} />



          {/* Basic Advance Preminum Cousrses here */}
          <Route path="/basicCourses" element={<BasicArray />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

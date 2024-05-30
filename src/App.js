import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MyLearning from "./Components/MyLearning/MyLearningHero";
import SignUp from "./Components/Login/SignUp";
import Certificates from "./Components/Home/Professional Certificates/Certificates";
import Profile from "./Components/Profile/Profile";
import AdminRouter from "./Routers/AdminRouter";
import WSpace from "./Components/Profile/WorkSpace1/WSpace";
import Settings from "./Components/Profile/Settings";
import PostFeeds from "./Components/Home/post/PostFeeds";
import QuestionForm from "./Components/Home/AskMe/QuestionForm";
import ForgotPassword from "./Components/Login/ForgotPassword";
import Purchases from "./Components/Profile/Purchases/Purchases";
import Payment from "./Components/Profile/Payment/Payment";
import MyCourse from "./Components/mycourse/MyCourse";
import PremiumCourses from "./Components/PremiumCourses/PremiumCourses";
import DataAnalytics from "./Components/Profile/BrowseProject/dataAnalytics/DataAnalytics";
import FullStackWebDevelopmentArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/FullStackWebDevelopmentArray";
// import DataAnalatics from "./Components/Home/Plat form/AllCourses/StudentPlatForm/DataAnalatics";
import Student from "./Components/Home/Plat form/Student";
import Professional from "./Components/Home/Plat form/perofessionals/Professionals";
import ArtsandHumanities from "./Components/Home/Plat form/AllCourses/ArtsandHumanities";
import Business from "./Components/Home/Plat form/AllCourses/Business";
import ComputerScience from "./Components/Home/Plat form/AllCourses/ComputerScience";
import DataScienceArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/DataScienceArray";
import Health from "./Components/Home/Plat form/AllCourses/Health";
// import FullStackWebDev from "./Components/Home/Plat form/perofessionals/PerofessionalsParticularPage/FullStackWebDevelopment";
import Features from "./Components/Home/FeaturesOfE-education/Features";
import PersonalDevelopment from "./Components/Home/Plat form/AllCourses/PersonalDevelopment";
import SocialScience from "./Components/Home/Plat form/AllCourses/SocialScience";
import DataAnalatics from "./Components/Home/Plat form/AllCourses/Data Science/dataAnalatics1/DataAnalatics";
import MachineLearning from "./Components/Home/Plat form/AllCourses/Data Science/MachineLearning/MachineLearning";
import Reactjs from "./Components/Home/eductionCarousel/ReactjsMastery/Reactjs";
import EthicalHacking from "./Components/Home/Plat form/AllCourses/Ethical Hacking/EthicalHacking/EthicalHacking";
import AdvanceEthicalHacking from "./Components/Home/Plat form/AllCourses/Ethical Hacking/AdvancedEthicalHacking/AdvanceEthicalHacking";
import CertifiedEthicalHacking from "./Components/Home/Plat form/AllCourses/Ethical Hacking/CertifiedEthicalHacking/certifiedEthicalHacking";
import Cybersecurity from "./Components/Home/Plat form/AllCourses/Cyber Security/Cybersecurity/cybersecurity";
import CybersecurityBiginers from "./Components/Home/Plat form/AllCourses/Cyber Security/CybersecurityBiginers/cybersecurityBiginersEssentials";
import CybersecurityEssentials from "./Components/Home/Plat form/AllCourses/Cyber Security/CybersecurityEssentials/cybersecurityEssentials";
import WishLists from "./Components/Home/Plat form/AddtoCart/WishLists";
import Cart from "./Components/Home/Plat form/AddtoCart/Cart";
import EthicalHackingStudentArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/EthicalHackingStudentArray";
import CyberSecurityArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/CyberSecurityArray";
import NetworkSecurityArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/NetworkSecurityArray";
import MeanStackDeveloper from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/MernStackDevelopment/Main/MeanStackDevelopment";
import FullStackWebDevelopment from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/FullStackWebDevelopmentPage/FullStackWebDevelopment";
import FullStackDevops from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/FullStackDevops_Development/FullStackDevopsDevelopment";
import FullStackPythonDevelopment from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/fullStackPython/Main/FullStackPythonDevelopment";
import FullStackJava from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/FullStackJava_Development/FullStackJavaDevelopment";
// import DotnetDevelopment from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/FullStackDotNet/DotnetDevelopment";
import FullStackJavaScript from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/FullStackJavaScript/Main/JavascriptDevelopment";
import BasicCourses from "./Components/BasicCourse/BasicCourse";
import AdvanceCourses from "./Components/AdvanceCourses/Advance_Courses";
import AboutUs from "./Components/AboutUs/AboutUs";
import SoftwareTestingArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/SoftwareTestingArray";
import DataScience from "./Components/Home/Plat form/AllCourses/Data Science/IntroductionTo_DataScience/DataScience";
import NetworkSecurity from "./Components/Home/Plat form/AllCourses/NetWork Security/NetworkSecurity_Fundamentals/NetworkSecurityFundamentals";
import BestPracticesNetworkSecurity from "./Components/Home/Plat form/AllCourses/NetWork Security/BestPracticesNetworkSecurity/BestPracticesNetworkSecurity";
import DataScienceWithPython from "./Components/Home/Plat form/AllCourses/Data Science/DataScienceWith_Python/DataScienceWithPython";
import BigDataAnalysis from "./Components/Home/Plat form/AllCourses/Data Science/BigDataAnalysis/BigData";
import Datavisualisation from "./Components/Home/Plat form/AllCourses/Data Science/Datavisualisation/Datavisualisation";
import AdvanceNetworkSecuity from "./Components/Home/Plat form/AllCourses/NetWork Security/AdvancedNetworkSecurity/AdvancedNetworkSecurity";
import PerformanceTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Performance_Testing/PerformanceTesting";
import SecurityTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Security_Testing/SecurityTesting";
import UsabilityTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Usablity_Testing/UsabilityTesting";
import UnitTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Unit_Testing/UnitTestingFundamentals";
import CompatabilityTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Compatability_Testing/CompatabilityFundamentals";
import IntigrationTesting from './Components/Home/Plat form/AllCourses/Software Testing/Integration_Testing/IntegrationFundamentals';
import SystemTesting from "./Components/Home/Plat form/AllCourses/Software Testing/System_Testing/SystemFundamentals";
import ManualTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Manual_Testing/ManualTesting";
import AutomationTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Automation_Testing/AutomationTesting";  
import AcceptanceTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Acceptance_testing/AcceptanceTesting"
import StressTesting from './Components/Home/Plat form/AllCourses/Software Testing/Stress_Testing/StressTestingFundamentals'
import RegressionTesting from './Components/Home/Plat form/AllCourses/Software Testing/Regression_Testing/RegressionTesting'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          {/* WSpace */}
          <Route path="/WSpace" element={<WSpace />} />
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
          <Route path="/student" element={<Student />} />

          <Route path="/artsandHumanities" element={<ArtsandHumanities />} />
          <Route path="/business" element={<Business />} />
          <Route path="/computerscience" element={<ComputerScience />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/reactjs" element={<Reactjs />} />
          <Route path="/health" element={<Health />} />
          {/* Data Science */}
          <Route
            path="/data_Science"
            element={<DataScienceArray />}
          />
          <Route path="/course/Data Science" element={<DataAnalytics />} />
          <Route
            path="/data_Science/data-Analatics"
            element={<DataAnalatics />}
          />
          <Route
            path="/data_Science/machine-Learning"
            element={<MachineLearning />}
          />
          <Route
            path="/data_Science/introduction-to-data-science"
            element={<DataScience />}
          />
          <Route
            path="/data_Science/data-science-with-python"
            element={<DataScienceWithPython />}
          />
          <Route
            path="/data_Science/big-data-analysis"
            element={<BigDataAnalysis />}
          />

          <Route
            path="/data_Science/data-visualization"
            element={<Datavisualisation />}
          />

          {/* Cyber Security */}
          <Route
            path="/cyber_security"
            element={<CyberSecurityArray />}
          />
          <Route
            path="/Cybersecurity/Cybersecurity_fundamentals"
            element={<Cybersecurity />}
          />
          <Route
            path="/Cybersecurity/cybersecurity_beginners"
            element={<CybersecurityBiginers />}
          />
          <Route
            path="/Cybersecurity/cybersecurity_essentials"
            element={<CybersecurityEssentials />}
          />

          {/* Network Security */}
          <Route
            path="/network_security"
            element={<NetworkSecurityArray />}
          />
          <Route
            path="/network_security/network-security-fundamentals"
            element={<NetworkSecurity />}
          />
          <Route
            path="/network_security/advance-network-secuity"
            element={<AdvanceNetworkSecuity />}
          />

          <Route
            path="/network_security/network-security-best-practices"
            element={<BestPracticesNetworkSecurity />}
          />
          {/* BestPracticesNetworkSecurity */}
          {/* /student/student_network_security/network-security-best-practices */}

          {/* Software Testing */}
          <Route
            path="/software_testing"
            element={<SoftwareTestingArray />}
          />

<Route
            path="/software-testing/performance-testing"
            element={<PerformanceTesting />}
          />

<Route
            path="/software-testing/security-testing"
            element={<SecurityTesting />}
          />
            <Route
            path="/software-testing/usability-testing"
            element={<UsabilityTesting />}
          />

<Route
            path="/software-testing/unit-testing"
            element={<UnitTesting />}
          />

<Route
            path="/software-testing/compatability-testing"
            element={<CompatabilityTesting />}
          />

<Route
            path="/software-testing/acceptance-testing"
            element={<AcceptanceTesting />}
          />

<Route
            path="/software-testing/stress-testing"
            element={<StressTesting />}
          />
{/* IntigrationTesting */}
<Route
            path="/software-testing/intigration-testing"
            element={<IntigrationTesting />}
          />


<Route
            path="/software-testing/system-testing"
            element={<SystemTesting />}
          />

<Route
            path="/software-testing/manual-testing"
            element={<ManualTesting />}
          />

<Route
            path="/software-testing/automation-testing"
            element={<AutomationTesting />}
          />
<Route
            path="/software-testing/regression-testing"
            element={<RegressionTesting />}
          />

{/* RegressionTesting */}



          {/* Ethical Hacking */}
          <Route
            path="/ethical_Hacking"
            element={<EthicalHackingStudentArray />}
          />
          <Route
            path="/Ethical_Hacking/basic_ethical_Hacking"
            element={<EthicalHacking />}
          />
          <Route
            path="/Ethical_Hacking/advance_Ethical_Hacking"
            element={<AdvanceEthicalHacking />}
          />
          <Route
            path="/Ethical-Hacking/certified_Ethical_Hacking"
            element={<CertifiedEthicalHacking />}
          />

          {/* Full Stack */}
          <Route
            path="/fullStack_WebDevelopment/mean-Stack-Developer"
            element={<MeanStackDeveloper />}
          />
          <Route
            path="/fullStack_WebDevelopment"
            element={<FullStackWebDevelopmentArray />}
          />
          <Route
            path="/fullStack_WebDevelopment/fullStack-Devops"
            element={<FullStackDevops />}
          />
          <Route
            path="/fullStack_WebDevelopment/fullStack-Web-Development"
            element={<FullStackWebDevelopment />}
          />
          <Route
            path="/fullStack_WebDevelopment/fullStack-Python-Development"
            element={<FullStackPythonDevelopment />}
          />
          <Route
            path="/fullStack_WebDevelopment/fullStack-Java-Development"
            element={<FullStackJava />}
          />
          <Route
            path="/fullStack_WebDevelopment/full-stack-javascript"
            element={<FullStackJavaScript />}
          />
  {/* <Route
            path="/fullStack_WebDevelopment/dot-net-development"
            element={<DotnetDevelopment />}
          /> */}
{/* DotnetDevelopment */}
          {/* /student/student_fullStack_WebDevelopment/fullStack-DotNet */}

          {/* WishList/ Cart */}
          <Route path="/wishLists" element={<WishLists />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/personaldevelopment"
            element={<PersonalDevelopment />}
          />
          <Route path="/socialscience" element={<SocialScience />} />
          <Route path="/admin/*" element={<AdminRouter />} />

          {/* Basic Advance Preminum Cousrses here */}
          <Route path="/basic_courses" element={<BasicCourses />} />
          <Route path="/premium_courses" element={<PremiumCourses />} />
          <Route path="/advance_courses" element={<AdvanceCourses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

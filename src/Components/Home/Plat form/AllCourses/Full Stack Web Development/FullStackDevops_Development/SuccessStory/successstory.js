import React from "react";
// import successImage from "../Assests_MeanStack/successstoryimages/studentsitting.jpg";
import company from "../../../../../../assets/Assests_FullStackDevops/successstoryimages/company.png";
import webcertificate from "../../../../../../assets/Assests_FullStackDevops/successstoryimages/webcertificate.png";
import { ImQuotesLeft } from "react-icons/im";

function SuccessStory() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-white mt-8">
      {/* Background Image */}
      <div
        className="relative bg-cover bg-center w-96 h-96 mb-4 mt-4 sm:w-80 sm:h-80 md:w-96 md:h-96"
        style={{
          backgroundImage: `url(https://media.istockphoto.com/id/1346143621/photo/positive-young-mixed-race-woman-using-a-laptop-and-smartphone-at-home-cozy-home-interior-with.jpg?s=612x612&w=0&k=20&c=o92yS8xrYMIgAOwq6VpVU713mS2wpLa5-1bBRgysHU4=)`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          // backgroundPositionY :"10px"
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Company Background Strip */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            marginLeft: "400px",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "8px",
            zIndex: 1,
            height: "40px",
            width: "120px",
          }}
        >
          <img
            src={company}
            alt="company"
            style={{
              height: "30px",
              width: "30px",
            }}
          />
          <p style={{ marginLeft: "10px", fontSize: "10px" }}>
            finished
            <br /> kotlin track
          </p>
        </div>

        {/* Web Developer Certificate */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "-50px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "8px",
            zIndex: 1,
            height: "40px",
            width: "160px",
          }}
        >
          <img
            src={webcertificate}
            alt="webdeveloper"
            style={{
              height: "30px",
              width: "30px",
            }}
          />
          <p style={{ marginLeft: "0px", fontSize: "10px" }}>
            Full stack Devops
            <br /> certificate
          </p>
        </div>

        {/* ImQuotesLeft Strip */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "8px",
            zIndex: 1,
            height: "40px",
            width: "60px",
            backgroundColor: "transparent",
          }}
        >
          <ImQuotesLeft
            style={{
              color: "skyblue",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          />
          <p
            style={{ marginLeft: "10px", color: "white", fontSize: "14px" }}
          ></p>
        </div>
      </div>

      {/* Content */}
      <div className="text-center bg-white rounded-lg p-8 shadow-lg border border-gray-200">
        <h1
          className="text-4xl pb-4"
          style={{ fontStyle: "italic", color: "black", fontSize: "30px" }}
        >
          The Success Story of{" "}
          <span className="text-[#25a244]" style={{ fontFamily: "Arial" }}>
            Savannah B.
          </span>
        </h1>

        <p className="text-black mb-4 mx-4 text-justify">
          Savannah embarked on their path with a vision and resolve.
          <br /> They encountered obstacles but remained steadfast.
          <br /> Through diligence and resilience, they reached their goals.
          <br /> Savannah's journey motivates us to chase our ambitions.
          <br /> Savannah started their journey with a dream and determination.
          <br /> They faced challenges but never gave up.
          <br /> With hard work and perseverance, they achieved success.
          <br /> Savannah's story inspires us all to pursue our dreams
          relentlessly.
        </p>
        <button className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded-md">
          Start your success story
        </button>
      </div>
    </div>
  );
}

export default SuccessStory;

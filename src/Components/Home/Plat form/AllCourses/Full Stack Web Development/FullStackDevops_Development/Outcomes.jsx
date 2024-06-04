import React from "react";
import { FaCaretRight } from "react-icons/fa";

const Outcomes = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2">
          <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
            Transform your career with sought-after skills in Full Stack DevOps
            Development
          </div>
          <div className="pl-4">
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />{" "}
              </div>
              <div className="text-base text-gray-600 text-md font-lora">
                Acquire Full Stack DevOps skills. Industry-recognized
                certification. Excel in tech.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />{" "}
              </div>
              <div className="text-base text-gray-600 text-md font-lora">
                Master CI/CD, Docker, Kubernetes. Real-world projects.
                Career-ready in DevOps.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />{" "}
              </div>
              <div className="text-base text-gray-600 text-md font-lora">
                Elevate career with DevOps. Google-endorsed. Prepare for
                industry. Success awaits.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/2 mt-6 md:mt-0">
          <img
            src="https://media.istockphoto.com/id/1334063560/photo/african-americans-college-students-e-leaning-with-their-teacher-during-a-class.jpg?s=612x612&w=0&k=20&c=6ADofCPEBlGPK1MFGM44sfdCe9sjMzzzzK0MkZTcLw8="
            className="rounded-xl w-full"
          />
        </div>
      </div>

      <div className="flex md:flex-row justify-center items-center flex-col mt-6">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/2 order-2 md:order-1">
          <img
            src="https://media.istockphoto.com/id/1359662582/photo/group-of-happy-college-student-stock-photo.jpg?s=612x612&w=0&k=20&c=Oq4d6V5XJi9LayES7cH6n2obZWqVuzJOq2CtSBSiP6g="
            className="rounded-xl w-full"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2 order-1 md:order-2">
          <div className="mt-3 text-base font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora pl-12">
            Master Full Stack DevOps Development for Career Advancement
          </div>
          <div className="pl-16">
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />{" "}
              </div>
              <div className="text-base text-gray-600 text-md font-lora">
                Acquire comprehensive Full Stack DevOps skills for industry
                recognition.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />{" "}
              </div>
              <div className="text-base text-gray-600 text-md font-lora">
                Excel in CI/CD, Docker, Kubernetes with real-world projects.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />{" "}
              </div>
              <div className="text-base text-gray-600 text-md font-lora">
                Elevate your career with Google-endorsed training, preparing you
                for industry success.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center mt-6">
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2">
          <div className="text-base font-extrabold text-gray-600 sm:text-xl lg:text-lg xl:text-xl font-lora">
            Unlock Career Opportunities with Full Stack DevOps Development
          </div>
          <div className="pl-4">
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />{" "}
              </div>
              <div className="text-base text-gray-600 font-lora">
                Master both CI/CD and infrastructure management with Docker,
                Kubernetes, and cloud platforms for diverse job roles.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />{" "}
              </div>
              <div className="text-base text-gray-600 font-lora">
                Gain hands-on experience through real-world projects and case
                studies.
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 mt-2">
              <div>
                <FaCaretRight />{" "}
              </div>
              <div className="text-base text-gray-600 font-lora">
                Prepare for success with industry-recognized certification and
                Google-endorsed training.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/2 mt-6 md:mt-0">
          <img
            src="https://media.istockphoto.com/id/1366724877/photo/rear-view-of-mature-teacher-talking-to-his-student-during-lecture-at-university-classroom.jpg?s=612x612&w=0&k=20&c=PYpAFHxiUKX2i1D8w_ElnGsm1B64GBleyF-DfYTLcN0="
            className="rounded-xl w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Outcomes;

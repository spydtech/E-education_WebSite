import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className=" lg:pl-20  w-5/6">
      <div className="fone-bold text-[#0098F1]  font sm:text-xl text-xl md:text-4xl lg:text-5xlfont-bold">
          About this Course
        </div>
        <div className="pt-4 text-[#0098F1] font">
          Mastering Full Stack DevOps Development involves becoming proficient
          in continuous integration, deployment, and infrastructure management
          using a variety of tools and technologies. Here's a breakdown of what
          it entails:
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1  font-bold leading-10 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl lg:text-2xl font">
            Continuous Integration
          </div>
          <div className="text-[#0098F1] text-base font">
            <span className="mt-3 text-lg font-semibold text-[#F6AC14] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
              CI/CD Pipelines:
            </span>{" "}
            Mastery of CI/CD pipelines is essential for automating the build,
            test, and deployment processes, ensuring smooth and rapid delivery
            of software updates.
          </div>
          <div className="text-[#0098F1] text-base font">
            <span className="mt-3 text-lg font-semibold text-[#F6AC14] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
              Version Control:
            </span>{" "}
            A deep understanding of version control systems like Git is
            necessary for managing code changes and collaborating effectively
            with team members.
          </div>
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1  font-bold leading-10 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl lg:text-2xl font">
            Containerization and Orchestration
          </div>
          <div className="text-[#0098F1] text-base font">
            <span className="mt-3 font-semibold text-lg text-[#F6AC14] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
              Docker:
            </span>{" "}
            Proficiency in Docker is vital for creating, managing, and deploying
            containerized applications efficiently.
          </div>
          <div className="text-[#0098F1] text-base font">
            <span className="mt-3 font-semibold text-lg text-[#F6AC14] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
              Kubernetes:
            </span>{" "}
            Understanding Kubernetes is important for orchestrating and managing
            containerized applications across a cluster of machines.
          </div>
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1  font-bold leading-10 tracking-tight text-[#0098F1] sm:leading-none sm:text-xl lg:text-2xl font">
            Infrastructure Management
          </div>
          <div className="text-[#0098F1] text-base font">
            <span className="mt-3 font-bold text-base text-[#F6AC14] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
              Infrastructure as Code (IaC):
            </span>{" "}
            Knowledge of IaC tools like Terraform or Ansible is essential for
            automating the setup and management of infrastructure.
          </div>
          <div className="text-[#0098F1] text-base font">
            <span className="mt-3 font-semibold text-lg text-[#F6AC14] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
              Cloud Platforms:
            </span>{" "}
            Familiarity with cloud platforms such as AWS, Azure, or GCP is
            crucial for deploying and managing applications in the cloud.
          </div>
        </div>

        <div className="py-8">
        
        </div>
        <div className="mt-3 font-bold text-[#0098F1] sm:mt-5 sm:text-xl text-2xl lg:xl:text-2xl font">
          What you'll learn
        </div>
        <div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1] text-base font">
              Prepare for Full Stack DevOps Development interviews
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1] text-base font">
              Learn about CI/CD pipelines, containerization, orchestration, and
              cloud deployments.
            </div>
          </div>
          <div className="flex justify-start items-center font mt-2">
            <div>
            <MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold text-[#F6AC14]"/>
            </div>
            <div className="text-[#0098F1] text-base font">
              Gain the skills needed to excel in a Full Stack DevOps Development
              role
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

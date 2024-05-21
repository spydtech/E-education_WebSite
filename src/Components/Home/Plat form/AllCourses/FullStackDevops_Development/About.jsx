import React from "react";
import { FaCaretRight } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div>
        <div className="pt-4 font-lora">
          Mastering Full Stack DevOps Development involves becoming proficient
          in continuous integration, deployment, and infrastructure management
          using a variety of tools and technologies. Here's a breakdown of what
          it entails:
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-xl lg:text-2xl font-lora">
            Continuous Integration/Continuous Deployment (CI/CD)
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 text-base font-bold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              CI/CD Pipelines:
            </span>{" "}
            Mastery of CI/CD pipelines is essential for automating the build,
            test, and deployment processes, ensuring smooth and rapid delivery
            of software updates.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 text-base font-bold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Version Control:
            </span>{" "}
            A deep understanding of version control systems like Git is
            necessary for managing code changes and collaborating effectively
            with team members.
          </div>
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-xl lg:text-2xl font-lora">
            Containerization and Orchestration
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Docker:
            </span>{" "}
            Proficiency in Docker is vital for creating, managing, and deploying
            containerized applications efficiently.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Kubernetes:
            </span>{" "}
            Understanding Kubernetes is important for orchestrating and managing
            containerized applications across a cluster of machines.
          </div>
        </div>
        <div className="py-2 gap-4">
          <div className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-xl lg:text-2xl font-lora">
            Infrastructure Management
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Infrastructure as Code (IaC):
            </span>{" "}
            Knowledge of IaC tools like Terraform or Ansible is essential for
            automating the setup and management of infrastructure.
          </div>
          <div className="text-gray-600 text-base font-lora">
            <span className="mt-3 font-bold text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Cloud Platforms:
            </span>{" "}
            Familiarity with cloud platforms such as AWS, Azure, or GCP is
            crucial for deploying and managing applications in the cloud.
          </div>
        </div>

        <div className="py-8">
          <hr className="border-t border-gray-500" />
        </div>
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          What you'll learn
        </div>
        <div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="text-gray-600 text-lg font-lora">
              Prepare for Full Stack DevOps Development interviews
            </div>
          </div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="text-gray-600 text-lg font-lora">
              Learn about CI/CD pipelines, containerization, orchestration, and
              cloud deployments.
            </div>
          </div>
          <div className="flex justify-start items-center font-lora mt-2">
            <div>
              <FaCaretRight />
            </div>
            <div className="text-gray-600 text-lg font-lora">
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

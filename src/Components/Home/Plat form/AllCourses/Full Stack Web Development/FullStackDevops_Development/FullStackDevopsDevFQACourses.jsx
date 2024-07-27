import React from "react";
import Faq from "react-faq-component";

const data = {
  title: (
    <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
      Courses Covered in this Full Stack DevOps Development Program
    </div>
  ),
  rows: [
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Continuous Integration and Continuous Deployment (CI/CD)
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Learn the fundamentals of CI/CD pipelines.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Explore tools like Jenkins, CircleCI, and GitLab CI for automated
            builds and deployments.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Implement best practices for automated testing and integration.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Containerization with Docker
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Master the basics of containerization and Docker.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Learn to create, manage, and deploy containers for various
            applications.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Explore Docker Compose and Docker Swarm for multi-container
            applications.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Orchestration with Kubernetes
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Get introduced to container orchestration with Kubernetes.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Learn to deploy, scale, and manage containerized applications using
            Kubernetes.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Explore Kubernetes architecture, services, and networking.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Cloud Computing and Infrastructure as Code (IaC)
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Understand the basics of cloud computing and services like AWS,
            Azure, and Google Cloud.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Learn to automate infrastructure provisioning using tools like
            Terraform and AWS CloudFormation.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Explore concepts of scalability, fault tolerance, and disaster
            recovery in the cloud.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Monitoring and Logging
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Learn to implement monitoring and logging for infrastructure and
            applications.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Explore tools like Prometheus, Grafana, ELK Stack (Elasticsearch,
            Logstash, Kibana).
          </p>
          <p className="text-base text-gray-600 text-md font">
            Implement best practices for proactive system monitoring and
            troubleshooting.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Security and Compliance
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Understand the importance of security in the DevOps lifecycle.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Learn to integrate security practices into CI/CD pipelines.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Explore tools and techniques for ensuring compliance and security in
            cloud environments.
          </p>
        </div>
      ),
    },
  ],
};

const styles = {
  bgColor: "white",
  rowContentColor: "grey",
};

const config = {
  animate: true,
  tabFocus: true,
};

export default function FullStackDevOps() {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}

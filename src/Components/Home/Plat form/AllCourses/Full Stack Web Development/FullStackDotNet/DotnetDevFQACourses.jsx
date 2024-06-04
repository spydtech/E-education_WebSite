import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: (
    <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
      Courses Covered in this MEAN Stack Development Program
    </div>
  ),
  rows: [
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          Front-end Development with Angular
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Learn the essentials of Angular for building dynamic user
            interfaces.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Explore TypeScript and how it integrates with Angular for robust
            development.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Implement responsive design principles to ensure your applications
            look great on any device.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          JavaScript Programming with Node.js
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Master the fundamentals of JavaScript programming.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Delve into server-side development using Node.js.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Learn to build scalable network applications using Node.js and
            Express.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          Database Management with MongoDB
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Get introduced to NoSQL databases with MongoDB.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Learn to design and manage databases using MongoDB.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Explore data modeling, schema design, and CRUD operations in
            MongoDB.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          Full Stack Application Development
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Integrate Angular, Node.js, and MongoDB to build full stack
            applications.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Implement RESTful APIs to connect front-end and back-end components.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Develop, test, and deploy MEAN stack applications.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          Version Control with Git
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Understand the basics of version control with Git.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Learn to manage your codebase with Git and GitHub.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Collaborate on projects using branching and merging techniques.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          Project Management and Collaboration Tools
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Get introduced to project management methodologies and tools.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Learn to use tools like JIRA, Trello, and Slack for effective team
            collaboration.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Manage project timelines, tasks, and communication efficiently.
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

export default function MeanStackDev() {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}

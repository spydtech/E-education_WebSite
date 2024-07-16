import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: (
    <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
      Courses Covered in this MEAN Stack Development Program
    </div>
  ),
  rows: [
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Front-end Development with Angular
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Learn the essentials of Angular for building dynamic user
            interfaces.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Explore TypeScript and how it integrates with Angular for robust
            development.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Implement responsive design principles to ensure your applications
            look great on any device.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          JavaScript Programming with Node.js
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Master the fundamentals of JavaScript programming.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Delve into server-side development using Node.js.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Learn to build scalable network applications using Node.js and
            Express.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Database Management with MongoDB
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Get introduced to NoSQL databases with MongoDB.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Learn to design and manage databases using MongoDB.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Explore data modeling, schema design, and CRUD operations in
            MongoDB.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Full Stack Application Development
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Integrate Angular, Node.js, and MongoDB to build full stack
            applications.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Implement RESTful APIs to connect front-end and back-end components.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Develop, test, and deploy MEAN stack applications.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Version Control with Git
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Understand the basics of version control with Git.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Learn to manage your codebase with Git and GitHub.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Collaborate on projects using branching and merging techniques.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Project Management and Collaboration Tools
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Get introduced to project management methodologies and tools.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Learn to use tools like JIRA, Trello, and Slack for effective team
            collaboration.
          </p>
          <p className="text-base text-gray-600 text-md font">
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

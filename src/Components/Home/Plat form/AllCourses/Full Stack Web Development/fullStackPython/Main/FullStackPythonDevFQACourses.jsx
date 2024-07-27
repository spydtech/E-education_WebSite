import React from "react";
import Faq from "react-faq-component";
const data = {
  title: (
    <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
      Courses Covered in this Full Stack Python Development Program
    </div>
  ),
  rows: [
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Front-end Development with React
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Learn the essentials of React for building dynamic user interfaces.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Explore component-based architecture and state management in React.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Implement modern web development techniques using React.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Back-end Development with Django
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Master the fundamentals of Django for building robust web
            applications.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Learn to create RESTful APIs using Django REST Framework.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Explore Django's ORM for database interactions and authentication
            mechanisms.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font">
          Database Management with PostgreSQL
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font">
            Get introduced to relational databases with PostgreSQL.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Learn to design and manage databases using SQL and PostgreSQL.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Explore data modeling, transactions, and queries in PostgreSQL.
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
            Integrate React, Django, and PostgreSQL to build full stack
            applications.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Implement RESTful APIs to connect front-end and back-end components.
          </p>
          <p className="text-base text-gray-600 text-md font">
            Develop, test, and deploy Python stack applications.
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

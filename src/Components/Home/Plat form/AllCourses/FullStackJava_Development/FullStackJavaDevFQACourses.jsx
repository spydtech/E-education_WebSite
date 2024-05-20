import React from "react";
import Faq from "react-faq-component";

const data = {
  title: (
    <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
      Courses Covered in this Full Stack Java Development Program
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
            Explore component-based architecture and state management in
            Angular.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Implement modern web development techniques using Angular.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          Back-end Development with Spring Boot
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Master the fundamentals of Spring Boot for building robust web
            applications.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Learn to create RESTful APIs using Spring Boot.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Explore Spring Boot's ORM for database interactions and
            authentication mechanisms.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          Database Management with MySQL
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Get introduced to relational databases with MySQL.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Learn to design and manage databases using SQL and MySQL.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Explore data modeling, transactions, and queries in MySQL.
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
            Integrate Angular, Spring Boot, and MySQL to build full stack
            applications.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Implement RESTful APIs to connect front-end and back-end components.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Develop, test, and deploy Java stack applications.
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

export default function FullStackJavaDev() {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}

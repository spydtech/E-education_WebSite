import React from "react";
import Faq from "react-faq-component";

const data = {
  title: (
    <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
      Courses Covered in this .NET Development Program
    </div>
  ),
  rows: [
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          C# Programming Fundamentals
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Learn the basics of C# programming language.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Understand object-oriented programming (OOP) concepts in C#.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Explore data types, control structures, and functions in C#.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          ASP.NET Web Development
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Build dynamic web applications using ASP.NET framework.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Understand the MVC (Model-View-Controller) architecture in ASP.NET.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Implement server-side logic and data validation in ASP.NET.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          Database Management with Entity Framework
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Learn to interact with databases using Entity Framework.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Understand ORM (Object-Relational Mapping) concepts.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Perform CRUD operations using Entity Framework.
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
          Web API Development with .NET Core
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Build RESTful APIs using .NET Core framework.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Implement authentication and authorization in Web APIs.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Handle HTTP requests and responses in .NET Core.
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
          Software Development Life Cycle (SDLC)
        </div>
      ),
      content: (
        <div>
          <p className="text-base text-gray-600 text-md font-lora">
            Understand the phases of the software development life cycle.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Learn about Agile and Waterfall methodologies.
          </p>
          <p className="text-base text-gray-600 text-md font-lora">
            Implement best practices for software development.
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

// export default function DotNetDev() {
//   return (
//     <div>
//       <Faq data={data} styles={styles} config={config} />
//     </div>
//   );
// }

export default function MeanStackDev() {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}

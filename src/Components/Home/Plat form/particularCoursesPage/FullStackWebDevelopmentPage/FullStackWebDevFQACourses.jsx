
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">Courses We Are Covered in this Course</div>,
    rows: [
        {
            title: 
            <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora"> Front-end Development Fundamentals</div>,
            content: <div>
                <p className=" text-base text-gray-600 text-md font-lora">front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
                <p className=" text-base text-gray-600 text-md font-lora">Explore responsive web design principles for seamless experiences across devices. </p>
                <p className=" text-base text-gray-600 text-md font-lora">Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
            </div>
        },
        {
            title: <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">JavaScript Programming Basics</div> ,
            content:
            <div>
            <p className=" text-base text-gray-600 text-md font-lora">front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p className=" text-base text-gray-600 text-md font-lora">Explore responsive web design principles for seamless experiences across devices. </p>
            <p className=" text-base text-gray-600 text-md font-lora">Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
        {
            title: <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">Responsive Web Design Techniques</div>,
            content: <div>
            <p className=" text-base text-gray-600 text-md font-lora">front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p className=" text-base text-gray-600 text-md font-lora">Explore responsive web design principles for seamless experiences across devices. </p>
            <p className=" text-base text-gray-600 text-md font-lora">Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
        {
            title: <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">Introduction to Front-end Frameworks (e.g., React, Angular, Vue.js)</div>,
            content:  <div>
            <p className=" text-base text-gray-600 text-md font-lora">front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p className=" text-base text-gray-600 text-md font-lora">Explore responsive web design principles for seamless experiences across devices. </p>
            <p className=" text-base text-gray-600 text-md font-lora">Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
        {
            title: <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">Back-end Development Concepts</div>,
            content:  <div>
            <p className=" text-base text-gray-600 text-md font-lora">front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p className=" text-base text-gray-600 text-md font-lora">Explore responsive web design principles for seamless experiences across devices. </p>
            <p className=" text-base text-gray-600 text-md font-lora">Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
        {
            title: <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">Server-side Scripting Languages (e.g., Node.js, Python, Ruby, Java)</div>,
            content:  <div>
            <p className=" text-base text-gray-600 text-md font-lora">front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p className=" text-base text-gray-600 text-md font-lora">Explore responsive web design principles for seamless experiences across devices. </p>
            <p className=" text-base text-gray-600 text-md font-lora">Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
        {
            title: <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">Database Management Systems (SQL and NoSQL)</div>,
            content:  <div>
            <p className=" text-base text-gray-600 text-md font-lora">front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p className=" text-base text-gray-600 text-md font-lora">Explore responsive web design principles for seamless experiences across devices. </p>
            <p className=" text-base text-gray-600 text-md font-lora">Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
     {
            title: <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">Version Control Systems (e.g., Git)</div>,
            content:  <div>
            <p className=" text-base text-gray-600 text-md font-lora">front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p className=" text-base text-gray-600 text-md font-lora">Explore responsive web design principles for seamless experiences across devices. </p>
            <p className=" text-base text-gray-600 text-md font-lora">Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },  {
            title: <div className="mt-3 font-extrabold text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">Project Management and Collaboration Tools</div>,
            content:  <div>
            <p className=" text-base text-gray-600 text-md font-lora">front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p className=" text-base text-gray-600 text-md font-lora">Explore responsive web design principles for seamless experiences across devices. </p>
            <p className=" text-base text-gray-600 text-md font-lora">Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
    ],
};

const styles = {
    bgColor: 'white',
    // titleTextColor: "blue",
    // rowTitleColor: "blue",
    rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    // arrowIcon: "S",
    tabFocus: true
};

export default function FullStackWebDev() {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
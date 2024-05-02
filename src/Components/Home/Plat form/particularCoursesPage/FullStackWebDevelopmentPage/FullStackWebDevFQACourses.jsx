
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: <div className="font-bold">Courses We Are Covered in this Course</div>,
    rows: [
        {
            title: " Front-end Development Fundamentals,",
            content: <div>
                <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
                <p>Explore responsive web design principles for seamless experiences across devices. </p>
                <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
            </div>
        },
        {
            title: "JavaScript Programming Basics",
            content:
            <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
        {
            title: "Responsive Web Design Techniques",
            content: <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
        {
            title: "Introduction to Front-end Frameworks (e.g., React, Angular, Vue.js)",
            content:  <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
        {
            title: "Back-end Development Concepts",
            content:  <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
        {
            title: "Server-side Scripting Languages (e.g., Node.js, Python, Ruby, Java)",
            content:  <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
        {
            title: "Database Management Systems (SQL and NoSQL)",
            content:  <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        },
        {
            title: "API Development and Integration",
            content:  <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        }, {
            title: "Authentication and Authorization Methods",
            content:  <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        }, {
            title: "Deployment Strategies and Continuous Integration/Continuous Deployment (CI/CD)",
            content:  <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        }, {
            title: "Version Control Systems (e.g., Git)",
            content:  <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        }, {
            title: "Testing and Debugging Practices",
            content:  <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        }, {
            title: "Security Best Practices in Web Development",
            content:  <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
        </div>
        }, {
            title: "Project Management and Collaboration Tools",
            content:  <div>
            <p>front-end essentials like HTML5, CSS3, and JavaScript, laying the groundwork for captivating user interfaces.</p>
            <p>Explore responsive web design principles for seamless experiences across devices. </p>
            <p>Delve into popular front-end frameworks such as React, Angular, and Vue.js to build dynamic web applications effortlessly</p>
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
import React from "react";
import EthicalHackingScroller from "./EthicalHackingScroller";
const EthicalHackingHero = () => {
  return (
    <>
      <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <h1 className="mx-auto font-lora max-w-4xl font-display text-2xl font-bold tracking-normal text-white-300 dark:text-gray-300 md:text-7xl">
          Empower Your Security Strategy with{" "}
          <span className="relative whitespace-nowrap text-white-600 dark:text-gray-300">
            Ethical Hacking Techniques
          </span>
          <span className="relative whitespace-nowrap text-orange-500 dark:text-orange-300">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-violet-700 dark:fill-orange-300/60"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative  text-violet-700"> Ethical Hacking</span>
          </span>
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-white-400 text-white-500 dark:text-gray-300 leading-7">
          Strengthen your defenses against cyber threats with our Ethical
          Hacking expertise. Explore comprehensive security assessments,
          vulnerability analyses, and proactive defense strategies. Protect your
          digital assets with confidence.
        </h2>
        <a
          className="bg-violet-600 dark:bg-gray-800 rounded-xl text-white dark:text-gray-300 font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-violet-800 dark:hover:bg-gray-600 transition mb-0"
          href=""
        >
          Get started
        </a>
      </div>
      {/* first part */}

      {/* <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration={800}
      >
        <div className="pr-2 md:mb-14 py-14 md:py-0 font-lora">
          <h1 className="text-3xl font-semibold text-violet-800 xl:text-5xl lg:text-3xl">
            <span className="block w-full">
              Master the Art of Ethical Hacking
            </span>{" "}
            and Secure Your Digital World!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Equipping you with cutting-edge techniques and cybersecurity
            expertise, we stand by your side in safeguarding your digital
            assets...
          </p>

          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-violet-500 rounded-lg md:px-8 hover:bg-violet-800 group"
            >
              <span>Discover More</span>{" "}
            </a>
          </div>
        </div>

        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://media.istockphoto.com/id/1372098110/vector/business-technology-cloud-computing-service-and-technology-file-upload-backup-on-cloud.jpg?s=612x612&w=0&k=20&c=EX5RbNCdBm3mPku1AQCW5Hb30_6B5roBdKIiQ5LWn-g="
            alt="Awesome hero page image"
            width={500}
            height={488}
          />
        </div>
      </div> */}

      {/* Second part */}
    </>
  );
};

export default EthicalHackingHero;

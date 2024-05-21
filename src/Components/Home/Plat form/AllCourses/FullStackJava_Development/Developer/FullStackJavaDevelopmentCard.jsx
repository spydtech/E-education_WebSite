import React from "react";

const FullStackJavaDevelopmentCard = () => {
  return (
    <>
      <div className="max-w-screen-xl px-4 mx-auto mt-8 sm:mt-12 sm:px-6 md:mt-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg
              className="absolute top-0 hidden origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden"
              width={640}
              height={784}
              fill="none"
              viewBox="0 0 640 784"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x={118}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                y={72}
                width={640}
                height={640}
                className="text-gray-50"
                fill="currentColor"
              />
              <rect
                x={118}
                width={404}
                height={784}
                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              />
            </svg>
            <div className="relative justify-start hidden w-full lg:flex">
              <div className="flex justify-start  p-8 pr-8 text-base leading-relaxed text-black bg-gradient-to-r to-[#8b008b] from-[#9340da]  rounded-lg shadow-lg xl:text-lg xl:pr-16">
                <pre>
                  <span className="text-blue-100">
                    // Create a Full Stack Java app{" "}
                  </span>
                  {"\n"}import org.springframework.boot.SpringApplication;{"\n"}
                  import org.springframework.boot.{"\n"}
                  autoconfigure.SpringBootApplication;
                  {"\n"}
                  {"\n"}
                  <span className="text-blue-100">
                    // Define your main class
                  </span>
                  {"\n"}@SpringBootApplication{"\n"}public class App {"{"}
                  {"\n"}
                  {"  "}public static void main(String[] args) {"{"}
                  {"\n"}
                  {"    "}SpringApplication.run(App.class, args);{"\n"}
                  {"  "}
                  {"}"}
                  {"\n"}
                  {"}"}
                  {"\n"}
                  {"\n"}
                  <span className="text-blue-100">
                    // Create a simple endpoint
                  </span>
                  {"\n"}@RestController{"\n"}public class HelloController {"{"}
                  {"\n"}
                  {"  "}@GetMapping("/hello"){"\n"}
                  {"  "}public String hello() {"{"}
                  {"\n"}
                  {"    "}return "Hello, World!";{"\n"}
                  {"  "}
                  {"}"}
                  {"\n"}
                  {"}"}
                  {"\n"}
                </pre>
              </div>
            </div>
          </div>
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base font-lora">
              Full Stack Java Development
            </div>
            <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-[#f3a916] sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl font-lora">
              Next-Gen Full Stack Java Development
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-lora">
              Enhance your web applications with our comprehensive Full Stack
              Java development solutions. From powerful backend logic to
              interactive frontend experiences, we leverage Java's robustness to
              deliver scalable and efficient web solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackJavaDevelopmentCard;

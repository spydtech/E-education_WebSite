import React from "react";

const FullStackCard = () => {
  return (
    <>
      <div class="h-screen w-full flex items-center justify-center overflow-hidden ">
        <div class="slider relative w-[290px] h-[290px] [transform-style:preserve-3d] animate-rotate">
          <span
            style={{ "--i": 1 }}
            class="absolute top-0 left-0 w-full h-full origin-center [transform-style:preserve-3d] [transform:rotateY(calc(var(--i)*45deg))_translateZ(350px)]"
          >
            <img
              src="https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqn59agr1g40svv6krfkz.jpg"
              alt="img - 1"
              class="absolute top-0 left-0 w-full h-full rounded-full object-cover [transition:2s] hover:-translate-y-[50px] hover:scale-[1.3]"
            />
          </span>
          <span
            style={{ "--i": 2 }}
            class="absolute top-0 left-0 w-full h-full origin-center [transform-style:preserve-3d] [transform:rotateY(calc(var(--i)*45deg))_translateZ(350px)]"
          >
            <img
              src="https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fyhr84hde9pnkd0y42plu.png"
              alt="img - 2"
              class="absolute top-0 left-0 w-full h-full rounded-full object-cover [transition:2s] hover:-translate-y-[50px] hover:scale-[1.3]"
            />
          </span>
          <span
            style={{ "--i": 3 }}
            class="absolute top-0 left-0 w-full h-full origin-center [transform-style:preserve-3d] [transform:rotateY(calc(var(--i)*45deg))_translateZ(350px)]"
          >
            <img
              src="https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Faj976wx7kjm0m5lkfrui.png"
              alt="img - 3"
              class="absolute top-0 left-0 w-full h-full rounded-full object-cover [transition:2s] hover:-translate-y-[50px] hover:scale-[1.3]"
            />
          </span>
          <span
            style={{ "--i": 4 }}
            class="absolute top-0 left-0 w-full h-full origin-center [transform-style:preserve-3d] [transform:rotateY(calc(var(--i)*45deg))_translateZ(350px)]"
          >
            <img
              src="https://play-lh.googleusercontent.com/cyTI43JCjc4L-e1m7FvJhI1VhmTSJ4AMNZoqhkp0Xm6_NOtHbaewp9UPVLw5R3-tZIU"
              alt="img - 4"
              class="absolute top-0 left-0 w-full h-full rounded-full object-cover [transition:2s] hover:-translate-y-[50px] hover:scale-[1.3]"
            />
          </span>
          <span
            style={{ "--i": 5 }}
            class="absolute top-0 left-0 w-full h-full origin-center [transform-style:preserve-3d] [transform:rotateY(calc(var(--i)*45deg))_translateZ(350px)]"
          >
            <img
              src="https://lastmomenttuitions.com/wp-content/uploads/2021/05/Data-Structure-and-Algorithm.jpg"
              alt="img - 5"
              class="absolute top-0 left-0 w-full h-full rounded-full object-cover [transition:2s] hover:-translate-y-[50px] hover:scale-[1.3]"
            />
          </span>
          <span
            style={{ "--i": 6 }}
            class="absolute top-0 left-0 w-full h-full origin-center [transform-style:preserve-3d] [transform:rotateY(calc(var(--i)*45deg))_translateZ(350px)]"
          >
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/01/thumb/featurecrop/1200X900/1711910924-8793.jpg"
              alt="img - 6"
              class="absolute top-0 left-0 w-full h-full rounded-full object-cover [transition:2s] hover:-translate-y-[50px] hover:scale-[1.3]"
            />
          </span>
          <span
            style={{ "--i": 7 }}
            class="absolute top-0 left-0 w-full h-full origin-center [transform-style:preserve-3d] [transform:rotateY(calc(var(--i)*45deg))_translateZ(350px)]"
          >
            <img
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190902124355/ruby-programming-language.png"
              alt="img - 7"
              class="absolute top-0 left-0 w-full h-full rounded-full object-cover [transition:2s] hover:-translate-y-[50px] hover:scale-[1.3]"
            />
          </span>
          <span
            style={{ "--i": 8 }}
            class="absolute top-0 left-0 w-full h-full origin-center [transform-style:preserve-3d] [transform:rotateY(calc(var(--i)*45deg))_translateZ(350px)]"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLNBcVhsqOUAQ8IHZNvUEKLSJE56Pb0L6f80GN4Cnbjba2wrAnAEA-_HoLyCX6wABx4u0&usqp=CAU"
              alt="img - 8"
              class="absolute top-0 left-0 w-full h-full rounded-full object-cover [transition:2s] hover:-translate-y-[50px] hover:scale-[1.3]"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default FullStackCard;

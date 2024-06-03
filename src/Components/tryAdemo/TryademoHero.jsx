import React from 'react';
import { Link } from 'react-router-dom';
const TryademoHero = () => {
  return (
    <>
      
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            // src="https://youtu.be/92JRcqcd-Pw?si=9ZO3XhQnFiN90O0c"
            type="video/mp4"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="video-content space-y-2 z-10 flex justify-center items-center flex-col">
          <div className="font-bold text-6xl">Discover Your Future in Tech</div>
          <div className="font-light text-3xl">Join Our Interactive Demo</div>
          <div className="font-light text-xl w-[600px]">
            Step into the world of technology with our hands-on demo. Explore the
            fundamentals of coding, web development, and more. Perfect for
            beginners and aspiring tech professionals!
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
         <Link to = "/pricing">

            Eroll Now
         </Link>
          </button>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .video-docker video {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .video-docker::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background: rgba(0, 0, 0, 0.6);
              z-index: 1;
            }
          `
        }}
      />
    </>
  );
}

export default TryademoHero;

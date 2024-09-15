import React from "react";

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-container"
            />

            <div>
              <p className="grid-headtext">Hi, I 'm Arush</p>
              <p className="grid-subtext">
                With 1 Year of experience, i have hold my skills in frontend and
                backend developement, with a focus of animated 3D websites.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
                <img src="/assets/grid23.gif" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
                {/* <video width="300px" height="300px" controls> 
                    <source src="/assets/grid.mp4" type="grid" /> 
                    </video> */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;

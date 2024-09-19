import { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [rotation, setRotation] = useState({ lat: 0, lng: 0 });
  const globeRef = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText("arushsingh1803@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const rotateGlobe = () => {
      setRotation((prevRotation) => ({
        lat: prevRotation.lat,
        lng: prevRotation.lng + 0.02, // Adjust this value to change the speed of spinning
      }));
    };

    const intervalId = setInterval(rotateGlobe, 100); // Adjust this interval for smoother or faster animation

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I'm Arush Singh</p>
              <p className="grid-subtext">
                With strong frontend and backend skills, I build dynamic,
                responsive applications and create seamless UIs alongside robust
                back-end systems for scalable, high-performance solutions. I’m
                also enthusiastic about diving into new technologies and
                adapting to any tech stack, ready to tackle new challenges with
                enthusiasm.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I'm a developer with expertise in front-end and back-end
                technologies, proficient in JavaScript, TypeScript, Python, and
                C++. I build robust applications using React, React Native, and
                Three.js, with experience in Node.js, Express, and MongoDB.
                Skilled in UI/UX design with Figma, I deliver engaging, scalable
                solutions while staying committed to learning and process
                optimization.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 26,
                    lng: 80,
                    text: "Kanpur, India",
                    color: "black",
                    size: 40,
                  },
                ]}
                rotation={[rotation.lat, rotation.lng]} // Apply rotation here
              />
            </div>
            <div>
              <p className="grid-headtext">
                I'm very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I'm based in Kanpur, India, and open to remote work worldwide.
                I'm also available for on-site opportunities, ready to work in
                offices as needed.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">
                My excitement for creating with code
              </p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn't just my profession—it's my passion. I thrive
                on exploring new technologies, whether it's mastering JavaScript
                frameworks like React and Node.js, or diving into tools like
                Three.js to bring creative ideas to life. I’m always looking for
                the next challenge, whether it's optimizing a backend system or
                designing a seamless user experience with Figma. Constantly
                driven to improve, I embrace learning and push myself to deliver
                high-performance, scalable solutions in every project I take on.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  arushsingh1803@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

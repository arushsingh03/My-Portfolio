import { Canvas } from "@react-three/fiber"

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Yo, I am Arush <span className="waving-hand">👋</span></p>
            <p className="hero_tag text-gray_gradient"> Full Stack Developer </p>
        </div>

        <div className="w-full h-full absolute inset-0"> 
            <Canvas className="w-full h-full">
                <perspectiveCamera makaDefault position={[0, 0, 30]} />
            </Canvas>
        </div>
    </section>
  )
}

export default Hero;
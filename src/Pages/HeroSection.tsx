'use client'

import  SplineScene  from "../ui/HeroSection/splite";
import { Card } from "../ui/HeroSection/card"
import { Spotlight } from "../ui/HeroSection/spotlight"
import BorderButton from "../ui/HeroSection/subtle-button"
import "../App.css"
export function SplineSceneBasic() {
  return (
    <Card id="home" className="w-full min-h-screen bg-black/96 relative overflow-hidden">

      <div className="flex flex-col md:flex-row min-h-screen relative">

        {/* ✅ Spotlight (NO click blocking) */}
        <Spotlight
          className="top-0 left-0 md:left-40 md:-top-20 pointer-events-none"
          size={300}
        />

        {/* ✅ Left Content */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 md:px-12 lg:px-16 py-10 md:py-0 
                        relative z-10 flex flex-col justify-center items-center md:items-start 
                        text-center md:text-left mt-10 md:mt-0">

          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold 
                         bg-clip-text text-transparent bg-gradient-to-b 
                         from-neutral-50 to-neutral-400 leading-tight ">
            Suhail Ulla Khan
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-base lg:text-lg 
                        text-neutral-300 max-w-md mx-auto md:mx-0 lato-bold " >
            I’m a frontend developer focused on building scalable, 
            high-performance, and user-centric web applications.
            I specialize in creating responsive, visually engaging
            interfaces with strong attention to usability and performance.
            I have hands-on experience integrating APIs, managing
            application state, and delivering seamless cross-device
            user experiences using modern frontend technologies.
          </p>

          <div className="mt-6">
            <BorderButton />
          </div>
        </div>

        {/* ✅ Right Content (Spline fixed) */}
        <div className="w-full md:w-1/2 flex items-center justify-center 
                        px-4 md:px-0 relative z-20">

          <div className="w-full flex items-center justify-center
                          h-[400px] sm:h-[450px] md:h-[450px] lg:h-[600px]">

            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full pointer-events-auto touch-auto"
            />

          </div>

        </div>

      </div>
    </Card>
  )
}
import { rotate } from "maath/buffer";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import {Frameworks} from "../components/Frameworks";

const About = () => {
  return <section className="c-space section-spacing" id="about">
    <h2 className="text-heading"> ⚡ Under the Hood — In a Flash! </h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6
    md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img 
          src="assets/coding-pov.png"
          className="absolute scale-[1.75] -right-[5rem] 
          -top-[1rem] md:scale-[3] md:left-50 md:inset-y-0
          lg:scale-[2.5]">
          </img>
          <div className="z-10">
            <p className="headtext">Brief About Me</p>
            <p className="subtext">Embedded Hardware Engineer specializing in Industrial IoT, multilayer PCB design and hardware validation. Experienced in implementing microcontrollers including ATMega, PIC, STM32, Nordic, and ESP32, EMI/ESD-compliant layouts, and industrial automation devices. Proven record of reducing design cycles, cutting BOM costs, and delivering multiple IoT devices into production. Skilled in troubleshooting, cross-functional collaboration, and creating scalable embedded solutions with a strong can-do attitude.</p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none
          -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"/>
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">Electronics is craft &#x1F9E1;</p>
            {/* <Card 
              style={{rotate:"75deg", top:"30%", left:"20%"}}
              text="HIGH SPEED" />
            <Card 
              style={{rotate:"-30deg", top:"60%", left:"45%"}}
              text="RF" />
            <Card 
              style={{rotate:"90deg", bottom:"60%", left:"45%"}}
              text="BGA" />
            <Card 
              style={{rotate:"-45deg", top:"55%", left:"0%"}}
              text="DFM" />
            <Card 
              style={{rotate:"20deg", top:"10%", left:"30%"}}
              text="LAYOUT" /> */}
          </div>
        </div>  
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I am based in India, and open to work opportunities worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top[10%]">
              <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center
          gap-1">
              <p className="text-center headtext">
                Do you want to start a project together ?
              </p>
              <CopyEmailButton />
              <img 
              src="assets/cup-meeting.png"
              className="absolute 
              lg:inset-y-7 lg:scale-60
              md:inset-y-25 md:scale-80 
              inset-y-0 scale-35" />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
        <div className="flex-col w-[60%] md:w-[55%] items-center justify-between">
            <p className="headText sm:py-5">Teck Stack</p>
            <p className="subtext">Focused on hardware design, schematics, high-speed layout, and signal integrity for rugged IoT and various industrial systems. Hands-on with using Altium Designer and incorporating various pheripherals for control and communication.</p>
          </div>
          <div className="scale-75 md:scale-125 absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%]">
            <Frameworks />
          </div>
        </div>
    </div>
  </section>
};

export default About
import { FlipWords } from "./FlipWords";

const HeroText = () => {
    return (
        <dive classname ="z-10 mt-20 
        text-center md:mt-40 
        md:text-left rounded-3xl
        bg-clip-text">
            {/* Desktop View */}
                <div classname="flex-col hidden md:flex c-space">
                    <h1 className="text-4xl font-medium">Yo Satyam</h1>
                </div>
                <div className="flex flex-col items-start">
                    <p>A Dev Dedicated To Crafting</p>
                </div>
                <div>
                    <FlipWords words={["Secure", "Modern", "Scalable"]}
                    className="font-black text-white text-8xl"/>
                </div>
                <p className="text-4xl font-medium text-neutral-300">
                    Embedded Solutions
                </p>
            {/* Mobile View */}
            <div className="flex- flex-col col-y-6 md:hidden">
            <p className="text-4xl font-medium">Hi, I am Satyam</p>
            <div>
                <p className="text-5xl font-black text-neutral-300">Building</p>
                <div>
                    <FlipWords words={["Secure", "Modern", "Scalable"]} 
                    className="font-bold text-white text-7xl"/>
                </div>
                <p className="text-4xl font-black text-neutral-300">Embedded Systems Developer</p>
            </div>
            </div>
        </dive>
    );
};

export default HeroText;
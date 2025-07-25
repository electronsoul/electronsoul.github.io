import { FlipWords } from "./FlipWords"; 
import { motion } from "motion/react";


const HeroText = () => {
    const words = ["Secure", "Modern", "Scalable"];
    const variants = {
        hidden:  {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0},
    };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      
      {/* ✅ Desktop View */}
      <div className="hidden md:flex flex-col c-space">
        {/* <motion.h1 className="text-4xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
        > Ambitious  </motion.h1> */}
        <div className="flex flex-col items-start">
            <motion.p className="text-5xl font-medium
            text-neutral-300 flex"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}>
                Hi, I'm Satyam — a hardware designer<br/>
                crafting solutions that are</motion.p>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5 }}>
            <FlipWords words={words} className="font-black text-white text-8xl" />
            </motion.div>
            <motion.p className="text-4xl font-medium text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.8 }}>
            Embedded Solutions
            </motion.p>
        </div>
      </div>

      {/* ✅ Mobile View */}
      <div className="flex flex-col gap-y-6 md:hidden">
        <motion.p className="mt-10 text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}>
              Hi, I'm Satyam<br/>
              hardware designer<br/>
              building
        </motion.p>

        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}>
          <FlipWords words={words} className="font-bold text-white text-7xl" />
        </motion.div>
        
        <motion.p className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
           transition={{ delay: 1.8 }}>
          Embedded Systems
        </motion.p>
      </div>

    </div>
  );
};

export default HeroText;

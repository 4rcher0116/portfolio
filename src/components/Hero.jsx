import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

// import { computersCanvas } from "./canvas";

const Hero = () => {

  const handleScrollToSection = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const section = document.getElementById('about');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="w-5 h-5 rounded-full bg-[#9bb4d6] mt-2" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#9bb4d6]">Andrew</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a full-stack developer with <br className="sm:block hidden" />{" "}
            experience in developing
            <br className="sm:block hidden" /> production-ready web applications
            <br className="sm:block hidden" /> using React and .NET
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute sm:hidden -bottom-15 w-full flex justify-center items-center ">
        <a href="#about"  onClick={handleScrollToSection}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 z-10"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

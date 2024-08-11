import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { node, number, string } from "prop-types";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-purple-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // options: {{
          //   max: 45,
          //   scale: 1,
          //   speed: 450
          // }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

ServiceCard.propTypes = {
  index: number,
  title: string,
  icon: node,
};

const About = () => {
  return (
    <div className="mt-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-30px"
      >
        I&apos;m a full stack web developer with experience in Typescript,
        Javascript and C# as well a strong foundation in React, Redux, and .NET
        Framework, allowing me to deliver both seamless frontend and robust
        backend solutions. I excel in team environments, and utilize my ability
        to learn quickly and dedication to quality to drive success. I&apos;m
        committed to building reliable solutions that offer a great user
        experience and am eager to contribute to projects that demand innovation
        and precision
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => {
          return (
            <ServiceCard key={services.title} index={index} {...services} />
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");

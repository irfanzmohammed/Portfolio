import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import reactLogo from '../../assets/React.png'
import nodeLogo from '../../assets/Node.js.png';
import expressLogo from '../../assets/Express.png';
import mongodbLogo from '../../assets/MongoDB.png'
import jsLogo from '../../assets/JavaScript.png';
import htmlLogo from '../../assets/HTML5.png';
import cssLogo from '../../assets/CSS3.png';
import githubLogo from '../../assets/githubLogo.png';
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  const techLogos = [
  { img: reactLogo, label: "React" },
  { img: nodeLogo, label: "Node.js" },
  { img: expressLogo, label: "Express.js" },
  { img: mongodbLogo, label: "Mongo DB" },
  { img: jsLogo, label: "JavaScript" },
  { img: htmlLogo, label: "HTML" },
  { img: cssLogo, label: "CSS" },
  { img: githubLogo, label: "GitHub" },
];

const resumeLink=import.meta.env.VITE_RESUME_LINK

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
         Tech
          <br /> Stack
        </p>
        <hr />
      </motion.div>
     <motion.div className="techGrid" variants={variants}>
        {techLogos.map((tech, index) => (
          <motion.div key={index} className="techItem" variants={variants}>
            <img src={tech.img} alt={tech.label} />
            <span>{tech.label}</span>
          </motion.div>
        ))}
      </motion.div>

<motion.div className="downloadSection" variants={variants}>
  <p>Download My Resume</p>
  <a href={resumeLink} download target="_blank" rel="noopener noreferrer" className="resume-btn">Download</a>
</motion.div>
    </motion.div>
  );
};

export default Services;

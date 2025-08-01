import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const githubUrl = import.meta.env.VITE_GITHUB_ID;
  const linkedinUrl=import.meta.env.VITE_LINKEDIN_ID
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mohammed Irfan
        </motion.span>
        <div className="social">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <img src="/githubLogo.png" alt="" />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

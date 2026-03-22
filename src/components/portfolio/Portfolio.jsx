import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import expenseTracker from '../../assets/expense_tracker.png'
import netflixGpt from '../../assets/netflix_gpt.png'
import jobPortal from '../../assets/jsp.png'
import creatify from '../../assets/creatify.png'

const items = [
  {
    id: 1,
    title: "Creatify - AI Content Platform",
    img: creatify,
    desc: "Creatify is an AI-powered content platform that enables creators to generate, edit, and publish media-rich content. It integrates AI-assisted content generation, authentication, and media uploads to provide a modern content management experience.",
    link:import.meta.env.VITE_CREATIFY_LINK,
  },

    {
    id: 2,
    title: "Job Seeking Portal",
    img: jobPortal,
    desc: "The Job Seeking Portal is a full-stack web application that helps users discover job opportunities based on their skills and preferences. It includes features like job search, profile creation, and pool campus drive postings in colleges with filtering and recommendation functionality.",
    link:import.meta.env.VITE_JSP_LINK,
  }, 
  

   {
    id: 3,
    title: "Expense Tracker",
    img: expenseTracker,
    desc:"The Expense Tracker is a full-stack MERN application that allows users to track income and expenses efficiently. It provides secure authentication, interactive data visualization, and excel export features to help users analyze and manage their financial records.",
    link:import.meta.env.VITE_ETRACK_LINK,
  },



    {
    id: 4,
    title: "Netflix-GPT",
    img: netflixGpt,
    desc: "Netflix-GPT is a movie discovery application inspired by Netflix that helps users explore and search for films using an AI-powered recommendation feature. It combines a responsive interface with GPT-based search to provide intelligent movie suggestions.",
    link:import.meta.env.VITE_NGPT_LINK,
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={()=>window.open(item.link, "_blank")}
            >See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

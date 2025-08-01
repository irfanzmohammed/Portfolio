import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import expenseTracker from '../../assets/expense_tracker.png'
import netflixGpt from '../../assets/netflix_gpt.png'
import jobPortal from '../../assets/jsp.png'
const items = [
  {
    id: 1,
    title: "Expense Tracker",
    img: expenseTracker,
    desc: "A MERN stack web app for tracking income and expenses in real-time, with features for authentication, category-based transaction management, data visualization using Recharts, Excel export, and a responsive user-interface.",
    link:import.meta.env.VITE_ETRACK_LINK,
  },
  {
    id: 2,
    title: "Netflix-GPT",
    img: netflixGpt,
    desc: "A movie recommendation web app with a Netflix-style UI, built using React.js and Redux for state management. Integrated Firebase for backend services and hosting, and added GPT-powered search for intelligent movie suggestions.",
    link:import.meta.env.VITE_NGPT_LINK,
  },
  {
    id: 3,
    title: "Job Seeking Portal",
    img: jobPortal,
    desc: "A MERN stack job-seeking portal offering personalized job recommendations based on user skills and preferences. Includes REST APIs to support profile creation, job search, and posts about upcoming pool campus drives at nearby colleges.",
    link:import.meta.env.VITE_JSP_LINK,
  }, 
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
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

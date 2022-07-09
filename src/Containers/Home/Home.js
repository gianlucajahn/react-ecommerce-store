import React, { useState } from 'react';
import styles from './Home.module.css';
import NavBar from '../../Components/NavBar/NavBar';
import { ReactComponent as Credibility } from "../../Resources/image/credible.svg";
import { ReactComponent as Availability } from "../../Resources/image/available.svg";
import { ReactComponent as Reviews } from "../../Resources/image/reviews.svg";
import { ReactComponent as Browse } from "../../Resources/image/browse.svg";
import { hover } from '@testing-library/user-event/dist/hover';
import { motion } from "framer-motion";
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const [browsing, setBrowsing] = useState(false);
  const [hoverState, setHoverState] = useState([
    {
        hovered: false
    },
    {
        hovered: false
    },
    {
        hovered: false
    },
    {
        hovered: false
    },
    {
        hovered: false
    },
    {
        hovered: false
    },
    {
        hovered: false
    },
    {
        hovered: false
    }
  ]);

  const navigate = useNavigate();

  const handleHover = (e) => {
    let newHoverState = hoverState[e.target.id];
    newHoverState.hovered = !newHoverState.hovered;

    setHoverState([
        ...hoverState, hoverState[e.target.id] = newHoverState
    ]);
  }

  const handleBrowse = (e) => {
    setBrowsing(true);
    navigate('/browse')
  }

  const variants = {
    hidden: { opacity: 1, x: -100 },
    visible: { opacity: 1, x: 0 },
  }

  const buttonVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <div className={styles.main}>
        <div className={styles.home}>
            <NavBar 
              handleHover={handleHover} 
              hoverState={hoverState}
              browsing={browsing}
              handleBrowse={handleBrowse}
            />
    
            <motion.div 
              className={styles.home_content}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ x: { type: "spring" }, duration: 1 }}
            >
                <h1>Game Store</h1>
                <h2>„Heaven for gaming deals“ — IGN</h2>
            </motion.div>
        </div>

        <motion.div 
          className={styles.buttons}
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ x: { type: "spring" }, duration: 1.5 }}
        >
            <button id="4"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
            >
                <Credibility className={styles.svg} style={{ fill: hoverState[4].hovered ? "#000000" : "#cccccc" }}/>
                <div>
                    <h3 style={{ color: hoverState[4].hovered ? "#000000" : "#cccccc" }}>Credible Shop</h3>
                    <p style={{ color: hoverState[4].hovered ? "#000000" : "#cccccc" }}>Excellenct Score</p>
                </div>
            </button>

            <button id="5"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                <Availability className={styles.svg} style={{ fill: hoverState[5].hovered ? "#000000" : "#cccccc" }}/>
                <div>
                    <h3 style={{ color: hoverState[5].hovered ? "#000000" : "#cccccc" }}>High Availability</h3>
                    <p style={{ color: hoverState[5].hovered ? "#000000" : "#cccccc" }}>24-hour Support</p>
                </div>
            </button>

            <button id="6"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                <Reviews className={styles.svg} style={{ fill: hoverState[6].hovered ? "#000000" : "#cccccc" }}/>
                <div>
                    <h3 style={{ color: hoverState[6].hovered ? "#000000" : "#cccccc" }}>Great Reviews</h3>
                    <p style={{ color: hoverState[6].hovered ? "#000000" : "#cccccc" }}>9.4 / 10 Avg. Score</p>
                </div>
            </button>
        </motion.div>

        <motion.div 
          className={styles.home_cred}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ x: { type: "spring" }, duration: 1 }}
        >
            <button onClick={handleBrowse}>
                <Browse className={styles.browse} />
                Browse
            </button>
        </motion.div>
    </div>
  );
}

export default Home;
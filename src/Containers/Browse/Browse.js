import styles from './Browse.module.css';
import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import AnimatedPage from '../AnimatedPage/AnimatedPage';

const Browse = props => {
  const { 
          handleHover,
          hoverState
        } = props;
    
    const navigate = useNavigate();
    const [browsing, setBrowsing] = useState(true);
    const [landingPage, setLandingPage] = useState(false);
    
    const handleBrowse = () => {
        navigate('/browse');
    }
    
    const handleHome = () => {
        navigate('/');
    }

    return (
      <div className={styles.Browse}>
        <NavBar
          handleHover={handleHover}
          hoverState={hoverState}
          handleBrowse={handleBrowse}
          handleHome={handleHome}
          browsing={browsing}
          landingPage={landingPage}
        />

        <AnimatedPage>
            <div className={styles.browseContent}>
              <h1 style={{ color: "#fff" }}>Text Text Text Text Text Text</h1>
            </div>
        </AnimatedPage>
      </div>
    );
  }
  
  export default Browse;
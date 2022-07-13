import styles from './Browse.module.css';
import React, { useEffect, useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import AnimatedPage from '../AnimatedPage/AnimatedPage';
import { ReactComponent as Grids } from "../../Resources/image/grid.svg";
import { ReactComponent as Columns } from "../../Resources/image/columns.svg";
import Filters from '../../Components/Filters/Filters';
import Grid from '../../Components/Grid/Grid';
import games from '../../utils/games';

const Browse = props => {
  const { 
          handleHover,
          handleSelect,
          hoverState,
          currentFilter,
          shownGames,
          setShownGames
        } = props;
    
    const navigate = useNavigate();
    const [browsing, setBrowsing] = useState(true);
    const [landingPage, setLandingPage] = useState(false);
    const [grid, setGrid] = useState(true);
    
    const handleBrowse = () => {
        navigate('/browse');
    }
    
    const handleHome = () => {
        navigate('/');
    }

    const handleLayoutSwitch = (e) => {
      if (e.target.id == "grid") {
        setGrid(true);
      } else {
        setGrid(false);
      }
    }

    useEffect(() => {
      if (currentFilter === "none" || currentFilter == undefined) {
        setShownGames(games);

      } else if (currentFilter != "Wishlist" && currentFilter != "Ratings" && currentFilter != "Reviews") {
          let filteredShownGames = games.filter(game => game.genre === currentFilter);
          setShownGames(filteredShownGames);

      } else if (currentFilter === "Ratings") {
          let filteredShownGames = games.sort(function(a, b) {
            return b.rating - a.rating;
          })
          setShownGames(filteredShownGames);
      }
    }, [currentFilter])

    return (
      <section className={styles.Browse}>
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
              <Filters 
                hoverState={hoverState}
                handleHover={handleHover}
                handleSelect={handleSelect}
                currentFilter={currentFilter} 
              />

              <div className={styles.list}>
                <h1>Trending and interesting</h1>
                <p>Based on player counts and ratings</p>

                <div className={styles.applied}>
                  <div className={styles.filterList}>
                    <button className={styles.filterButton}>Filter by: <span>{currentFilter}</span></button>
                    <button className={`${styles.filterButton} ${styles.clearButton}`}>Clear Filter</button>
                  </div>
                  
                  <div className={styles.displayStyle}>
                    <p>Display options:</p>
                    <button className={styles.displayBtn}>
                      <Grids 
                        className={styles.displayItem} 
                        style={{ fill: grid ? "#e5e5e5" : "#6f6f6f" }}
                        onClick={handleLayoutSwitch} 
                        id="grid"
                      />
                    </button>

                    <button className={styles.displayBtn}>
                      <Columns 
                        className={styles.displayItem} 
                        style={{ fill: grid ? "#6f6f6f" : "#e5e5e5" }}
                        onClick={handleLayoutSwitch} 
                        id="columns"
                      />
                    </button>
                  </div>
                </div>

                <Grid 
                  shownGames={shownGames}
                />
              </div>
            </div>
        </AnimatedPage>
      </section>
    );
  }
  
  export default Browse;
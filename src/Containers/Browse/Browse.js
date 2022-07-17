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
          setShownGames,
          clearFilter,
          setReviewDisplay,
          reviewDisplay,
          allGames,
          setAllGames,
          handleLike,
          handleHoverGame,
          cart,
          cartAmount,
          handleAddToCart,
          handleSelectGame
        } = props;
    
    const navigate = useNavigate();
    const [browsing, setBrowsing] = useState(true);
    const [landingPage, setLandingPage] = useState(false);
    const [grid, setGrid] = useState(true);
    const [search, setSearch] = useState("");
    const [searching, setSearching] = useState(false);
    
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

    const handleSearch = (e) => {
      setSearch(e.target.value);
      setSearching(false);
    }

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      setSearching(true);
    }

    useEffect(() => {
      if (currentFilter == "none") {
        setShownGames(allGames);

      } else if (currentFilter != "Ratings" && currentFilter != "Reviews" && currentFilter != "Wishlist") {
          let filteredShownGames = allGames.filter(game => game.genre === currentFilter);
          setShownGames(filteredShownGames);

      } else if (currentFilter === "Ratings") {
          let filteredShownGames = allGames.slice(0);
          filteredShownGames = filteredShownGames.sort(function(a, b) {
            return b.rating - a.rating;
          })
          setShownGames(filteredShownGames);

      } else if (currentFilter === "Reviews") {
          setReviewDisplay(true);

      } else if (currentFilter === "Wishlist") {
          let filteredShownGames = allGames.filter(game => game.isLiked === true);
          setShownGames(filteredShownGames);
      }

      if (currentFilter != "Reviews") {
          setReviewDisplay(false);
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
          cartAmount={cartAmount}
          search={search}
          searching={searching}
          handleSearch={handleSearch}
          handleSearchSubmit={handleSearchSubmit}
        />

        <AnimatedPage exitBeforeEnter>
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
                    <button className={`${styles.filterButton} ${styles.clearButton}`} onClick={clearFilter}>Clear Filter</button>
                  </div>
                  
                  <div className={styles.displayStyle}>
                    <p>Display options:</p>
                    <button className={styles.displayBtn} onClick={handleLayoutSwitch} id="grid">
                      <Grids 
                        className={styles.displayItem} 
                        style={{ fill: grid ? "#e5e5e5" : "#6f6f6f" }}
                      />
                    </button>

                    <button className={styles.displayBtn} onClick={handleLayoutSwitch} id="columns"> 
                      <Columns 
                        className={styles.displayItem} 
                        style={{ fill: grid ? "#6f6f6f" : "#e5e5e5" }}
                      />
                    </button>
                  </div>
                </div>

                    <Grid 
                      shownGames={shownGames}
                      reviewDisplay={reviewDisplay}
                      handleLike={handleLike}
                      handleHoverGame={handleHoverGame}
                      handleAddToCart={handleAddToCart}
                      grid={grid}
                      search={search}
                      searching={searching}
                      handleSelectGame={handleSelectGame}
                    />
              </div>
            </div>
        </AnimatedPage>
      </section>
    );
  }
  
  export default Browse;
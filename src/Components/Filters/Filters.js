import React from "react";
import styles from "./Filters.module.css";
import { ReactComponent as Wishlist } from "../../Resources/image/wishlist.svg";
import { ReactComponent as Ratings } from "../../Resources/image/ratings.svg";
import { ReactComponent as Reviews } from "../../Resources/image/reviews.svg";
import { ReactComponent as Action } from "../../Resources/image/action.svg";
import { ReactComponent as Strategy } from "../../Resources/image/strategy.svg";
import { ReactComponent as RPG } from "../../Resources/image/RPG.svg";
import { ReactComponent as Shooter } from "../../Resources/image/shooter.svg";
import { ReactComponent as Adventure } from "../../Resources/image/adventure.svg";
import { ReactComponent as Puzzle } from "../../Resources/image/puzzle.svg";
import { ReactComponent as Racing } from "../../Resources/image/racing.svg";
import { ReactComponent as Sports } from "../../Resources/image/sports.svg";

const Filters = props => {
    const {
        hoverState,
        handleHover,
        handleSelect,
        currentFilter
    } = props;

    return (
        <div className={styles.filters}>
          <h2>Filters</h2>

          <div className={styles.globalFilters}>
               <div 
                 className={styles.filterDiv} 
                 id="8" 
                 onMouseEnter={handleHover} 
                 onMouseLeave={handleHover} 
                 onClick={handleSelect}
               >
                 <button 
                   className={styles.filterBtn} 
                   style={{ backgroundColor: (hoverState[8].hovered || currentFilter == "Wishlist") ? "#fff" : "#2d2d2d" }}
                   aria-label="Open wishlist"
                 >
                     <Wishlist 
                        style={{ fill: (hoverState[8].hovered || currentFilter == "Wishlist") ? "#000000" : "#fff" }} 
                        className={styles.Wishlist}
                     />
                 </button>
                 Wishlist
               </div>
     
               <div 
                 className={styles.filterDiv} 
                 id="9" 
                 onMouseEnter={handleHover} 
                 onMouseLeave={handleHover} 
                 onClick={handleSelect}
               >
                 <button 
                   className={`${styles.filterBtn2} ${styles.Ratings}`} 
                   style={{ backgroundColor: (hoverState[9].hovered || currentFilter == "Ratings") ? "#fff" : "#2d2d2d" }}
                   aria-label="Sort after ratings"
                 >
                     <Ratings
                       className={`${styles.filterSVG2} ${styles.Ratings}`} 
                       style={{ fill: (hoverState[9].hovered || currentFilter == "Ratings") ? "#000000" : "#fff" }} 
                     />
                 </button>
                 Ratings
               </div>
     
               <div 
                 className={styles.filterDiv}
                 id="10" 
                 onMouseEnter={handleHover} 
                 onMouseLeave={handleHover} 
                 onClick={handleSelect}
               >
                 <button 
                   className={`${styles.filterBtn3} ${styles.Reviews}`} 
                   style={{ backgroundColor: (hoverState[10].hovered || currentFilter == "Reviews") ? "#fff" : "#2d2d2d" }}
                   aria-label="Sort after reviews"
                 >
                     <Reviews
                       className={`${styles.filterSVG3} ${styles.Reviews}`} 
                       viewBox="0 0 48 48" 
                       style={{ fill: (hoverState[10].hovered || currentFilter == "Reviews") ? "#000000" : "#fff" }} 
                     />
                 </button>
                 Reviews
               </div>
          </div>

          <div className={styles.genreFilters}>
            <h2>Genres</h2>

            <div 
              className={styles.filterDiv} 
              id="11" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn3} 
                   style={{ backgroundColor: (hoverState[11].hovered || currentFilter == "Action") ? "#fff" : "#2d2d2d" }}
                   aria-label="Show action genre"
                 >
                    <Action 
                      className={styles.filterSVG3}
                      style={{ fill: (hoverState[11].hovered || currentFilter == "Action") ? "#000000" : "#fff" }} 
                    />
                 </button>
                 Action
            </div>

            <div 
              className={styles.filterDiv} 
              id="12" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn2} 
                   style={{ backgroundColor: (hoverState[12].hovered || currentFilter == "Strategy") ? "#fff" : "#2d2d2d" }}
                   aria-label="Show Strategy genre"
                 >
                     <Strategy 
                       className={styles.filterSVG2} 
                       style={{ fill: (hoverState[12].hovered || currentFilter == "Strategy") ? "#000000" : "#fff" }} 
                     />
                 </button>
                 Strategy
            </div>

            <div 
              className={styles.filterDiv} 
              id="13" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn3} 
                   style={{ backgroundColor: (hoverState[13].hovered || currentFilter == "RPG") ? "#fff" : "#2d2d2d" }}
                   aria-label="Show RPG genre"
                 >
                     <RPG 
                       className={styles.filterSVG3} 
                       style={{ fill: (hoverState[13].hovered || currentFilter == "RPG") ? "#000000" : "#fff" }} 
                      />
                 </button>
                 RPG
            </div>

            <div 
              className={styles.filterDiv} 
              id="14" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn2} 
                   style={{ backgroundColor: (hoverState[14].hovered || currentFilter == "Shooter") ? "#fff" : "#2d2d2d" }}
                   aria-label="Show Shooter genre"
                 >
                     <Shooter 
                       className={styles.filterSVG2} 
                       style={{ fill: (hoverState[14].hovered || currentFilter == "Shooter") ? "#000000" : "#fff" }} 
                      />
                 </button>
                 Shooter
            </div>

            <div 
              className={styles.filterDiv} 
              id="15" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn2} 
                   style={{ backgroundColor: (hoverState[15].hovered || currentFilter == "Adventure") ? "#fff" : "#2d2d2d" }}
                   aria-label="Show Adventure genre"
                 >
                     <Adventure 
                       className={styles.filterSVG2} 
                       style={{ fill: (hoverState[15].hovered || currentFilter == "Adventure") ? "#000000" : "#fff" }} 
                      />
                 </button>
                 Adventure
            </div>

            <div 
              className={styles.filterDiv} 
              id="16" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn4} 
                   style={{ backgroundColor: (hoverState[16].hovered || currentFilter == "Puzzle") ? "#fff" : "#2d2d2d" }}
                   aria-label="Show Puzzle genre"
                  >
                     <Puzzle 
                       className={styles.filterSVG2} 
                       style={{ fill: (hoverState[16].hovered || currentFilter == "Puzzle") ? "#000000" : "#fff" }} 
                      />
                 </button>
                 Puzzle
            </div>

            <div 
              className={styles.filterDiv} 
              id="17" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn3} 
                   style={{ backgroundColor: (hoverState[17].hovered || currentFilter == "Racing") ? "#fff" : "#2d2d2d" }}
                   aria-label="Show Racing genre"
                 >
                     <Racing 
                       className={styles.filterSVG3} 
                       style={{ fill: (hoverState[17].hovered || currentFilter == "Racing") ? "#000000" : "#fff" }} 
                      />
                 </button>
                 Racing
            </div>

            <div 
              className={styles.filterDiv} 
              id="18" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn4} 
                   style={{ backgroundColor: (hoverState[18].hovered || currentFilter == "Sports") ? "#fff" : "#2d2d2d" }}
                   aria-label="Show Sports genre"
                 >
                     <Sports 
                       className={styles.filterSVG3} 
                       style={{ fill: (hoverState[18].hovered || currentFilter == "Sports") ? "#000000" : "#fff" }} 
                      />
                 </button>
                 Sports
            </div>
          </div>
        </div>
    )
}

export default Filters;
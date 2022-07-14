import logo from './logo.svg';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Browse from './Containers/Browse/Browse';
import GamePage from './Containers/GamePage/GamePage';
import NotFound from './Containers/NotFound/NotFound';
import Home from './Containers/Home/Home';
import { AnimatePresence } from "framer-motion";
import filterNames from './utils/filterNames';
import games from './utils/games';

function App() {
  const [currentFilter, setCurrentFilter] = useState("none");
  const [allGames, setAllGames] = useState(games);
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [shownGames, setShownGames] = useState(allGames);
  const [reviewDisplay, setReviewDisplay] = useState(false);
  const [hoverState, setHoverState] = useState([
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    }
  ]);

const handleSelect = (e) => {
  setCurrentFilter(filterNames[e.target.id - 8]);
}

const handleLike = (e) => {
  let handledLike = allGames.map((game, i) => {
    if (e.target.id == i) {
      game.isLiked = !game.isLiked
      return game
    } else {
      return game;
    }
  });

  setAllGames(handledLike);
}

const clearFilter = () => {
  setCurrentFilter("none");
  setReviewDisplay(false);
}

const handleHover = (e) => {
  if (hoverState[e.target.id].selected) {
    return;
  }

  let newHoverState = hoverState[e.target.id];
  newHoverState.hovered = !newHoverState.hovered;
    
  setHoverState([
    ...hoverState, hoverState[e.target.id] = newHoverState
  ]);
}

const handleHoverGame = (e) => {
  let handledHoveredGame = allGames.map((game, i) => {
    if (e.target.id == i) {
      game.isHovered = !game.isHovered
      return game
    } else {
      return game;
    }
  });

  setAllGames(handledHoveredGame);
}

const handleAddToCart = (e) => {
  let handledAddedGame = allGames.map((game, i) => {
    if (e.target.id == i) {
      game.inCart = true
      let newCart = cart;
      newCart.push(game);
      setCart(newCart);
      setCartAmount(cartAmount + 1);
      return game
    } else {
      return game;
    }
  });

  setAllGames(handledAddedGame);
}

const location = useLocation();

  return (
      <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home 
                                        handleHover={handleHover} 
                                        hoverState={hoverState} 
                                        shownGames={shownGames} 
                                        cart={cart}
                                        cartAmount={cartAmount}
                                      />} />
            <Route path="/browse" element={<Browse 
                                              cart={cart}
                                              cartAmount={cartAmount}
                                              handleHover={handleHover} 
                                              handleSelect={handleSelect} 
                                              hoverState={hoverState} 
                                              currentFilter={currentFilter} 
                                              shownGames={shownGames} 
                                              setShownGames={setShownGames} 
                                              clearFilter={clearFilter} 
                                              reviewDisplay={reviewDisplay}
                                              setReviewDisplay={setReviewDisplay}
                                              allGames={allGames}
                                              setAllGames={setAllGames}
                                              handleLike={handleLike}
                                              handleHoverGame={handleHoverGame}
                                              handleAddToCart={handleAddToCart}
                                          />} />
            <Route path="/:gameId" element={<GamePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </AnimatePresence>
  );
}

export default App;

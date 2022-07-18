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
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [browsing, setBrowsing] = useState(true);
  const [selectedGame, setSelectedGame] = useState({});
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
    },
    {
      hovered: false,
      selected: false
    }
  ]);

const navigate = useNavigate();

async function handleBrowse() {
  navigate('/browse');
}

const handleHome = () => {
  navigate('/');
}

const handleSearch = (e) => {
  setSearch(e.target.value);
  setSearching(false);

  console.log(location.pathname);
}

const handleSearchSubmit = (e) => {
  e.preventDefault();
  setSearching(true);

  if (location.pathname != "/browse") {
    navigate('/browse');
  }
}

const handleSelect = (e) => {
  setCurrentFilter(filterNames[e.target.id - 8]);
}

const handleSelectGame = (e) => {
  if (e.target.tagName === "BUTTON") {
    return
  } else {
        setSelectedGame(games[e.target.parentNode.id]);
        navigate(`/${games[e.target.parentNode.id].surname}`);
  }
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
useEffect(() => {
  if (location.pathname === "/") {
    setBrowsing(false);
  } else {
    setBrowsing(true);
  }
}, [location.pathname])

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
                                              handleSelectGame={handleSelectGame}
                                              handleSearch={handleSearch}
                                              handleSearchSubmit={handleSearchSubmit}
                                              search={search}
                                              searching={searching}
                                              browsing={browsing}
                                              handleBrowse={handleBrowse}
                                              handleHome={handleHome}
                                          />} />
            <Route path="/:gameId" element={<GamePage
                                               cart={cart}
                                               cartAmount={cartAmount}
                                               handleHover={handleHover}
                                               hoverState={hoverState}
                                               handleLike={handleLike}
                                               handleAddToCart={handleAddToCart}
                                               handleSelectGame={handleSelectGame} 
                                               selectedGame={selectedGame}
                                               handleSearch={handleSearch}
                                               handleSearchSubmit={handleSearchSubmit}
                                               search={search}
                                               searching={searching}
                                               browsing={browsing}
                                               handleBrowse={handleBrowse}
                                               handleHome={handleHome}
                                               setHoverState={setHoverState}
                                            />} />
          </Routes>
      </AnimatePresence>
  );
}

export default App;

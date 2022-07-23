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
  const [total, setTotal] = useState(0);
  const [shownGames, setShownGames] = useState(allGames);
  const [reviewDisplay, setReviewDisplay] = useState(false);
  const [cartDisplayed, setCartDisplayed] = useState(false);
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [browsing, setBrowsing] = useState(true);
  const [selectedGame, setSelectedGame] = useState({});
  const [extended, setExtended] = useState(false);
  const [textExtended, setTextExtended] = useState(false);
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
  setExtended(false);
  setTextExtended(false);
  setCartDisplayed(false);
  setHoverState([...hoverState, hoverState[21].hovered = false]);
  navigate('/browse');
}

const handleHome = () => {
  setExtended(false);
  setTextExtended(false);
  setCartDisplayed(false);
  setHoverState([...hoverState, hoverState[21].hovered = false]);
  navigate('/');
}

useEffect(() => {
  
}, [cart])

const handleSearch = (e) => {
  setSearch(e.target.value);
  setSearching(false);
}

const handleSearchSubmit = (e) => {
  setCurrentFilter("none");
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
  } else if (e.target.classList[0] != "AddToCart_addToCart__zbJPe") {
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
  setSearch("");
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
    if (location.pathname === "/browse") {
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
    } else {
        if (selectedGame.id == i) {
          game.inCart = true
          let newCart = cart;
          newCart.push(game);
          setCart(newCart);
          setCartAmount(cartAmount + 1);
          return game
        } else {
          return game;
        }
    }
  });

  setAllGames(handledAddedGame);
}

const clearCart = () => {
  setCart([]);
  setCartAmount(0);
  const defaultGames = allGames.map((game, i) => {
    game.inCart = false;
    game.isHovered = false;
    return game;
  });
  setAllGames(defaultGames);
  let newHoverState = hoverState[21];
  newHoverState.hovered = false;
  setHoverState([
    ...hoverState, hoverState[21] = newHoverState
  ]);
}

const location = useLocation();
useEffect(() => {
  if (location.pathname === "/") {
    setBrowsing(false);
  } else {
    setBrowsing(true);
  }

  if (location.pathname != "/browse") {
    document.body.style.overflow = "hidden";

  } else if (location.pathname === "/browse") {
    document.body.style.overflow = "scroll";
  }
}, [location.pathname])

const handleOpenCart = () => {
  setCartDisplayed(true);
}

const handleCloseCart = () => {
  setCartDisplayed(false);
}

useEffect(() => {
  if (cartDisplayed) {
    document.body.style.overflow = "hidden !important";   
  } else {
    document.body.style.overflow = "scroll !important";
  }
}, [cartDisplayed])

  return (
      <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home 
                                        handleHover={handleHover} 
                                        hoverState={hoverState} 
                                        shownGames={shownGames} 
                                        cart={cart}
                                        cartAmount={cartAmount}
                                        cartDisplayed={cartDisplayed}
                                        handleOpenCart={handleOpenCart}
                                        handleCloseCart={handleCloseCart}
                                        clearCart={clearCart}
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
                                              cartDisplayed={cartDisplayed}
                                              handleOpenCart={handleOpenCart}
                                              handleCloseCart={handleCloseCart}
                                              clearCart={clearCart}
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
                                               setSelectedGame={setSelectedGame}
                                               handleSearch={handleSearch}
                                               handleSearchSubmit={handleSearchSubmit}
                                               search={search}
                                               searching={searching}
                                               browsing={browsing}
                                               handleBrowse={handleBrowse}
                                               handleHome={handleHome}
                                               setHoverState={setHoverState}
                                               allGames={allGames}
                                               extended={extended}
                                               setExtended={setExtended}
                                               textExtended={textExtended}
                                               setTextExtended={setTextExtended}
                                               cartDisplayed={cartDisplayed}
                                               handleOpenCart={handleOpenCart}
                                               handleCloseCart={handleCloseCart}
                                               clearCart={clearCart}
                                            />} />
          </Routes>
      </AnimatePresence>
  );
}

export default App;

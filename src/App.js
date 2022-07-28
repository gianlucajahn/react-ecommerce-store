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
import templateGame from './utils/templateGame';

function App() {
  const [currentFilter, setCurrentFilter] = useState("none");
  const [allGames, setAllGames] = useState(games);
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [shownGames, setShownGames] = useState(allGames);
  const [reviewDisplay, setReviewDisplay] = useState(false);
  const [cartDisplayed, setCartDisplayed] = useState(false);
  const [search, setSearch] = useState("");
  const [overlap, setOverlap] = useState(false);
  const [searching, setSearching] = useState(false);
  const [browsing, setBrowsing] = useState(true);
  const [selectedGame, setSelectedGame] = useState(false);
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
const location = useLocation();

if (location.pathname != "/" && location.pathname != "/browse" && selectedGame === false) {
  let surname = location.pathname.substring(7);
  let currentGame = games.find(game => game.surname === surname);
  if (currentGame != undefined) {
    setSelectedGame(currentGame);
  } else {
    setSelectedGame(templateGame);
  }
}

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
        navigate(`/games/${games[e.target.parentNode.id].surname}`);
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
  console.log(e.target);
  if (hoverState[e.target.id].selected) {
    return;
  }

  let newHoverState = hoverState.map((element, i) => {
    if (e.target.id == i) {
      element.hovered = !element.hovered;
      return element
    } else {
      return element;
    }
  });
    
  setHoverState(newHoverState);
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

const handleRemoveFromCart = (e) => {
  let removedIndex = cart.findIndex(game => game.id == e.target.id);
  let newAllGames = allGames.map((game, i) => {
    if (game.id == e.target.id) {
      game.inCart = false;
      game.isHovered = false;
      return game;
    } else {
      return game;
    }
  });
  setAllGames(newAllGames);
  let firstHalf = cart.slice(0, removedIndex);
  let secondHalf = cart.slice(removedIndex + 1);
  let addedUp = firstHalf.concat(secondHalf);
  setCart(addedUp);
  setCartAmount(cartAmount - 1)
  setHoverState([...hoverState, hoverState[21].hovered = false]);
}

useEffect(() => {
  setOverlap(false);

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
                                        handleAddToCart={handleAddToCart}
                                        handleLike={handleLike}
                                        handleHoverGame={handleHoverGame}
                                        handleSelectGame={handleSelectGame}
                                        handleRemoveFromCart={handleRemoveFromCart}
                                        setHoverState={setHoverState}
                                        overlap={overlap}
                                        setOverlap={setOverlap}
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
                                              handleRemoveFromCart={handleRemoveFromCart}
                                              setHoverState={setHoverState}
                                          />} />
            <Route path="/games/:gameId" element={<GamePage
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
                                               handleRemoveFromCart={handleRemoveFromCart}
                                            />} />
            <Route path="*" element={<NotFound 
                            cartDisplayed={cartDisplayed}
                            handleCloseCart={handleCloseCart}
                            handleOpenCart={handleOpenCart}
                            cartAmount={cartAmount}
                            clearCart={clearCart}
                            hoverState={hoverState}
                            handleHome={handleHome}
                            handleHover={handleHover}
                            cart={cart}
                            browsing={browsing}
                            search={search}
                            searching={searching}
                            handleSearch={handleSearch}
                            handleSearchSubmit={handleSearchSubmit}
                            handleBrowse={handleBrowse}
                            handleRemoveFromCart={handleRemoveFromCart}
          />} />
          </Routes>
      </AnimatePresence>
  );
}

export default App;

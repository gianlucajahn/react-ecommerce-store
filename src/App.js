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

if (location.pathname != "/react-ecommerce-store/" && location.pathname != "/react-ecommerce-store/browse" && selectedGame === false) {
  let surname = location.pathname.substring(29);
  console.log("test");
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
  navigate('/react-ecommerce-store/browse');
}

const handleHome = () => {
  setExtended(false);
  setTextExtended(false);
  setCartDisplayed(false);
  setHoverState([...hoverState, hoverState[21].hovered = false]);
  navigate('/react-ecommerce-store/');
}

const handleSearch = (e) => {
  setSearch(e.target.value);
  setSearching(false);
}

const handleSearchSubmit = (e) => {
  setCurrentFilter("none");
  e.preventDefault();
  setSearching(true);

  if (location.pathname != "/react-ecommerce-store/browse") {
    navigate('/react-ecommerce-store/browse');
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
        navigate(`/react-ecommerce-store/games/${games[e.target.parentNode.id].surname}`);
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

const openGamePage = (e) => {
  setCartDisplayed(false);
  let selectedGameSurname = e.target.id;
  navigate(`/react-ecommerce-store/games/${selectedGameSurname}`);
}

const handleHover = (e) => {
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
    if (location.pathname === "/react-ecommerce-store/browse") {
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

  if (location.pathname === "/react-ecommerce-store/") {
    setBrowsing(false);
  } else {
    setBrowsing(true);
  }

  if (location.pathname != "/react-ecommerce-store/browse") {
    document.body.style.overflow = "hidden";

  } else if (location.pathname === "/react-ecommerce-store/browse") {
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
  console.log(selectedGame);
}, [selectedGame])

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
            <Route path="/react-ecommerce-store/" element={<Home 
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
                                        openGamePage={openGamePage}
                                      />} />
            <Route path="/react-ecommerce-store/browse" element={<Browse 
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
                                              openGamePage={openGamePage}
                                          />} />
            <Route path="/react-ecommerce-store/games/:gameId" element={<GamePage
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
                                               openGamePage={openGamePage}
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
                            openGamePage={openGamePage}
          />} />
          </Routes>
      </AnimatePresence>
  );
}

export default App;

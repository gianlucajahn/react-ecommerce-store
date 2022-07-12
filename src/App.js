import logo from './logo.svg';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import React, { useState } from 'react';
import Browse from './Containers/Browse/Browse';
import GamePage from './Containers/GamePage/GamePage';
import NotFound from './Containers/NotFound/NotFound';
import Home from './Containers/Home/Home';
import { AnimatePresence } from "framer-motion";
import filterNames from './utils/filterNames';
import games from './utils/games';

function App() {
  const [currentFilter, setCurrentFilter] = useState("none");
  const [shownGames, setShownGames] = useState(games);
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

const location = useLocation();

  return (
      <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home handleHover={handleHover} hoverState={hoverState} shownGames={shownGames} />} />
            <Route path="/browse" element={<Browse handleHover={handleHover} handleSelect={handleSelect} hoverState={hoverState} currentFilter={currentFilter} shownGames={shownGames} />} />
            <Route path="/:gameId" element={<GamePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </AnimatePresence>
  );
}

export default App;

import logo from './logo.svg';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import React, { useState } from 'react';
import Browse from './Containers/Browse/Browse';
import GamePage from './Containers/GamePage/GamePage';
import NotFound from './Containers/NotFound/NotFound';
import Home from './Containers/Home/Home';
import { AnimatePresence } from "framer-motion";

function App() {
  const [hoverState, setHoverState] = useState([
    {
        hovered: false
    },
    {
        hovered: false
    },
    {
        hovered: false
    },
    {
        hovered: false
    },
    {
        hovered: false
    },
    {
        hovered: false
    },
    {
        hovered: false
    },
    {
        hovered: false
    }
  ]);

const handleHover = (e) => {
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
            <Route path="/" element={<Home handleHover={handleHover} hoverState={hoverState} />} />
            <Route path="/browse" element={<Browse handleHover={handleHover} hoverState={hoverState} />} />
            <Route path="/:gameId" element={<GamePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </AnimatePresence>
  );
}

export default App;

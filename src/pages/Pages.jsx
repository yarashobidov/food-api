import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Repice from "./Repice";
import Searched from "./Searched";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation()
  return (
    <div>
      <AnimatePresence  exitBeforeEnter>
        <Routes location={location}  key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:searchs" element={<Searched />} />
          <Route path="/repice/:name" element={<Repice />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Pages;

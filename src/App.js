import React from "react";
import Trending from "./Api/Trending";
import "./App.css";
import Navbar from "./Components/Navbar";
// import SingleContent from "./Components/SingleContent";
// import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Api/Movies";
import TvSeries from "./Api/TvSeries";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Trending />}></Route>

          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/series" element={<TvSeries />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

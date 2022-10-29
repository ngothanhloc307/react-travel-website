import React from "react";
import "./app.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Offers from "./components/Offers/Offers";
import Popular from "./components/Popular/Popular";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
    </>
  );
};

export default App;

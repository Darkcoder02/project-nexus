import React from "react";
import NavBar from "../components/ui/NavBar";
import Banner from "../components/sections/Banner";
import Dishes from "../components/sections/Dishes";
import About from "../components/sections/About";
import Menu from "../components/sections/Menu";
import Review from '../components/sections/Review';

function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <div id="home">
            <Banner/>
        </div>
        <div id="dishes">
            <Dishes/>
        </div>
        <div id="About">
            <About/>
        </div>
        <div id="menu">
            <Menu/>
        </div>
        <div id="review">
            <Review/>
        </div>
      </main>
    </div>
  );
}

export default Home;

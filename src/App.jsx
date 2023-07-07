import React from "react";
import "./App.css";
import {
  Brands,
  DownloadApp,
  Footer,
  Hero,
  Navbar,
  NewArrivals,
  Sale,
  YoungsFavorite,
} from "./container/containers";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <NewArrivals />
      <Sale />
      <YoungsFavorite />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default App;

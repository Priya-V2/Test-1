import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./media-queries.css";
import Nav from "./Component/Nav";
import Hero from "./Component/Hero";
import Featured from "./Component/Featured";
import How from "./Component/How";
import Meals from "./Component/Meals";
import Testimonials from "./Component/Testimonials";
import Pricing from "./Component/Pricing";
import Cta from "./Component/Cta";
import Footer from "./Component/Footer";
// import myName from "./Component/other";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <How />
        <Meals />
        <Testimonials />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);

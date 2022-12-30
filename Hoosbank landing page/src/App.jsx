import style from "./style";
import React from "react";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";
const App = () => {
  return (
    <div className=" w-full min-h-screen overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`y ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>
    
    </div>
  );
};

export default App;

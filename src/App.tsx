import "./App.css";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Story from "./components/Story/Story.tsx";
import Pizze from "./components/Pizze/Pizze.tsx";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
      <Pizze />
    </>
  );
}

export default App;

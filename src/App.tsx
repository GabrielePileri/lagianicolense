import "./App.css";
import Header from "./components/mainpage/Header/Header.tsx";
import Hero from "./components/mainpage/Hero/Hero.tsx";
import Story from "./components/mainpage/Story/Story.tsx";
import Pizze from "./components/mainpage/Pizze/Pizze.tsx";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import FeedText from "./components/mainpage/Feedbacks/FeedText.tsx";
// import FeedbacksNewmtd from "./components/Feedbacks/FeedbacksNewmtd.tsx";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
      <Pizze />
      <FeedText />
    </>
  );
}

export default App;

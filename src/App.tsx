import "./App.css";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Story from "./components/Story/Story.tsx";
import Pizze from "./components/Pizze/Pizze.tsx";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import FeedText from "./components/Feedbacks/FeedText.tsx";
import Feedbacks from "./components/Feedbacks/Feedbacks.tsx";
// import FeedbacksNewmtd from "./components/Feedbacks/FeedbacksNewmtd.tsx";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
      <Pizze />
      <FeedText text="lorem"/>
      <Feedbacks />;
    </>
  );
}

export default App;

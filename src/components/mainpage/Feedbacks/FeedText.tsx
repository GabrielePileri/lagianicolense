import Feedbacks from "./Feedbacks";
import "./FeedText.css";
import { gsap } from "gsap";
import { useEffect } from "react";

function FeedText() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".feedtext",
        start: "top 60%",
        end: "bottom top",
      },
    });

    tl.to(".feedtext", {
      opacity: 1,
      marginTop: 0,
    });
  }, []);
  return (
    <>
      <div className="feedtext">
        <div className="left-content-feed">
          <h1 className="feed-title">Le nostre recensioni</h1>
          <p className="feed-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            earum inventore reprehenderit recusandae. Error incidunt, voluptate
            repudiandae soluta facere labore pariatur ullam aspernatur,
            doloribus ipsam similique hic dolorem sed neque tenetur debitis sunt
            corrupti qui velit. Doloribus in molestias natus soluta animi eum
            esse iste voluptatibus, sapiente voluptates quaerat adipisci porro
            neque? Nihil sit nobis asperiores porro, eveniet unde earum quo
            voluptate excepturi! Praesentium, cumque excepturi saepe eveniet
            perspiciatis maiores molestias porro eligendi consequatur fugit
            aperiam accusantium officiis libero sapiente tempore quos, velit
            tempora dolor vero similique sint accusamus neque! Alias commodi
            repellendus corrupti in, aliquam corporis quia veniam sunt.
          </p>
        </div>
        <div className="right-content-feed">
          <Feedbacks />
        </div>
      </div>
    </>
  );
}

export default FeedText;

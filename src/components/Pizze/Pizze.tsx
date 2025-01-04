import "./Pizze.css";
import image from "./img/pizza.jpg";
import { gsap } from "gsap";
import { useEffect } from "react";

function Pizze() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pizze",
        start: "top center",
        end: "bottom center",
      },
    });

    tl.to(".pizze", {
      opacity: 1,
      marginTop: 0,
    });
  }, []);

  return (
    <>
      <div className="pizze">
        <div className="left-content-pizze">
          <img src={image} />
        </div>
        <div className="right-content-pizze">
          <h1>
            I nostri <span>piatti</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
            quidem molestias? Molestias nisi minima ducimus blanditiis corrupti
            porro aperiam itaque, unde iure, eius maiores doloribus sapiente
            tempore earum impedit dolorem at sunt rem aliquam magnam
            consectetur. Nulla iure quo rerum, velit expedita veritatis quae
            dolorum quis incidunt culpa explicabo eveniet numquam enim
            laboriosam corrupti repellat voluptatem accusamus, odio, eaque nobis
            dicta aperiam placeat id reprehenderit? Error molestias unde optio
            obcaecati accusamus at deleniti architecto corrupti quas vel quis
            blanditiis placeat, magni sed nisi necessitatibus soluta. Pariatur
            laboriosam nemo error, saepe quam nihil accusantium eveniet,
            corrupti debitis ea est neque ad, alias architecto molestias eius
            perferendis odit explicabo ipsa ab magni at? Architecto voluptatum
            optio et cum sequi modi quaerat! Unde voluptatum aliquid consequatur
            assumenda nulla reiciendis, recusandae, vitae reprehenderit facere
            consequuntur dolore. Nihil eos est non repellat iusto ea pariatur
            totam, explicabo suscipit, sit laborum! Consectetur quo ut ipsa
            temporibus officiis ducimus eos fugit consequatur pariatur corporis
            perspiciatis at culpa perferendis voluptatem modi velit nisi magnam
            enim laudantium, quidem laborum dignissimos veritatis iure. Ut, unde
            quasi? Doloremque quidem, cumque ipsam aut temporibus accusantium
            eligendi rerum aliquid commodi sunt optio! Laborum asperiores est
            repellendus ullam architecto optio distinctio magni at odit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Pizze;

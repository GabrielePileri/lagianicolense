import image from "./img/Screenshot 2024-09-26 091529.png";
import "./Story.css";
import { gsap } from "gsap";
import { useEffect } from "react";

function Story() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".story",
        start: "top 40%",
        end: "bottom top",
      },
    });

    tl.to(".story", {
      opacity: 1,
      marginTop: 0,
    });
  }, []);
  return (
    <>
      <div className="story" id="story">
        <div className="left-content-story">
          <h1>
            La nostra <span>storia</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            magnam temporibus magni reiciendis ipsam! Repellat facere dolores
            similique voluptate in, ex officia veniam. Culpa odio ullam quaerat,
            ratione aliquid, inventore laboriosam rerum ducimus totam qui, nulla
            dicta. Quaerat iusto modi, quasi cum nam omnis saepe itaque dolorem
            eligendi laborum blanditiis quae similique fuga aut exercitationem
            aliquam nesciunt dolor nobis. Necessitatibus cum reprehenderit
            quaerat molestias velit cumque tempore ratione minima veniam soluta
            illo tenetur doloribus quos vel, quidem maxime nulla facere ipsa nam
            temporibus culpa odit delectus! Alias quaerat, nihil rem
            voluptatibus provident unde quod libero vel eveniet excepturi
            inventore repellendus sequi aut nostrum ut nisi distinctio
            recusandae voluptatem minus ad tempore illo! Distinctio, sequi
            numquam obcaecati corporis in eligendi dolore fuga nostrum
            accusamus, dolorum iste, praesentium animi expedita enim aliquid ad.
            Facilis sint voluptas saepe, blanditiis velit quia ex quidem nihil
            iste tenetur libero reiciendis? Amet suscipit eaque blanditiis,
            voluptate optio quia non. Quas, itaque? Minus repellendus facilis,
            enim perferendis sequi, iure quidem omnis odio tenetur libero quod
            quas voluptas autem doloribus, similique magni vel ab eius
            blanditiis maxime laborum tempore veritatis eligendi. Corporis
            dolores dolorem, distinctio quod, ducimus, aperiam eius labore nihil
            expedita harum illo amet. Voluptas expedita nemo, quidem rem
            voluptates libero placeat voluptatem? Nisi voluptate quas, ea labore
            reprehenderit odio quisquam magnam, ipsa omnis cumque eligendi saepe
            vero aspernatur numquam? Voluptatum repudiandae sapiente illo nobis
            voluptatem architecto. Magni aliquid atque eos, sint voluptatem,
            nisi recusandae voluptates aperiam laborum omnis vero velit, enim
            provident corrupti totam distinctio officiis.
          </p>
        </div>
        <div className="right-content-story">
          <img src={image} />
        </div>
      </div>
    </>
  );
}

export default Story;

import "./Feedbacks.css";

function FeedbacksNewmtd(
  { write }: { write: string },
  { person }: { person: string },
  { stars }: { stars: number }
) {
  if (stars == 5) {
    return (
      <div className="feedbacks">
        <section>
          <div className="card">
            <div className="card-header">
              <div className="stelle">
                <div className="stella"></div>
                <div className="stella"></div>
                <div className="stella"></div>
                <div className="stella"></div>
                <div className="stella"></div>
                <h1 className="card-name">{person}</h1>
              </div>
              <p className="card-text">{write}</p>
            </div>
          </div>
        </section>
      </div>
    );
  } else if (stars == 4) {
    return (
      <div className="feedbacks">
        <section>
          <div className="card">
            <div className="card-header">
              <div className="stelle">
                <div className="stella"></div>
                <div className="stella"></div>
                <div className="stella"></div>
                <div className="stella"></div>
                <h1 className="card-name">{person}</h1>
              </div>
              <p className="card-text">{write}</p>
            </div>
          </div>
        </section>
      </div>
    );
  } else if (stars == 3) {
    return (
      <div className="feedbacks">
        <section>
          <div className="card">
            <div className="card-header">
              <div className="stelle">
                <div className="stella"></div>
                <div className="stella"></div>
                <div className="stella"></div>
                <h1 className="card-name">{person}</h1>
              </div>
              <p className="card-text">{write}</p>
            </div>
          </div>
        </section>
      </div>
    );
  } else if (stars == 2) {
    return (
      <div className="feedbacks">
        <section>
          <div className="card">
            <div className="card-header">
              <div className="stelle">
                <div className="stella"></div>
                <div className="stella"></div>
                <h1 className="card-name">{person}</h1>
              </div>
              <p className="card-text">{write}</p>
            </div>
          </div>
        </section>
      </div>
    );
  } else if (stars == 1) {
    return (
      <div className="feedbacks">
        <section>
          <div className="card">
            <div className="card-header">
              <div className="stelle">
                <div className="stella"></div>
                <h1 className="card-name">{person}</h1>
              </div>
              <p className="card-text">{write}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FeedbacksNewmtd;
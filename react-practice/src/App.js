import Picture from "./images/appu.jfif";

const App = () => {
  return (
    <div className="ui comments">
      <div className="ui four column grid">
        <div className="row">
          <div className="column">
            <div className="comment">
              <a href="/" className="avatar">
                <img alt="Profile Picture" src={Picture} />
              </a>
              <div className="content">
                <a href="/" className="author">
                  Ranganath K
                </a>
                <div className="metadata">
                  <span className="date">Today 08-11-2022 !</span>
                </div>
                <div className="text">ReactJS Bolg</div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="comment">
              <a href="/" className="avatar">
                <img alt="Profile Picture" src={Picture} />
              </a>
              <div className="content">
                <a href="/" className="author">
                  Puneeth R K
                </a>
                <div className="metadata">
                  <span className="date">Yesterday 07-11-2022</span>
                </div>
                <div className="text">NodeJS Bolg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

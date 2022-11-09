import Card from "./Card";
import Picture from "./images/udemy.jpg";
// import './App.css'

const App = () => {
  return (
    <div className="ui container">
      <div className="ui four column grid">
        <div className="row">
          <Card
            authorName="Ranganath K"
            noOfRatings="3599"
            title="ReactJS Guide"
            picture={Picture}
            price="&#x20b9;3000"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Card
            authorName="Puneeth R K"
            noOfRatings="35959"
            title="NodeJS Guide"
            picture={Picture}
            price="&#x20b9;2500"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Card
            authorName="Roberrt"
            noOfRatings="35499"
            title="Javascript Guide"
            picture={Picture}
            price="&#x20b9;3300"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Card
            authorName="William Stallings"
            noOfRatings="36599"
            title="Web Guide"
            picture={Picture}
            price="&#x20b9;3900"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};

export default App;

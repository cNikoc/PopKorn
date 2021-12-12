import React, { Component } from "react";
import "./Home.css";
import Popcorn from "../../popcorn.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  render() {
    return (
      <div className="contenedor">
        <div className="title">
          <h1>Welcome to PopKorn!</h1>
          <p>
            Hi there! My name is Cristian Nicolás Castagnetto and this is my movies app. <br/>Here you
            will be able to access to detailed information about any movie you
            want. You can also fav the movies you like in order to add them as
            your favorite movies, or make your personalized watchlist!
          </p>
        </div>
        <img alt="pochoclo" className="baldepochoclo" src={Popcorn}/>
      </div>
    );
  }
}

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
            <hr/><hr/>
            Find me on <a href="https://www.linkedin.com/in/cristian-nicolas-castagnetto-full-stack-dev/" target="_BLANK" rel="nore" className="linkhome">LinkedIn</a> and <a href="https://github.com/cNikoc" target="_BLANK" rel="nore" className="linkhome">GitHub</a>.
          </p>
        </div>
        <img alt="pochoclo" className="baldepochoclo" src={Popcorn}/>
      </div>
    );
  }
}

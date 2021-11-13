import React, { Component } from "react";

class Music extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
      track: "Intro",
    }

    this.url1 = "/Users/carlosmoran/Documents/GitStuff/Classwork/FSW-React-Calculator/charlie-moran-calculator/src/Components/audio/Intro.mp3";
    this.url2 = "/Users/carlosmoran/Documents/GitStuff/Classwork/FSW-React-Calculator/charlie-moran-calculator/src/Components/audio/Outro.mp3";
    this.audio = new Audio(this.url);
  }

  play = () => {
  this.setState({ play: true, pause: false })
    this.audio.play();
  }
  
  pause = () => {
  this.setState({ play: false, pause: true })
    this.audio.pause();
  }
  
  render() {
    
  return (
    <div>
      <button onClick={this.play}>Play</button>
      <button onClick={this.pause}>Pause</button>
    </div>
    );
  }
}

ReactDOM.render(
  <Music />,
  document.getElementById('container')
);
import React, { Component } from 'react';
import Header from './componentes/Header';
import DrumMachine from './componentes/DrumMachine';

class App extends Component {

  constructor() {
    super();

    this.state = {
      display: 'Let\'s start'
    }
  }

  playClip = drumPadContent => {
    this.setState({
      display: drumPadContent.id
    });
    const sound = document.getElementById(drumPadContent.key);
    sound.play(); 
  }

  render() {
    return (
      <div className="App background">
        <Header 
          title="Drum Machine"
        />      
        <div className="container-fluid">
          <DrumMachine 
            display={this.state.display}
            playClip={this.playClip}
          />
        </div>
      </div>
    );
  }
}

export default App;

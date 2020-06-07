import React, { Component } from 'react';
import FirstComponent, {ThirdComponent} from './components/learning-examples/FirstComponent';
import Counter from './components/counter/Counter';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="App">
       Hello World
       <FirstComponent/>
       <ThirdComponent/>
      </div>
    );
  }
}

export default App;
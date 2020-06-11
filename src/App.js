import React, { Component } from 'react';
// import FirstComponent, {ThirdComponent} from './components/learning-examples/FirstComponent';
import TodoApp from './components/todo/TodoApp'
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <TodoApp/>
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="App">
//        Hello World
//        <FirstComponent/>
//        <ThirdComponent/>
//       </div>
//     );
//   }
// }

export default App;
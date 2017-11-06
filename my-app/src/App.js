import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header/>
//         <Content/>
//       </div>
//     );
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Header</h1>
//       </div>
//     );
//   }
// }

// class Content extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Content</h2>
//         <p>The content text!!!</p>
//       </div>
//     );
//   }
// }

// export default App;
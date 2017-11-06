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

// export default App;

class HelloWorld extends Component {
  render() {
    return (
      <h1>Hello, world!</h1>
    );
  }
}

// export default HelloWorld;

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

function WelcomeApp() {
  return (
    <div>
      <Welcome name="Mark Manson" />
      <Welcome name="Antonio Conte" />
      <Welcome name="Rosalyn D'Mello" />
    </div>
  );
}

// export default WelcomeApp;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class ClockApp extends Component {
  render() {
    return (
      <Clock />
    );
  }
}

// export default ClockApp;

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0};
  }
  componentDidMount() {
    this.counterID1 = setInterval(
      () => this.increment(),
      1000
    );
    this.counterID2 = setInterval(
      () => this.decrement(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.counterID1);
    clearInterval(this.counterID2);
  }
  increment() {
    this.setState((prevState, props) => ({
      counter: prevState.counter + parseFloat(this.props.increment, 10)
    }));
  }
  decrement() {
    this.setState((prevState, props) => ({
      counter: prevState.counter - parseFloat(this.props.decrement, 10)
    }));
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>The counter is at {this.state.counter}.</h2>
      </div>
    );
  }
}

class CounterApp extends Component {
  render() {
    return (
      <Counter increment='1.5' decrement='1'/>
    );
  }
}

export default CounterApp;

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
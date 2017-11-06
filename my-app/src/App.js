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
      <div>
        <Counter increment='2' decrement='0'/>
        <Counter increment='2' decrement='1'/>
        <Counter increment='2' decrement='2'/>
      </div>
    );
  }
}

// export default CounterApp;

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

// export default Toggle;

class UserGreeting extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Welcome back!</h1>
    )
  }
}

class GuestGreeting extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Sign up, shit head!</h1>
    );
  }
}

class LoginButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick = {this.props.onClick}>
        Login
      </button>
    );
  }
}

class LogoutButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick = {this.props.onClick}>
        Logout
      </button>
    );
  }
}

class Greeting extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />
    }
    else {
      return <GuestGreeting />
    }
  }
}

class GreetingApp extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default GreetingApp;

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
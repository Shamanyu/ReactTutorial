import React, { Component } from 'react';
import logo from './logo.svg';
// import butler_image from './login_background.jpg';
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

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p>The content text!!!</p>
      </div>
    );
  }
}

class LayoutApp extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

// export default LayoutApp;

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

// export default GreetingApp;

class MailBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 style={{color:'red'}}>Hello!</h1>
        {this.props.unreadMessages.length > 0 &&
          <h2 style={{color:'red'}}>
            You have {this.props.unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
}

class MailBoxApp extends Component {
  constructor(props) {
    super(props);
    this.state = {'messages':['React', 'Re: React', 'Re:Re: React']};
    // this.state = {'messages':[]};
  }
  render() {
    const messages = this.state.messages;
    return (
      <div className="App-background_image">
        <MailBox unreadMessages={messages} />
      </div>
    );
  }
}

// export default MailBoxApp;

class WarningBanner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.warn) {
      return null;
    } else {
      return (
        <div className="warning">
          Warning!
        </div>
      );
    }
  }
}

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide':'Show'}
        </button>
      </div>
    );
  }
}

// export default Page;

class ArrayDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>{this.props.members}</ul>
    );
  }
}

class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const numbers = [1,2,3,4,5];
    const doubled = numbers.map((number) => number*2);
    const listItems = doubled.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <ArrayDisplay members={listItems} />
    );
  }
}

// export default Container;

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const sidebar = (
      <ul>
        {this.props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = this.props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
}

class BlogApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm'}
    ];
    return (
      <Blog posts={posts} />
    );
  }
}

// export default BlogApp;

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// export default NameForm;

class EssayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('An essay was submitted: ', this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// export default EssayForm;

class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ', this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select multiple={true} value={['mango', this.state.value]} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// export default FlavorForm;

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

// export default Reservation;

class BoilingVerdict extends Component {
  render() {
    if (this.props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onTemperatureChange(event.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input 
          value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

const scaleNames = {
  c: 'celsius',
  f: 'fahrenheit'
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function toFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000)/1000;
  return rounded.toString();
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: ''};
  }
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }
  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

// export default Calculator;

class FancyBorder extends Component {
  render() {
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

class WelcomeDialog extends Component {
  render() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }
}

// export default WelcomeDialog;

// class SplitPane extends Component {
//   render() {
//     return (
//       <div className="SplitPane">
//         <div className="SplitPane-Left">
//           {this.props.left}
//         </div>
//         <div className="SplitPane-Right">
//           {this.props.right}
//         </div>
//       </div>
//     );
//   }
// }

// class PaneApp extends Component {
//   render () {
//     return (
//       <SplitPane
//         left={<Contacts />}
//         right={<Chat />}
//       />
//     );
//   }
// }

// export default PaneApp;

class Dialog extends Component {
  render() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {this.props.title}
        </h1>
        <p className="Dialog-message">
          {this.props.message}
        </p>
      </FancyBorder>
    );
  }
}

class WelcomeDialogAgain extends Component {
  render() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
  }
}

export default WelcomeDialogAgain;
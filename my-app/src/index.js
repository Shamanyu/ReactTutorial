import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import LayoutApp from './App';
import HelloWorld from './App';
import WelcomeApp from './App';
import ClockApp from './App';
import CounterApp from './App';
import Toggle from './App';
import GreetingApp from './App';
import MailBoxApp from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HelloWorld />, document.getElementById('root'));
// ReactDOM.render(<WelcomeApp />, document.getElementById('root'));
// ReactDOM.render(<ClockApp />, document.getElementById('root'));
// ReactDOM.render(<CounterApp />, document.getElementById('root'));
// ReactDOM.render(<Toggle />, document.getElementById('root'));
// ReactDOM.render(<GreetingApp />, document.getElementById('root'));
ReactDOM.render(<MailBoxApp />, document.getElementById('root'));

// function formatName(user) {
//   return user.firstName + user.lastName
// }

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>
//   }
//   return <h1>Hello, Stranger.</h1>
// }

// const user = {
//   firstName: 'Shubham',
//   lastName: 'Shamanyu'
// }

// // const element = <img src={user.avatarUrl} />;

// // const element = (
// //   <div>
// //     <h1>Hello!</h1>
// //     <h2>Good to see you here.</h2>
// //   </div>
// // );

// // const title = response.potentiallyMaliciousInput;

// // const element = <h1>{title}</h1>;

// // const element = (
// //   <h1>
// //     {getGreeting(user)}
// //   </h1>
// // );

// const element = (
//   <h1 classname="greeting">
//     Hello, world!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

// ReactDOM.render(<App />, document.getElementById('root'));

// registerServiceWorker();

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// const element = <div />;

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {props.date}
//       </div>
//     </div>
//   );
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root') 
//   );
// }

// // ReactDOM.render(
// //   <Comment />,
// //   document.getElementById('root')
// // );

// setInterval(tick, 1000)

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000)

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

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
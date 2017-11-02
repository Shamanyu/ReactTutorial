import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

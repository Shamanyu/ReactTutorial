import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LayoutApp from './App';
import HelloWorld from './App';
import WelcomeApp from './App';
import ClockApp from './App';
import CounterApp from './App';
import Toggle from './App';
import GreetingApp from './App';
import MailBoxApp from './App';
import Page from './App';
import Container from './App';
import BlogApp from './App';
import NameForm from './App';
import EssayForm from './App';
import FlavorForm from './App';
import Reservation from './App';
import Calculator from './App';
import WelcomeDialog from './App';
import PaneApp from './App';
import WelcomeDialogAgain from './App';
import CounterAppAgain from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<LayoutApp />, document.getElementById('root'));
// ReactDOM.render(<HelloWorld />, document.getElementById('root'));
// ReactDOM.render(<WelcomeApp />, document.getElementById('root'));
// ReactDOM.render(<ClockApp />, document.getElementById('root'));
// ReactDOM.render(<CounterApp />, document.getElementById('root'));
// ReactDOM.render(<Toggle />, document.getElementById('root'));
// ReactDOM.render(<GreetingApp />, document.getElementById('root'));
// ReactDOM.render(<MailBoxApp />, document.getElementById('root'));
// ReactDOM.render(<Page />, document.getElementById('root'));
// ReactDOM.render(<Container />, document.getElementById('root'));
// ReactDOM.render(<BlogApp />, document.getElementById('root'));
// ReactDOM.render(<NameForm />, document.getElementById('root'));
// ReactDOM.render(<EssayForm />, document.getElementById('root'));
// ReactDOM.render(<FlavorForm />, document.getElementById('root'));
// ReactDOM.render(<Reservation />, document.getElementById('root'));
// ReactDOM.render(<Calculator />, document.getElementById('root'));
// ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));
// ReactDOM.render(<PaneApp />, document.getElementById('root'));
// ReactDOM.render(<WelcomeDialogAgain />, document.getElementById('root'));

// const createStore = (reducer) => {
//   let state;
//   let listeners = [];
//   const getState = () => state;
//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   };
//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l !== listener);
//     };
//   };
//   dispatch({});
//   return { getState, dispatch, subscribe };
// }

import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

const render = () => {
  ReactDOM.render(
    <CounterAppAgain 
      value={store.getState()}
      onIncrement={() => 
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'DECREMENT' })

// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT'});
// });
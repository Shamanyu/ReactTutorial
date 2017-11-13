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

// import { expect } from 'expect';

import expect from 'expect';

// import { deepFreeze } from 'deep-freeze'

import deepFreeze from 'deep-freeze';

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

const addCounter = (list) => {
  return [...list, 0]; 
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index]+1,
    ...list.slice(index+1)
  ];
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};

const decrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index]-1,
    ...list.slice(index+1)
  ];
};

const testDecrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 9, 20];

  deepFreeze(listBefore);

  expect(
    decrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};

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

testAddCounter();
testRemoveCounter();
testIncrementCounter();
testDecrementCounter();
console.log('All tests passed');

// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'DECREMENT' })

// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT'});
// });
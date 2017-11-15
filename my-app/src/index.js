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

import { createStore } from 'redux';
import { combineReducers } from 'redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

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

// const toggleTodo = (todo) => {
//   // return Object.assign({}, todo, {
//   //   completed: !todo.completed
//   // });
//   return {
//     ...todo,
//     completed: !todo.completed
//   };
// };

// const testToggleTodo = () => {
//   const todoBefore = {
//     id: 0,
//     text: 'Learn Redux',
//     completed: false
//   };
//   const todoAfter = {
//     id: 0,
//     text: 'Learn Redux',
//     completed: true
//   };

//   deepFreeze(todoBefore);

//   expect(
//     toggleTodo(todoBefore)
//   ).toEqual(todoAfter)
// };


// import { expect } from 'expect';


// import { deepFreeze } from 'deep-freeze'

// const store = createStore(counter);

// const render = () => {
//   ReactDOM.render(
//     <CounterAppAgain 
//       value={store.getState()}
//       onIncrement={() => 
//         store.dispatch({
//           type: 'INCREMENT'
//         })
//       }
//       onDecrement={() =>
//         store.dispatch({
//           type: 'DECREMENT'
//         })
//       }
//     />,
//     document.getElementById('root')
//   );
// };

// store.subscribe(render);
// render();

// testAddCounter();
// testRemoveCounter();
// testIncrementCounter();
// testDecrementCounter();

const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   };
// }

// const combineReducers = (reducers) => {
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce(
//       (nextState, key) => {
//         nextState[key] =reducers[key] (
//           state[key],
//           action
//         );
//         return nextState;
//       },
//       {}
//     );
//   };
// }

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
}

testAddTodo();
testToggleTodo();
console.log('All tests passed');

const todoApp = combineReducers({
  todos,
  visibilityFilter
});
const store = createStore(todoApp);

console.log('Initial state:');
console.log(store.getState());
console.log('----------------');
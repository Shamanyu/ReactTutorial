import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

// ReactDOM.render(<App />, document.getElementById('root'));

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

// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

// const addCounter = (list) => {
//   return [...list, 0]; 
// };

// const testAddCounter = () => {
//   const listBefore = [];
//   const listAfter = [0];

//   deepFreeze(listBefore);

//   expect(
//     addCounter(listBefore)
//   ).toEqual(listAfter);
// };

// const removeCounter = (list, index) => {
//   return [
//     ...list.slice(0, index),
//     ...list.slice(index + 1)
//   ];
// };

// const testRemoveCounter = () => {
//   const listBefore = [0, 10, 20];
//   const listAfter = [0, 20];

//   deepFreeze(listBefore);

//   expect(
//     removeCounter(listBefore, 1)
//   ).toEqual(listAfter);
// };

// const incrementCounter = (list, index) => {
//   return [
//     ...list.slice(0, index),
//     list[index]+1,
//     ...list.slice(index+1)
//   ];
// };

// const testIncrementCounter = () => {
//   const listBefore = [0, 10, 20];
//   const listAfter = [0, 11, 20];

//   deepFreeze(listBefore);

//   expect(
//     incrementCounter(listBefore, 1)
//   ).toEqual(listAfter);
// };

// const decrementCounter = (list, index) => {
//   return [
//     ...list.slice(0, index),
//     list[index]-1,
//     ...list.slice(index+1)
//   ];
// };

// const testDecrementCounter = () => {
//   const listBefore = [0, 10, 20];
//   const listAfter = [0, 9, 20];

//   deepFreeze(listBefore);

//   expect(
//     decrementCounter(listBefore, 1)
//   ).toEqual(listAfter);
// };

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

// class Provider extends Component {
//   getChildContext() {
//     return {
//       store: this.props.store
//     };
//   }
//   render() {
//     return this.props.children;
//   }
// }
// Provider.childContextTypes = {
//   store: React.PropTypes.object
// };

//FilterLink container component
// class FilterLink extends Component {
//   componentDidMount() {
//     const { store } = this.context;
//     this.unsubscribe = store.subscribe(() =>
//       this.forceUpdate()
//     );
//   }
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//   render() {
//     const props = this.props;
//     const { store } = this.context;
//     const state = store.getState();
//     return (
//       <Link
//         active={
          
//         }
//         onClick={
          
//         }
//       >
//         {props.children}
//       </Link>
//     );
//   }
// }
// FilterLink.contextTypes = {
//   store: React.PropTypes.object
// };

//VisibleTodoList container component
// class VisibleTodoList extends Component {
//   componentDidMount() {
//     const { store } = this.context;
//     this.unsubscribe = store.subscribe(() =>
//       this.forceUpdate()
//     );
//   }
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//   render() {
//     const props = this.props;
//     const { store } = this.context;
//     const state = store.getState();
//     return (
//       <TodoList
//         todos={
          
//         }
//         onTodoClick={
//         }
//       />
//     );
//   }
// }
// VisibleTodoList.contextTypes = {
//   store: React.PropTypes.object
// };

// Action creators

//Action creator for setVisibilityFilter
const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

//Action creator for toggleTodo
const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

//Action creator for addTodo
let nextTodoId = 0;
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

//Reducers

// Reducer for todo
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

// Reducer for todo list
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

//Reducer for visibility filter
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

//Test functions for reducers

//Test function for addTodo reducer
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

//Test function for toggleTodo reducer
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

//Call the reducer test functions
testAddTodo();
testToggleTodo();
console.log('All tests passed');

//Create a store from all the reducers
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

//React components

//Link presentational component
const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

//FilterLink container component
const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active:
      ownProps.filter ===
      state.visibilityFilter
  };
};
const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
    }
  };
}
const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

//Footer presentation component
const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
    >
      All
    </FilterLink>
    {', '}
    <FilterLink
      filter='SHOW_ACTIVE'
    >
      Active
    </FilterLink>
    {', '}
    <FilterLink
      filter='SHOW_COMPLETED'
    >
      Completed
    </FilterLink>
  </p>
)

//Function to getVisibleTodos
const getVisibleTodos = (
  todos,
  filter
) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
}

//Todo presentation component
const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li onClick={onClick}
      style={{
        textDecoration: 
          completed ?
            'line-through' :
            'none'
      }}
  >
    {text}
  </li>
);

//TodoList presentation component
const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

//VisibleTodoList container component
const mapStateTodoListToProps = (
  state
) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};
const mapDispatchTodoListToProps = (
  dispatch
) => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};
const VisibleTodoList = connect(
  mapStateTodoListToProps,
  mapDispatchTodoListToProps
)(TodoList);

//AddTodo presentation and container component
let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo);

//TodoAppAgain class
const TodoAppAgain = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

//Render the application
ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoAppAgain />
  </Provider>,
  document.getElementById('root')
);
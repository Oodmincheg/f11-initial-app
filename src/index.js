import React from 'react';
import ReactDOM from 'react-dom';

const Todo = (props) => {
  return React.createElement('div', {}, [
    React.createElement('p', {}, props.title),
    React.createElement('p', {}, props.date),
  ]);
};

const App = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('div', {}, [
      React.createElement('div', {}, 'Your todos'),
      React.createElement(Todo, { title: 'Learn react', date: '01-01-2022' }),
      React.createElement(Todo, { title: 'Learn redux', date: '01-02-2022' }),
      React.createElement(Todo, { title: 'Learn angular', date: '01-03-2056' }),
    ]),
  );
};
ReactDOM.render(React.createElement(App), document.getElementById('root'));

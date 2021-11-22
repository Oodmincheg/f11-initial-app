import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';

const App = () => {
  return (
    <div>
      <div>Your todos</div>
      <Todo title="Learn react" date="01-01-2022" />
      <Todo title="Learn redux" date="01-02-2022" />
      <Todo title="Learn react" date="01-03-2023" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

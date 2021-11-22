import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

// const todos = [
//   { title: 'Learn react', date: '01-01-2022', id: 1 },
//   { title: 'Learn redux', date: '01-02-2022', id: 2 },
//   { title: 'Learn angular', date: '01-03-2022', id: 3 },
// ];

const App = () => {
  const [todos, setTodos] = useState([]);

  const saveTodo = (todo) => {
    console.log(todo);
    // todos.push(todo);
    setTodos([...todos, todo]);
  };
  return (
    <>
      <TodoForm saveTodo={saveTodo} />
      <div>Your todos</div>
      {/* <Todo title="Learn react" date="01-01-2022" />
      <Todo title="Learn redux" date="01-02-2022" />
      <Todo title="Learn react" date="01-03-2023" /> */}
      {todos.map(({ title, description, priority }, index) => (
        <Todo
          title={title}
          description={description}
          priority={priority}
          key={index}
        />
      ))}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

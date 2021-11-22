const Todo = ({ title, priority, description }) => {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Priority: {priority}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Todo;

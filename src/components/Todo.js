import React from 'react';

const Todo = props => {
  const {
    title, description, id, onClick, isDone, removeItem,
  } = props;
  return (
    <div
      id={id}
      onClick={onClick}
      className={isDone ? 'done-todo-item' : 'undone-todo-item'}
    >
      <h2 className="todo-title">{title}</h2>
      <p className="todo-description">{description}</p>
      {isDone ? (
        <button onClick={removeItem} value={id} className="remove-button">
          Remove
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Todo;

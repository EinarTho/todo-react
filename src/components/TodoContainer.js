import React from 'react';
import Todo from './Todo';

const TodoContainer = props => {
  const { todoList, toggleDone, removeItem } = props;

  const todoJSX = todo => (
      <Todo
        title={todo.title}
        description={todo.description}
        id={todo.id}
        onClick={toggleDone}
        key={todo.id}
        isDone={todo.isDone}
        removeItem={removeItem}
      />
  );

  const undoneTodoList = () => todoList.filter(todo => !todo.isDone).map(todoJSX);
  const doneTodoList = () => todoList.filter(todo => todo.isDone).map(todoJSX);

  return (
    <section className="todo-container">
      <div className="undone-todos">{undoneTodoList()}</div>
      <div className="done-todos">{doneTodoList()}</div>
    </section>
  );
};

export default TodoContainer;

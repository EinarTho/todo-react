import './App.css';
import { useState } from 'react';
import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';

function App() {
  const [title, setTitle] = useState();
  const [description, setDescriptiton] = useState();
  const [todoList, setTodoList] = useState([]);

  const formSubmit = e => {
    e.preventDefault();
    const todo = {
      title,
      description,
      isDone: false,
      id: new Date().toLocaleTimeString().toString(),
    };

    const newList = [...todoList];
    newList.push(todo);
    setTodoList(newList);
    setDescriptiton('');
    setTitle('');
  };

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const onChangeDescription = e => {
    setDescriptiton(e.target.value);
  };

  const toggleDone = e => {
    const newList = [...todoList];
    for (let i = 0; i < todoList.length; i++) {
      if (newList[i].id === e.target.id) {
        newList[i].isDone = !newList[i].isDone;
      }
    }
    setTodoList(newList);
  };

  const removeItem = e => {
    e.stopPropagation();
    const itemId = e.target.value;
    const newList = todoList.filter(todo => todo.id !== itemId);
    setTodoList(newList);
  };

  return (
    <main>
      <TodoForm
        formSubmit={formSubmit}
        onChangeDescription={onChangeDescription}
        onChangeTitle={onChangeTitle}
        title={title}
        description={description}
      />
      <TodoContainer
        todoList={todoList}
        toggleDone={toggleDone}
        removeItem={removeItem}
      />
    </main>
  );
}

export default App;

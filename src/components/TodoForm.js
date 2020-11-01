import React from 'react';

const TodoForm = props => {
  const {
    formSubmit,
    onChangeTitle,
    onChangeDescription,
    description,
    title,
  } = props;

  return (
    <section>
      <div className="form-div">
        <p className="headline">Register New ToDo</p>
        <form onSubmit={formSubmit} className="todo-form">
          <label htmlFor="title">Title</label>
          <input
            onChange={onChangeTitle}
            className="todo-input"
            type="text"
            name="title"
            value={title || ''}
          />
          <label htmlFor="description">Description</label>
          <input
            onChange={onChangeDescription}
            className="todo-input"
            type="text"
            name="description"
            value={description || ''}
          />
          <button className="submit-button" type="submit">
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default TodoForm;

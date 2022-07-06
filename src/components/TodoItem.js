import React from "react";

const TodoItem = (props) => {
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((item) => item.id !== props.todo.id));
  };

  const checkHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todocontainer">
      <li className={`todoitem ${props.todo.checked ? "checked" : ""}`}>
        {props.text}
      </li>
      <button className="btn-check" onClick={checkHandler}>
        <i className="fa-solid fa-check"></i>
      </button>
      <button className="btn-trash" onClick={deleteHandler}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;

import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div className="todolistcontainer">
      <ul className="todolist">
        {props.todos.map((todo) => (
          <TodoItem
            todos={props.todos}
            setTodos={props.setTodos}
            todo={todo}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

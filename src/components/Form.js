import React from "react";

const Form = (props) => {
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { id: Math.random() * 10000, text: props.inputText, checked: false },
    ]);
    props.setInputText("");
  };
  return (
    <form className="todoform">
      <input
        value={props.inputText}
        onChange={inputTextHandler}
        type="text"
        className="todoinput"
      />
      <button type="submit" onClick={submitButtonHandler}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;

import React from "react";
import "./Input.css";

const Input = (props) => {
  console.log(props, "hiiiiii");

  const changeHandler = () => {};
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
      />
    ) : (
      <textarea id={props.id} row={props.rows || 3} onChange={changeHandler} />
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;

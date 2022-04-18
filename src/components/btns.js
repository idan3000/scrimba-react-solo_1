import React from "react";

const Btn = (props) => (
  <button onClick={props.onClick} className={props.class}>
    <span> {props.text}</span>
    <img className={props.imgClass} src={props.img} alt={props.img.name} />
  </button>
);

export default Btn;

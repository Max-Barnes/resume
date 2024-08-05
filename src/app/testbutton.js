"use client";

export default function TestButton(props) {
  function handleClick() {
    alert("you clicked it!");
  }

  return <button onClick={handleClick}>fuck you {props.name}</button>;
}

import React, { useState } from "react";

export default function TextForm({ heading }) {
  const [text, setText] = useState("write your text hear and clear me");
  const [buttonName , setbuttonName] = useState('change to dark mode')

  let darkModeStyles = {
    color: "white",
    border: "2px solid #DFDFDF",
    backgroundColor: "#012837",
    width: "100%",
    height: "100%",
  };

  let lightModeStyles = {
    color: "#012837",
    border: "2px solid #001010",
    backgroundColor: "#EEEFFF",
    width: "100%",
    height: "100%",
  };

  function onChangeColorMode() {
    if (style.color === "white") {
      SetStyle(lightModeStyles);
      setbuttonName('change to dark mode')
    } else {
      SetStyle(darkModeStyles);
      setbuttonName('change to white mode')

    }
  }

  const [style, SetStyle] = useState(lightModeStyles);

  function handleChangeClick(e) {
    setText(e.target.value);
  }

  function handleUpperClick() {
    setText(text.toUpperCase());
  }

  function handleLowerClick() {
    setText(text.toLowerCase());
  }

  function handleClearClick() {
    setText("");
  }

  function handleClearSpaced() {
    setText(text.replaceAll(" ", ""));
  }

  return (
    <div style={style}>
      <button  style={style} onClick={onChangeColorMode}>{buttonName}</button>
      <p>{heading}</p>
      <textarea
        rows={8}
        cols={100}
        value={text}
        onChange={handleChangeClick}
        style={style}
      ></textarea>
      <br />
      <button  style={style} onClick={handleUpperClick}>conver to upper case</button>
      <br />
      <button  style={style} onClick={handleLowerClick}>conver to lower case</button>
      <br />
      <button  style={style} onClick={handleClearSpaced}>remove blank space</button>
      <br />
      <button
        type="button"
        className="btn btn-primary my-5"
        onClick={handleClearClick}
        style={style} 
      >
        clear text
      </button>

      <p>
        <span>number of letters with space is:</span> <span>{text.length}</span>
      </p>

      <p>
        <span>number of letters without space is:</span>{" "}
        <span>{text.replaceAll(" ", "").length}</span>
      </p>

      <p>
        <span>number of integer number is:</span>{" "}
      </p>

      <p>Preview</p>

      <div style={style}>
        <p>{text}</p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLoClick = () => {
    // console.log("LowerCase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleCapitalClick = () => {
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newText = arr.join(" ");
    setText(newText);
    props.showAlert("Capitalized!", "success");
  };
  const handleinverseClick = () => {
    //  Inverse CLICK
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Inversed!", "success");
  };
  const onAlternatingCase = () => {
    let newtext = "";
    for (let index = 0; index < text.length; index++) {
      if (index % 2 === 0) {
        newtext += text[index].toLowerCase();
      } else {
        newtext += text[index].toUpperCase();
      }
    }
    setText(newtext);
    props.showAlert("Alternate!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking!", "success");
  };
  //Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join("  "));
    props.showAlert("Removed Extra Spaces!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042723" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042723",
            }}
            id="myBox"
            rows={9}
          ></textarea>
        </div>

        <Button variant="primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </Button>
        <Button variant="primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </Button>
        <Button variant="primary mx-1" onClick={handleClearClick}>
          Clear
        </Button>
        <Button variant="primary mx-1" onClick={handleinverseClick}>
          Inverse
        </Button>
        <Button variant="primary mx-1" onClick={speak}>
          Speak
        </Button>
        <Button variant="primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Space
        </Button>
        <Button variant="primary mx-1" onClick={handleCapitalClick}>
          Capitalize
        </Button>

        <Button variant="primary mx-1" onClick={onAlternatingCase}>
          Alternate
        </Button>
      </div>
      <div
        className="container my-1"
        style={{ color: props.mode === "dark" ? "white" : "#042723" }}
      >
        <h2>Your text summary</h2>
        {/* ternary operator used here  */}
        <p>
          {text.length === 0 ? 0 : text.trim().split(" ").length} words and{" "}
          {text.length} charcaters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>

        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter  something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}

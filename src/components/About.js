import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  return (
    <div className="container" style={myStyle}>
      <h2 className="my-2">About Us</h2>
      <Accordion defaultActiveKey="0" style={myStyle}>
        <Accordion.Item eventKey="0" style={myStyle}>
          <Accordion.Header>Analyze Your text</Accordion.Header>
          <Accordion.Body style={myStyle}>
            Textutils gives you a way to analyze your text quickly and
            efficiently. Be it word count, character count
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={myStyle}>
          <Accordion.Header style={myStyle}>Free to use</Accordion.Header>
          <Accordion.Body style={myStyle}>
            TextUtils is a free character counter tool that provides instant
            character count & word count statistics for a given text. TextUtils
            reports the number of words and characters. Thus it is suitable for
            writing text with word/ character limit.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" aria-expanded="true" style={myStyle}>
          <Accordion.Header>Browser Compatible</Accordion.Header>
          <Accordion.Body style={myStyle}>
            This word counter software works in any web browsers such as Chrome,
            Firefox, Internet Explorer, Safari, Opera. It suits to count
            characters in facebook, blog, books, excel document, pdf document,
            essays, etc.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="container" my-3>
        <Button onClick={toggleStyle} variant="primary" my-3>
          {btntext}
        </Button>
      </div>
    </div>
  );
}

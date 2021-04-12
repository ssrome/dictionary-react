import React from "react";

export default function Phonetics(props) {
  return (
    <div>
      {props.phonetics.text}
      <br />
      <audio controls src={props.phonetics.audio}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
}

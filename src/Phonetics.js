import React from "react";

export default function Phonetics(props) {
  return (
    <div>
      <audio controls src={props.phonetics.audio}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <br />
      {props.phonetics.text}
    </div>
  );
}

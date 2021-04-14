import React from "react";

export default function Phonetics(props) {
  return (
    <ul className="Phonetics">
      <li>{props.phonetics.text}</li>
      <li>
        <audio controls src={props.phonetics.audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </li>
      {/* {props.phonetics.text}
      <br />
      <audio controls src={props.phonetics.audio}>
        Your browser does not support the
        <code>audio</code> element.
      </audio> */}
    </ul>
  );
}

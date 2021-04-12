import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div>
        <h3 className="word">{props.results.word}</h3>
        {props.results.meanings.map(function (meaning, index) {
          return <Meaning key={index} meaning={meaning} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}

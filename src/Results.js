import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h3 className="word">{props.results.word}</h3>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          return <Meaning key={index} meaning={meaning} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}

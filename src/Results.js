import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h3 className="word">{props.results.word}</h3>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </section>
        <Photos photos={props.photos} keyword={props.keyword} />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

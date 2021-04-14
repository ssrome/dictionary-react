import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span className="title">Definition:</span>{" "}
            <span className="definitionDefinition">
              {definition.definition}
            </span>
            <br />
            <span className="title">Example:</span>{" "}
            <span className="definitionExample">{definition.example}</span>
            <br />
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

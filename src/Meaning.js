import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definitionDefinition">{definition.definition}</p>
            <p className="definitionExample">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}

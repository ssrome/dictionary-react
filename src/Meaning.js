import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="definition" key={index}>
            <span className="definitionTitle">Definition: </span>
            <span className="definitionDefinition">
              {definition.definition}
            </span>
            <br />
            <span className="definitionExample">{definition.example}</span>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

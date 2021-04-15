import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span className="definitionTitle">Synonyms: </span>
        <ul className="SynonymsList">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li className="synonym" key={index}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

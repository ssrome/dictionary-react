import React from "react";

export default function Photos(props) {
  if (props.photos && props.photos.length > 0) {
    return (
      <section>
        <div className="row photoList">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-sm photoListItem" key={index}>
                <img
                  className="img-fluid photo"
                  src={photo.src.medium}
                  alt={`${props.keyword} by ${photo.photographer}`}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

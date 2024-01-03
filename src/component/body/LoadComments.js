import React from "react";
import dateFormat, { masks } from "dateformat";


const LoadComments = ({ comments }) => {
  const previewComment = comments.map((cmnt) => {
    return (
      <div key={cmnt.id} className="fst-italic">
        <h5 className="fw-bold">{cmnt.author}</h5>
        <p>{cmnt.comment}</p>
        <p>Ratting: {cmnt.rating}</p>
        <p>{dateFormat(cmnt.date, "dddd, mmmm d, yyyy")}</p>
        <hr />
      </div>
    );
  })
  return (
    <div>
      <h4 className="fw-bold fst-italic">Comments</h4>
      <hr />
      {previewComment}
    </div>
  )
}

export default LoadComments
import React, { useState } from "react";
import { RatingView } from "react-simple-star-rating";

export default function MyComponent() {
  return (
    <div className="App">
      <RatingView ratingValue={2} /* RatingView Props */ />
      {/* <p></p> */}
    </div>
  );
}

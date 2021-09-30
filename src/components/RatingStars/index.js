import React, { useState } from "react";
import Cookies from "js-cookie";
import "./index.css";
import { Rating } from "react-simple-star-rating";

function RatingStars(props) {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const saveTheRatings = async () => {
    // send the data to the API deployed at heroku
    const dbURl =
      "https://cors-anywhere.herokuapp.com/corsdemo/https://anime-nodejs.herokuapp.com/ratings";
    const data = {
      rating: rating,
      description: description,
      token: "no token as of now",
      animeId: props.id
    };
    console.log(JSON.stringify(data));
    const options = {
      method: "POST",
      // mode: "Access-Control-Allow-Origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    try {
      const response = await fetch(dbURl, options);
      console.log("after fetch");
      console.log(response);
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.log("error message", error.message);
    }
  };

  return (
    <div className="">
      <Rating
        onClick={(rate) => setRating(rate)}
        ratingValue={rating} /* Rating Props */
      />
      <textarea
        rows="3"
        placeholder="Give us your feedback"
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
      <br />
      <button onClick={saveTheRatings}>Submit</button>
    </div>
  );
}

export default RatingStars;

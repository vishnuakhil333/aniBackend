import { useState } from "react";
import RatingStars from "../RatingStars";

function Reviewtodb() {
  const [description, setDescription] = useState("");
  const saveTheRatings = async () => {
    // send the data to the API deployed at heroku
    const dbURl = "https://anime-nodejs.herokuapp.com/ratings";
    const data = {
      // rating: rating,
      feedback: description
    };
    const options = {
      method: "POST",
      body: data
    };
    await fetch(dbURl, options);
  };

  return (
    <div>
      <RatingStars />
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
export default Reviewtodb;

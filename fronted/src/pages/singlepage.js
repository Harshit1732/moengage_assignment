import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singlepage.css";

const Singlepage = () => {
  const { id } = useParams();
  // console.log(id);
  const [singlebrewery, setBrewery] = useState({});
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState();
  const [description, setDescription] = useState();
  const token = localStorage.getItem("token");

  const getSinglebrewery = async () => {
    try {
      await axios
        .get(`https://api.openbrewerydb.org/v1/breweries/${id}`)
        .then((res) => {
          setBrewery(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const getBreweryReviews = async (req, res) => {
    try {
      await axios
        .get(`http://localhost:5000/getReview/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data.review);
          setReviews(res.data.review);
        });
    } catch (err) {
      console.log("error");
    }
  };

  const addReview = async () => {
    try {
      await axios.post(
        `http://localhost:5000/addReview/${id}`,

        {
          rating: rating,
          description: description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      getBreweryReviews();
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(reviews)
  useEffect(() => {
    getSinglebrewery();
    getBreweryReviews();
  }, []);

  return (
    <div className="single-page">
      <h1 className="brewery-name">{singlebrewery.name}</h1>
      <p className="brewery-details">
        Street: {singlebrewery.street}, City: {singlebrewery.city}, State:{" "}
        {singlebrewery.state}
      </p>
      <p className="phone">{singlebrewery.phone}</p>
      <p className="website">
        <a
          href={singlebrewery.website_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {singlebrewery.website_url}
        </a>
      </p>

      <form
        className="review-form"
        onSubmit={(e) => {
          e.preventDefault();
          addReview();
        }}
      >
        <label>
          Rating:
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add Review</button>
      </form>
      <div className="reviews">
        <h2>Reviews:</h2>
        {reviews && reviews.length > 0 ? (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                Rating: {review.rating}, Description: {review.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  );
};

export default Singlepage;

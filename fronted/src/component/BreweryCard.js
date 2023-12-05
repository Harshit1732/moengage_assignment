import React, { useEffect, useState } from "react";
import "./BreweryCard.css";
import { Link, useNavigate } from "react-router-dom";
import Singlepage from "../pages/singlepage";
import axios from "axios";
const BreweryCard = (props) => {
  // console.log(props.data);
  const { name, id, street, city, state, phone, website_url } = props.data;
  const [rating, setRating] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getRating = async () => {
    try {
      await axios
        .get(`http://localhost:5000/getReview/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data == "product not found") {
            setRating(null);
          } else {
            const reviews = res.data.review;
            const ratings = reviews[reviews.length - 1].rating;
            setRating(ratings);
          }
        });
    } catch (e) {
      console.log("error getting review");
    }
  };

  useEffect(() => {
    getRating();
  }, []);
  

  return (
    <div className="brewery-card">
      <Link to={`/brewery/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>
        <strong>Address:</strong> {street}, {city}, {state}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={website_url} target="_blank" rel="noopener noreferrer">
          {website_url}
        </a>
      </p>
      <p>
        <strong>Rating:</strong> {rating}
      </p>
    </div>
  );
};

export default BreweryCard;

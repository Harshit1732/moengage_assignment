import React from "react";
import "./BreweryCard.css";
import { Link, useNavigate } from "react-router-dom";
import Singlepage from "../pages/singlepage";

const BreweryCard = (props) => {
  console.log(props.data);
  const { name, id, street, city, state, phone, website_url, rating } =
    props.data;

  const navigate = useNavigate();

  //   console.log(name);

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

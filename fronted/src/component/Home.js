import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import BreweryCard from "./BreweryCard";

const HomePage = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);

  const [data, setdata] = useState({});

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    getAllBreweries();
    // console.log(e.target.value);
    // setSearchTerm(e.target.value);
  };

  const getAllBreweries = async () => {
    try {
      let url = "https://api.openbrewerydb.org/v1/breweries";
      console.log(searchTerm);
      if (searchTerm) {
        url += `?${encodeURIComponent("by_city")}=${encodeURIComponent(
          searchTerm
        )}`;
      }

      const response = await axios.get(url);

      setResult(response.data);
    } catch (e) {
      console.error("Error fetching breweries:", e);
    }
  };

  useEffect(() => {
    getAllBreweries();
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to Brewery Search!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by city, name, or type..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {result.map((item, index) => (
          <BreweryCard
            key={index}
            data={{
              name: item.name,
              id: item.id,
              street: item.street,
              city: item.city,
              state: item.state,
              phone: item.phone,
              website_url: item.website_url,
              rating: item.rating,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

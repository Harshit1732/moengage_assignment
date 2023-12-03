import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Singlepage = () => {
  const { id } = useParams();
  console.log(id);
  const [singlebrewery, setBrewery] = useState({});

  const getSinglebrewery = async () => {
    try {
      await axios
        .get(`https://api.openbrewerydb.org/v1/breweries/${id}`)
        .then((res) => {
          console.log(res);
          setBrewery(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSinglebrewery();
  }, []);

  return (
    <div>
      <h1>{singlebrewery.name}</h1>
      <h1>{singlebrewery.street}</h1>
      <h1>{singlebrewery.city}</h1>
      <h1>{singlebrewery.state}</h1>
      <h1>{singlebrewery.phone}</h1>
      <h1>{singlebrewery.website_url}</h1>
    </div>
  );
};

export default Singlepage;

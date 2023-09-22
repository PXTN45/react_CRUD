/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const fetchAllRestaurants = async () => {
      try {
        const res = await axios.get(`${URL}/restaurant`, config);
        setRestaurant(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllRestaurants();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URL}/restaurant/${id}`, config);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Restaurant</h1>
      <form style={{margin:"10"}} className="d-flex">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Search"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
      </form>
      <div className="row">
        <div className="restaurant">
          {restaurant
            .filter((restaurant) => {
              return restaurant.name.includes(searchText);
            })
            .map((restaurant) => {
              return (
                <Card
                  handleDelete={handleDelete}
                  restaurant={restaurant}
                  key={restaurant.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;

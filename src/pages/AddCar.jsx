import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersApi, getLoading } from "../features/cars/CarSlice";
import { saveUserApi } from "../features/cars/CarSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Get the navigate function
  const UsersApi = useSelector(getLoading);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      let payload = {
        userId: 1,
        title: title,
        body: body,
      };
      dispatch(saveUserApi(payload)).then((action) => {
        // Check if the action was fulfilled or rejected
        if (action.meta.requestStatus === "fulfilled") {
          navigate("/"); // Navigate to the home page after dispatch
          // Remove the alert or use a different way to show a message
          // alert("fff");
        } else {
          // Handle any errors here
          console.error(action.error);
        }
      });
    }
  };

  return (
    <>
      <div className="container mx-auto text-center mt-5 shadow-lg rounded w-50 p-5">
        <p>Title:</p>
        <input
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <br />
        <br />
        <p>Body:</p>
        <input
          type="text"
          value={body}
          onChange={(e) => setbody(e.target.value)}
        />
        <br />
        <br />
        <button
          className="p-1 rounded bg-dark text-white px-3 "
          type="button"
          onClick={handleSubmit}
        >
          Submit
          {UsersApi === "pending" ? "Saving........." : "Save"}
        </button>
      </div>
    </>
  );
};
export default AddCar;

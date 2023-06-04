import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchUsersApi, getLoading } from "../features/cars/CarSlice";
import { saveUserApi } from "../features/cars/CarSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const AddCar = () => {

 const [name,setName]= useState("");
 const [title, setTitle]= useState("");
 const dispatch = useDispatch();
 const navigate = useNavigate(); // Get the navigate function
 const UsersApi = useSelector(getLoading)
 const handleSubmit = (e)=>{
 e.preventDefault();
 if(name && title){
 
 let payload = {
 userId: 1,
 title: name,
 body: title
 };
 dispatch(saveUserApi(payload)).then(()=> {
  navigate("/") // Navigate to the home page after dispatch
 }).then(alert("fff"))
 
 
 }
 }

return <>

<div className="container mx-auto text-center mt-5 shadow-lg rounded w-50 p-5">
<p>Title:</p>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
<br /><br />
<p>Body:</p>
<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
<br /><br />
<button className="p-1 rounded bg-dark text-white px-3 " type="button" onClick={handleSubmit} >Submit

{UsersApi === "pending"? "Saving.........": "Save"}
</button>
</div>

</>;
 };
 export default AddCar;

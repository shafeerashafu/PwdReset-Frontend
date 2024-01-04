import React, { useState } from 'react';
import "./ForgotPwd.css";
//import { resetPwd } from '../crud.jsx';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useNavigate,Link } from 'react-router-dom';

const backendUrl = import.meta.env
                ?import.meta.env.VITE_BE_URL //localhost
                :process.env.VITE_BE_URL; //cloud

//creating a axios instance
const backendInstance = axios.create({
    // baseURL: "http://localhost:8000/api",
    baseURL : backendUrl,
    timeout: 10000,
});





const ResetPwd = () => {
  const [password, setPassword] = useState("");
  const {id, token} = useParams();
  const navigate = useNavigate()
  
  const resetPwd = async (pwdData) => {
    // const {id, token} = useParams();
    const response = await backendInstance.post(`/resetpwd/${id}/${token}`, {
        ...pwdData,
      });
      return response.data;
}


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password:", password);
    resetPwd({password});
    alert("Password changed and updated in the database successfully...");
    navigate("/login");
    
  }
  return (
    <>
    <div className="forgot-password-container">
     
     <form onSubmit={handleSubmit} className="forgot-password-form">
       <label>Password:</label>
       <input 
           type="password"
           name="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
       />
       <button type="submit" className="btn">Update</button>
       <div className="form-footer">
       <Link to="/signup">Go to Sign Up?</Link>
       </div>
     </form>
   </div>
    </>
  )
}

export default ResetPwd;
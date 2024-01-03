import { useState } from "react";
import "./Signup.css";
import { Link, Navigate} from "react-router-dom";
import { signupUser } from "../crud.jsx";
const SignUp = () => {
  //const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("DOB:", dob);
    console.log("Name:", name);
    console.log("Image URL:", imageUrl);
    await signupUser({ email, password, dob, name, imageUrl });
    alert("User Created Successfully, Please Login Now....");
    
  };

//   if (isAuthenticated) {
//     return <Navigate to="/" />;
//   }

  return (
    <>
    <div className="register-form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <label>Date of Birth:</label>
        <input type="date" value={dob} onChange={handleDobChange} required />

        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} required />

        <label>Image URL:</label>
        <input
          type="url"
          value={imageUrl}
          onChange={handleImageUrlChange}
          required
        />
        <div className="form-footer">
          <button className="btn" type="submit">Sign Up</button>
          <Link to="/login">Existing User?</Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default SignUp;
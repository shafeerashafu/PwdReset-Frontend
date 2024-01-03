import { useState } from "react";
import "./Login.css";
import { Link,Navigate} from "react-router-dom";
import { loginUser } from "../crud.jsx";
const Login = () => {
  //const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [directToHome, setDirectToHome] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    const data = await loginUser({ email, password });
    if (data.code) {
      //localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("userDetails",JSON.stringify(data.Userdata));
      //setDirectToHome(true);
    }
    else {
        // stay in the same page
        alert(data.msg);
    }
  }

//   if (directToHome || isAuthenticated) {
//     return <Navigate to={"/"} />;
//   }

  return (
    <>
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
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
        <div className="form-footer">
          <button className="btn" type="submit">Login</button>
          <Link to="/forgotpwd">Forgot Password?</Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login;
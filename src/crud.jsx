import axios from "axios";
import { useParams } from "react-router-dom";

const backendUrl = import.meta.env
                ?import.meta.env.VITE_BE_URL //localhost
                :process.env.VITE_BE_URL; //cloud

//creating a axios instance
const backendInstance = axios.create({
    // baseURL: "http://localhost:8000/api",
    baseURL : backendUrl,
    timeout: 10000,
});

//Authentication method

//creating a user for registering
const signupUser = async (userData) => {
    const response = await backendInstance.post("/signup", {
      ...userData,
    });
    return response.data;
};

//when the user needs to login
const loginUser = async (loginData) => {
    try {
      const response = await backendInstance.post("/login", {
        ...loginData,
      });
      return { ...response.data };
    } catch (err) {
      console.log(err);
      return { msg: "Login failed", code: 0 };
    }
};

//when the user clicks forgotpassword
const forgotPwd = async (emailData) => {
    const response = await backendInstance.post("/forgotpwd", {
        ...emailData,
      });
      return response.data;
}

//when the user click the link from the mail for resetting the password
const resetPwd = async (pwdData) => {
    const {id, token} = useParams();
    const response = await backendInstance.post(`/resetpwd/${id}/${token}`, {
        ...pwdData,
      });
      return response.data;
}


export {signupUser,loginUser,forgotPwd,resetPwd};
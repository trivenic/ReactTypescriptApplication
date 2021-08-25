import {  useEffect, useState } from "react";
import "./Login.css";
import Data from "../data/Data.js";
import { useHistory } from "react-router-dom";
import {User} from "../interface/Interface";

function Login({setIsUser,setIsLoggedOut}:{setIsUser:any,setIsLoggedOut:any}) {
  const history = useHistory();

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  
  

  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(false);

  function handleInputChange(event:React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name === "email") {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setIsValidEmail(false);
      } else {
        setIsValidEmail(true);
      }
    }
    if (name === "password") {
      if (/^[a-z]{3,12}$/.test(value)) {
        setIsValidPassword(true);
      } else {
        setIsValidPassword(false);
      }
    }
    setLoginFormData({ ...loginFormData, [name]: value });
    setIsLogging(false);
    setIsFormEmpty(false);
  }
  function handleForm() {
    setLoginFormData({
      email: "",
      password: "",
    });
  }
  function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loginFormData.email === "" || loginFormData.password === "") {
      setIsFormEmpty(true);
    } else {
      Data.map((data) => {
        if (
          data.email === loginFormData.email &&
          data.password === loginFormData.password
        ) {
          const user : User = data;
          setIsUser(user);
          
          setIsLoggedOut(true);
          history.push("/blogs");
        } else {
          setIsLogging(true);
        }
      });
    }
  }

  useEffect(() => {}, [loginFormData.password, isLogging, isFormEmpty]);

  const { email, password } = loginFormData;
  return (
    <>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="LoginForm-wrapper-div">
          <label className="LoginForm-label">Enter Email Id :</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="LoginForm-input"
          />
          {isValidEmail ? (
            <span className="LoginForm-error">
              Email id shoukd be in format 'abc@gmail.com'{" "}
            </span>
          ) : null}
          <label className="LoginForm-label">Enter Password :</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="LoginForm-input"
          />
          {isValidPassword ? null : (
            <span className="LoginForm-error">
              Password should be 3 to 12 charecter long
            </span>
          )}
          <br />
          <button type="submit" className="LoginForm-button">
            Login
          </button>
          <button
            type="reset"
            onClick={handleForm}
            className="LoginForm-button"
          >
            Cancel
          </button>
          {isLogging ? (
            <span className="LoginForm-error">Wrong EmailId or Password</span>
          ) : null}
          {isFormEmpty ? (
            <span className="LoginForm-error">All fields required</span>
          ) : null}
          <br />
          <br />
        </div>
      </form>
    </>
  );
}
export default Login;

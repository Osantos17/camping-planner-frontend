import axios from "axios";
import { useState } from "react";
import "./Signup.css"

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="signup-page">
      <div className='signup'>
        <div id="signup">
          <h1>SIGN UP</h1>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="form-info">
              <div>
                <h6 className="form">Name:</h6><input name="name" type="text" />
              </div>
              <div>
              <h6 className="form">Email:</h6><input name="email" type="email" />
              </div>
              <div>
              <h6 className="form">Password:</h6><input name="password" type="password" />
              </div>
              <div>
              <h6 className="form">Password Confirmation:</h6><input name="password_confirmation" type="password" />
              </div>
              <br/>
              <button className="button" type="submit">Sign up</button>
            </div>  
          </form>
        </div>
      </div>  
    </div>  
  );
}
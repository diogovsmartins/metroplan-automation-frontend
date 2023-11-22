/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from "react-router-dom";
import "../loginForm/LoginForm.css";
import { useContext, useState } from 'react';
import { UserDetailsContext } from "../../context/LoginContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userContext=useContext(UserDetailsContext)

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      email: email,
      password: password
      }
      fetchData(user)
  }

  async function fetchData(user){
    const requestUserRoles = await fetch('http://localhost:8080/user/roles?' + new URLSearchParams({
      email:user.email,
      password:user.password
    }),
    {
      method:"GET"
    });
    const fetchedUserRoles = await requestUserRoles.json();
    
    userContext.userRoles = fetchedUserRoles.roles;
    console.log(`Roles fetched: ${JSON.stringify(userContext)}`);
  }

  return (
    <div id="form-div">
      <form onSubmit={handleSubmit} id="form-style">
      <h1>Login Form</h1>
        <label> Email &nbsp;
          <input
            type="text"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label> Password &nbsp;
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      
        <button type="submit"> Login </button>
        <Link className="navigation-link" to='/registration'>
           Not Registered yet? Click here 
        </Link>
      </form>
    </div>
  );
}
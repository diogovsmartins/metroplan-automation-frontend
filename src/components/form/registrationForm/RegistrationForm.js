/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from "react-router-dom";
import "../loginForm/LoginForm.css";
import { useState } from 'react';

export default function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      email: email,
      password: password
      }
      console.log(user)
    }

  return (
    <div id="form-div">
      <form onSubmit={handleSubmit} id="form-style">
      <h1>Registration Form</h1>
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
        <label> Show this field only when the user has the coordinator role &nbsp;
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <button type="submit"> Register </button>
      </form>
    </div>
  );
}
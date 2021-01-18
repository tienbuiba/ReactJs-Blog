import React, { useState } from "react";
import "./login.css";
import Axios from "axios";
import { useSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';


import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const login = () => {
    

    Axios.post("http://localhost:8080/user/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", response.data.username);
        enqueueSnackbar('Successfully LogIn');
        history.push("/");
        window.location.reload();

       
      } else {
        setErrorMessage(response.data.message);
        enqueueSnackbar('Cant Login. Please try again!');
      }
    });
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <div className="LoginForm">
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button  size={"medium'"} variant={"contained"} onClick={login}>Login</Button>
        <h1 style={{ color: "red" }}>{errorMessage} </h1>
      </div>
    </div>
  );
}

export default Login;


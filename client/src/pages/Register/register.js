import React, { useState } from "react";
import "./register.css";
import { useHistory } from "react-router-dom";
import { useSnackbar } from 'notistack';
import Axios from "axios";
import Button from '@material-ui/core/Button';


function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  let history = useHistory();
  const register = () => {
    
    console.log(username);
    Axios.post("http://localhost:8080/user/register", {
      username: username,
      password: password,
      email: email,

    }).then((response) => {
      console.log(response);  
      enqueueSnackbar('Successfully Create Account!');  
      history.push("/login");
     window.location.reload();
    });
  };


  return (
    <div className="Register">
      <h1>Register</h1>
      
      <div className="RegisterForm">
      {/* <h1>* Username (Between 3-15 Characters)</h1> */}

        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
              {/* <h1>* Password (Between 4-15 Characters)</h1> */}

        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
              {/* <h1>* Email</h1> */}

          <input
          type="email"
          placeholder="Email..."
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
                <Button  size={"medium'"} variant={"contained"} onClick={register}>Register</Button>

        {/* <button onClick={register}>Register</button> */}
      </div>
    </div>
  );
}

export default Register;

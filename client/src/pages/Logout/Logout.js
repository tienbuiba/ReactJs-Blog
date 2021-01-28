
import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import "./logout.css";
import { useSnackbar } from 'notistack';


export default function Logout() {
  let history = useHistory();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    enqueueSnackbar('Successfully LogOut');
    history.push("/");
    window.location.reload();

  }

  


  return (
    <div className="logout">
      <Button size={"medium'"} variant={"contained"} onClick={logout}>Logout</Button>
    </div>
  );
}

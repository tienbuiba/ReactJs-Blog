
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Avatar } from 'antd';

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    console.log(localStorage.getItem("loggedIn"));
    setLoggedIn(localStorage.getItem("loggedIn", true));
    console.log(loggedIn);
  }, [localStorage.getItem("loggedIn")]);
  return (

    <div className="Navbar">
      <div className="menu-title">
        <Avatar size={65} src="https://storage.googleapis.com/art_images/samplelogo.png" />
        <span > My Project  </span></div>
        <a href="/">Home</a>


      { loggedIn ? (

        <>
          <a href="/upload">Upload</a>
          <a href="/profile">Profile</a>
          <a href="/logout">Logout</a>


        </>
      ) : (
          <> 
          
            <a href="/aboutme">AboutMe</a>
            <a href="/register">SignUp</a>
            <a href="/login">Login</a>

          </>
        )}
    </div>
  );
}

export default Navbar;
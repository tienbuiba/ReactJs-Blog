
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
        <img src="https://storage.googleapis.com/art_images/samplelogo.png" />
        <input

          placeholder="  Sreach User:"


        /></div>
      <a href="/">Blogs</a>


      { loggedIn ? (

        <>
          <a href="/upload">Upload</a>
          <a href="/profile">Profile</a>
          <a href="/logout">Logout</a>


        </>
      ) : (
          <>
            <a href="/register">Signup</a>
            <a href="/login">Login</a>

          </>
        )}
    </div>
  );
}

export default Navbar;
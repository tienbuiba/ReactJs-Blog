import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import "./profile.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSnackbar } from 'notistack';

function Profile() {
  const [yourUploads, setYourUploads] = useState([]);
  useEffect(() => {
    Axios.get(
      `http://localhost:8080/upload/byUser/${localStorage.getItem("username")}`
    ).then((response) => {
      setYourUploads(response.data);
    });
  });
  

  return (

    <div>
      <div className="Username">
        <h1>YourName: {localStorage.getItem("username")}    /   Your Uploaded</h1>
     
      </div>
      <div className="Profile">
    

        {yourUploads.map((val, key) => {
          return (
            <div className="Post">
              <div className="Image">
                <Image cloudName="tienbui" publicId={val.image} />
              </div>
              <div className="Content">
                <div className="title">
                  {" "}
                  {val.title} / Post by @{val.author}
                </div>
                <div className="description">{val.description}</div>
              </div>
              <div className="Engagement">
                <FavoriteIcon
                />
                {val.likes}
              </div>
              <div className="created_at">
                {" "}
                Uploaded On:{val.created_at}
              </div>


            </div>

          );

        })}

      </div>
    </div>
  );
}

export default Profile;
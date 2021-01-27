import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import "./profile.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from "moment";
import readingTime from "reading-time";
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
        <h1>Hi: {localStorage.getItem("username")}    /   Your Uploaded</h1>
     
      </div>
      <div className="Profile">
    

        {yourUploads.map((val, key) => {
          return (
            <div className="Post">              
              <div className="Content">
                <div className="title">
                  {" "}
                  {val.title} 
                </div>
                <div className="description"> 
                {val.description.length > 220
                  ? val.description.substring(0, 220) + " ..."
                  : val.description}
                    </div>
              </div>
              <div className="Engagement">
                
                <FavoriteIcon
                />
                {val.likes}
              </div>
              <div className="created_at">
              {readingTime(val.description).minutes} Min Read </div>
              <div className="upload_on">
             <p1 > Uploaded On: {moment(val.created_at).format("DD MMM YYYY")}</p1>
              </div>


            </div>

          );

        })}

      </div>
    </div>
  );
}

export default Profile;
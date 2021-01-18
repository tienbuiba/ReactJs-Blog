import React, { useEffect, useState } from "react";
import "./home.css";
import { Image } from "cloudinary-react";
import Axios from "axios";
import FavoriteIcon from '@material-ui/icons/Favorite';
function Home() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/upload").then((response) => {
      setUploads(response.data);
    });
  }, []);

  const likePost = (id, key) => {
    var tempLikes = uploads;
    tempLikes[key].likes = tempLikes[key].likes + 1;

    Axios.post("http://localhost:8080/upload/like", {
      userLiking: localStorage.getItem("username"),
      postId: id,
    }).then((response) => {
      setUploads(tempLikes);
      window.location.reload();

    });
  };

  return (
    <div className="Home">
      {uploads.map((val, key) => {
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
                id="likeButton"
                onClick={() => {
                  likePost(val.id, key);
                }}
              />
              {val.likes}
            </div>
            <div  className="created_at">
                {" "}
                Uploaded On: {val.created_at}
              </div>
          </div>
          
        );
      })}
    </div>
  );
}

export default Home;
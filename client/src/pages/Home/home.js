import React, { useEffect, useState } from "react";
import "./home.css";
import Axios from "axios";
import readingTime from "reading-time";
import moment from "moment";
import ShareIcon from '@material-ui/icons/Share';
function Home() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/upload").then((response) => {
      setUploads(response.data);
    });
  }, []);

  // const likePost = (id, key) => {
  //   var tempLikes = uploads;
  //   tempLikes[key].likes = tempLikes[key].likes + 1;

  //   Axios.post("http://localhost:8080/upload/like", {
  //     userLiking: localStorage.getItem("username"),
  //     postId: id,
  //   }).then((response) => {
  //     setUploads(tempLikes);
  //     window.location.reload();

  //   });
  // };
  // const onBackClick = () => {
  //   window.history.go();
  //   window.history.back();
  // };
  return (
    <div className="Home">


      {uploads.map((val, key) => {
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
          
           

            
            <div className="created_at">
              {readingTime(val.description).minutes} Min Read </div>
              <div className="upload_on">
             <p1 >Uploaded On: {moment(val.created_at).format("DD MMM YYYY")} by {val.author} </p1>
          
              </div>
              <div className="Engagement">
            <ShareIcon  /> </div>
          
          </div>

        );
      })}
      <div className="ok">
        <h1>Saad Pasta</h1>
        <p2>Software Developer</p2>
      </div>

    </div>
  );
}

export default Home;


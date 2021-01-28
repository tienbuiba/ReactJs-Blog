import React, { useEffect, useState } from "react";
import "./home.css";
import Axios from "axios";
import readingTime from "reading-time";
import moment from "moment";
import ShareIcon from '@material-ui/icons/Share';
import { useHistory } from "react-router-dom";
function Home() {

  const [uploads, setUploads] = useState([]);
  let history = useHistory();
  useEffect(() => {
    Axios.get("http://localhost:8080/upload").then((response) => {
      setUploads(response.data);
    });
  }, []);

  return (
    <div className="Home">



      {uploads.map((val, key) => {
        return (
          


          <div className="Post"    key={key}
          onClick={() => {
            history.push(`/upload/${val.id}`);
          }}>

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
            <div className="box">
             <p1>{val.type}</p1>
          
              </div>
          </div>

        );
      })}
      <div className="ok">
        <h1>Winter Warriors</h1>
        <p2>Software Developer</p2>
      </div>

    </div>
  );
}

export default Home;


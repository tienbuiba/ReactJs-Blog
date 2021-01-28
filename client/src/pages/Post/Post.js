
import React, { useEffect, useState } from "react";
import "./post.css";
import { useParams } from "react-router-dom";
import Axios from "axios";
import readingTime from "reading-time";
import moment from "moment";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Image } from "cloudinary-react";
export default function Post() {

    let { uploadId } = useParams();
    const [upload, setUpload] = useState([]);
    useEffect(() => {
        Axios.get(
            `http://localhost:8080/upload/getFromId/${uploadId}`
        ).then((response) => {
            setUpload(response.data);
        });
    }, []);
 


    const likePost = (id, key) => {
        var tempLikes = upload;

        tempLikes[key].likes = tempLikes[key].likes + 1;
    
        Axios.post("http://localhost:8080/upload/like", {
          userLiking: localStorage.getItem("username"),
          postId: id,
        }).then((response) => {
          setUpload(tempLikes);
          window.location.reload();
        });
      };

    return (
        <div className="OK">
            {upload.map((val, key) => {
                return (
                    <div className="Post"   >
                        <div className="Content">
                            <div className="title">
                                {val.title}
                            </div>
                       

                            <div className="upload_on">
                                <p1 >Uploaded On: {moment(val.created_at).format("DD MMM YYYY")} . {readingTime(val.description).minutes} Min Read .View On Github</p1>
                            </div>
                            <div className="Image">
                                <Image cloudName="tienbui" publicId={val.image} />
                            </div>
                            <div className="description">
                                {val.description}
                            </div>
                        </div>
                        <div className="Share">
                            <ShareIcon /> Share</div>
                            <div className="Love">               
                <FavoriteIcon onClick={() => {
                  likePost(val.id, key);
                }} />
                {val.likes}
              </div>

                    </div>

                );
            })}


        </div>
    );
}

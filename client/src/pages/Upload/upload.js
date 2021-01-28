
import React, { useState } from "react";
import "./upload.css";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useSnackbar } from 'notistack';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';


function Upload() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  let history = useHistory();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const upload = () => {
    enqueueSnackbar('Successfully Upload');

    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "aloalo");
    Axios.post(
      `https://api.cloudinary.com/v1_1/tienbui/image/upload`,
      formData
    ).then((response) => {
      const fileName = response.data.public_id;

      Axios.post("http://localhost:8080/upload", {
        title: title,
        type: type,
        description: description,
        image: fileName,
        author: localStorage.getItem("username"),
      }).then(() => {
        history.push("/");
      });
    });
  };
  return (
    <div className="Upload">
      <div className="UploadForm">
      <h1>Create A Post</h1>
        <input
          type="text"
          placeholder=" Title..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          
        />
        <input
          type="text"
          placeholder=" Type..."
          onChange={(event) => {
            setType(event.target.value);
          }}
          
        />
           
        <input
          type="text"
          placeholder=" Description..."
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />

        <input type="file" onChange={(e) => setImage(e.target.files)} />
            
      
      <Button
        variant="contained"
        color="default"
        onClick={upload}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      </div>
    </div>
  );
}

export default Upload;
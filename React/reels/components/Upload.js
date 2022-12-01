import React from 'react'
import { Button, IconButton, LinearProgress } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function Upload() {
  return (
    <div className='upload-btn'>
         <Button
          color="secondary"
          variant="outlined"
          component="label"
          size="large"
          startIcon={<MovieIcon />}
        >
          Upload Video
          <input hidden accept="video/*" type="file"/>
        </Button>

        <LinearProgress

          color="secondary"
          variant="determinate"
           value={60}
          sx={{ mt: "0.2rem" }}
        />
    </div>


  )
}


export default Upload;
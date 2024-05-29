import React, { useState } from "react";

function VideoUpload() {
  let [video, setVideo] = useState(null);

  let Vedio = (e) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <h1>
        <ins>Video Upload</ins>
      </h1>
      <input type="file" accept="video/*" onChange={Vedio} />
      {video && (
        <div>
          <video
            src={video}
            controls
            style={{ width: "500px", height: "250px" }}
          ></video>
          <p>Selected Video: {video.name}</p>
        </div>
      )}
    </div>
  );
}

export default VideoUpload;

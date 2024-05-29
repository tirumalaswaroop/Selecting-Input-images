import React, { useState } from "react";

function AudioUpload() {
  let [audio, setAudio] = useState();

  let Audio = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <h1>
        <ins>Audio Upload</ins>
      </h1>
      <input type="file" accept="audio/*" onChange={Audio} />
      {audio && (
        <div>
          <audio src={audio} controls ></audio>
          <p>Selected Audio: {audio.name}</p>
        </div>
      )}
    </div>
  );
}

export default AudioUpload;

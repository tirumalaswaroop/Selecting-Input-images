import React, { useState } from "react";

function FileInput() {
  let [file, setFile] = useState();

  let File = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <h1>
        <ins>File Input</ins>
      </h1>
      <input type="file" onChange={File} />
      {file && (
        <div>
          <p>Selected File: {file.name}</p>
          <p>File Size: {(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  );
}

export default FileInput;

import React, { useState } from "react";

function ImageUpload() {
  let [image, setImage] = useState();

  let Image = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div>
      <h1>
        <ins>Image Upload</ins>
      </h1>
      <input type="file" multiple accept="image/*" onChange={Image} />
      {image && (
        <div>
          <img
            src={image}
            alt="Preview"
            style={{ width: "200px", height: "200px" }}
          ></img>
          <p>Selected Image: {image.name}</p>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;

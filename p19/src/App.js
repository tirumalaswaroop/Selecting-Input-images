import "./App.css";
import FileInput from "./Components/FileInput";
import ImageUpload from "./Components/ImageUpload";
import VideoUpload from "./Components/VideoUpload";
import AudioUpload from "./Components/AudioUpload";

function App() {
  return (
    <div className="App">
      <FileInput></FileInput>
      <hr></hr>
      <hr></hr>
      <ImageUpload></ImageUpload>
      <hr></hr>
      <hr></hr>
      <VideoUpload></VideoUpload>
      <hr></hr>
      <hr></hr>
      <AudioUpload></AudioUpload>
    </div>
  );
}

export default App;

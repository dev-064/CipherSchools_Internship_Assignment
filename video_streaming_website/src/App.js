import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Videocard from "./Components/Homepage/Videocard/Videocard";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import Stream from "./Components/VideoStreaming/Stream";
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Homepage /> */}
      <Stream/>
    </div>
  );
}

export default App;

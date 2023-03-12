import "./App.css"
import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import Stream from "./Components/VideoStreaming/Stream";
import Notification from "./Components/NotifSection/Notification";
import Comments from "./Components/VideoStreaming/Comments";
function App() {
  const [notifModal, setnotifModal] = useState(false);
  const [commentModal, setcommentModal] = useState(false);
  const [shareModal, setshareModal] = useState(false);
  const [videokey, setvideokey] = useState("");
  const close_modal = () => {
    setnotifModal(false);
    setcommentModal(false);
    setshareModal(false);
  };
  const showCommentModal = () => {
    setcommentModal(true);
  };
  const showNotifModal = () => {
    setnotifModal(true);
  };
  const showshareModal = () => {
    setshareModal(true);
  };
  const videokeychange = (value) => {
    setvideokey(value);
  };
  return (
    <div className="App">
      <Navbar showNotifModal={showNotifModal} />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          exact
          path="/stream"
          element={
            <Stream
              showCommentModal={showCommentModal}
              showshareModal={showshareModal}
              videokeychange={videokeychange}
            />
          }
        />
      </Routes>
      <Modal show={notifModal} close_modal={close_modal}>
        <Notification />
      </Modal>
      <Modal show={commentModal} close_modal={close_modal}>
        <Comments />
      </Modal>
      <Modal show={shareModal} shareModal={shareModal} close_modal={close_modal}>
        <div className="shareModal">
          <p>https://youtu.be/{videokey}</p>
          <button className="copy-button" onClick={()=>{
            navigator.clipboard.writeText(`https://youtu.be/${videokey}`)
            alert("Link copied to clipboard");
          }}><i class='bx bx-copy' style={{color:"white"}}></i></button>
        </div>
      </Modal>
    </div>
  );
}

export default App;

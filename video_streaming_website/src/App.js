import "./App.css";
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
  const close_modal = () => {
    setnotifModal(false);
    setcommentModal(false);
  };
  const showCommentModal = () => {
    setcommentModal(true);
  };
  const showNotifModal = () => {
    setnotifModal(true);
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
            />
          }
        />
      </Routes>
      <Modal show={notifModal} height={"60%"} close_modal={close_modal}>
        <Notification />
      </Modal>
      <Modal show={commentModal} height={"60%"} close_modal={close_modal}>
        <Comments />
      </Modal>
    </div>
  );
}

export default App;

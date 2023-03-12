import React from "react";
import { useNavigate } from "react-router-dom";
const Recommend_card = (props) => {
  const mystyle = {
    backgroundImage: `url(http://img.youtube.com/vi/${props.id}/hqdefault.jpg)`,
    backgroundSize: "Cover",
  };
  const navigate = useNavigate();
  return (
    <div className="r-video-card" onClick={()=>{
      window.location.reload(true);
      navigate("/stream" ,{state:props.id})
    }}>
      <div className="r-video-thumbnail" style={mystyle}></div>
      <div className="r-video-info">
        <p>Lorem ipsum dolor, sit amet consectetur</p>
        <div className="r-stats">
          <div classNames="r-likes">
            <i class="bx bxs-like"></i>&nbsp;&nbsp;30K&nbsp;&nbsp;|&nbsp;&nbsp;
          </div>
          <div classNames="r-comments">
            <i class="bx bx-comment"></i>&nbsp;&nbsp;20K
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend_card;

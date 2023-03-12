import { React } from "react";
import "./Videocard.css";
import { useNavigate } from "react-router-dom";
const Videocard = (props) => {
  const mystyle = {
    backgroundImage: `url(http://img.youtube.com/vi/${props.id}/hqdefault.jpg)`,
  };
  const navigate=useNavigate();
  return (
    <div>
      <div className="video-card" style={mystyle} onClick={()=>{
        navigate("/stream",{state:props.id});
      }}>
        <div className="video-card-content">
          <h4 className="video-card-title">{props.title}</h4>
          <p className="video-card-text">
            <i class="bx bxs-like bx-xs"></i>
            &nbsp;
            {props.likes}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="bx bx-comment"></i>
            &nbsp;
            {props.comments}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videocard;

import React from "react";

const Recommend_card = () => {
    const mystyle = {
        backgroundImage: `url(http://img.youtube.com/vi/Vd5vz9vNYY0/hqdefault.jpg)`,
        backgroundSize: "Cover",
      };
  return (
    <div className="r-video-card">
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

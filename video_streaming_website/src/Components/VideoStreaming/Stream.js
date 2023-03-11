import React from "react";
import "./Stream.css";
import Recommend_card from "./VideoRecommendation/Recommend_card";
const Stream = (props) => {
  return (
    <div id="StreamPage">
      <div className="video-player-section">
        <div className="video-player">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/Vd5vz9vNYY0`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="video-information">
          <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</p>
          <div className="stats">
            <button className="likes-information custom-btn">
              <div className="like icon">
                <i class="bx bxs-like"></i>
              </div>
              <div className="count">37K</div>
            </button>
            <button className="comments-information custom-btn">
              <div className="comment icon">
                <i class="bx bx-comment"></i>
              </div>
              <div className="count">27K</div>
            </button>
          </div>
        </div>
        <div className="comments-section">
          <div className="my-input">
            <label>Comments:</label>
            <input type="text" placeholder="Add Your Comment" />
          </div>
          <div className="Comments">
            <div className="user-comment">
              <div className="user-info">
                <div className="user-pic"></div>
                <div className="user-name">Dev_064</div>
              </div>
              <div className="post-time">7 days ago</div>
              <div className="user-content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas impedit odio adipisci officia blanditiis iusto error
                repudiandae atque nam quidem.
              </div>
              <p>Replies</p>
              <div className="replies">
                <div className="reply user-info">
                  <div className="reply user-pic"></div>
                  <div className="reply user-name">Ketanzz</div>
                </div>
                <div className="reply post-time">2 days ago</div>
                <div className="reply user-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, est eos error natus recusandae voluptates modi
                  explicabo rerum rem? Nemo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-suggestion-section">
        <p>Recommended to you</p>
        <Recommend_card/>
        <Recommend_card/>
        <Recommend_card/>
        <Recommend_card/>
        <Recommend_card/>
        <Recommend_card/>
        <Recommend_card/>
        <Recommend_card/>
      </div>
    </div>
  );
};

export default Stream;

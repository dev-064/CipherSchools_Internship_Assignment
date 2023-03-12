import { React, useState } from "react";
import "./Stream.css";
import Recommend_card from "./VideoRecommendation/Recommend_card";
import { useLocation } from "react-router-dom";
import Comments from "./Comments";
import { useEffect } from "react";
const Stream = (props) => {
  const location = useLocation();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 900px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 900px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div id="StreamPage">
      <div className="video-player-section">
        <div className="video-player">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${location.state}`}
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
            <button
              className="comments-information custom-btn"
              onClick={() => {
                props.showshareModal();
                props.videokeychange(location.state);
              }}
            >
              <div className="comment icon">
                <i class="bx bx-share"></i>
              </div>
              <div className="count">Share</div>
            </button>
          </div>
        </div>
        {!matches ? (
          <div
            className="comment-pallete-mobile"
            onClick={() => {
              props.showCommentModal();
            }}
          >
            <p>Comments | 10K</p>
            <p className="comment-mobile">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              nemo!
            </p>
          </div>
        ) : (
          <Comments />
        )}
      </div>
      <div className="video-suggestion-section">
        <p>Recommended to you</p>
        <Recommend_card />
        <Recommend_card />
        <Recommend_card />
        <Recommend_card />
        <Recommend_card />
        <Recommend_card />
        <Recommend_card />
        <Recommend_card />
      </div>
    </div>
  );
};

export default Stream;

import { React, useState } from "react";
import "./Stream.css";
import Recommend_card from "./VideoRecommendation/Recommend_card";
import { useLocation } from "react-router-dom";
import Comments from "./Comments";
import { useEffect } from "react";
const Stream = (props) => {
  const location = useLocation();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 650px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 650px)")
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
                navigator.clipboard.writeText(`https://youtu.be/${location.state}`);
                alert("Link copied to clipboard");
              }}
            >
              <div className="comment icon" >
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
          <>
            <div className="comments-section">
              <div className="my-input">
                <label>Comments:</label>
                <input type="text" placeholder="Add Your Comment" />
              </div>
            </div>
            <Comments matchsize={matches} />
            <Comments matchsize={matches} />
            <Comments matchsize={matches} />
            <Comments matchsize={matches} />
            <Comments matchsize={matches} />
            <Comments matchsize={matches} />
            <Comments matchsize={matches} />
          </>
        )}
      </div>
      <div className="video-suggestion-section">
        <p>Recommended to you</p>
        <Recommend_card id={"n1vu0uX47io"}/>
        <Recommend_card id={"VR65wpYlt7U"}/>
        <Recommend_card id={"Se9oxPJdiUs"}/>
        <Recommend_card id={"iu2Fhxinm5s"}/>
        <Recommend_card id={"KLTMCPzRO64"}/>
        <Recommend_card id={"0ulEizUvoM8"}/>
        <Recommend_card id={"c-x2exgJKvU"}/>
        <Recommend_card id={"s0mjO2RI4pE"}/>
        <Recommend_card id={"Ct5kU0w1Vgk"}/>
        <Recommend_card id={"Qfr8XF8QQlY"}/>
        <Recommend_card id={"8nwAiWrKW3k"}/>
        <Recommend_card id={"jGp7tpSScj4"}/>
        <Recommend_card id={"CotEVlabX_c"}/>
        <Recommend_card id={"w4eo8xEf0Ec"}/>
        <Recommend_card id={"xDWStmC94Rk"}/>
        <Recommend_card id={"6kXHUltXW0I"}/>
      </div>
    </div>
  );
};

export default Stream;

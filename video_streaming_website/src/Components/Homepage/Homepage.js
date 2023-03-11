import React from "react";
import "./Homepage.css";
import Videocard from "./Videocard/Videocard";
const Homepage = () => {
  return (
    <div id="Homepage">
      <div className="most-trending-video">
        <div>
          <p>Explore the most trending video of the week</p>
        </div>
        <div className="video-embedd">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XIJHg1XWR7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <div className="continue-watching-section">
        <h2>Continue Watching</h2>
        <div className="horizontal-scroll-homepage">
          <Videocard id={"8H6HeFa8_4Q"} likes={"30k"} comments={"1k"} watch={50} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"7Qp5vcuMIlk"} likes={"32.4k"} comments={"3.1k"} watch={37} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"Wv2rLZmbPMA"} likes={"9k"} comments={"2k"} watch={80} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"gS9o1FAszdk"} likes={"1.4k"} comments={"5k"} watch={43} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"gS9o1FAszdk"} likes={"1.4k"} comments={"5k"} watch={43} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"gS9o1FAszdk"} likes={"1.4k"} comments={"5k"} watch={43} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"gS9o1FAszdk"} likes={"1.4k"} comments={"5k"} watch={43} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"gS9o1FAszdk"} likes={"1.4k"} comments={"5k"} watch={43} title={"Lorem ipsum dolor sit"}/>
        </div>
      </div>
      <div className="recommended-for-you">
        <h2>Recommended For You</h2>
        <div className="recommended-for-you-videos">
          <Videocard id={"BXOMzNyQp08"} likes={"45k"} comments={"9k"} watch={0} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"BXOMzNyQp08"} likes={"45k"} comments={"9k"} watch={0} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"zE2k54TNgSI"} likes={"1k"} comments={"6k"} watch={0} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"zE2k54TNgSI"} likes={"1k"} comments={"6k"} watch={0} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"J6aaPyHzF_I"} likes={"4k"} comments={"1k"} watch={0} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"J6aaPyHzF_I"} likes={"4k"} comments={"1k"} watch={0} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"J6aaPyHzF_I"} likes={"4k"} comments={"1k"} watch={0}  title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"h7f0bVYXRbw"} likes={"98k"} comments={"25k"} watch={0} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"h7f0bVYXRbw"} likes={"98k"} comments={"25k"} watch={0} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"tFt7LU6-lUU"} likes={"9k"} comments={"12k"} watch={0} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"WQf-dIKZO8k"} likes={"7k"} comments={"76k"} watch={0} title={"Lorem ipsum dolor sit"}/>
          <Videocard id={"WQf-dIKZO8k"} likes={"7k"} comments={"76k"} watch={0} title={"Lorem ipsum dolor sit"}/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

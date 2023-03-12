import { React, useState } from "react";

const Comments = (props) => {
  const [replies, setreplies] = useState(false);
  return (
    <>
      <div className="comments-section">
        {!props.matchsize ? (
          <div className="my-input">
            <label>Comments:</label>
            <input type="text" placeholder="Add Your Comment" />
          </div>
        ) : null}
        <div className="Comments">
          <div className="user-comment">
            <div className="user-info">
              <div className="user-pic"></div>
              <div className="user-name">Dev_064</div>
            </div>
            <div className="post-time">7 days ago</div>
            <div className="user-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              impedit odio adipisci officia blanditiis iusto error repudiandae
              atque nam quidem.
            </div>
            <p
              onClick={() => {
                if (replies) {
                  setreplies(false);
                } else {
                  setreplies(true);
                }
              }}
              style={{cursor:"pointer"}}
            >
              Replies&nbsp;&nbsp;
              {replies ? (
                <i class="bx bxs-down-arrow"></i>
              ) : (
                <i class="bx bxs-up-arrow"></i>
              )}
            </p>
           {replies &&  <div className="replies">
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
            </div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;

import React from "react";
import "./Modal.css";
function Modal(props) {
  const mystyle={
    height:`${props.height}`,
    width:`${props.width}`
  }
  return (
    props.show && (
      <div
        className="modal-parent"
        onClick={(event) => {
          const isOutside = (!event.target.closest(".modal-content") & !event.target.closest(".heading-of-modal"));
          if (isOutside) {
            props.close_modal();
          }
        }}
      >
        <div className="modal-content" style={mystyle}>
          <div className="closing-cross" onClick={()=>{
            props.close_modal();
          }}>X</div>
          <div className="modal-external-content">{props.children}</div>
        </div>
      </div>
    )
  );
}

export default Modal;

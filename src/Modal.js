import React from "react";
// import { redirect } from "react-router-dom";
// import "./src/stylesheets/Modal.css";
import "./stylesheets/Modal.css"


function Modal(props, { setOpenModal }) {

  if(props.gradepoints==='100'){
    

    return (
    
      <div id="modalcontainer" className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button href="/"
              onClick={() => {
  
                  document.getElementById("modalcontainer").style.display="none"
  
  
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="body">
            <b>Please Enter marks correctly!</b>
          </div>
          <div className="footer">
            <a href="/"><button 
              onClick={() => {
                document.getElementById("modalcontainer").style.display="none"
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Okay
            </button></a>
          </div>
        </div>
      </div>
    );
  }



          
  
  else
  {

  return (
    
    <div id="modalcontainer" className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button href="/"
            onClick={() => {

              document.getElementById("modalcontainer").style.display="none"


              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          Your {" "} <b> &nbsp;Grade Point Average&nbsp; </b>  of Semester {props.semnum} is <b>&nbsp;{props.gradepoints}</b>
        </div>
        <div className="footer">
          <a href="/"><button 
            onClick={() => {
              document.getElementById("modalcontainer").style.display="none"
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Okay
          </button></a>
        </div>
      </div>
    </div>
  );
}
}

export default Modal;

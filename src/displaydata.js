import React from "react";
import './stylesheets/displaydata.css';
// import './stylesheets/index.css';
// import { Displayheader } from "./displayheader";
// import ReactDOM from 'react-dom/client';

function Display(props){
    return (
        <>
        {/* <h1>{props.name}</h1><h1>{props.code}</h1><h1>{props.credit}</h1> */}
        
        {/* <div className="flex-container">
  <div className="flex-child subcode">{props.code}</div>
  <div className="flex-child subname">{props.name}</div>
  <div className="flex-child ">
    <input className="num" type="number" id="quantity" name="quantity" />
  </div>
</div> */}

{/* {document.getElementById("content").style.display="none"} */}



{/* <Displayheader /> */}

<div className="Appf" style={{
    display:"-ms-flexbox"
}}>
      <div style={{ display: "flex"}}>
        
        <p className="subjectcode">
          &nbsp;{props.code}
        </p>
        <p className="subjectname">
          {props.name}</p>
        <input
          className="inputmarks"
          type="number"
          name="FirstName"
          // required
        />
      </div>
    </div>
        
        </>
    )
}

export default Display

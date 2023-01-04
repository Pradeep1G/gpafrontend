import React from "react";
import ReactDOM from 'react-dom/client';

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

<div className="Appf" style={{
    display:"-ms-flexbox"
}}>
      <div style={{ display: "flex"}}>
        
        <p className="name"
        style={{ 
            textAlign:"left",
          color:"black",
          marginRight:10,
          // marginLeft:30,
          border: "black",
          borderWidth: 1,
          width: 400,
          borderStyle: "outset",
          padding:7 }}>
          {props.code}
        </p>
        <p className="name"
        style={{ 
            color:"black",
            width:110,
          marginRight:10,
          marginLeft:10,
          border: "black",
          borderWidth: 1,
          borderStyle: "outset",
          padding:7 }}>
          {props.name}</p>
        <input
          style={{
            marginLeft:10,
            // marginTop:15,
            width: 90,
            height:43,
            // backgroundColor:"blue",
            border: "blue",
            borderColor:"red",
            borderWidth: 1,
            borderStyle: "outset"
          }}
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

import * as React from "react";


export default function App3(){
    return 
    (
        <>
  <div
    id="header"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      height: 200,
      right: 0,
      overflow: "hidden"
    }}
  >
    <nav className="navbar navbar-expand-lg navbar static-top">
      <div className="container">
        <a
          className="navbar-brand"
          href="https://sathyabama.cognibot.in/?redirect=0"
        >
          <img src="log1.png" alt="..." height="120px;" />
        </a>
      </div>
      <div className="cont1">
        <a
          className="navbar-brand"
          href="https://sathyabama.cognibot.in/?redirect=0"
        >
          <img src="logc.png" alt="..." height="80px;" />
        </a>
      </div>
    </nav>
  </div>
  {/* style="position:absolute; top:200px; bottom:200px; left:0px; right:0px; overflow:auto;"> */}
  <div id="content">
    <div className="dropdown">
      <div className="select">
        <span className="selected">Select Your Semester&nbsp;&nbsp;</span>
        <div className="caret"></div>
      </div>
      <ul className="menu">
        <li>
          <b>Semester-1</b>
        </li>
        <li>
          <b>Semester-2</b>
        </li>
        <li>
          <b>Semester-3</b>
        </li>
        <li>
          <b>Semester-4</b>
        </li>
        <li>
          <b>Semester-5</b>
        </li>
        <li>
          <b>Semester-6</b>
        </li>
        <li>
          <b>Semester-7</b>
        </li>
        <li>
          <b>Semester-8</b>
        </li>
      </ul>
    </div>
  </div>
  <div
    id="footer"
    style={{
      position: "absolute",
      bottom: 0,
      height: 170,
      left: 0,
      right: 0,
      overflow: "hidden"
    }}
  >
    <footer>
      <div className="copyrights">
        <p>All rights reserved © 2023 Copyright Sathyabama University. </p>
      </div>
    </footer>
  </div>
</>

    
    )
}
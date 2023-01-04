import React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { redirect } from "react-router-dom";

const override = css
display: block ;
margin :0 auto;
border-color: red;
;


function Spinner(){
    let [loading, setLoading] = useState(true);

    return (
        <div className="sweet-loading">
        <button onClick={()=> setLoading(!loading)}>Toggle Loader</button>
        <ClipLoader color={"#fff"}  Loading ={loading} css={override} size={150}/>
        
        </div>
        
    )
}

export default Spinner;
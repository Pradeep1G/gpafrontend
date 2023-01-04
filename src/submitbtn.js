import React from "react"
import Getdataarray from "./getdata";


function domath(){

    // const code_list = Getdataarray(props);


}




export function Submitbtn(){
    return (
        <>
            <div >
                <button onClick={domath} className="submitbtn">Submit</button>
            </div>
        </>
    )
}
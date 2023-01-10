
import "./stylesheets/index.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { Displayheader } from "./displayheader";

export default function SelectSem(props){
    // document.getElementById("content").style.display="none";
    

// const dptname=props.dpt;

    return(
        <>


<Displayheader img1="./log1.png" img2="./logc.png" />



<div id="contentx">
<Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Select your Semester&nbsp;
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <div style={{height:"150px", overflow:"auto"}}>

        <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem1"}>Semester-1</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem2"}>Semester-2</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem3"}>Semester-3</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem4"}>Semester-4</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem5"}>Semester-5</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem6"}>Semester-6</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem7"}>Semester-7</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href={props.dpt+"/sem8"}>Semester-8</Dropdown.Item>
        </div>

      </Dropdown.Menu>
    </Dropdown>
</div>

        </>
    )
}

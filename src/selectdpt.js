
import "./stylesheets/index.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { Displayheader } from "./displayheader";

export default function Selectdpt(){
    // document.getElementById("content").style.display="none";
    


    return(
        <>


<Displayheader img1="./log1.png" img2="./logc.png" />
        



<div id="content">
<Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Select your Department&nbsp;
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <div style={{height:"150px", overflow:"auto"}}>

        <Dropdown.Item className="drpdnitem" href="/CSE">CSE</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/ECE">ECE</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/Civil">Civil</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/MEC">MEC</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/EEE">EEE</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/ETCE">ETCE</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/CSECS">CSE Cyber Security</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/CSEAIML">CSE A I& ML</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/CSEAIR">CSE AI & Robotics</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/CSEBCT">CSE Block Chain</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/IT">IT</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/CSEAI">CSE AI</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/CSEIOT">CSE IOT</Dropdown.Item>
        <Dropdown.Item className="drpdnitem" href="/CSEDS">CSE Data Science</Dropdown.Item>

        </div>
      </Dropdown.Menu>
    </Dropdown>
</div>

        </>
    )
}

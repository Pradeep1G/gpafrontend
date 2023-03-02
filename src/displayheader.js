import './stylesheets/index.css'


export function Displayheader(props){
    return (
        <>




<div
  id="header"
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    height: 200,
    right: 0,
    overflow: "unset"
  }}
>
  <nav className="navbar navbar-expand-lg navbar static-top">
    <div className="containerx">
      <a
        className="navbar-brand"
        href="https://sathyabama.cognibot.in/?redirect=0"
      >
        <img className="log1img" src={props.img1} alt="..." />
      </a>
    </div>
    <div className="cont1">
      <a
        className="navbar-brand"
        href="https://sathyabama.cognibot.in/?redirect=0"
      >
        <img  src={props.img2} alt="..." height="70px;" width="300px;" />
      </a>
    </div>
  </nav>
</div>




        </>
    )
}



import logo from './logo.svg';
import './App.css';
import './box.css';
import React, {useState, useEffect, StrictMode} from 'react';
import Axios from "axios";
import Display from './displaydata';
import Getdataarray from "./getdata";
import Todict from './todict';
import { Redirect, renderMatches } from "react-router-dom";
import { Submitbtn } from './submitbtn';
import Modal from "./Modal";




function App(props) {

  // const cgpa = null;

  const [modalOpen, setModalOpen] = useState(false);
  const [cgpa , setcgpa] = useState("");
  const [marks_list_length, setmarks_list_length] = useState(null);




  const code_list = Getdataarray(props)
    const code_dict = Todict(props)

    const marks_list =[]
    const subjectpartialcredits = [];


  const changeHandle = (event)=>{




    event.preventDefault()
    // console.warn(event.target.length)
    for(var i=0; i<event.target.length-3;i++){ marks_list.push(event.target[i].value); subjectpartialcredits.push((Number.parseInt((Number.parseInt(event.target[i].value)/10))+1)*(code_list[2][i]))}
    
    
    
    console.warn(marks_list)
    if(props.semnum ==='1'){
      subjectpartialcredits[6]=Number.parseInt(subjectpartialcredits[6])*2
    }
    console.warn(marks_list)

    // {props.semnum===1 ? marks_list[6] = marks_list[6]*2 : marks_list[6]}
    // console.warn(code_list[2])

    // console.warn(marks_list.length)
    console.warn(subjectpartialcredits)
    setmarks_list_length(marks_list.length)
    // console.warn(marks_list_length+"hjjy")

    let sumofsubjectpartialcredits = subjectpartialcredits.reduce(function (a, b) {
      return (a + b);
    }, 0);
    console.warn(sumofsubjectpartialcredits);

    let sumofcredits=code_list[2].reduce(function(a,b){
      return Number.parseInt(a)+Number.parseInt(b);
    }, 0);
    console.warn(sumofcredits)

    console.warn(((sumofsubjectpartialcredits/sumofcredits)+" ").substring(0,4))
    setcgpa(((sumofsubjectpartialcredits/sumofcredits)+" ").substring(0,4));
    cgpa = ((sumofsubjectpartialcredits/sumofcredits)+" ").substring(0,4)

  }


    // const code_list = [];
    // const name_list = [];
    // const credit_list = [];

    // const [dataarray, setDataarray] = useState([])

    // useEffect(() => {
    //     async function go(){
    //         const response = await Axios.get("http://localhost:3001/course/semdata")
    //         setDataarray(response.data)
    //         // console.log(response.data)
    //     }
    //     go()
    // }, [])

    // dataarray.forEach((it) =>{
    //     console.log(it.Course_Name)
    //     code_list.push(it.Course_Code)
    //     name_list.push(it.Course_Name)
    //     credit_list.push(it.Course_Credit)
    // })

    
    // const code_list = Getdataarray()
    // const code_dict = Todict(props)

    


  //   const [dataarray, setcoursedata] = useState([
  //     {
  //       __id:"",
  //         Course_Code:"",
  //         Course_Name: "",
  //         Course_Credit: "",
  //         __v:"",
  //     },
  // ]);
  
  // useEffect(() =>{
  //     fetch("http://localhost:3001/course/semdata")
  //     .then((res)=>res.json())
  //     .then( (jsonRes)=> setcoursedata(jsonRes));
  // },
  // []);

  // console.log(code_di[0])


  return (
    <React.StrictMode>
{document.getElementById("content").style.display="none"}
{document.getElementById("footer").style.height="100px"}
{/* {document.getElementById("footer").style.marginTop="870px"} */}
{props.semnum==4 || props.semnum==10 ? document.getElementById("footer").style.marginTop="880px": document.getElementById("footer").style.marginTop="820px"}

{/* {document.getElementById("copyrights").style.paddingTop="40px"} */}

    {/* {document.getElementById("drpbtn").setAttribute("setText", "semname")} */}
    <div className="App">
    {/* {document.getElementById("footer").setAttribute("height", "120")} */}
    <h2 style={{paddingTop:150}}> SEMESTER-{props.semnum} </h2>
    <form onSubmit={changeHandle}>
    {/* <h2>{code_dict[0].Course_Name}</h2> */}
      {code_dict.map((item)=>{
        return <Display name={item.Course_Name} code = {item.Course_Code} credit={item.Course_Credit}/>
      })}



<div className="btndis">
      
      <button  type='submit'
        className="openModalBtn"
        onClick={() => {
          // {console.warn(marks_list_length)}
          // {console.warn(code_list[2].length)}

          // {marks_list_length==code_list[2].length ? setModalOpen(true) : setModalOpen(false)}
          
          setModalOpen(true)
          {document.getElementById("modalcontainer").style.display="flex"}
          {while(marks_list.length){marks_list.pop()}}
          // {console.warn(marks_list)}
          ;
        }}
      >
        Calculate
      </button>
      {console.log(cgpa)}

      {(modalOpen && <Modal gradepoints={cgpa} semnum={props.semnum} setOpenModal={setModalOpen} />)}
    </div>




</form>
  {/* <Submitbtn/> */}




  <p id="creditnote">* All elective subjects have 3 credits.</p>

</div>

{/* <div className="btndis">
      
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Calculate
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div> */}
    </React.StrictMode>
  );
    }


export default App;

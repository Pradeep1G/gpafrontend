import logo from './logo.svg';
import './stylesheets/App.css';
import './stylesheets/box.css';
import React, {useState, useEffect, StrictMode} from 'react';
import Axios from "axios";
import Display from './components/displaydata';
import Getdataarray from "./methods/getdata";
import Todict from './methods/todict';
import { Redirect, renderMatches } from "react-router-dom";
// import { Submitbtn } from './submitbtn';
import Modal from "./Modal";




function App(props) {

  // const cgpa = null;

  const [modalOpen, setModalOpen] = useState(false);
  const [cgpa , setcgpa] = useState("");
  const [marks_list_length, setmarks_list_length] = useState(null);
  // const [erroroccur, seterroccur] = useState(false);

  // const erroroccured = false;




  const code_list = Getdataarray(props)
    const code_dict = Todict(props)

    const marks_list =[]
    const subjectpartialcredits = [];


  // const changeHandle = (event)=>{




  //   event.preventDefault()
  //   // console.warn(event.target.length)
  //   for(var i=0; i<event.target.length-3;i++){ 
  //     // if(event.target[i].value ==''){seterroccur(true)}
  //     marks_list.push(event.target[i].value);
    
  //   //  subjectpartialcredits.push((Number.parseInt((Number.parseInt(event.target[i].value)/10))+1)*(code_list[2][i]))
  //   }
  //   console.warn(marks_list)


  //       if((props.semnum ==='1' || props.semnum==='2')&&marks_list[6]!=''){
  //     marks_list[6]=Number.parseInt(marks_list[6])*2;
  //   }
  //   if((props.semnum==='3' || props.semnum==='4')&&marks_list[6]!=''){
  //     marks_list[8]=Number.parseInt(marks_list[8])*2;
  //   }

  //   for(var i=0; i<marks_list.length; i++){
  //    subjectpartialcredits.push((Number.parseInt((Number.parseInt(marks_list[i])/10))+1)*(code_list[2][i]))
  //   }
    
  //     marks_list.push(event.target[i].value);
  //   console.warn(marks_list)

  //     subjectpartialcredits.push((Number.parseInt((Number.parseInt(event.target[i].value)/10))+1)*(code_list[2][i]))

    
    
  //   // console.warn(marks_list)


  //   // if(props.semnum ==='1' || props.semnum==='2'){
  //   //   subjectpartialcredits[6]=Number.parseInt(subjectpartialcredits[6])*2 -1;
  //   // }
  //   // if(props.semnum==='3' || props.semnum==='4'){
  //   //   subjectpartialcredits[8]=Number.parseInt(subjectpartialcredits[8])*2 - 1;
  //   // }
   


  //   // {props.semnum===1 ? marks_list[6] = marks_list[6]*2 : marks_list[6]}
  //   // console.warn(code_list[2])

  //   // console.warn(marks_list.length)
  //   // console.warn(subjectpartialcredits)
  //   setmarks_list_length(marks_list.length)
  //   // console.warn(marks_list_length+"hjjy")

  //   let sumofsubjectpartialcredits = subjectpartialcredits.reduce(function (a, b) {
  //     return (a + b);
  //   }, 0);
  //   // console.warn(sumofsubjectpartialcredits);

  //   let sumofcredits=code_list[2].reduce(function(a,b){
  //     return Number.parseInt(a)+Number.parseInt(b);
  //   }, 0);
  //   // console.warn(sumofcredits)
  //   // console.warn(Number((45.6647).toFixed(2)))

  //   // console.warn(((sumofsubjectpartialcredits/sumofcredits)+" ").substring(0,4))
  //   setcgpa((Number((sumofsubjectpartialcredits/sumofcredits).toFixed(2))+" ").substring(0,4));
  //   cgpa = ((Number((sumofsubjectpartialcredits/sumofcredits).toFixed(2))+" ").substring(0,4))

  // }



  const changeHandle = (event)=>{




    event.preventDefault()
    // console.warn(event.target.length)
    for(var i=0; i<code_list[2].length;i++){ 
      // if(event.target[i].value ==''){seterroccur(true)}
      marks_list.push(event.target[i].value);
    
    //  subjectpartialcredits.push((Number.parseInt((Number.parseInt(event.target[i].value)/10))+1)*(code_list[2][i]))
    }


    if((props.semnum ==='1' || props.semnum==='2')&&marks_list[6]!=''){
      marks_list[6]=Number.parseInt(marks_list[6])*2;
    }
    if((props.semnum==='3' || props.semnum==='4')&&marks_list[6]!=''){
      marks_list[8]=Number.parseInt(marks_list[8])*2;
    }
    // console.warn(marks_list)

    for(var i=0; i<marks_list.length; i++){
     subjectpartialcredits.push((Number.parseInt((Number.parseInt(marks_list[i])/10))+1)*(code_list[2][i]))
    }
    console.warn(subjectpartialcredits)
      // marks_list.push(event.target[i].value);
      // subjectpartialcredits.push((Number.parseInt((Number.parseInt(event.target[i].value)/10))+1)*(code_list[2][i]))

    
    
    console.warn(marks_list)


    // if(props.semnum ==='1' || props.semnum==='2'){
    //   subjectpartialcredits[6]=Number.parseInt(subjectpartialcredits[6])*2 -1;
    // }
    // if(props.semnum==='3' || props.semnum==='4'){
    //   subjectpartialcredits[8]=Number.parseInt(subjectpartialcredits[8])*2 - 1;
    // }
   


    // {props.semnum===1 ? marks_list[6] = marks_list[6]*2 : marks_list[6]}
    // console.warn(code_list[2])

    // console.warn(marks_list.length)
    // console.warn(subjectpartialcredits)
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

          // {marks_list.length==code_list[2].length ? setModalOpen(true) : <p>please fill all details</p>}
          // {marks_list.length<code_list[2].length ? seterroccur(true) : seterroccur(false)}

          // {for(let mark of marks_list){mark=='' ? seterroccur(true): console.warn("not working")}}

          setModalOpen(true)
          {document.getElementById("modalcontainer").style.display="flex"}
          {while(marks_list.length){marks_list.pop()}}
          {while(subjectpartialcredits.length){subjectpartialcredits.pop()}}
          {while(marks_list.length){marks_list.pop()}}


          // {console.warn(marks_list)}
          ;
        }}
      >
        Calculate
      </button>
      {/* {console.log(cgpa)} */}

      {(modalOpen && <Modal gradepoints={cgpa<=10? cgpa: '100'} semnum={props.semnum} setOpenModal={setModalOpen} />)}
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

// import React from "react"
import { Displayheader } from './displayheader';
import log from "./log1.png";
import log2 from "./logc.png";
import "./stylesheets/displayAllSub.css"
import Display from "./displaydata";
import Todict from "./methods/todict";
import Modal from "./Modal";
import "./stylesheets/index.css";
import './stylesheets/App.css';
import './stylesheets/box.css';
import React, {useState} from 'react';
import Getdataarray from './methods/getdata';


export default function CGPA(props){


  const [modalOpen, setModalOpen] = useState(false);
  const [cgpa , setcgpa] = useState("");
  const [marks_list_length, setmarks_list_length] = useState(null);

    // const code_dict1 = Todict({dpt:"CSE", semnum:"1"})
    // const code_dict2 = Todict({dpt:"CSE", semnum:"2"})
    // const code_dict3 = Todict({dpt:"CSE", semnum:"3"})
    // const code_dict4 = Todict({dpt:"CSE", semnum:"4"})
    // const code_dict5 = Todict({dpt:"CSE", semnum:"5"})
    // const code_dict6 = Todict({dpt:"CSE", semnum:"6"})
    // const code_dict7 = Todict({dpt:"CSE", semnum:"7"})
    // const code_dict8 = Todict({dpt:"CSE", semnum:"8"})

    const code_list = Getdataarray(props)

    const code_dict = Todict(props)

    // console.warn(code_dict)
    // console.warn(props)


    const marks_list =[]
    const subjectpartialcredits = [];


  



  const changeHandle = (event)=>{




    event.preventDefault()
    // console.warn(event.target.length)
    for(var i=0; i<code_list[2].length;i++){ 
      // if(event.target[i].value ==''){seterroccur(true)}
      marks_list.push(event.target[i].value);
    
    //  subjectpartialcredits.push((Number.parseInt((Number.parseInt(event.target[i].value)/10))+1)*(code_list[2][i]))
    }


    // if(props.dpt==="CSE"&&(props.semnum ==='1' || props.semnum==='2')&&marks_list[6]!==''){
    //   marks_list[6]=Number.parseInt(marks_list[6])*2;
    // }
    // if(props.dpt==="CSE"&&(props.semnum==='3' || props.semnum==='4')&&marks_list[6]!==''){
    //   marks_list[8]=Number.parseInt(marks_list[8])*2;
    // }


    // if(props.dpt==="ECE"&&(props.semnum ==='1' || props.semnum==='2')&&marks_list[6]!==''){
    //   marks_list[6]=Number.parseInt(marks_list[6])*2;
    // }


    // if(props.dpt==="MEC"&&(props.semnum ==='1' || props.semnum==='2')&&marks_list[6]!==''){
    //   marks_list[6]=Number.parseInt(marks_list[6])*2;
    // }
    // console.warn(marks_list)

    for(var j=0; j<marks_list.length; j++){
     subjectpartialcredits.push((Number.parseInt((Number.parseInt(marks_list[j])/10))+1)*(code_list[2][j]))
    }
    console.warn("subjectpartialcredits = "+subjectpartialcredits)
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
    console.warn(marks_list_length+"hjjy")

    let sumofsubjectpartialcredits = subjectpartialcredits.reduce(function (a, b) {
      return (a + b);
    }, 0);
    console.warn("sumofsubjectpartialcredits = "+sumofsubjectpartialcredits);

    let sumofcredits=code_list[2].reduce(function(a,b){
      return Number.parseInt(a)+Number.parseInt(b);
    }, 0);
    console.warn("sumofcredits = "+sumofcredits)

    // console.warn(((sumofsubjectpartialcredits/sumofcredits)+"0").substring(0,6))
    console.warn(sumofsubjectpartialcredits/sumofcredits)
    console.warn((Number((sumofsubjectpartialcredits/sumofcredits).toFixed(2))+"0").substring(0,4));
    setcgpa(((sumofsubjectpartialcredits/sumofcredits).toFixed(2)+"0").substring(0,4));
    // cgpa = ((sumofsubjectpartialcredits/sumofcredits)+" ").substring(0,4)

  }






    return(
        <>
    <React.StrictMode>
        <Displayheader img1={log} img2={log2} />
        {document.getElementById("footer").style.position="auto"}
        {/* {document.getElementById("footer").style.bottom="0px"} */}
        {document.getElementById("footer").style.marginTop="880px"}


{document.getElementById("footer").style.height="100px"}




        <form onSubmit={changeHandle}>

            {/* <div id="" style="overflow:scroll; height:400px;"> */}
            
            <div className="cpgpadiv">

            <h3 className='cgpaCalci'><b>All {props.dpt} Subjects</b></h3>
        

            {code_dict.map((item)=>{
        return <Display name={item.Course_Name} code = {item.Course_Code} credit={item.Course_Credit}/>
      })}

      {/* <p><b>SEMESTER - 2</b></p>


      {code_dict2.map((item)=>{
        return <Display name={item.Course_Name} code = {item.Course_Code} credit={item.Course_Credit}/>
      })}

      <p><b>SEMESTER - 3</b></p>


      {code_dict3.map((item)=>{
        return <Display name={item.Course_Name} code = {item.Course_Code} credit={item.Course_Credit}/>
      })}

      <p><b>SEMESTER - 4</b></p>


      {code_dict4.map((item)=>{
        return <Display name={item.Course_Name} code = {item.Course_Code} credit={item.Course_Credit}/>
      })}

      <p><b>SEMESTER - 5</b></p>


      {code_dict5.map((item)=>{
        return <Display name={item.Course_Name} code = {item.Course_Code} credit={item.Course_Credit}/>
      })}

      <p><b>SEMESTER - 6</b></p>


      {code_dict6.map((item)=>{
        return <Display name={item.Course_Name} code = {item.Course_Code} credit={item.Course_Credit}/>
      })}

      <p><b>SEMESTER - 7</b></p>


      {code_dict7.map((item)=>{
        return <Display name={item.Course_Name} code = {item.Course_Code} credit={item.Course_Credit}/>
      })}

      <p><b>SEMESTER - 8</b></p>


      {code_dict8.map((item)=>{
        return <Display name={item.Course_Name} code = {item.Course_Code} credit={item.Course_Credit}/>
      })} */}

            </div>



            <div className="btndis">
      
      <button  type='submit'
        className="openModalBtnforcgpa"
        onClick={() => {
          // {console.warn(marks_list_length)}
          // {console.warn(code_list[2].length)}

          // {marks_list.length==code_list[2].length ? setModalOpen(true) : <p>please fill all details</p>}
          // {marks_list.length<code_list[2].length ? seterroccur(true) : seterroccur(false)}

          // {for(let mark of marks_list){mark=='' ? seterroccur(true): console.warn("not working")}}

          setModalOpen(true)
          document.getElementById("modalcontainer").style.display="flex"
          while(marks_list.length){marks_list.pop()}
          while(subjectpartialcredits.length){subjectpartialcredits.pop()}
          while(marks_list.length){marks_list.pop()}


          // {console.warn(marks_list)}
          
        }}
      >
        Calculate CGPA
      </button>
      {/* {console.log(cgpa)} */}

      {(modalOpen && <Modal gradepoints={cgpa<=10? cgpa: '100'} semnum={props.semnum} setOpenModal={setModalOpen} />)}
    </div>




</form>
  {/* <Submitbtn/> */}




  <p id="creditnote">* All elective subjects have 3 credits.</p>









    </React.StrictMode>


        </>
    )
}
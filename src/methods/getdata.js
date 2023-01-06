


import  {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom/client';
import Axios from "axios";


function Getdataarray(props){

    const code_list = [];
    const name_list = [];
    const credit_list = [];
const jasondataurl = "https://gpaserverx.onrender.com/course/CSEsem"
    
    const semnum = props.semnum;

    const [dataarray, setcourse] = useState([])

    useEffect(() => {
        async function go(){
            const response = await Axios.get(jasondataurl+semnum)
            setcourse(response.data)
            console.log(response.data)
        }
        go()
    }, [semnum])
    console.log(dataarray)
    // console.log(go())


    dataarray.forEach((it) =>{
        console.log(it.Course_Name)
        code_list.push(it.Course_Code)
        name_list.push(it.Course_Name)
        credit_list.push(it.Course_Credit)
    })

    return [code_list, name_list, credit_list]

// const [dataarray, setcoursedata] = useState([
//     {
//         Course_Code:"",
//         Course_Name: "",
//         Course_Credit: "",
//     },
// ]);

// useEffect(() =>{
//     fetch("http://localhost:3001/course/semdata")
//     .then((res)=>res.json())
//     .then( (jsonRes)=> setcoursedata(jsonRes));
// },
// []);

// // useEffect(() => {
// // console.log(dataarray) ;
// // }, [dataarray]);

// return dataarray
    
}

export default Getdataarray















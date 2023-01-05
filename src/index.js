import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './App';
import App2 from './AppRoutes'; 
// import App3 from './App3';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));


// const btn = document.getElementById("btn1");
// btn.onclick= function(){
//   return (
//     <>
//     {console.log("kjrsdguryu")}
//     <h1>I am from router</h1>
//     <BrowserRouter>
//     <Routes>
      
//         <Route path="/app" element={<App semnum="1"/>}/>
     
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// const semester1 = document.getElementById("semester1")
// semester1.setAttribute(Link="/app");


root.render(
  <BrowserRouter>
  <App2 />
  </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();











//Drop down button in Home
const dropdowns=document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown=> {
  const select = dropdown.querySelector('.select');
  const caret=dropdown.querySelector('.caret');
  const menu=dropdown.querySelector('.menu');
  const options=dropdown.querySelectorAll('.menu li');
  const selected=dropdown.querySelector('.selected');

  select.addEventListener('click',() => {
    document.getElementById("content").style.marginBottom = "110px";
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');

  });;
  options.forEach(option=>{
    option.addEventListener('click',() => {
      selected.innerText=option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach(option => {
        option.classList.remove('active');
      });

    });
  });
});















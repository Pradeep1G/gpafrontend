import { StrictMode } from 'react';
import {Routes, Route} from 'react-router-dom';
import App from './App';
// import Homepage from './home';

export default function App2() {
  // const navigate = useNavigate();


  // const navigateSem1 = () => {
  //   // 👇️ navigate to /
  //   navigate('/sem1');
  // };
  // const navigateSem2 = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/sem2');
  // };
  // const navigateSem3 = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/sem3');
  // };
  // const navigateSem4 = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/sem4');
  // };
  // const navigateSem5 = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/sem5', {replace: true});
  // };
  // const navigateSem6 = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/sem6');
  // };
  // const navigateSem7 = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/sem7');
  // };
  // const navigateSem8 = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/sem8');
  // };

  return (
    <div>
      <div>
        {/* <button onClick={navigateSem1}>SEM1</button>
        <hr />
        <button onClick={navigateSem2}>SEM2</button>
        <hr />
        <button onClick={navigateSem3}>SEM3</button>
        <hr />
        <button onClick={navigateSem4}>SEM4</button>
        <hr />
        <button onClick={navigateSem5}>SEM5</button>
        <hr />
        <button onClick={navigateSem6}>SEM6</button>
        <hr />
        <button onClick={navigateSem7}>SEM7</button>
        <hr />
        <button onClick={navigateSem8}>SEM8</button> */}

        <Routes>
          {/* <Route path="/" element={<Homepage/>}></Route> */}
          <Route path="/sem1" element={<StrictMode><App semnum="1"/></StrictMode>} />
          <Route path="/sem2" element={<App semnum="2" />}/>
          <Route path="/sem3" element={<App semnum="3"/>} />
          <Route path="/sem4" element={<App semnum="4" />} />
          <Route path="/sem5" element={<App semnum="5"/>} />
          <Route path="/sem6" element={<App semnum="6" />} />
          <Route path="/sem7" element={<App semnum="7"/>} />
          <Route path="/sem8" element={<App semnum="8" />} />
        </Routes>
      </div>
    </div>
  );
}





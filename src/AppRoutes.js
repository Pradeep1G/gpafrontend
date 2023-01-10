import { StrictMode } from 'react';
import {Routes, Route} from 'react-router-dom';
import App from './App';
import SelectSem from './selectsem';
import Selectdpt from './selectdpt';
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
          <Route path="/" element={<Selectdpt />}></Route>
          <Route path="/CSE" element={<SelectSem dpt="CSE"/>}/>
          <Route path="/ECE" element={<SelectSem dpt="ECE"/>}/>
          <Route path="/Civil" element={<SelectSem dpt="Civil"/>}/>
          <Route path="/MEC" element={<SelectSem dpt="MEC"/>}/>
          <Route path="/EEE" element={<SelectSem dpt="EEE"/>}/>
          <Route path="/ETCE" element={<SelectSem dpt="ETCE"/>}/>
          <Route path="/CSECS" element={<SelectSem dpt="CSECS"/>}/>
          <Route path="/CSEAIML" element={<SelectSem dpt="CSEAIML"/>}/>
          <Route path="/CSEAIR" element={<SelectSem dpt="CSEAIR"/>}/>
          <Route path="/CSEBCT" element={<SelectSem dpt="CSEBCT"/>}/>
          <Route path="/IT" element={<SelectSem dpt="IT"/>}/>
          <Route path="/CSEAI" element={<SelectSem dpt="CSEAI"/>}/>
          <Route path="/CSEIOT" element={<SelectSem dpt="CSEIOT"/>}/>
          <Route path="/CSEDS" element={<SelectSem dpt="CSEDS"/>}/>


          <Route path="/CSE/sem1" element={<StrictMode><App dpt="CSE" semnum="1"/></StrictMode>} />
          <Route path="/ECE/sem1" element={<App dpt="ECE" semnum="1" />}/>
          <Route path="/Civil/sem1" element={<App dpt="Civil" semnum="1"/>} />
          <Route path="/MEC/sem1" element={<App dpt="MEC" semnum="1" />} />
          <Route path="/EEE/sem1" element={<App dpt="EEE" semnum="1"/>} />
          <Route path="/ECTE/sem1" element={<App dpt="ECTE" semnum="1" />} />
          <Route path="/CSECS/sem1" element={<App dpt="CSECS" semnum="1"/>} />
          <Route path="/CSEAIML/sem1" element={<App dpt="CSEAIML" semnum="1" />} />
          <Route path="/CSEAIR/sem1" element={<App dpt="CSEAIR" semnum="1" />} />
          <Route path="/CSEBCT/sem1" element={<App dpt="CSEBCT" semnum="1" />} />
          <Route path="/IT/sem1" element={<App dpt="IT" semnum="1" />} />
          <Route path="/CSEAI/sem1" element={<App dpt="CSEAI" semnum="1" />} />
          <Route path="/CSEIOT/sem1" element={<App dpt="CSEIOT" semnum="1" />} />
          <Route path="/CSEDS/sem1" element={<App dpt="CSEDS" semnum="1" />} />

        
          <Route path="/CSE/sem2" element={<StrictMode><App dpt="CSE" semnum="2"/></StrictMode>} />
          <Route path="/ECE/sem2" element={<App dpt="ECE" semnum="2" />}/>
          <Route path="/Civil/sem2" element={<App dpt="Civil" semnum="2"/>} />
          <Route path="/MEC/sem2" element={<App dpt="MEC" semnum="2" />} />
          <Route path="/EEE/sem2" element={<App dpt="EEE" semnum="2"/>} />
          <Route path="/ECTE/sem2" element={<App dpt="ECTE" semnum="2" />} />
          <Route path="/CSECS/sem2" element={<App dpt="CSECS" semnum="2"/>} />
          <Route path="/CSEAIML/sem2" element={<App dpt="CSEAIML" semnum="2" />} />
          <Route path="/CSEAIR/sem2" element={<App dpt="CSEAIR" semnum="2" />} />
          <Route path="/CSEBCT/sem2" element={<App dpt="CSEBCT" semnum="2" />} />
          <Route path="/IT/sem2" element={<App dpt="IT" semnum="2" />} />
          <Route path="/CSEAI/sem2" element={<App dpt="CSEAI" semnum="2" />} />
          <Route path="/CSEIOT/sem2" element={<App dpt="CSEIOT" semnum="2" />} />
          <Route path="/CSEDS/sem2" element={<App dpt="CSEDS" semnum="2" />} />


          <Route path="/CSE/sem3" element={<StrictMode><App dpt="CSE" semnum="3"/></StrictMode>} />
          <Route path="/ECE/sem3" element={<App dpt="ECE" semnum="3" />}/>
          <Route path="/Civil/sem3" element={<App dpt="Civil" semnum="3"/>} />
          <Route path="/MEC/sem3" element={<App dpt="MEC" semnum="3" />} />
          <Route path="/EEE/sem3" element={<App dpt="EEE" semnum="3"/>} />
          <Route path="/ECTE/sem3" element={<App dpt="ECTE" semnum="3" />} />
          <Route path="/CSECS/sem3" element={<App dpt="CSECS" semnum="3"/>} />
          <Route path="/CSEAIML/sem3" element={<App dpt="CSEAIML" semnum="3" />} />
          <Route path="/CSEAIR/sem3" element={<App dpt="CSEAIR" semnum="3" />} />
          <Route path="/CSEBCT/sem3" element={<App dpt="CSEBCT" semnum="3" />} />
          <Route path="/IT/sem3" element={<App dpt="IT" semnum="3" />} />
          <Route path="/CSEAI/sem3" element={<App dpt="CSEAI" semnum="3" />} />
          <Route path="/CSEIOT/sem3" element={<App dpt="CSEIOT" semnum="3" />} />
          <Route path="/CSEDS/sem3" element={<App dpt="CSEDS" semnum="3" />} />


          <Route path="/CSE/sem4" element={<StrictMode><App dpt="CSE" semnum="4"/></StrictMode>} />
          <Route path="/ECE/sem4" element={<App dpt="ECE" semnum="4" />}/>
          <Route path="/Civil/sem4" element={<App dpt="Civil" semnum="4"/>} />
          <Route path="/MEC/sem4" element={<App dpt="MEC" semnum="4" />} />
          <Route path="/EEE/sem4" element={<App dpt="EEE" semnum="4"/>} />
          <Route path="/ECTE/sem4" element={<App dpt="ECTE" semnum="4" />} />
          <Route path="/CSECS/sem4" element={<App dpt="CSECS" semnum="4"/>} />
          <Route path="/CSEAIML/sem4" element={<App dpt="CSEAIML" semnum="4" />} />
          <Route path="/CSEAIR/sem4" element={<App dpt="CSEAIR" semnum="4" />} />
          <Route path="/CSEBCT/sem4" element={<App dpt="CSEBCT" semnum="4" />} />
          <Route path="/IT/sem4" element={<App dpt="IT" semnum="4" />} />
          <Route path="/CSEAI/sem4" element={<App dpt="CSEAI" semnum="4" />} />
          <Route path="/CSEIOT/sem4" element={<App dpt="CSEIOT" semnum="4" />} />
          <Route path="/CSEDS/sem4" element={<App dpt="CSEDS" semnum="4" />} />

          <Route path="/CSE/sem5" element={<StrictMode><App dpt="CSE" semnum="5"/></StrictMode>} />
          <Route path="/ECE/sem5" element={<App dpt="ECE" semnum="5" />}/>
          <Route path="/Civil/sem5" element={<App dpt="Civil" semnum="5"/>} />
          <Route path="/MEC/sem5" element={<App dpt="MEC" semnum="5" />} />
          <Route path="/EEE/sem5" element={<App dpt="EEE" semnum="5"/>} />
          <Route path="/ECTE/sem5" element={<App dpt="ECTE" semnum="5" />} />
          <Route path="/CSECS/sem5" element={<App dpt="CSECS" semnum="5"/>} />
          <Route path="/CSEAIML/sem5" element={<App dpt="CSEAIML" semnum="5" />} />
          <Route path="/CSEAIR/sem5" element={<App dpt="CSEAIR" semnum="5" />} />
          <Route path="/CSEBCT/sem5" element={<App dpt="CSEBCT" semnum="5" />} />
          <Route path="/IT/sem5" element={<App dpt="IT" semnum="5" />} />
          <Route path="/CSEAI/sem5" element={<App dpt="CSEAI" semnum="5" />} />
          <Route path="/CSEIOT/sem5" element={<App dpt="CSEIOT" semnum="5" />} />
          <Route path="/CSEDS/sem5" element={<App dpt="CSEDS" semnum="5" />} />

          <Route path="/CSE/sem6" element={<StrictMode><App dpt="CSE" semnum="6"/></StrictMode>} />
          <Route path="/ECE/sem6" element={<App dpt="ECE" semnum="6" />}/>
          <Route path="/Civil/sem6" element={<App dpt="Civil" semnum="6"/>} />
          <Route path="/MEC/sem6" element={<App dpt="MEC" semnum="6" />} />
          <Route path="/EEE/sem6" element={<App dpt="EEE" semnum="6"/>} />
          <Route path="/ECTE/sem6" element={<App dpt="ECTE" semnum="6" />} />
          <Route path="/CSECS/sem6" element={<App dpt="CSECS" semnum="6"/>} />
          <Route path="/CSEAIML/sem6" element={<App dpt="CSEAIML" semnum="6" />} />
          <Route path="/CSEAIR/sem6" element={<App dpt="CSEAIR" semnum="6" />} />
          <Route path="/CSEBCT/sem6" element={<App dpt="CSEBCT" semnum="6" />} />
          <Route path="/IT/sem6" element={<App dpt="IT" semnum="6" />} />
          <Route path="/CSEAI/sem6" element={<App dpt="CSEAI" semnum="6" />} />
          <Route path="/CSEIOT/sem6" element={<App dpt="CSEIOT" semnum="6" />} />
          <Route path="/CSEDS/sem6" element={<App dpt="CSEDS" semnum="6" />} />

          <Route path="/CSE/sem7" element={<StrictMode><App dpt="CSE" semnum="7"/></StrictMode>} />
          <Route path="/ECE/sem7" element={<App dpt="ECE" semnum="7" />}/>
          <Route path="/Civil/sem7" element={<App dpt="Civil" semnum="7"/>} />
          <Route path="/MEC/sem7" element={<App dpt="MEC" semnum="7" />} />
          <Route path="/EEE/sem7" element={<App dpt="EEE" semnum="7"/>} />
          <Route path="/ECTE/sem7" element={<App dpt="ECTE" semnum="7" />} />
          <Route path="/CSECS/sem7" element={<App dpt="CSECS" semnum="7"/>} />
          <Route path="/CSEAIML/sem7" element={<App dpt="CSEAIML" semnum="7" />} />
          <Route path="/CSEAIR/sem7" element={<App dpt="CSEAIR" semnum="7" />} />
          <Route path="/CSEBCT/sem7" element={<App dpt="CSEBCT" semnum="7" />} />
          <Route path="/IT/sem7" element={<App dpt="IT" semnum="7" />} />
          <Route path="/CSEAI/sem7" element={<App dpt="CSEAI" semnum="7" />} />
          <Route path="/CSEIOT/sem7" element={<App dpt="CSEIOT" semnum="7" />} />
          <Route path="/CSEDS/sem7" element={<App dpt="CSEDS" semnum="7" />} />

          <Route path="/CSE/sem8" element={<StrictMode><App dpt="CSE" semnum="8"/></StrictMode>} />
          <Route path="/ECE/sem8" element={<App dpt="ECE" semnum="8" />}/>
          <Route path="/Civil/sem8" element={<App dpt="Civil" semnum="8"/>} />
          <Route path="/MEC/sem8" element={<App dpt="MEC" semnum="8" />} />
          <Route path="/EEE/sem8" element={<App dpt="EEE" semnum="8"/>} />
          <Route path="/ECTE/sem8" element={<App dpt="ECTE" semnum="8" />} />
          <Route path="/CSECS/sem8" element={<App dpt="CSECS" semnum="8"/>} />
          <Route path="/CSEAIML/sem8" element={<App dpt="CSEAIML" semnum="8" />} />
          <Route path="/CSEAIR/sem8" element={<App dpt="CSEAIR" semnum="8" />} />
          <Route path="/CSEBCT/sem8" element={<App dpt="CSEBCT" semnum="8" />} />
          <Route path="/IT/sem8" element={<App dpt="IT" semnum="8" />} />
          <Route path="/CSEAI/sem8" element={<App dpt="CSEAI" semnum="8" />} />
          <Route path="/CSEIOT/sem8" element={<App dpt="CSEIOT" semnum="8" />} />
          <Route path="/CSEDS/sem8" element={<App dpt="CSEDS" semnum="8" />} />
        
        </Routes>
      </div>
    </div>
  );
}





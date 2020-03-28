import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {CharacterReveal} from "react-text-reveal";


function App() {
  const [animate, setAnimate] = useState(false);

useEffect(() => {
  setTimeout(() => {
    setAnimate(true)
;  }, 1000);
})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CharacterReveal
            animateOpacity={true}
            canPlay={animate}
            characterOffsetDelay={25} // ms
            characterWordSpacing={"10px"}
            copy={["Make.","Something.","Move."]}
            direction={"bottom"}
            duration={1275} // ms
            ease={"cubic-bezier(0,0.4,0.4,1)"}
            offset={"45px"}
            multilineOffsetDelay={200} // ms
          />
      </header>
    </div>
  );
}

export default App;

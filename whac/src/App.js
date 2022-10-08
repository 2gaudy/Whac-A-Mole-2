
import './App.css';
import React, { render } from 'react';
import { Fragment } from 'react';
import {useState} from ' react';


function Moles(props){

}

function Mole(){

}

function Timer(){

}

function Score(){

}

function Game(){
  const [playing, setPlaying] = useState(false)

  return(
    <Fragment>
      {!playing && <h1>Whac-A-Mole</h1>}
      <button onClick={() => setPlaying(!playing)}>
        {playing ? 'Stop' : 'Start'}
      </button>
      {playing && (
        <Fragment>
        
          <Score/>
          <Timer/>
          <Moles>
            <Mole/>
            <Mole/>
            <Mole/>
            <Mole/>
            <Mole/>
          </Moles>
        
        </Fragment>  
      )}
    </Fragment>
      

  );
}


function App() {


  return (
    <>
      <Game/>
    </>
  );
}

export default App;

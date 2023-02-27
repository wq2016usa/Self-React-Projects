// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import title_image from './images/title-image.png';

import Cards from './components/Cards/Cards';
import StatePicker from './components/StatePicker/StatePicker';
import TrackerChart from './components/Chart/Chart';
import {getCurData, getSelectedName} from './api/api_index';
import all_states from './all_states.json';

function App() {
  const [curData, setCurD] = useState({});
  const [allState, setAllState] = useState({});
  const [selectState, setSelectState] = useState("");
  const [stateKey, setStateKey] = useState("");
  const [shortName, setShortName] = useState("");
  const [selectData, setSelectData] = useState({});

  useEffect(()=>{
    const data = getCurData();
    data.then((res) => setCurD(res));

    setAllState(all_states);

    let tempN = getKeyByValue(all_states, selectState);

    if(tempN){
      console.log('gk',tempN);
      setStateKey(tempN);
      setShortName(tempN.toLowerCase());
    }

    console.log('shorn', shortName);

    const selectStateData = getSelectedName(shortName);
    selectStateData.then((res) => setSelectData(res));
  },[all_states, selectState, stateKey, shortName]);

  function getKeyByValue(object, value) {
    // console.log('kk',Object.keys(object).find(key => object[key] === value));
    return Object.keys(object).find(key => object[key] === value);
  }

  // console.log('d',selectData);

  return (
    <div className="covidApp">
      <img className='app_image_field' src={title_image} alt="COVID-19" />
      <Cards currentData = {curData}/>
      <StatePicker allStates={allState} setSelectState={setSelectState} selectState={selectState}/>
      <TrackerChart selectData={selectData} stateKey={stateKey}/>
    </div>
  );
}

export default App;

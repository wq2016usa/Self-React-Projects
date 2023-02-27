import React, { useState, useEffect } from 'react';
import Card from './Card';
import "./cards.css";

const Cards = (props) =>{
    // const curD = props.currentData[0];
    // console.log('pps',props);
    const currentDate = props.currentData[0]&&props.currentData[0].dateChecked.substring(0, 10);
    const inffectData = props.currentData[0]&&props.currentData[0].positive;
    const negativeData = props.currentData[0]&&props.currentData[0].negative;
    const deathData = props.currentData[0]&&props.currentData[0].death;

    // let dat = new Date(currentDate);
    // console.log(currentDate)
    
    return(
        <div className='all_cards'>
            <Card inffectData={inffectData} currentDate={currentDate} desc={"active"}/>
            <Card inffectData={negativeData} currentDate={currentDate} desc={"negative"}/>
            <Card inffectData={deathData} currentDate={currentDate} desc={"death"}/>
            {/* <Card/> */}
        </div>
    );
}

export default Cards;
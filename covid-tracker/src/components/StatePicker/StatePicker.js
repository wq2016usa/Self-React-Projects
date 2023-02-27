import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import '../../App.css';

const StatePicker = (props) => {
  const {allStates, setSelectState, selectState} = props;
  const [stateNames, setStateNames] = useState([]);
  const [age, setAge] = useState('');

  useEffect(()=>{
    setStateNames(Object.values(allStates));
  },[allStates])

  // console.log('sn',allStates);

  const tem = [3,2,1,1];

  const handleChange = (e) => {
    setSelectState(e.target.value);
  };
  

  return (
    <div className='state_drop_down_field'>
        <FormControl sx={{ m: 1, minWidth: 600 }}>
            <Select
                value={selectState}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
                >
                {/* <MenuItem value="">
                    <em>None</em>
                </MenuItem> */}
                {
                  stateNames.map((ele)=>
                    <MenuItem key={ele} value={ele}>{ele}</MenuItem>
                  )
                }
                {/* <MenuItem value={10}>Ten</MenuItem> */}
            </Select>
        </FormControl>
    </div>
  );
};

export default StatePicker;

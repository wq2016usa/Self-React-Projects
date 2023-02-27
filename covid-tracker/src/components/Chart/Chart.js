import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../../App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (props) => {
  const {selectData, stateKey} = props;
  const [xData, setXData] = useState([]);
  const [yPositiveData, setYPositiveData] = useState([]);
  const [yDeathData, setYDeathData] = useState([]);
  // const [stateK, setStateK] = useState("");

  // console.log('ss',typeof stateKey);
  useEffect(()=>{
    // setStateK(stateKey);
    getAllXData(selectData);
    getAllYData(selectData);
  }, [selectData])

  const getAllXData = (selectData) =>{
    
    if(selectData){
      let temp = [];
      for (let i=0; i<selectData.length;i++) {
          
          temp.push(selectData[i].date);
        
      }
      setXData(temp);
    }
  }

  const getAllYData = (selectData) =>{
    if(selectData){
      let temp1 = [];
      let temp2 = [];
      for (let i=0; i<selectData.length;i++) {
        if(selectData[i]){
          temp1.push(selectData[i].positive);
          temp2.push(selectData[i].death);
        }
      }
      setYPositiveData(temp1);
      setYDeathData(temp2);
    }
  }

  console.log('big',selectData,xData, yPositiveData, yDeathData, stateKey);

  const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Covid-19 Tracker Line',
          font: {
            size: 25
        }
        },
      },
  };
  
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const data = {
      labels: xData,
      datasets: [
          {
          label: 'Positive Line',
          data: yPositiveData,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
          label: 'Death Line',
          data: yDeathData,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
      ],
  };

  return (
    <div className='chart_field'>
      <Line options={options} data={data} />
    </div>
  
  );
}

export default Chart;
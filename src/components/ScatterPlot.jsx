import React, { useEffect, useState } from 'react'
import { Scatter } from '@ant-design/charts';

const ScatterPlot = ({...props}) => {

    const [data,setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  },[])
  const asyncFetch = () => {
    fetch('https://raw.githubusercontent.com/Rahuldmc/VibrationData/main/faultssample.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    appendPadding: 2,
    data,
    xField: 'time',
    yField: 'value',
    shape: 'circle',
    // colorField: 'Genre',
    size: 1,
    pointStyle: {
    fill: 'red',  
    r: 1,
    stroke:'red',         
  },
    yAxis: {
      nice: true,
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
    xAxis: {
      min: 0,
      grid: {
        line: {
          style: {
            stroke: '#eee',
          },
        },
      },
      nice:true,
      line: {
        style: {
          stroke: '#bbb',
        },
      },
    },
  };


  return (
    <div>
        <Scatter {...config}/>
    </div>
  )
}

export default ScatterPlot
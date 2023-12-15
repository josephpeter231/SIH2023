import { Scatter } from '@ant-design/plots'
import React, { useEffect, useState } from 'react'

const ScatterPlot = () => {

    const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://raw.githubusercontent.com/Rahuldmc/VibrationData/main/output.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    appendPadding: 10,
    data,
    xField: 'time',
    yField: 'value',
    shape: 'circle',
    colorField: 'Genre',
    size: 4,
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
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
  };

  return (
    <div>
        <Scatter/>
    </div>
  )
}

export default ScatterPlot
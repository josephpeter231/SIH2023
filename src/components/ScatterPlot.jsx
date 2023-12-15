import { Scatter } from '@ant-design/plots'
import React, { useEffect, useState } from 'react'

const GoodScatter = ({ type }) => {

  // console.log(type)

  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, [])
  const asyncFetch = () => {
    fetch('https://raw.githubusercontent.com/Rahuldmc/VibrationData/main/output.json')
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
    // colorField: 'Genre',
    size: 1,
    pointStyle: {
      fill: 'rgba(75,192,192,1)',
      r: 1,
      stroke: 'rgba(75,192,192,1)',
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
      nice: true,
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
  };

  return (
    <div>
      <Scatter style={{ height: '280px', width: '450px' }} {...config} />
    </div>
  )
}

export default GoodScatter;